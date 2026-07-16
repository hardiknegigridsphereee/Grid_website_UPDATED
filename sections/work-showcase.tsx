'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { SectionHeading } from '@/components/section-heading'
import { staggerContainer, fadeUp } from '@/animations/variants'

const work = [
    { title: 'ERP Dashboard', image: '/work/erp-dashboard.png' },
    { title: 'Student Portal', image: '/work/student-portal.png' },
    { title: 'Parent App', image: '/work/parent-app.png' },
    { title: 'CRM', image: '/work/crm.png' },
    { title: 'Mobile App', image: '/work/mobile-app.png' },
]

export function WorkShowcase() {
    return (
        <section className="relative border-y border-border bg-card/30 py-28 sm:py-36">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <SectionHeading
                    eyebrow="Our Work"
                    title="A glimpse into what we've shipped"
                    description="Real products, running in production, across ERP, education, CRM and mobile."
                />

                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: '-60px' }}
                    className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
                >
                    {work.map((item) => (
                        <motion.div
                            key={item.title}
                            variants={fadeUp}
                            className="group relative overflow-hidden rounded-3xl border border-border bg-card"
                        >
                            <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    sizes="(max-width: 768px) 100vw, 400px"
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-lg font-semibold">{item.title}</h3>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}