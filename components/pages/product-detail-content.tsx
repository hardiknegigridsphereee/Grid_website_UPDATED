'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowLeft, ArrowUpRight, Check } from 'lucide-react'
import type { Product } from '@/data/content'
import { staggerContainer, fadeUp, scaleIn } from '@/animations/variants'

interface ProductDetailContentProps {
  product: Product
  related: Product[]
}

export function ProductDetailContent({ product, related }: ProductDetailContentProps) {
  return (
    <>
      {/* Header */}
      <section className="relative overflow-hidden pt-36 pb-12 sm:pt-44">
        <div className="absolute inset-0 grid-lines opacity-50" aria-hidden="true" />
        <div
          className="pointer-events-none absolute left-1/2 top-0 h-[24rem] w-[24rem] -translate-x-1/2 rounded-full bg-jade/10 blur-[120px]"
          aria-hidden="true"
        />
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <Link
            href="/products"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to products
          </Link>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="show"
            className="mt-8 grid items-center gap-10 lg:grid-cols-2"
          >
            <div>
              <motion.div variants={fadeUp} className="flex flex-wrap gap-2">
                {product.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-border bg-muted px-3 py-1 text-xs text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </motion.div>
              <motion.h1
                variants={fadeUp}
                className="mt-6 text-4xl font-semibold leading-[1.05] sm:text-5xl lg:text-6xl"
              >
                {product.name}
              </motion.h1>
              <motion.p
                variants={fadeUp}
                className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground"
              >
                {product.description}
              </motion.p>
            </div>

            <motion.div
              variants={scaleIn}
              className="relative aspect-[16/11] overflow-hidden rounded-3xl border border-border bg-card"
            >
              <Image
                src={product.image || '/placeholder.svg'}
                alt={`${product.name} interface`}
                fill
                sizes="(max-width: 1024px) 100vw, 640px"
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card/40 to-transparent" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Overview + features */}
      <section className="relative py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[1.4fr_1fr] lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
          >
            <motion.span
              variants={fadeUp}
              className="text-xs font-medium uppercase tracking-[0.28em] text-jade-bright"
            >
              Overview
            </motion.span>
            <motion.p
              variants={fadeUp}
              className="mt-5 text-lg leading-relaxed text-muted-foreground"
            >
              {product.longDescription}
            </motion.p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
            className="rounded-3xl border border-border bg-card p-8"
          >
            <motion.h2 variants={fadeUp} className="text-lg font-semibold">
              Key features
            </motion.h2>
            <ul className="mt-6 flex flex-col gap-4">
              {product.features.map((feature) => (
                <motion.li
                  key={feature}
                  variants={fadeUp}
                  className="flex items-start gap-3 text-sm text-muted-foreground"
                >
                  <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-border bg-background text-jade-bright">
                    <Check className="h-3 w-3" strokeWidth={2.5} />
                  </span>
                  <span>{feature}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Related products */}
      {related.length > 0 && (
        <section className="relative py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-jade" />
              <span className="text-xs font-medium uppercase tracking-[0.28em] text-jade-bright">
                Related products
              </span>
            </div>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-60px' }}
              className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            >
              {related.map((item) => (
                <motion.div key={item.slug} variants={fadeUp}>
                  <Link
                    href={`/products/${item.slug}`}
                    className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card transition-colors hover:bg-muted"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image
                        src={item.image || '/placeholder.svg'}
                        alt={item.name}
                        fill
                        sizes="(max-width: 768px) 100vw, 400px"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <div className="flex flex-1 flex-col gap-2 p-6">
                      <h3 className="font-semibold">{item.name}</h3>
                      <p className="text-sm leading-relaxed text-muted-foreground line-clamp-2">
                        {item.description}
                      </p>
                      <span className="mt-auto inline-flex items-center gap-1.5 pt-3 text-sm font-medium text-jade-bright">
                        View details
                        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      )}
    </>
  )
}
