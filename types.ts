import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  path: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  details: string[];
  icon: LucideIcon;
}

export interface Project {
  id: string;
  title: string;
  category: 'Houses' | 'Shops' | 'Renovation';
  image: string;
  location: string;
  description: string;
  package: string;
}

export interface PricingPlan {
  name: string;
  priceRange: string;
  features: string[];
  isRecommended: boolean;
  color: string;
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
  icon: LucideIcon;
}