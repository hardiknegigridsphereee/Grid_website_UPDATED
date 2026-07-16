'use client'

import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { services, processSteps } from '@/data/content'
import { SectionHeading } from '@/components/section-heading'
import { staggerContainer, fadeUp } from '@/animations/variants'

export function ServicesDetail() {
  return (
    <>
      {/* Full services grid */}
      <section className="relative py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            eyebrow="Capabilities"
            title="Everything you need, under one roof"
            description="Each engagement is scoped to your goals and delivered by a senior team that owns outcomes end to end."
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
            className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-2"
          >
            {services.map((service) => (
              <motion.div
                key={service.title}
                variants={fadeUp}
                className="group relative flex flex-col gap-5 overflow-hidden rounded-3xl border border-border bg-card p-8 transition-colors duration-300 hover:bg-muted"
              >
                <span className="pointer-events-none absolute inset-x-0 top-0 h-px scale-x-0 bg-jade-bright transition-transform duration-300 group-hover:scale-x-100" />
                <div className="flex items-center gap-4">
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-border bg-background text-jade-bright transition-colors group-hover:border-jade/50">
                    <service.icon className="h-7 w-7" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
                <ul className="mt-1 flex flex-col gap-2.5 border-t border-border pt-5">
                  {service.includes.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-foreground">
                      <span className="mt-0.5 inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-jade/15 text-jade-bright">
                        <Check className="h-3 w-3" strokeWidth={2.5} />
                      </span>
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How we work — process timeline */}
      <section className="relative py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            eyebrow="How we work"
            title="A process built for momentum"
            description="A clear path from first conversation to a platform running at scale."
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
            className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {processSteps.map((step) => (
              <motion.div
                key={step.step}
                variants={fadeUp}
                className="group relative flex flex-col gap-4 rounded-3xl border border-border bg-card p-8"
              >
                <span className="font-display text-4xl font-semibold text-jade-bright/40 transition-colors group-hover:text-jade-bright">
                  {step.step}
                </span>
                <h3 className="text-lg font-semibold">{step.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  )
}
