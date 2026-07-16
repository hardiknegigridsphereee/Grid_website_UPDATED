import type { Metadata } from 'next'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { PageHero } from '@/components/page-hero'
import { CtaBanner } from '@/components/cta-banner'
import { IndustriesContent } from '@/components/pages/industries-content'
import { industries } from '@/data/content'

export const metadata: Metadata = {
  title: 'Industries — GridSphere',
  description:
    'Deep expertise across agriculture, education, logistics, retail, manufacturing and healthcare — solutions tuned to real operational needs.',
}

export default function IndustriesPage() {
  return (
    <>
      <Navbar />
      <main className="relative bg-background">
        <PageHero
          eyebrow="Industries"
          badge={`${industries.length}+ Industries Served`}
          title={
            <>
              Deep expertise <span className="text-gradient-jade">across sectors</span>
            </>
          }
          description="We speak the language of the domains we serve, shipping solutions tuned to the real operational needs of each industry."
        />
        <IndustriesContent />
        <CtaBanner
          title={
            <>
              Don&apos;t see your <span className="text-gradient-jade">industry?</span>
            </>
          }
          description="We adapt fast to new domains. Tell us about your operation and we'll map the right solution."
        />
      </main>
      <Footer />
    </>
  )
}
