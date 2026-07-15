'use client'

import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { industries } from '@/data/content'
import { staggerContainer, fadeUp } from '@/animations/variants'

const stats = [
  { label: 'Average efficiency gain', value: '32%' },
  { label: 'Industries served', value: '14+' },
  { label: 'Platforms in production', value: '25+' },
]

export function IndustriesContent() {
  return (
    <>
      {/* Industries grid */}
      <section className="relative py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {industries.map((industry) => (
              <motion.article
                key={industry.name}
                variants={fadeUp}
                className="group relative flex flex-col overflow-hidden rounded-3xl border border-border bg-card p-8 transition-colors hover:bg-muted"
              >
                <div
                  className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-jade/10 blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  aria-hidden="true"
                />
                <div className="relative inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-border bg-background text-jade-bright transition-colors group-hover:border-jade/50">
                  <industry.icon className="h-7 w-7" strokeWidth={1.5} />
                </div>
                <h3 className="relative mt-6 text-xl font-semibold">{industry.name}</h3>
                <p className="relative mt-2 text-sm text-muted-foreground">
                  {industry.description}
                </p>
                <div className="relative mt-6 border-t border-border pt-5">
                  <p className="text-xs font-medium uppercase tracking-[0.2em] text-jade-bright">
                    Solutions we build
                  </p>
                  <ul className="mt-3 flex flex-col gap-2.5">
                    {industry.solutions.map((solution) => (
                      <li
                        key={solution}
                        className="flex items-start gap-2.5 text-sm text-muted-foreground"
                      >
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-jade-bright" strokeWidth={2} />
                        <span>{solution}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stat strip */}
      <section className="relative py-8 sm:py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
            className="grid gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-3"
          >
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                variants={fadeUp}
                className="flex flex-col items-center gap-2 bg-card p-10 text-center"
              >
                <span className="text-4xl font-semibold text-gradient-jade sm:text-5xl">
                  {stat.value}
                </span>
                <span className="text-sm text-muted-foreground">{stat.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  )
}