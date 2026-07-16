'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowLeft, ArrowUpRight, Check } from 'lucide-react'
<<<<<<< HEAD
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
=======
import { products } from '@/data/content'
import { staggerContainer, fadeUp, scaleIn } from '@/animations/variants'

interface ProductDetailContentProps {
  slug: string
}

export function ProductDetailContent({ slug }: ProductDetailContentProps) {
  const product = products.find((p) => p.slug === slug)
  if (!product) return null
  const related = products.filter((p) => p.slug !== slug).slice(0, 3)

  return (
    <>
      {/* ------------------------------- Hero ------------------------------- */}
      <section className="relative overflow-hidden pt-36 pb-16 sm:pt-44">
        <div className="absolute inset-0 grid-lines opacity-50" aria-hidden="true" />
        {/* themed tint wash */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'radial-gradient(60% 55% at 70% 0%, var(--product-tint), transparent 70%)',
          }}
          aria-hidden="true"
        />
>>>>>>> 5ad4dd63e3fdd19a6a67334173530f7c34ef0895
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
<<<<<<< HEAD
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
=======
              <motion.div
                variants={fadeUp}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-product-tint px-4 py-1.5"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-jade-bright" />
                <span className="text-xs font-medium uppercase tracking-[0.2em] text-jade-bright">
                  {product.theme.name} · {product.tagline}
                </span>
              </motion.div>

>>>>>>> 5ad4dd63e3fdd19a6a67334173530f7c34ef0895
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
<<<<<<< HEAD
=======

              <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-3">
                <a
                  href="/#contact"
                  className="inline-flex items-center gap-1.5 rounded-full bg-jade px-6 py-3 text-sm font-medium text-jade-foreground transition-colors hover:bg-jade-bright"
                >
                  Request a demo
                  <ArrowUpRight className="h-4 w-4" />
                </a>
                <div className="flex flex-wrap items-center gap-2">
                  {product.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border bg-card px-3 py-1.5 text-xs text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
>>>>>>> 5ad4dd63e3fdd19a6a67334173530f7c34ef0895
            </div>

            <motion.div
              variants={scaleIn}
<<<<<<< HEAD
              className="relative aspect-[16/11] overflow-hidden rounded-3xl border border-border bg-card"
            >
              <Image
                src={product.image || '/placeholder.svg'}
                alt={`${product.name} interface`}
=======
              className="relative aspect-[16/12] overflow-hidden rounded-3xl border border-border bg-card glow-jade"
            >
              <Image
                src={product.heroImage || product.image || '/placeholder.svg'}
                alt={`${product.name}`}
>>>>>>> 5ad4dd63e3fdd19a6a67334173530f7c34ef0895
                fill
                sizes="(max-width: 1024px) 100vw, 640px"
                className="object-cover"
                priority
              />
<<<<<<< HEAD
              <div className="absolute inset-0 bg-gradient-to-t from-card/40 to-transparent" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Overview + features */}
      <section className="relative py-16 sm:py-24">
=======
              <div className="absolute inset-0 bg-gradient-to-t from-card/30 to-transparent" />
            </motion.div>
          </motion.div>

          {/* stats strip */}
          {product.stats && product.stats.length > 0 && (
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-border bg-border lg:grid-cols-4"
            >
              {product.stats.map((stat) => (
                <motion.div
                  key={stat.label}
                  variants={fadeUp}
                  className="flex flex-col gap-1 bg-card p-6"
                >
                  <span className="font-display text-3xl font-semibold text-jade-bright">
                    {stat.value}
                  </span>
                  <span className="text-sm text-muted-foreground">{stat.label}</span>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </section>

      {/* ---------------------- Overview + key features --------------------- */}
      <section className="relative py-16 sm:py-20">
>>>>>>> 5ad4dd63e3fdd19a6a67334173530f7c34ef0895
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
<<<<<<< HEAD
                  <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-border bg-background text-jade-bright">
=======
                  <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-border bg-product-tint text-jade-bright">
>>>>>>> 5ad4dd63e3fdd19a6a67334173530f7c34ef0895
                    <Check className="h-3 w-3" strokeWidth={2.5} />
                  </span>
                  <span>{feature}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Related products */}
=======
      {/* --------------------------- How it works --------------------------- */}
      {product.howItWorks && product.howItWorks.length > 0 && (
        <section className="relative py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-jade" />
              <span className="text-xs font-medium uppercase tracking-[0.28em] text-jade-bright">
                How it works
              </span>
            </div>
            <h2 className="mt-5 max-w-2xl text-3xl font-semibold sm:text-4xl">
              From deployment to decisions
            </h2>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-60px' }}
              className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
            >
              {product.howItWorks.map((phase) => (
                <motion.div
                  key={phase.step}
                  variants={fadeUp}
                  className="group relative flex flex-col gap-4 rounded-3xl border border-border bg-card p-7 transition-colors hover:bg-muted"
                >
                  <span className="text-sm font-medium text-jade-bright">{phase.step}</span>
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-product-tint text-jade-bright transition-colors group-hover:border-jade/50">
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
      )}

      {/* ----------------------------- Use cases ---------------------------- */}
      {product.useCases && product.useCases.length > 0 && (
        <section className="relative py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid items-start gap-12 lg:grid-cols-[1fr_1.3fr]">
              <div>
                <div className="flex items-center gap-3">
                  <span className="h-px w-8 bg-jade" />
                  <span className="text-xs font-medium uppercase tracking-[0.28em] text-jade-bright">
                    Use cases
                  </span>
                </div>
                <h2 className="mt-5 text-3xl font-semibold sm:text-4xl">
                  Built for the way you work
                </h2>
                {product.gallery && product.gallery[0] && (
                  <div className="relative mt-8 hidden aspect-[16/11] overflow-hidden rounded-3xl border border-border lg:block">
                    <Image
                      src={product.gallery[0]}
                      alt={`${product.name} in use`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 500px"
                      className="object-cover"
                    />
                  </div>
                )}
              </div>

              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: '-60px' }}
                className="grid gap-5 sm:grid-cols-2"
              >
                {product.useCases.map((useCase) => (
                  <motion.div
                    key={useCase.title}
                    variants={fadeUp}
                    className="flex flex-col gap-3 rounded-3xl border border-border bg-card p-6"
                  >
                    <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-product-tint text-jade-bright">
                      <useCase.icon className="h-5 w-5" strokeWidth={1.6} />
                    </div>
                    <h3 className="font-semibold">{useCase.title}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {useCase.description}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>
      )}

      {/* ------------------------- Audience segments ------------------------ */}
      {product.segments && product.segments.length > 0 && (
        <section className="relative py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-jade" />
              <span className="text-xs font-medium uppercase tracking-[0.28em] text-jade-bright">
                Who it&apos;s for
              </span>
            </div>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-60px' }}
              className="mt-10 grid gap-6 md:grid-cols-2"
            >
              {product.segments.map((segment) => (
                <motion.div
                  key={segment.title}
                  variants={fadeUp}
                  className="relative overflow-hidden rounded-3xl border border-border bg-card p-8"
                >
                  <div
                    className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-product-tint blur-2xl"
                    aria-hidden="true"
                  />
                  <div className="relative inline-flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-product-tint text-jade-bright">
                    <segment.icon className="h-6 w-6" strokeWidth={1.6} />
                  </div>
                  <h3 className="relative mt-5 text-xl font-semibold">{segment.title}</h3>
                  <p className="relative mt-3 text-sm leading-relaxed text-muted-foreground">
                    {segment.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      )}

      {/* --------------------------- Specs + image -------------------------- */}
      {product.specs && product.specs.length > 0 && (
        <section className="relative py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-2">
              <motion.div
                variants={scaleIn}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: '-60px' }}
                className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-border bg-card"
              >
                <Image
                  src={
                    (product.gallery && product.gallery[1]) ||
                    product.image ||
                    '/placeholder.svg'
                  }
                  alt={`${product.name} detail`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 560px"
                  className="object-cover"
                />
              </motion.div>

              <div>
                <div className="flex items-center gap-3">
                  <span className="h-px w-8 bg-jade" />
                  <span className="text-xs font-medium uppercase tracking-[0.28em] text-jade-bright">
                    Specifications
                  </span>
                </div>
                <h2 className="mt-5 text-3xl font-semibold sm:text-4xl">
                  Engineered to spec
                </h2>
                <motion.dl
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: '-60px' }}
                  className="mt-8 divide-y divide-border rounded-3xl border border-border bg-card"
                >
                  {product.specs.map((spec) => (
                    <motion.div
                      key={spec.label}
                      variants={fadeUp}
                      className="flex flex-col gap-1 px-6 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6"
                    >
                      <dt className="text-sm font-medium text-foreground">{spec.label}</dt>
                      <dd className="text-sm text-muted-foreground sm:text-right">{spec.value}</dd>
                    </motion.div>
                  ))}
                </motion.dl>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* -------------------------- Related products ------------------------ */}
>>>>>>> 5ad4dd63e3fdd19a6a67334173530f7c34ef0895
      {related.length > 0 && (
        <section className="relative py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-jade" />
              <span className="text-xs font-medium uppercase tracking-[0.28em] text-jade-bright">
<<<<<<< HEAD
                Related products
=======
                More products
>>>>>>> 5ad4dd63e3fdd19a6a67334173530f7c34ef0895
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
<<<<<<< HEAD
                        src={item.image || '/placeholder.svg'}
=======
                        src={item.heroImage || item.image || '/placeholder.svg'}
>>>>>>> 5ad4dd63e3fdd19a6a67334173530f7c34ef0895
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
