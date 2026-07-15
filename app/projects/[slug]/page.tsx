
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { CtaBanner } from '@/components/cta-banner'
import { ProjectDetailContent } from '@/components/pages/project-detail-content'
import { projects } from '@/data/content'

export function generateStaticParams() {
    return projects.map((project) => ({ slug: project.slug }))
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>
}): Promise<Metadata> {
    const { slug } = await params
    const project = projects.find((p) => p.slug === slug)
    if (!project) return { title: 'Project — GridSphere' }
    return {
        title: `${project.title} — GridSphere`,
        description: project.description,
    }
}

export default async function ProjectDetailPage({
    params,
}: {
    params: Promise<{ slug: string }>
}) {
    const { slug } = await params
    const project = projects.find((p) => p.slug === slug)
    if (!project) notFound()

    const related = projects.filter((p) => p.slug !== slug).slice(0, 3)

    return (
        <>
            <Navbar />
            <main className="relative bg-background">
                <ProjectDetailContent project={project} related={related} />
                <CtaBanner
                    title={
                        <>
                            Want results like <span className="text-gradient-jade">this?</span>
                        </>
                    }
                    description="Tell us about your operation and we'll map out a plan to get you there."
                />
            </main>
            <Footer />
        </>
    )
}

