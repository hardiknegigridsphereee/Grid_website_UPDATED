import type { LucideIcon } from 'lucide-react'
import {
  Code2,
  BrainCircuit,
  Boxes,
  Globe,
  Smartphone,
  Cloud,
  Workflow,
  BarChart3,
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
export interface Service {
  title: string
  description: string
  icon: LucideIcon
  /** Bullet list of what the engagement includes. */
  includes: string[]
}

export const services: Service[] = [
  {
    title: 'Custom Software Development',
    description:
      'Bespoke platforms engineered around your operations, from architecture to deployment.',
    icon: Code2,
    includes: [
      'Discovery, architecture & technical roadmap',
      'Full-stack product engineering',
      'Automated testing & CI/CD pipelines',
      'Ongoing maintenance & SLAs',
    ],
  },
  {
    title: 'AI Solutions',
    description:
      'Predictive models, computer vision and generative AI woven directly into your products.',
    icon: BrainCircuit,
    includes: [
      'Model selection & fine-tuning',
      'Computer vision & NLP pipelines',
      'RAG and generative AI features',
      'MLOps, monitoring & evaluation',
    ],
  },
  {
    title: 'ERP Systems',
    description:
      'Unified resource planning that connects finance, inventory, HR and operations.',
    icon: Boxes,
    includes: [
      'Finance, HR & inventory modules',
      'Role-based access & approvals',
      'Legacy data migration',
      'Custom reporting dashboards',
    ],
  },
  {
    title: 'Web Development',
    description:
      'Fast, accessible and beautiful web experiences built on modern frameworks.',
    icon: Globe,
    includes: [
      'Design systems & component libraries',
      'Server-rendered, SEO-ready apps',
      'Accessibility (WCAG) compliance',
      'Core Web Vitals performance tuning',
    ],
  },
  {
    title: 'Mobile Applications',
    description:
      'Native-grade iOS and Android apps with seamless offline and realtime sync.',
    icon: Smartphone,
    includes: [
      'iOS & Android from one codebase',
      'Offline-first data sync',
      'Push notifications & deep links',
      'App Store & Play Store delivery',
    ],
  },
  {
    title: 'Cloud Solutions',
    description:
      'Scalable, secure cloud infrastructure with automated CI/CD and observability.',
    icon: Cloud,
    includes: [
      'Infrastructure as code',
      'Autoscaling & cost optimization',
      'Observability & alerting',
      'Security hardening & compliance',
    ],
  },
  {
    title: 'Automation Systems',
    description:
      'Workflow automation that removes manual toil and accelerates every process.',
    icon: Workflow,
    includes: [
      'Process mapping & audit',
      'Workflow & RPA orchestration',
      'System-to-system integrations',
      'Human-in-the-loop controls',
    ],
  },
  {
    title: 'Analytics Platforms',
    description:
      'Realtime dashboards and data pipelines that turn raw signals into decisions.',
    icon: BarChart3,
    includes: [
      'ETL & streaming data pipelines',
      'Warehouse & lakehouse modeling',
      'Realtime KPI dashboards',
      'Self-serve reporting for teams',
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
  description: string
  longDescription: string
  image: string
  tags: string[]
  features: string[]
  link?: string
}

export const products: Product[] = [
  {
    name: 'Orchard Intelligence Platform',
    slug: 'orchard-intelligence-platform',
    description:
      'AI-driven precision agriculture — disease prediction, irrigation and yield forecasting from live field telemetry.',
    longDescription:
      'Orchard Intelligence turns raw field telemetry into decisions. It ingests data from soil, weather and imaging sensors, runs predictive models for disease and irrigation, and surfaces clear guidance to growers through a realtime dashboard and mobile alerts — reducing crop loss and water waste across thousands of hectares.',
    image: '/products/orchard-intelligence.png',
    tags: ['AI/ML', 'IoT', 'Next.js', 'TensorFlow'],
    features: [
      'Disease prediction from computer-vision imaging',
      'Smart irrigation scheduling from soil telemetry',
      'Yield forecasting with seasonal ML models',
      'Realtime alerts on web and mobile',
      'Multi-farm fleet and sensor management',
    ],
    link: '#',
  },
  {
    name: 'School ERP Suite',
    slug: 'school-erp-suite',
    description:
      'End-to-end education management — admissions, attendance, timetabling, fees and parent engagement.',
    longDescription:
      'School ERP Suite unifies every administrative workflow a modern institution runs — from admissions and attendance to timetabling, fee collection and parent communication — into a single role-aware platform that saves staff hours every week and keeps families informed.',
    image: '/products/school-erp.png',
    tags: ['ERP', 'React', 'PostgreSQL', 'Node.js'],
    features: [
      'Admissions & student lifecycle management',
      'Biometric and app-based attendance',
      'Automated timetabling & substitutions',
      'Online fee collection & receipts',
      'Parent & teacher engagement portals',
    ],
    link: '#',
  },
  {
    name: 'Workforce Tracker',
    slug: 'workforce-tracker',
    description:
      'Realtime workforce visibility with geolocation, shift scheduling and productivity analytics.',
    longDescription:
      'Workforce Tracker gives operations leaders live visibility into distributed teams. Geolocation check-ins, shift scheduling and productivity analytics come together so managers can staff accurately, reduce idle time and act on the ground truth of what is happening in the field.',
    image: '/products/workforce-tracker.png',
    tags: ['Tracking', 'Mobile', 'Realtime', 'AWS'],
    features: [
      'Live geolocation check-in and geofencing',
      'Drag-and-drop shift scheduling',
      'Productivity and utilization analytics',
      'Payroll-ready timesheet exports',
      'Offline-capable mobile app',
    ],
    link: '#',
  },
  {
    name: 'Asset Management Platform',
    slug: 'asset-management-platform',
    description:
      'Full asset lifecycle — inventory, maintenance scheduling, depreciation and QR-based tracking.',
    longDescription:
      'Asset Management Platform tracks every asset from purchase to retirement. QR-tagged inventory, preventive maintenance scheduling and automated depreciation give finance and operations a single source of truth, cutting downtime and eliminating spreadsheet chaos.',
    image: '/products/asset-management.png',
    tags: ['Enterprise', 'Cloud', 'Analytics', 'Docker'],
    features: [
      'QR-tagged asset inventory',
      'Preventive maintenance scheduling',
      'Automated depreciation & audits',
      'Warranty and vendor tracking',
      'Depreciation and utilization reporting',
    ],
    link: '#',
  },
  {
    name: 'Logistics Monitoring System',
    slug: 'logistics-monitoring-system',
    description:
      'Live fleet and shipment monitoring with route optimization, ETAs and warehouse orchestration.',
    longDescription:
      'Logistics Monitoring System orchestrates fleets, shipments and warehouses in real time. Route optimization, predictive ETAs and warehouse coordination keep goods moving efficiently and give customers accurate, live visibility into every delivery.',
    image: '/products/logistics-monitoring.png',
    tags: ['Logistics', 'Maps', 'IoT', 'Python'],
    features: [
      'Live fleet and shipment tracking',
      'Route optimization & predictive ETAs',
      'Warehouse and dock orchestration',
      'Customer-facing tracking pages',
      'Exception alerts and SLA monitoring',
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
  { label: 'Services', href: '/services' },
  { label: 'Products', href: '/products' },
  { label: 'Industries', href: '/industries' },
  { label: 'Projects', href: '/projects' },
]
