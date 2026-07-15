import type { Metadata } from 'next'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { PageHero } from '@/components/page-hero'
import { CtaBanner } from '@/components/cta-banner'
import { ProductsContent } from '@/components/pages/products-content'

export const metadata: Metadata = {
  title: 'Products — GridSphere',
  description:
    'A growing suite of production products powering agriculture, education, logistics and the enterprise.',
}

export default function ProductsPage() {
  return (
    <>
      <Navbar />
      <main className="relative bg-background">
        <PageHero
          eyebrow="Products"
          title={
            <>
              Platforms built to <span className="text-gradient-jade">ship value</span>
            </>
          }
          description="A growing suite of production products powering agriculture, education, logistics and the enterprise — each battle-tested in the field."
        />
        <ProductsContent />
        <CtaBanner
          title={
            <>
              Need a <span className="text-gradient-jade">tailored</span> platform?
            </>
          }
          description="Our products are a starting point. We customize and extend them to fit your exact operation."
        />
      </main>
      <Footer />
    </>
  )
}
