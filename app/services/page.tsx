import type { Metadata } from 'next'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { PageHero } from '@/components/page-hero'
import { CtaBanner } from '@/components/cta-banner'
import { ServicesContent } from '@/components/pages/services-content'

export const metadata: Metadata = {
  title: 'Services — GridSphere',
  description:
    'Full-spectrum engineering services: custom software, AI, ERP, web, mobile, cloud, automation and analytics — from discovery to scale.',
}

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className="relative bg-background">
        <PageHero
          eyebrow="Services"
          title={
            <>
              Full-spectrum engineering, <span className="text-gradient-jade">one partner</span>
            </>
          }
          description="From first line of code to production scale, we design and build the systems that run modern businesses — end to end, with one accountable team."
        />
        <ServicesContent />
        <CtaBanner
          title={
            <>
              Ready to <span className="text-gradient-jade">build</span> something?
            </>
          }
          description="Tell us what you're trying to ship. We'll help you scope it and engineer it end to end."
        />
      </main>
      <Footer />
    </>
  )
}
