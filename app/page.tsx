import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Hero } from '@/sections/hero'
import { Metrics } from '@/sections/metrics'
import { Services } from '@/sections/services'
import { Products } from '@/sections/products'
import { Industries } from '@/sections/industries'
import { TechStack } from '@/sections/tech-stack'
import { Partnerships } from '@/sections/partnerships'
import { FeaturedProjects } from '@/sections/featured-projects'
import { FinalCTA } from '@/sections/final-cta'
import Contact from '@/sections/contact'
// ❌ removed: import { IntroAnimation } from '@/components/intro-animation'

export default function Home() {
  return (
    <>
      {/* ❌ removed: <IntroAnimation brandName="GridSphere" /> */}
      <Navbar />
      <main className="relative bg-background">
        <Hero />
        <Metrics />
        <Services />
        <Products />
        <Industries />
        <TechStack />
        <Partnerships />
        <FeaturedProjects />
        <Contact />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}