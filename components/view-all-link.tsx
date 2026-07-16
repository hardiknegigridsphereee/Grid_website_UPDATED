import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

interface ViewAllLinkProps {
  href: string
  label: string
}

export function ViewAllLink({ href, label }: ViewAllLinkProps) {
  return (
    <Link
      href={href}
      className="group inline-flex items-center gap-2 text-sm font-medium text-jade-bright transition-colors hover:text-foreground"
    >
      {label}
      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
    </Link>
  )
}
