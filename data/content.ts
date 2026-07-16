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
  Droplets,
  Bug,
  CloudRain,
  TrendingUp,
  Thermometer,
  Bus,
  MapPin,
  ShieldCheck,
  Fingerprint,
} from 'lucide-react'

/* ---------------------------------- Metrics --------------------------------- */
export interface Metric {
  label: string
  value: number
  suffix?: string
  isText?: boolean
}

export const metrics: Metric[] = [
  { label: 'Projects Delivered', value: 100, suffix: '+' },
  { label: 'Enterprise Clients', value: 30, suffix: '+' },
  { label: 'Industries Served', value: 15, suffix: '+' },
  { label: 'AI-Driven Solutions', value: 0, suffix: '', isText: true },
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
/**
 * Each product carries its own visual theme. The `vars` map is applied inline
 * on the product page wrapper, overriding the global jade tokens so every
 * jade-based utility (text-jade-bright, bg-jade, text-gradient-jade, glow-jade…)
 * instantly adopts the product's palette — agriculture green, safety blue or
 * enterprise slate — making each product page *feel* like its domain.
 */
export interface ProductTheme {
  /** Human label for the theme, e.g. "Agriculture". */
  name: string
  /** CSS custom properties applied inline to re-skin the page. */
  vars: Record<string, string>
}

export interface ProductStat {
  value: string
  label: string
}

export interface ProductSpec {
  label: string
  value: string
}

export interface ProductStep {
  step: string
  title: string
  description: string
  icon: LucideIcon
}

export interface ProductUseCase {
  title: string
  description: string
  icon: LucideIcon
}

export interface Product {
  name: string
  slug: string
  tagline: string
  description: string
  longDescription: string
  image: string
  /** Larger, domain-flavored hero image. Falls back to `image`. */
  heroImage?: string
  gallery?: string[]
  category: string
  tags: string[]
  features: string[]
  stats?: ProductStat[]
  specs?: ProductSpec[]
  useCases?: ProductUseCase[]
  howItWorks?: ProductStep[]
  segments?: { title: string; description: string; icon: LucideIcon }[]
  theme: ProductTheme
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
      'The Smart Agricultural Weather Station combines rugged, solar-powered field hardware with AI-driven analysis to give growers a live picture of the conditions that matter — temperature, humidity, rainfall, wind and soil signals — feeding models that support irrigation, spraying and crop-health decisions right on the ground. Built to survive the field and simple enough for any grower to act on.',
    image: '/products/weather-station.png',
    heroImage: '/products/weather-station-field.png',
    gallery: ['/products/weather-station-dashboard.png', '/products/orchard-intelligence.png'],
    category: 'Agriculture · Hardware · AI',
    tags: ['AI', 'IoT', 'Agriculture', 'Sensors'],
    features: [
      'Real-time environmental & weather monitoring',
      'AI-assisted precision farming insights',
      'Rugged, solar-powered field hardware',
      'Cloud dashboard with historical trends',
    ],
    stats: [
      { value: '24/7', label: 'Live field monitoring' },
      { value: '15+', label: 'Sensor metrics tracked' },
      { value: '32%', label: 'Avg. crop loss reduced' },
      { value: '21%', label: 'Water usage saved' },
    ],
    specs: [
      { label: 'Power', value: 'Solar panel + battery backup' },
      { label: 'Connectivity', value: '4G LTE / LoRaWAN mesh' },
      { label: 'Sensors', value: 'Temp · Humidity · Rain · Wind · Soil moisture' },
      { label: 'Enclosure', value: 'IP66 weatherproof, UV-stable' },
      { label: 'Mesh range', value: 'Up to 2 km between nodes' },
      { label: 'Data sync', value: 'Cloud update every 5 minutes' },
    ],
    useCases: [
      {
        title: 'Smart irrigation',
        description: 'Water only when soil and weather signals say so — cutting waste without risking the crop.',
        icon: Droplets,
      },
      {
        title: 'Disease & pest early warning',
        description: 'AI flags the humidity and temperature windows that trigger outbreaks before they spread.',
        icon: Bug,
      },
      {
        title: 'Frost & storm alerts',
        description: 'Growers get ahead of frost, heat and storm events with timely mobile alerts.',
        icon: CloudRain,
      },
      {
        title: 'Yield forecasting',
        description: 'Season-long trends feed forecasting dashboards that sharpen planning and pricing.',
        icon: TrendingUp,
      },
    ],
    howItWorks: [
      { step: '01', title: 'Sense', description: 'Field sensors continuously capture weather and soil conditions across every node.', icon: Thermometer },
      { step: '02', title: 'Sync', description: 'Readings stream securely to the cloud over 4G or a low-power LoRaWAN mesh.', icon: Wifi },
      { step: '03', title: 'Analyze', description: 'AI models turn raw signals into disease risk, irrigation and frost predictions.', icon: BrainCircuit },
      { step: '04', title: 'Act', description: 'Growers receive clear, timely guidance on a dashboard and mobile alerts.', icon: Sprout },
    ],
    theme: {
      name: 'Agriculture',
      vars: {
        '--jade': '#3f8f43',
        '--jade-bright': '#5aa832',
        '--jade-foreground': '#ffffff',
        '--ring': '#3f8f43',
        '--product-accent': '#d99b2b',
        '--product-tint': 'rgba(90, 168, 50, 0.1)',
        '--gradient-jade': 'linear-gradient(120deg, #1f3d1a 0%, #3f8f43 55%, #7cbf3f 100%)',
        '--glow-jade': '0 0 60px -18px rgba(90, 168, 50, 0.45)',
      },
    },
    link: '#',
  },
  {
    name: 'TrakID',
    slug: 'trakid',
    tagline: 'GPS tracking for children',
    description:
      'A GPS tracking ecosystem built for child safety — for individual families and for schools managing devices at scale.',
    longDescription:
      'TrakID pairs a dedicated, kid-friendly tracker with a reassuring parent mobile app and a school-ready management layer. Parents get live location, safe-zone alerts and an SOS button for their own child; schools can issue and manage trackers in bulk, wired directly into the GridSphere School ERP so every commute and field trip is accounted for.',
    image: '/products/trakid.png',
    heroImage: '/products/trakid-device.png',
    gallery: ['/products/trakid-app.png', '/products/school-erp.png'],
    category: 'IoT · Mobile · Safety',
    tags: ['GPS', 'Mobile App', 'School ERP', 'Safety'],
    features: [
      'Live GPS tracking & geofencing',
      'Dedicated parent mobile application',
      'One-tap SOS & safe-zone alerts',
      'Bulk device provisioning for schools',
    ],
    stats: [
      { value: 'Live', label: 'Real-time GPS location' },
      { value: 'IP67', label: 'Water & dust resistant' },
      { value: '5 days', label: 'Battery on a charge' },
      { value: 'SOS', label: 'One-tap emergency alert' },
    ],
    specs: [
      { label: 'Positioning', value: 'GPS + GLONASS + LBS fallback' },
      { label: 'Connectivity', value: '4G LTE with 2G fallback' },
      { label: 'Battery', value: 'Up to 5 days per charge' },
      { label: 'Durability', value: 'IP67 water & dust resistant' },
      { label: 'Safety', value: 'SOS button + safe-zone geofencing' },
      { label: 'Management', value: 'Parent app + School ERP console' },
    ],
    useCases: [
      { title: 'Safe school commute', description: 'Parents and schools see pickups, drop-offs and route deviations in real time.', icon: Bus },
      { title: 'Field trips & outings', description: 'Staff keep a live roster of every child on off-campus trips.', icon: MapPin },
      { title: 'Everyday family peace of mind', description: 'Safe-zone alerts tell parents the moment a child arrives or leaves home or school.', icon: ShieldCheck },
      { title: 'District-wide fleets', description: 'Provision and manage thousands of devices from one ERP-integrated console.', icon: GraduationCap },
    ],
    howItWorks: [
      { step: '01', title: 'Wear', description: 'The lightweight tracker clips to a bag or wrist and powers on in seconds.', icon: MapPin },
      { step: '02', title: 'Locate', description: 'GPS and network positioning stream a live location to the cloud.', icon: Wifi },
      { step: '03', title: 'Alert', description: 'Safe-zone entry/exit, SOS taps and low battery trigger instant notifications.', icon: ShieldCheck },
      { step: '04', title: 'Manage', description: 'Parents use the app; schools manage fleets inside the School ERP.', icon: Smartphone },
    ],
    segments: [
      {
        title: 'For Parents',
        description:
          'Individual parents can buy a single tracker and follow their child live, with safe-zone alerts and an SOS button in the dedicated TrakID parent app.',
        icon: Smartphone,
      },
      {
        title: 'For Schools',
        description:
          'Schools purchase devices in bulk and manage the entire fleet from a console integrated directly with the GridSphere School ERP.',
        icon: GraduationCap,
      },
    ],
    theme: {
      name: 'Safety',
      vars: {
        '--jade': '#2563c9',
        '--jade-bright': '#3b82f6',
        '--jade-foreground': '#ffffff',
        '--ring': '#2563c9',
        '--product-accent': '#22a6c9',
        '--product-tint': 'rgba(59, 130, 246, 0.1)',
        '--gradient-jade': 'linear-gradient(120deg, #12233f 0%, #2563c9 55%, #38bdf8 100%)',
        '--glow-jade': '0 0 60px -18px rgba(59, 130, 246, 0.45)',
      },
    },
    link: '#',
  },
  {
    name: 'Biometric Attendance System',
    slug: 'biometric-attendance-system',
    tagline: 'In-house attendance hardware & software',
    description:
      "GridSphere's own biometric attendance solution — reliable hardware paired with software that plugs straight into payroll and HR.",
    longDescription:
      'A complete biometric attendance solution designed and built in-house, from the fingerprint terminal to the reporting dashboard. It gives organizations accurate, tamper-resistant attendance data with minimal setup, syncing straight into payroll and HR so timesheets and pay stay correct across every location.',
    image: '/products/biometric-attendance.png',
    heroImage: '/products/biometric-device.png',
    gallery: ['/products/biometric-dashboard.png', '/products/workforce-tracker.png'],
    category: 'Hardware · Enterprise',
    tags: ['Biometric', 'Hardware', 'Enterprise'],
    features: [
      'Fingerprint-based attendance terminal',
      'Real-time attendance dashboard',
      'Payroll & HR system integration',
      'Multi-location device management',
    ],
    stats: [
      { value: '<0.5s', label: 'Recognition speed' },
      { value: '3,000', label: 'Fingerprint templates' },
      { value: '99.9%', label: 'Match accuracy' },
      { value: 'Multi', label: 'Location management' },
    ],
    specs: [
      { label: 'Sensor', value: 'Optical fingerprint scanner' },
      { label: 'Capacity', value: 'Up to 3,000 templates' },
      { label: 'Recognition', value: 'Under 0.5 seconds' },
      { label: 'Connectivity', value: 'Wi-Fi / LAN with offline buffer' },
      { label: 'Integrations', value: 'Payroll & HR / REST API' },
      { label: 'Storage', value: 'On-device + encrypted cloud sync' },
    ],
    useCases: [
      { title: 'Workforce attendance', description: 'Tamper-proof clock-in and clock-out for on-site teams.', icon: Fingerprint },
      { title: 'Payroll automation', description: 'Verified hours flow straight into payroll — no manual timesheets.', icon: TrendingUp },
      { title: 'Multi-site rollouts', description: 'Manage terminals across every branch from one dashboard.', icon: Factory },
      { title: 'Access control', description: 'Gate secure areas to authorized, verified staff only.', icon: ShieldCheck },
    ],
    howItWorks: [
      { step: '01', title: 'Enroll', description: 'Staff register a fingerprint once at the terminal in seconds.', icon: Fingerprint },
      { step: '02', title: 'Verify', description: 'Each scan is matched in under half a second, even offline.', icon: ShieldCheck },
      { step: '03', title: 'Sync', description: 'Records sync securely to the cloud dashboard across locations.', icon: Wifi },
      { step: '04', title: 'Integrate', description: 'Verified hours push into payroll and HR automatically.', icon: TrendingUp },
    ],
    theme: {
      name: 'Enterprise',
      vars: {
        '--jade': '#41527a',
        '--jade-bright': '#5b6ea8',
        '--jade-foreground': '#ffffff',
        '--ring': '#41527a',
        '--product-accent': '#64748b',
        '--product-tint': 'rgba(91, 110, 168, 0.1)',
        '--gradient-jade': 'linear-gradient(120deg, #1b2436 0%, #41527a 55%, #7c8bc0 100%)',
        '--glow-jade': '0 0 60px -18px rgba(91, 110, 168, 0.4)',
      },
    },
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
  { label: 'Products', href: '/products' },
  { label: 'Services', href: '/services' },
  { label: 'Projects', href: '/projects' },
  { label: 'About', href: 'about' },
]
