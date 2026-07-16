
'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { projects } from '@/data/content'
import { staggerContainer, fadeUp } from '@/animations/variants'

export function ProjectsContent() {
  return (
    <section className="relative py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="grid gap-6 md:grid-cols-2"
        >
          {projects.map((project) => (
            <motion.article
              key={project.slug}
              variants={fadeUp}
              className="group relative overflow-hidden rounded-3xl border border-border bg-card"
            >
              <Link href={`/projects/${project.slug}`} className="relative block aspect-[16/10] overflow-hidden">
                <Image
                  src={project.image || '/placeholder.svg'}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 640px"
                  className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent transition-opacity duration-500 group-hover:opacity-90" />
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-6">
                  <div>
                    <span className="text-xs uppercase tracking-widest text-jade-bright">
                      {project.category}
                    </span>
                    <h3 className="mt-1 text-2xl font-semibold">{project.title}</h3>
                  </div>
                  <span className="text-sm text-muted-foreground">{project.year}</span>
                </div>
              </Link>

              <div className="flex items-center justify-between gap-4 p-6">
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
                <Link
                  href={`/projects/${project.slug}`}
                  className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-border text-jade-bright transition-all duration-300 group-hover:border-jade/60 group-hover:bg-jade group-hover:text-jade-foreground"
                  aria-label={`View ${project.title} case study`}
                >
                  <ArrowUpRight className="h-5 w-5" />
                </Link>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

