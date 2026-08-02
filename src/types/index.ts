// Navigation Types
export interface NavItem {
  label: string;
  href: string;
  description?: string;
}

export interface Navigation {
  items: NavItem[];
  cta: NavItem;
}

// Service Types
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  benefits: string[];
  price?: string;
}

// Testimonial Types
export interface Testimonial {
  id: string;
  name: string;
  business: string;
  location: string;
  quote: string;
  rating: number;
  image?: string;
}

// Case Study Types
export interface CaseStudy {
  id: string;
  client: string;
  industry: string;
  location: string;
  challenge: string;
  solution: string;
  results: string[];
  testimonial?: Testimonial;
  metrics: {
    label: string;
    value: string;
  }[];
}

// FAQ Types
export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

// Contact Types
export interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  businessName: string;
  websiteUrl: string;
  service: string;
  monthlyBudget: string;
  message: string;
  honeypot?: string;
}

// Social Links
export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

// Footer Data
export interface FooterLink {
  label: string;
  href: string;
}

export interface Footer {
  description: string;
  links: FooterLink[];
  socialLinks: SocialLink[];
  contact: {
    email: string;
    phone: string;
    whatsapp: string;
  };
  copyright: string;
}

// SEO Types
export interface SEOMetadata {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  noIndex?: boolean;
  noFollow?: boolean;
}

// Content Provider Types (for WordPress integration)
export interface ContentProvider {
  type: 'local' | 'wordpress';
  wordpressApiUrl?: string;
}

export interface WordPressPost {
  id: number;
  slug: string;
  title: string;
  content: string;
  excerpt: string;
  date: string;
  featuredImage?: string;
  categories: string[];
  author: {
    name: string;
    avatar?: string;
  };
}

// Tracking Events
export interface TrackingEvent {
  action: string;
  category: string;
  label?: string;
  value?: number;
}
