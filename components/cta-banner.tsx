'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { MagneticButton } from '@/components/magnetic-button'
import { staggerContainer, fadeUp } from '@/animations/variants'

interface CtaBannerProps {
  title?: React.ReactNode
  description?: string
}

export function CtaBanner({
  title = (
    <>
      Let&apos;s build the <span className="text-gradient-jade">next one</span> together
    </>
  ),
  description = 'Have a product to build or a system to modernize? Our team is ready to engineer your next digital ecosystem.',
}: CtaBannerProps) {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="relative overflow-hidden rounded-3xl border border-border bg-card px-8 py-16 text-center sm:px-16 sm:py-20"
        >
          <div className="grid-lines pointer-events-none absolute inset-0 opacity-40" aria-hidden="true" />
          <div
            className="pointer-events-none absolute left-1/2 top-1/2 h-[24rem] w-[24rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-jade/15 blur-[120px]"
            aria-hidden="true"
          />
          <motion.h2
            variants={fadeUp}
            className="relative mx-auto max-w-3xl text-4xl font-semibold leading-[1.05] sm:text-5xl"
          >
            {title}
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="relative mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            {description}
          </motion.p>
          <motion.div
            variants={fadeUp}
            className="relative mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            <MagneticButton href="/#contact">
              Start a project
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </MagneticButton>
            <MagneticButton href="/#contact" variant="ghost">
              Get in touch
            </MagneticButton>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
