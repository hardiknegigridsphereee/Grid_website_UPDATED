'use client'

import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { motion, AnimatePresence } from 'framer-motion'
import { Moon, Sun } from 'lucide-react'
import { cn } from '@/lib/utils'

interface ThemeToggleProps {
  className?: string
}

/**
 * Accessible light/dark switch. Renders a stable placeholder until mounted
 * to avoid hydration mismatch, then cross-fades between sun and moon icons.
 */
export function ThemeToggle({ className }: ThemeToggleProps) {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  const isDark = resolvedTheme === 'dark'

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      aria-label={
        mounted ? (isDark ? 'Switch to light mode' : 'Switch to dark mode') : 'Toggle theme'
      }
      className={cn(
        'relative inline-flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-border text-foreground transition-colors hover:border-jade/60 hover:text-jade-bright',
        className,
      )}
    >
      {mounted && (
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={isDark ? 'moon' : 'sun'}
            initial={{ y: 12, opacity: 0, rotate: -30 }}
            animate={{ y: 0, opacity: 1, rotate: 0 }}
            exit={{ y: -12, opacity: 0, rotate: 30 }}
            transition={{ duration: 0.22, ease: 'easeInOut' }}
            className="absolute inset-0 flex items-center justify-center"
          >
            {isDark ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
          </motion.span>
        </AnimatePresence>
      )}
    </button>
  )
}