'use client'

import { motion } from 'framer-motion'
import { Check, Search, PenTool, Hammer, Rocket } from 'lucide-react'
import { services } from '@/data/content'
import { SectionHeading } from '@/components/section-heading'
import { staggerContainer, fadeUp } from '@/animations/variants'

const process = [
  {
    step: '01',
    title: 'Discover',
    description:
      'We dig into your operations, goals and constraints to map the real problem before writing any code.',
    icon: Search,
  },
  {
    step: '02',
    title: 'Design',
    description:
      'Architecture, data models and interfaces are shaped into a clear, testable blueprint.',
    icon: PenTool,
  },
  {
    step: '03',
    title: 'Build',
    description:
      'We ship in tight iterations with automated testing, reviews and continuous delivery.',
    icon: Hammer,
  },
  {
    step: '04',
    title: 'Scale',
    description:
      'We harden, observe and optimize — then grow the platform alongside your business.',
    icon: Rocket,
  },
]

export function ServicesContent() {
  return (
    <>
      {/* Services grid */}
      <section className="relative py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {services.map((service) => (
              <motion.div
                key={service.title}
                variants={fadeUp}
                className="group relative flex flex-col gap-5 rounded-3xl border border-border bg-card p-8 transition-colors duration-300 hover:bg-muted"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-background text-jade-bright transition-colors group-hover:border-jade/50">
                  <service.icon className="h-6 w-6" strokeWidth={1.6} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{service.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                </div>
                <ul className="mt-auto flex flex-col gap-2.5 border-t border-border pt-5">
                  {service.includes.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-jade-bright" strokeWidth={2} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How we work — process timeline */}
      <section className="relative py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            eyebrow="How we work"
            title="A process built to ship"
            description="Four disciplined phases that take an idea from first conversation to a platform running at scale."
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
            className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {process.map((phase) => (
              <motion.div
                key={phase.step}
                variants={fadeUp}
                className="group relative flex flex-col gap-4 rounded-3xl border border-border bg-card p-8 transition-colors hover:bg-muted"
              >
                <span className="text-sm font-medium text-jade-bright">{phase.step}</span>
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-background text-jade-bright transition-colors group-hover:border-jade/50">
                  <phase.icon className="h-6 w-6" strokeWidth={1.6} />
                </div>
                <h3 className="text-lg font-semibold">{phase.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {phase.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  )
}