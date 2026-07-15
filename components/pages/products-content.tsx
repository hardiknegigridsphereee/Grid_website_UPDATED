'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { products } from '@/data/content'
import { staggerContainer, fadeUp } from '@/animations/variants'

export function ProductsContent() {
  return (
    <section className="relative py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="grid gap-8 md:grid-cols-2"
        >
          {products.map((product, i) => (
            <motion.article
              key={product.slug}
              variants={fadeUp}
              className="group relative flex flex-col overflow-hidden rounded-3xl border border-border bg-card"
            >
              <Link href={`/products/${product.slug}`} className="relative block aspect-[16/10] overflow-hidden">
                <Image
                  src={product.image || '/placeholder.svg'}
                  alt={`${product.name} interface`}
                  fill
                  sizes="(max-width: 768px) 100vw, 640px"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority={i === 0}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
                <span className="absolute left-4 top-4 rounded-full border border-border bg-background/70 px-3 py-1 text-xs text-muted-foreground backdrop-blur-sm">
                  0{i + 1}
                </span>
              </Link>

              <div className="flex flex-1 flex-col gap-4 p-7">
                <h3 className="text-2xl font-semibold">{product.name}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {product.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {product.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border bg-muted px-3 py-1 text-xs text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Link
                  href={`/products/${product.slug}`}
                  className="mt-auto inline-flex w-fit items-center gap-1.5 pt-4 text-sm font-medium text-jade-bright transition-colors hover:text-foreground"
                >
                  View details
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
