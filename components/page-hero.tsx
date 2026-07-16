'use client'

import { motion } from 'framer-motion'
import { staggerContainer, fadeUp } from '@/animations/variants'

interface PageHeroProps {
  eyebrow: string
  title: React.ReactNode
  description?: string
  badge?: string
}

export function PageHero({ eyebrow, title, description, badge }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden pt-40 pb-16 sm:pt-48 sm:pb-24">
      <div className="absolute inset-0 grid-lines opacity-50" aria-hidden="true" />
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-jade/10 blur-[120px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent"
        aria-hidden="true"
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="show"
        className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-8"
      >
        <motion.div variants={fadeUp} className="flex items-center gap-3">
          <span className="h-px w-8 bg-jade" />
          <span className="text-xs font-medium uppercase tracking-[0.28em] text-jade-bright">
            {eyebrow}
          </span>
        </motion.div>

        {badge && (
          <motion.div
            variants={fadeUp}
            className="mt-6 inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-4 py-1.5 backdrop-blur-sm"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-jade-bright" />
            <span className="text-xs tracking-wide text-muted-foreground">{badge}</span>
          </motion.div>
        )}

        <motion.h1
          variants={fadeUp}
          className="mt-6 max-w-4xl text-5xl font-semibold leading-[1.03] sm:text-6xl lg:text-7xl"
        >
          {title}
        </motion.h1>

        {description && (
          <motion.p
            variants={fadeUp}
            className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl"
          >
            {description}
          </motion.p>
        )}
      </motion.div>
    </section>
  )
}
