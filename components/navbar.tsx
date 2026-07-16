'use client'

import { useEffect, useRef, useState } from 'react'
import Image  from 'next/image'
import Link  from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown, ArrowRight, ArrowUpRight } from 'lucide-react'
import { navLinks, products, serviceCategories } from '@/data/content'
import { ThemeToggle } from '@/components/theme-toggle'
import { cn } from '@/lib/utils'

type MenuKey = 'products' | 'services'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState<MenuKey | null>(null)
  const [mobileSection, setMobileSection] = useState<MenuKey | null>(null)
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const openMenu = (key: MenuKey) => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    setActive(key)
  }
  const scheduleClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    closeTimer.current = setTimeout(() => setActive(null), 140)
  }

  const isMega = (label: string): MenuKey | null =>
    label === 'Products' ? 'products' : label === 'Services' ? 'services' : null

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6"
      onMouseLeave={scheduleClose}
    >
      <nav
        className={cn(
          'mx-auto flex max-w-7xl items-center justify-between rounded-full border px-5 py-3 transition-all duration-500',
          scrolled || active
            ? 'border-border bg-background/80 shadow-sm backdrop-blur-xl'
            : 'border-transparent bg-transparent',
        )}
      >
        <Link href="/" className="flex items-center gap-2" onMouseEnter={scheduleClose}>
          <img
            id="navbar-logo"
            src="/logo1-transparent.png"
            alt="GridSphere"
            className="h-8 w-8"
          />
          <span className="font-display text-lg font-semibold leading-none tracking-tight">
            GridSphere
          </span>
        </Link>

        <div className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => {
            const key = isMega(link.label)
            if (key) {
              return (
                <div key={link.href} onMouseEnter={() => openMenu(key)}>
                  <Link
                    href={link.href}
                    className={cn(
                      'inline-flex items-center gap-1 text-sm transition-colors',
                      active === key
                        ? 'text-foreground'
                        : 'text-muted-foreground hover:text-foreground',
                    )}
                  >
                    {link.label}
                    <ChevronDown
                      className={cn(
                        'h-3.5 w-3.5 transition-transform duration-300',
                        active === key && 'rotate-180',
                      )}
                    />
                  </Link>
                </div>
              )
            }
            return (
              <Link
                key={link.href}
                href={link.href}
                onMouseEnter={scheduleClose}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            )
          })}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />
          <a
            href="/#contact"
            className="rounded-full bg-jade px-5 py-2.5 text-sm font-medium text-jade-foreground transition-colors hover:bg-jade-bright"
          >
            Get in touch
          </a>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground"
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Desktop mega menu */}
      <AnimatePresence>
        {active && (
          <motion.div
            key={active}
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            onMouseEnter={() => openMenu(active)}
            className="mx-auto mt-2 hidden max-w-7xl overflow-hidden rounded-3xl border border-border bg-background/95 shadow-xl backdrop-blur-xl md:block"
          >
            {active === 'products' ? <ProductsMega /> : <ServicesMega />}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="mx-auto mt-2 max-h-[75vh] max-w-7xl overflow-y-auto rounded-3xl border border-border bg-background/95 p-4 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => {
                const key = isMega(link.label)
                if (key) {
                  const isOpen = mobileSection === key
                  return (
                    <div key={link.href} className="rounded-xl">
                      <button
                        type="button"
                        onClick={() => setMobileSection(isOpen ? null : key)}
                        className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-sm text-foreground"
                      >
                        {link.label}
                        <ChevronDown
                          className={cn('h-4 w-4 transition-transform', isOpen && 'rotate-180')}
                        />
                      </button>
                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden"
                          >
                            <div className="flex flex-col gap-1 px-2 pb-2">
                              {key === 'products'
                                ? products.map((p) => (
                                    <Link
                                      key={p.slug}
                                      href={`/products/${p.slug}`}
                                      onClick={() => setOpen(false)}
                                      className="rounded-lg px-4 py-2.5 text-sm text-muted-foreground hover:bg-muted hover:text-foreground"
                                    >
                                      {p.name}
                                    </Link>
                                  ))
                                : serviceCategories.map((c) => (
                                    <Link
                                      key={c.slug}
                                      href={`/services#${c.slug}`}
                                      onClick={() => setOpen(false)}
                                      className="rounded-lg px-4 py-2.5 text-sm text-muted-foreground hover:bg-muted hover:text-foreground"
                                    >
                                      {c.category}
                                    </Link>
                                  ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  )
                }
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="rounded-xl px-4 py-3 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                )
              })}
              <a
                href="/#contact"
                onClick={() => setOpen(false)}
                className="mt-1 rounded-xl bg-jade px-4 py-3 text-center text-sm font-medium text-jade-foreground"
              >
                Get in touch
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

/* ------------------------------ Products panel ------------------------------ */
function ProductsMega() {
  return (
    <div className="grid gap-0 lg:grid-cols-[1fr_18rem]">
      <div className="grid gap-4 p-6 sm:grid-cols-3">
        {products.map((product) => (
          <Link
            key={product.slug}
            href={`/products/${product.slug}`}
            className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
          >
            <div className="relative aspect-[16/10] overflow-hidden">
              <Image
                src={product.heroImage || product.image}
                alt={product.name}
                fill
                sizes="280px"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <span
                className="absolute inset-x-0 bottom-0 h-16"
                style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.35), transparent)' }}
              />
            </div>
            <div className="flex flex-1 flex-col gap-1.5 p-4">
              <h3 className="text-sm font-semibold leading-snug">{product.name}</h3>
              <p className="text-xs leading-relaxed text-muted-foreground line-clamp-2">
                {product.tagline}
              </p>
              <span className="mt-auto inline-flex items-center gap-1 pt-2 text-xs font-medium text-jade-bright">
                Explore
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </div>
          </Link>
        ))}
      </div>

      <div className="flex flex-col gap-3 border-t border-border bg-muted/40 p-6 lg:border-l lg:border-t-0">
        <span className="text-xs font-medium uppercase tracking-[0.24em] text-muted-foreground">
          Discover
        </span>
        <p className="text-sm leading-relaxed text-muted-foreground">
          In-house products spanning agriculture, child safety and enterprise operations.
        </p>
        <Link
          href="/products"
          className="mt-auto inline-flex items-center gap-1.5 rounded-full bg-jade px-4 py-2.5 text-sm font-medium text-jade-foreground transition-colors hover:bg-jade-bright"
        >
          All products
          <ArrowRight className="h-4 w-4" />
        </Link>
        <Link
          href="/projects"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          View projects
          <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  )
}

/* ------------------------------ Services panel ------------------------------ */
function ServicesMega() {
  return (
    <div className="grid gap-0 lg:grid-cols-[1fr_18rem]">
      <div className="grid gap-x-8 gap-y-6 p-6 sm:grid-cols-3">
        {serviceCategories.map((cat) => (
          <div key={cat.slug} className="flex flex-col gap-3">
            <Link
              href={`/services#${cat.slug}`}
              className="text-xs font-semibold uppercase tracking-[0.18em] text-jade-bright hover:underline"
            >
              {cat.category}
            </Link>
            <div className="flex flex-col gap-1">
              {cat.items.map((item) => (
                <Link
                  key={item.title}
                  href="/services"
                  className="group flex items-start gap-3 rounded-xl p-2 transition-colors hover:bg-muted"
                >
                  <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-border bg-card text-jade-bright transition-colors group-hover:border-jade/50">
                    <item.icon className="h-5 w-5" strokeWidth={1.6} />
                  </span>
                  <span className="flex flex-col">
                    <span className="text-sm font-medium leading-snug">{item.title}</span>
                    <span className="text-xs leading-relaxed text-muted-foreground line-clamp-1">
                      {item.description}
                    </span>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-3 border-t border-border bg-muted/40 p-6 lg:border-l lg:border-t-0">
        <span className="text-xs font-medium uppercase tracking-[0.24em] text-muted-foreground">
          End to end
        </span>
        <p className="text-sm leading-relaxed text-muted-foreground">
          One accountable team across software, AI, hardware, IoT, PCB, embedded and 3D design.
        </p>
        <Link
          href="/services"
          className="mt-auto inline-flex items-center gap-1.5 rounded-full bg-jade px-4 py-2.5 text-sm font-medium text-jade-foreground transition-colors hover:bg-jade-bright"
        >
          All services
          <ArrowRight className="h-4 w-4" />
        </Link>
        <a
          href="/#contact"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          Start a project
          <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>
    </div>
  )
}