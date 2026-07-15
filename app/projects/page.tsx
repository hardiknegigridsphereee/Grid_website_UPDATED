
import type { Metadata } from 'next'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { PageHero } from '@/components/page-hero'
import { CtaBanner } from '@/components/cta-banner'
import { ProjectsContent } from '@/components/pages/projects-content'

export const metadata: Metadata = {
  title: 'Projects — GridSphere',
  description:
    'Case studies where engineering translated directly into measurable outcomes, across agriculture, logistics, ERP and healthcare.',
}

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <main className="relative bg-background">
        <PageHero
          eyebrow="Projects"
          title={
            <>
              Work that moved <span className="text-gradient-jade">the needle</span>
            </>
          }
          description="A selection of case studies where engineering translated directly into measurable outcomes for the businesses we partner with."
        />
        <ProjectsContent />
        <CtaBanner
          title={
            <>
              Have a project in <span className="text-gradient-jade">mind?</span>
            </>
          }
          description="Tell us what you're building and we'll map out how we can help you ship it."
        />
      </main>
      <Footer />
    </>
  )
}

