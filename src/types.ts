export type CategoryType = 'all' | 'branding' | 'print' | 'digital' | 'signage';

export interface ProjectItem {
  id: string;
  title: string;
  category: 'branding' | 'print' | 'digital' | 'signage';
  categoryLabel: string;
  client: string;
  year: string;
  image: string;
  description: string;
  objective: string;
  specs: string[];
  finishes: string[];
  deliverables: string[];
  featured?: boolean;
}

export interface QuoteEstimateConfig {
  serviceType: string;
  material: string;
  finishing: string;
  quantity: number;
  turnaround: 'standard' | 'express' | 'rush';
}

export interface StudioPrompt {
  id: string;
  title: string;
  tag: string;
  description: string;
  promptText: string;
}

export interface TeamMember {
  name: string;
  role: string;
  title: string;
  bio: string;
  responsibilities: string[];
  email: string;
  phone: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  outcome: string;
}
