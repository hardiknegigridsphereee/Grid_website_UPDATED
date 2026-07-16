'use client'

import { motion } from 'framer-motion'
import { Search, PenTool, Hammer, Rocket, ArrowUpRight } from 'lucide-react'
import { serviceCategories } from '@/data/content'
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
      {/* Service categories */}
      <section className="relative py-8 sm:py-12">
        <div className="mx-auto flex max-w-7xl flex-col gap-20 px-6 lg:px-8">
          {serviceCategories.map((category, index) => (
            <div
              key={category.slug}
              id={category.slug}
              className="scroll-mt-32"
            >
              <div className="grid gap-10 lg:grid-cols-[0.8fr_1.6fr]">
                {/* Category intro */}
                <div className="lg:sticky lg:top-32 lg:self-start">
                  <div className="flex items-center gap-3">
                    <span className="h-px w-8 bg-jade" />
                    <span className="text-xs font-medium uppercase tracking-[0.28em] text-jade-bright">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <h2 className="mt-5 text-3xl font-semibold sm:text-4xl">
                    {category.category}
                  </h2>
                  <p className="mt-4 max-w-md text-base leading-relaxed text-muted-foreground">
                    {category.description}
                  </p>
                </div>

                {/* Items */}
                <motion.div
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: '-60px' }}
                  className="grid gap-5 sm:grid-cols-2"
                >
                  {category.items.map((service) => (
                    <motion.div
                      key={service.title}
                      variants={fadeUp}
                      className="group relative flex flex-col gap-4 overflow-hidden rounded-3xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                    >
                      <span
                        className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-jade/10 blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                        aria-hidden="true"
                      />
                      <div className="relative inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-border bg-background text-jade-bright transition-colors group-hover:border-jade/50">
                        <service.icon className="h-7 w-7" strokeWidth={1.5} />
                      </div>
                      <div className="relative">
                        <h3 className="text-lg font-semibold">{service.title}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                          {service.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>
          ))}
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

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-14 flex flex-col items-start justify-between gap-6 rounded-3xl border border-border bg-card p-8 sm:flex-row sm:items-center"
          >
            <div>
              <h3 className="text-xl font-semibold">Not sure where to start?</h3>
              <p className="mt-2 max-w-lg text-sm leading-relaxed text-muted-foreground">
                Bring us the problem — software, hardware or both — and we&apos;ll help you scope it
                and engineer it end to end.
              </p>
            </div>
            <a
              href="/#contact"
              className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-jade px-6 py-3 text-sm font-medium text-jade-foreground transition-colors hover:bg-jade-bright"
            >
              Talk to an engineer
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </motion.div>
        </div>
      </section>
    </>
  )
}
