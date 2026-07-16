'use client'

import * as React from 'react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'

// next-themes renders an inline <script> to prevent theme flicker on load.
// Next.js 16.2 + React 19 flags any <script> rendered by a component as an
// error, even though it works correctly during SSR — this is a known false
// positive (next-themes hasn't shipped a fix; see
// https://github.com/pacocoursey/next-themes/issues/387). We filter just
// this one message so it doesn't trigger the full-page dev error overlay.
if (typeof window !== 'undefined' && process.env.NODE_ENV === 'development') {
  const originalConsoleError = console.error
  console.error = (...args: unknown[]) => {
    if (typeof args[0] === 'string' && args[0].includes('Encountered a script tag')) {
      return
    }
    originalConsoleError.apply(console, args)
  }
}

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}