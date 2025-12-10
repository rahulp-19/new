import { Home, Store, Hammer, FileText, Ruler, MessageSquare, CheckCircle, ClipboardList, HardHat, Key } from 'lucide-react';
import { NavItem, Service, Project, PricingPlan, TeamMember, ProcessStep } from './types';

export const COMPANY_NAME = "Reindeer Construction";
export const TAGLINE = "Strong Foundations, Safe Futures";
export const CONTACT_INFO = {
  phone: "+91-6000141988",
  whatsapp: "+91-6000141988",
  email: "rp6000141@gmail.com",
  address: "Jorhat, Assam, India"
};

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Projects', path: '/projects' },
  { label: 'Pricing', path: '/pricing' },
  { label: 'Process', path: '/process' },
  { label: 'Contact', path: '/contact' },
];

export const SERVICES: Service[] = [
  {
    id: 'residential',
    title: 'Residential Construction',
    description: 'Modern Assam-type houses, RCC G+1/G+2 structures, and duplex homes tailored to your lifestyle.',
    details: ['Structural Design', 'Assam-type Architecture', 'RCC Framework', 'Duplex Planning'],
    icon: Home
  },
  {
    id: 'commercial',
    title: 'Shops & Commercial',
    description: 'Efficient layouts for shops, showrooms, small offices, and godowns maximizing commercial value.',
    details: ['Showroom Facades', 'Office Layouts', 'Storage Solutions', 'Commercial Compliance'],
    icon: Store
  },
  {
    id: 'renovation',
    title: 'Renovation & Repairs',
    description: 'Breathe new life into old spaces. Extensions, flooring, painting, waterproofing, and modular kitchens.',
    details: ['Waterproofing', 'Modular Kitchens', 'Flooring Upgrades', 'Structural Repairs'],
    icon: Hammer
  },
  {
    id: 'planning',
    title: 'Planning & Support',
    description: 'End-to-end support including layout planning, cost estimation, and assistance with municipal permits.',
    details: ['Blueprints', 'Cost Estimation', 'Permit Assistance', 'Site Survey'],
    icon: FileText
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'p1',
    title: 'Baruah Residency',
    category: 'Houses',
    image: 'https://images.unsplash.com/photo-1600596542815-2a4d9f6facb8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    location: 'Tarajan, Jorhat',
    description: 'A modern G+1 RCC residential building with traditional Assamese sloping roof aesthetics.',
    package: 'Premium'
  },
  {
    id: 'p2',
    title: 'Das Commercial Complex',
    category: 'Shops',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    location: 'Gar-Ali, Jorhat',
    description: 'A G+2 commercial complex housing 6 shops and 2 office spaces.',
    package: 'Standard'
  },
  {
    id: 'p3',
    title: 'Saikia Villa Renovation',
    category: 'Renovation',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    location: 'Cinnamara, Jorhat',
    description: 'Complete interior and exterior renovation of a 20-year-old Assam-type house.',
    package: 'Custom'
  },
  {
    id: 'p4',
    title: 'Modern Duplex',
    category: 'Houses',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    location: 'Jorhat Bypass',
    description: 'Contemporary duplex with glass facade and minimal design.',
    package: 'Premium'
  },
  {
    id: 'p5',
    title: 'City Center Showroom',
    category: 'Shops',
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    location: 'AT Road, Jorhat',
    description: 'Interior fit-out and structural strengthening for a retail showroom.',
    package: 'Standard'
  }
];

export const PRICING: PricingPlan[] = [
  {
    name: 'Basic',
    priceRange: '₹1,600 - ₹1,800 / sq.ft',
    features: [
      'Standard Branded Cement',
      'Ceramic Tiles Flooring',
      'Standard Fittings',
      'Oil Bound Distemper Paint',
      'Flush Doors',
      '6 Month Support'
    ],
    isRecommended: false,
    color: 'border-gray-200'
  },
  {
    name: 'Standard',
    priceRange: '₹1,900 - ₹2,200 / sq.ft',
    features: [
      'Premium Cement (Ultratech/Lafarge)',
      'Vitrified Tiles (Kajaria/Johnson)',
      'Jaguar/Cera Fittings',
      'Premium Emulsion Paint',
      'Teak/Sal Wood Frames',
      '1 Year Maintenance'
    ],
    isRecommended: true,
    color: 'border-accent'
  },
  {
    name: 'Premium',
    priceRange: '₹2,400+ / sq.ft',
    features: [
      'Top Tier Cement & Steel',
      'Italian Marble / Wooden Flooring',
      'Kohler/Grohe Fittings',
      'Royal Luxury Emulsion',
      'Teak Wood Doors & Windows',
      'Modular Kitchen Included',
      '2 Year Priority Support'
    ],
    isRecommended: false,
    color: 'border-primary'
  }
];

export const TEAM: TeamMember[] = [
  {
    name: "Rajesh P.",
    role: "Lead Engineer",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
  },
  {
    name: "Amit Dutta",
    role: "Site Supervisor",
    image: "https://images.unsplash.com/photo-1531384441138-2736e62e0919?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
  },
  {
    name: "Sneha Gogoi",
    role: "Architectural Planner",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: 1,
    title: "Site Visit & Discussion",
    description: "We visit your plot in Jorhat, discuss your vision, and assess feasibility.",
    icon: MessageSquare
  },
  {
    step: 2,
    title: "Plan & Estimate",
    description: "Our team creates detailed 2D/3D layouts and a transparent cost estimate.",
    icon: Ruler
  },
  {
    step: 3,
    title: "Agreement",
    description: "Signing the contract with clear timelines, materials list, and payment schedules.",
    icon: ClipboardList
  },
  {
    step: 4,
    title: "Construction",
    description: "Execution begins under strict supervision with regular updates sent to you.",
    icon: HardHat
  },
  {
    step: 5,
    title: "Handover",
    description: "Final quality checks, cleaning, and handing over the keys to your dream space.",
    icon: Key
  }
];