'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence, useAnimation } from 'framer-motion'
import { useTheme } from 'next-themes'

interface IntroAnimationProps {
  logoSrc?: string
  brandName?: string
  targetId?: string // id of the navbar logo element to fly into
  onComplete?: () => void
}

// Auto-playing intro: logo scales/fades in at center, holds, then FLIES
// (measured position → animated x/y/scale) into the navbar logo's exact
// spot while the dark overlay fades away underneath it.
export function IntroAnimation({
  logoSrc,
  brandName = 'GridSphere',
  targetId = 'navbar-logo',
  onComplete = () => {},
}: IntroAnimationProps) {
  const [show, setShow] = useState(true)
  const [textVisible, setTextVisible] = useState(true)
  const [mounted, setMounted] = useState(false)
  const logoRef = useRef<HTMLImageElement>(null)
  const logoControls = useAnimation()
  const overlayControls = useAnimation()
  const { resolvedTheme } = useTheme()

  useEffect(() => {
    if (resolvedTheme) setMounted(true)
  }, [resolvedTheme])

  const resolvedLogoSrc =
    logoSrc ?? (resolvedTheme === 'dark' ? '/logo-dark.png' : '/logo-light.png')

  useEffect(() => {
    if (!mounted) return

    document.body.style.overflow = 'hidden'
    let cancelled = false
    let finished = false

    const finish = () => {
      if (finished || cancelled) return
      finished = true
      setShow(false)
      document.body.style.overflow = ''
      onComplete()
    }

    // Hard safety net: no matter what happens in the animation sequence
    // below (stale useAnimation controls after Fast Refresh, target
    // element never appearing, a promise that never resolves, etc.),
    // the intro will never block the page for more than ~4.5s.
    const safetyTimer = setTimeout(finish, 4500)

    const wait = (ms: number) => new Promise((r) => setTimeout(r, ms))

    const sequence = async () => {
      // 1. Logo pops in at center
      await logoControls.start({
        opacity: 1,
        scale: 1,
        transition: { duration: 1, ease: [0.16, 1, 0.3, 1] },
      })

      if (cancelled) return

      // 1b. Continuous "loading" spin — fired without awaiting, so it
      // keeps looping in the background while we wait/hide text below.
      const SPIN_DURATION = 1.4 // seconds per full 360° rotation
      const spinStartedAt = performance.now()

      logoControls.start({
        rotate: 360,
        transition: { duration: SPIN_DURATION, ease: 'linear', repeat: Infinity },
      })

      await wait(900)
      setTextVisible(false)
      await wait(300)
      if (cancelled) return

      // 1c. Compute exactly where the spin currently is, then animate
      // only the remaining distance to the next full turn — at the same
      // angular speed as the loop — so the stop never looks sped up.
      const elapsedSec = (performance.now() - spinStartedAt) / 1000
      const degreesPerSecond = 360 / SPIN_DURATION
      const currentRotation = (elapsedSec * degreesPerSecond) % 360
      const remainingDegrees = 360 - currentRotation
      const settleDuration = remainingDegrees / degreesPerSecond

      await logoControls.start({
        rotate: currentRotation + remainingDegrees,
        transition: { duration: settleDuration, ease: 'easeOut' },
      })
      logoControls.set({ rotate: 0 })
      if (cancelled) return

      // 2. Measure navbar logo position vs current intro logo position.
      // Give the target element a couple of animation frames to exist —
      // it's rendered by a sibling component that mounts independently.
      let targetEl = document.getElementById(targetId)
      for (let i = 0; i < 3 && !targetEl; i++) {
        await new Promise((r) => requestAnimationFrame(r))
        targetEl = document.getElementById(targetId)
      }
      const logoEl = logoRef.current

      if (targetEl && logoEl) {
        const targetRect = targetEl.getBoundingClientRect()
        const logoRect = logoEl.getBoundingClientRect()

        const targetCenterX = targetRect.left + targetRect.width / 2
        const targetCenterY = targetRect.top + targetRect.height / 2
        const logoCenterX = logoRect.left + logoRect.width / 2
        const logoCenterY = logoRect.top + logoRect.height / 2

        const deltaX = targetCenterX - logoCenterX
        const deltaY = targetCenterY - logoCenterY
        const scale = targetRect.width / logoRect.width

        // Overlay fades while logo is mid-flight
        overlayControls.start({
          opacity: 0,
          transition: { duration: 0.55, ease: 'easeInOut', delay: 0.15 },
        })

        await logoControls.start({
          x: deltaX,
          y: deltaY,
          scale,
          transition: { duration: 0.85, ease: [0.65, 0, 0.35, 1] },
        })
      } else {
        // fallback if navbar logo isn't found for some reason
        await overlayControls.start({
          opacity: 0,
          transition: { duration: 0.5 },
        })
      }

      if (cancelled) return
      finish()
    }

    sequence().catch(finish)

    return () => {
      cancelled = true
      clearTimeout(safetyTimer)
      document.body.style.overflow = ''
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mounted])

  if (!mounted) return null

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={overlayControls}
          className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-background"
        >
          <motion.img
            ref={logoRef}
            src={resolvedLogoSrc}
            alt={brandName}
            initial={{ opacity: 0, scale: 0.6, x: 0, y: 0 }}
            animate={logoControls}
            className="mb-8 h-28 w-28 object-contain md:h-40 md:w-40"
          />

          <AnimatePresence>
            {textVisible && (
              <>
                <motion.h1
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
                  className="font-display text-2xl font-semibold tracking-wide text-foreground md:text-4xl"
                >
                  {brandName}
                </motion.h1>

                <motion.div
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: 80, opacity: 1 }}
                  exit={{ width: 0, opacity: 0 }}
                  transition={{ duration: 0.6, delay: 0.9, ease: 'easeOut' }}
                  className="mt-4 h-[2px] rounded-full bg-jade-bright"
                />
              </>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
