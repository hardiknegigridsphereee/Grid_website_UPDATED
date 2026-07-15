import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { CtaBanner } from '@/components/cta-banner'
import { ProductDetailContent } from '@/components/pages/product-detail-content'
import { products } from '@/data/content'

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const product = products.find((p) => p.slug === slug)
  if (!product) return { title: 'Product — GridSphere' }
  return {
    title: `${product.name} — GridSphere`,
    description: product.description,
  }
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const product = products.find((p) => p.slug === slug)
  if (!product) notFound()

  const related = products.filter((p) => p.slug !== slug).slice(0, 3)

  return (
    <>
      <Navbar />
      <main className="relative bg-background">
        <ProductDetailContent product={product} related={related} />
        <CtaBanner
          title={
            <>
              Interested in <span className="text-gradient-jade">{product.name}?</span>
            </>
          }
          description="Book a walkthrough and we'll show you how it maps to your operation."
        />
      </main>
      <Footer />
    </>
  )
}
