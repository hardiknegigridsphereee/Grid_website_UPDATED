import type { LucideIcon } from 'lucide-react'
import {
  Code2,
  BrainCircuit,
  Globe,
  Smartphone,
  CircuitBoard,
  Wifi,
  Cpu,
  Terminal,
  Box,
  PenTool,
  Sprout,
  GraduationCap,
  Truck,
  ShoppingBag,
  Factory,
  HeartPulse,
} from 'lucide-react'

/* ---------------------------------- Metrics --------------------------------- */
export interface Metric {
  label: string
  value: number
  suffix?: string
}

export const metrics: Metric[] = [
  { label: 'Projects Delivered', value: 120, suffix: '+' },
  { label: 'Industries Served', value: 14, suffix: '+' },
  { label: 'Products Built', value: 25, suffix: '+' },
  { label: 'Technologies Used', value: 40, suffix: '+' },
]

/* --------------------------------- Services --------------------------------- */
export interface ServiceItem {
  title: string
  description: string
  icon: LucideIcon
}

export interface ServiceCategory {
  category: string
  slug: string
  description: string
  items: ServiceItem[]
}

export const serviceCategories: ServiceCategory[] = [
  {
    category: 'Software Development',
    slug: 'software-development',
    description: 'End-to-end software engineering across web, mobile and AI.',
    items: [
      {
        title: 'Custom Software Development',
        description: 'Bespoke platforms engineered around your operations.',
        icon: Code2,
      },
      {
        title: 'Mobile App Development',
        description: 'Native-grade iOS & Android apps.',
        icon: Smartphone,
      },
      {
        title: 'Web Development',
        description: 'Fast, accessible, modern web experiences.',
        icon: Globe,
      },
      {
        title: 'AI Development',
        description: 'Predictive models, computer vision & generative AI.',
        icon: BrainCircuit,
      },
    ],
  },
  {
    category: 'Hardware Development',
    slug: 'hardware-development',
    description: 'From concept to manufactured device.',
    items: [
      {
        title: 'Hardware Design',
        description: 'Electronics & product hardware design.',
        icon: CircuitBoard,
      },
      {
        title: 'IoT Development',
        description: 'Connected devices & sensor networks.',
        icon: Wifi,
      },
      {
        title: 'PCB Design & Development',
        description: 'Schematic capture through fabrication-ready PCB layout.',
        icon: Cpu,
      },
      {
        title: 'Embedded Systems Development',
        description: 'Firmware and embedded software for custom hardware.',
        icon: Terminal,
      },
    ],
  },
  {
    category: 'Additional Services',
    slug: 'additional-services',
    description: 'Design & prototyping to bring products to life.',
    items: [
      {
        title: '3D CAD Modeling',
        description: 'Precision 3D modeling for hardware and enclosures.',
        icon: Box,
      },
      {
        title: 'Product Design & Prototyping',
        description: 'From concept sketches to working prototypes.',
        icon: PenTool,
      },
    ],
  },
]

/* ------------------------------ Process (Services) -------------------------- */
export interface ProcessStep {
  step: string
  title: string
  description: string
}

export const processSteps: ProcessStep[] = [
  {
    step: '01',
    title: 'Discover',
    description:
      'We map your operations, goals and constraints to define a sharp, measurable scope.',
  },
  {
    step: '02',
    title: 'Design',
    description:
      'Architecture, data models and UX are designed together for scale and clarity.',
  },
  {
    step: '03',
    title: 'Build',
    description:
      'Iterative delivery with automated testing, code review and continuous deployment.',
  },
  {
    step: '04',
    title: 'Scale',
    description:
      'We observe, optimize and extend the platform as your business and data grow.',
  },
]

/* --------------------------------- Products --------------------------------- */
export interface Product {
  name: string
  slug: string
  tagline: string
  description: string
  longDescription: string
  image: string
  category: string
  tags: string[]
  features: string[]
  segments?: { title: string; description: string }[]
  link?: string
}

export const products: Product[] = [
  {
    name: 'Smart Agricultural Weather Station',
    slug: 'smart-agricultural-weather-station',
    tagline: 'AI-powered precision farming',
    description:
      'An AI-powered weather station built for the field — real-time environmental monitoring that turns raw sensor data into precision-farming decisions.',
    longDescription:
      'The Smart Agricultural Weather Station combines rugged field hardware with AI-driven analysis to give growers a live picture of the conditions that matter — temperature, humidity, rainfall, wind and soil signals — feeding models that support irrigation and crop-health decisions on the ground.',
    image: '/products/weather-station.png',
    category: 'Agriculture · Hardware · AI',
    tags: ['AI', 'IoT', 'Agriculture', 'Sensors'],
    features: [
      'Real-time environmental & weather monitoring',
      'AI-assisted precision farming insights',
      'Rugged, field-deployable sensor hardware',
      'Cloud dashboard with historical trends',
    ],
    link: '#',
  },
  {
    name: 'TrakID',
    slug: 'trakid',
    tagline: 'GPS tracking for children',
    description:
      'A GPS tracking ecosystem built for child safety — for individual families and for schools managing devices at scale.',
    longDescription:
      'TrakID pairs a dedicated tracker with a parent mobile app and a school-ready management layer. Parents get live location and alerts for their own child; schools can issue and manage trackers in bulk, integrated directly with the GridSphere School ERP.',
    image: '/products/trakid.png',
    category: 'IoT · Mobile · Safety',
    tags: ['GPS', 'Mobile App', 'School ERP', 'Safety'],
    features: [
      'Live GPS tracking & geofencing',
      'Dedicated parent mobile application',
      'Bulk device provisioning for schools',
      'Integrated with GridSphere School ERP',
    ],
    segments: [
      {
        title: 'For Parents',
        description:
          'Individual parents can purchase a tracker and monitor their child in real time through the TrakID parent app.',
      },
      {
        title: 'For Schools',
        description:
          'Schools can purchase devices in bulk, with fleet management integrated directly into the School ERP.',
      },
    ],
    link: '#',
  },
  {
    name: 'Biometric Attendance System',
    slug: 'biometric-attendance-system',
    tagline: 'In-house attendance hardware & software',
    description:
      "GridSphere's own biometric attendance solution — reliable hardware paired with software that plugs straight into payroll and HR.",
    longDescription:
      'A complete biometric attendance solution designed and built in-house, from the fingerprint hardware to the reporting dashboard, giving organizations accurate, tamper-resistant attendance data with minimal setup.',
    image: '/products/biometric-attendance.png',
    category: 'Hardware · Enterprise',
    tags: ['Biometric', 'Hardware', 'Enterprise'],
    features: [
      'Fingerprint-based attendance hardware',
      'Realtime attendance dashboard',
      'Payroll & HR system integration',
      'Multi-location device management',
    ],
    link: '#',
  },
]

/* -------------------------------- Industries -------------------------------- */
export interface Industry {
  name: string
  description: string
  icon: LucideIcon
  /** Concrete solutions we build for this sector. */
  solutions: string[]
}

export const industries: Industry[] = [
  {
    name: 'Agriculture',
    description: 'Precision farming & crop intelligence',
    icon: Sprout,
    solutions: [
      'Sensor networks & crop intelligence',
      'Disease prediction & smart irrigation',
      'Yield forecasting dashboards',
    ],
  },
  {
    name: 'Education',
    description: 'Smart campuses & learning platforms',
    icon: GraduationCap,
    solutions: [
      'School & university ERP suites',
      'Learning management platforms',
      'Parent & student engagement apps',
    ],
  },
  {
    name: 'Logistics',
    description: 'Fleet, freight & supply chain',
    icon: Truck,
    solutions: [
      'Fleet & shipment tracking',
      'Route optimization engines',
      'Warehouse orchestration systems',
    ],
  },
  {
    name: 'Retail',
    description: 'Commerce, POS & inventory',
    icon: ShoppingBag,
    solutions: [
      'Omnichannel commerce platforms',
      'POS & inventory management',
      'Demand forecasting analytics',
    ],
  },
  {
    name: 'Manufacturing',
    description: 'Industry 4.0 & shop-floor automation',
    icon: Factory,
    solutions: [
      'Shop-floor automation & IoT',
      'Predictive maintenance systems',
      'Production analytics dashboards',
    ],
  },
  {
    name: 'Healthcare',
    description: 'Clinical systems & patient analytics',
    icon: HeartPulse,
    solutions: [
      'Clinical & patient-flow systems',
      'Diagnostics support with AI',
      'Compliance-ready data platforms',
    ],
  },
]

/* ------------------------------- Technologies ------------------------------- */
export const technologies: string[] = [
  'Next.js',
  'React',
  'Node.js',
  'Python',
  'PostgreSQL',
  'Docker',
  'AWS',
  'TensorFlow',
]

/* -------------------------------- Partnerships ------------------------------ */
export const partners: string[] = [
  'Vercel',
  'AWS',
  'Google Cloud',
  'Microsoft Azure',
  'NVIDIA',
  'MongoDB',
  'Stripe',
  'OpenAI',
  'Docker',
  'Cloudflare',
]

/* ----------------------------- Featured Projects ---------------------------- */
export interface ProjectMetric {
  label: string
  value: string
}

export interface Project {
  title: string
  slug: string
  category: string
  description: string
  image: string
  year: string
  challenge: string
  solution: string
  result: string
  metrics: ProjectMetric[]
}

export const projects: Project[] = [
  {
    title: 'Precision Agriculture Network',
    slug: 'precision-agriculture-network',
    category: 'AI · IoT',
    description:
      'A nationwide sensor grid feeding ML models that cut crop loss by 32% across partner farms.',
    image: '/projects/precision-agriculture.png',
    year: '2025',
    challenge:
      'Partner farms were losing significant yield to disease and inconsistent irrigation, with no unified way to see field conditions or act on them in time.',
    solution:
      'We deployed a nationwide grid of soil, weather and imaging sensors feeding predictive ML models, surfacing disease and irrigation guidance to growers through realtime dashboards and mobile alerts.',
    result:
      'Crop loss dropped 32% across participating farms while water usage fell sharply, and growers gained a single live view of every field they operate.',
    metrics: [
      { label: 'Crop loss reduced', value: '32%' },
      { label: 'Hectares covered', value: '48k' },
      { label: 'Water saved', value: '21%' },
    ],
  },
  {
    title: 'Smart Logistics Backbone',
    slug: 'smart-logistics-backbone',
    category: 'Tracking · Cloud',
    description:
      'Realtime fleet orchestration platform handling 40k+ daily shipments with sub-second updates.',
    image: '/projects/smart-logistics.png',
    year: '2024',
    challenge:
      'A growing carrier network needed to coordinate tens of thousands of daily shipments without the latency and blind spots of its legacy tracking tools.',
    solution:
      'We built a realtime orchestration platform with sub-second location updates, route optimization and warehouse coordination, backed by an autoscaling cloud pipeline.',
    result:
      'The platform now handles 40k+ shipments a day with sub-second updates, improving on-time delivery and giving customers accurate live tracking.',
    metrics: [
      { label: 'Daily shipments', value: '40k+' },
      { label: 'Update latency', value: '<1s' },
      { label: 'On-time delivery', value: '+18%' },
    ],
  },
  {
    title: 'Enterprise ERP Rollout',
    slug: 'enterprise-erp-rollout',
    category: 'ERP · Automation',
    description:
      'Unified operations for a multi-site enterprise, automating finance, HR and inventory workflows.',
    image: '/projects/enterprise-erp.png',
    year: '2024',
    challenge:
      'A multi-site enterprise ran finance, HR and inventory on disconnected systems, causing duplicate data entry, reconciliation delays and limited visibility.',
    solution:
      'We rolled out a unified ERP with role-based workflows and automated approvals, migrating legacy data and integrating every site onto one platform.',
    result:
      'Manual reconciliation was largely eliminated, month-end close accelerated, and leadership gained a single real-time view across all locations.',
    metrics: [
      { label: 'Sites unified', value: '11' },
      { label: 'Manual work cut', value: '60%' },
      { label: 'Faster close', value: '3x' },
    ],
  },
  {
    title: 'Healthcare AI Analytics',
    slug: 'healthcare-ai-analytics',
    category: 'AI · Analytics',
    description:
      'Patient-flow prediction and diagnostics support deployed across a regional hospital network.',
    image: '/projects/healthcare-ai.png',
    year: '2023',
    challenge:
      'A regional hospital network struggled with unpredictable patient flow and manual triage, leading to bottlenecks and inconsistent resource planning.',
    solution:
      'We built patient-flow prediction models and diagnostics support tooling, integrated with clinical systems under strict compliance and audit controls.',
    result:
      'Wards could anticipate demand and staff proactively, reducing wait times while giving clinicians AI-assisted decision support at the point of care.',
    metrics: [
      { label: 'Wait time cut', value: '27%' },
      { label: 'Hospitals live', value: '9' },
      { label: 'Forecast accuracy', value: '94%' },
    ],
  },
]

/* --------------------------------- Nav links -------------------------------- */
export const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Products', href: '/products' },
  { label: 'Services', href: '/services' },
  { label: 'Projects', href: '/projects' },
]
