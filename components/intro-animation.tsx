'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence, useAnimation } from 'framer-motion'

interface IntroAnimationProps {
  logoSrc?: string
  brandName?: string
  targetId?: string // id of the navbar logo element to fly into
  onComplete?: () => void
}

// Auto-playing intro: logo scales/fades in at center surrounded by orbiting
// dots and pulsing rings, a progress bar fills, then the logo FLIES
// (measured position → animated x/y/scale) into the navbar logo's exact spot
// while the overlay fades away underneath it.
export function IntroAnimation({
  logoSrc = '/logo1-transparent.png',
  brandName = 'GridSphere',
  targetId = 'navbar-logo',
  onComplete = () => {},
}: IntroAnimationProps) {
  const [show, setShow] = useState(true)
  const [textVisible, setTextVisible] = useState(true)
  const logoRef = useRef<HTMLImageElement>(null)
  const logoControls = useAnimation()
  const overlayControls = useAnimation()

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    let cancelled = false

    const wait = (ms: number) => new Promise((r) => setTimeout(r, ms))

    const sequence = async () => {
      // 1. Logo pops in at center
      await logoControls.start({
        opacity: 1,
        scale: 1,
        transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
      })

      if (cancelled) return

      // 1b. Continuous "loading" spin — fired without awaiting, so it
      // keeps looping in the background while the progress bar fills.
      const SPIN_DURATION = 1.4 // seconds per full 360° rotation
      const spinStartedAt = performance.now()

      logoControls.start({
        rotate: 360,
        transition: { duration: SPIN_DURATION, ease: 'linear', repeat: Infinity },
      })

      await wait(1500)
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

      // 2. Measure navbar logo position vs current intro logo position
      const targetEl = document.getElementById(targetId)
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
      setShow(false)
      document.body.style.overflow = ''
      onComplete()
    }

    sequence()

    return () => {
      cancelled = true
      document.body.style.overflow = ''
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={overlayControls}
          className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-background"
        >
          {/* faint grid backdrop */}
          <div className="grid-lines pointer-events-none absolute inset-0 opacity-50" aria-hidden="true" />

          <div className="relative flex flex-col items-center">
            {/* logo + decorative orbit */}
            <div className="relative mb-10 flex h-40 w-40 items-center justify-center md:h-52 md:w-52">
              <AnimatePresence>
                {textVisible && (
                  <>
                    {/* pulsing concentric rings */}
                    {[0, 1].map((i) => (
                      <motion.span
                        key={i}
                        aria-hidden="true"
                        className="absolute rounded-full border border-jade-bright/30"
                        initial={{ opacity: 0.5, scale: 0.7, width: '9rem', height: '9rem' }}
                        animate={{ opacity: 0, scale: 1.4 }}
                        exit={{ opacity: 0 }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: 'easeOut',
                          delay: i * 1,
                        }}
                      />
                    ))}

                    {/* static thin ring */}
                    <motion.span
                      aria-hidden="true"
                      className="absolute h-36 w-36 rounded-full border border-border md:h-44 md:w-44"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    />

                    {/* orbiting dots */}
                    <motion.span
                      aria-hidden="true"
                      className="intro-orbit absolute h-36 w-36 md:h-44 md:w-44"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <span className="absolute left-1/2 top-0 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-jade-bright" />
                      <span className="absolute bottom-0 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-jade-bright/60" />
                    </motion.span>
                  </>
                )}
              </AnimatePresence>

              <motion.img
                ref={logoRef}
                src={logoSrc}
                alt={brandName}
                initial={{ opacity: 0, scale: 0.6, x: 0, y: 0 }}
                animate={logoControls}
                className="relative h-24 w-24 object-contain md:h-32 md:w-32"
              />
            </div>

            <AnimatePresence>
              {textVisible && (
                <>
                  <motion.h1
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
                    className="intro-shimmer font-display text-3xl font-semibold tracking-wide md:text-4xl"
                  >
                    {brandName}
                  </motion.h1>

                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="mt-2 text-xs uppercase tracking-[0.32em] text-muted-foreground"
                  >
                    Software · AI · Hardware
                  </motion.p>

                  {/* progress bar */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4, delay: 0.5 }}
                    className="mt-6 h-[3px] w-40 overflow-hidden rounded-full bg-border"
                  >
                    <motion.span
                      className="block h-full rounded-full bg-jade-bright"
                      initial={{ width: '0%' }}
                      animate={{ width: '100%' }}
                      transition={{ duration: 2.1, ease: 'easeInOut' }}
                    />
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
