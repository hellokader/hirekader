import type { Navigation, Service, Testimonial, FAQ, Footer, CaseStudy } from '@/types';

export const navigation: Navigation = {
  items: [
    { label: 'Services', href: '/#services', description: 'What I offer' },
    { label: 'About', href: '/#about', description: 'My background' },
    { label: 'Results', href: '/#results', description: 'Case studies' },
    { label: 'Testimonials', href: '/#testimonials', description: 'Client reviews' },
    { label: 'FAQ', href: '/#faq', description: 'Common questions' },
  ],
  cta: { label: 'Get Free Audit', href: '/#contact' },
};

export const services: Service[] = [
  {
    id: 'google-ads-management',
    title: 'Google Ads Management',
    description: 'Full-service Google Ads management for home service businesses. I handle everything so you can focus on your business.',
    icon: '🎯',
    benefits: [
      'Strategic keyword research',
      'Compelling ad copy',
      'Conversion tracking setup',
      'Monthly performance reports',
      'Ongoing optimization',
      'Dedicated account manager',
    ],
    price: 'Starting at $997/month',
  },
  {
    id: 'landing-page-design',
    title: 'High-Converting Landing Pages',
    description: 'Custom landing pages designed to turn clicks into customers. Every page optimized for conversions.',
    icon: '🚀',
    benefits: [
      'Mobile-responsive design',
      'Fast loading speeds',
      'Clear call-to-actions',
      'Trust signals & proof',
      'A/B testing ready',
      'Analytics integration',
    ],
    price: 'Starting at $1,497',
  },
  {
    id: 'lead-generation',
    title: 'Lead Generation Systems',
    description: 'Build a steady stream of high-quality leads for your home service business. More leads, less guesswork.',
    icon: '📈',
    benefits: [
      'Targeted lead capture',
      'Multi-channel approach',
      'Lead qualification',
      'CRM integration',
      'Automated follow-up',
      'Performance analytics',
    ],
    price: 'Starting at $1,297/month',
  },
  {
    id: 'free-google-audit',
    title: 'Free Google Ads Audit',
    description: 'Get a comprehensive analysis of your current Google Ads account. Learn what\'s working and what needs improvement.',
    icon: '🔍',
    benefits: [
      'Account structure review',
      'Keyword performance analysis',
      'Ad copy assessment',
      'Competitor insights',
      'ROI potential analysis',
      'Actionable recommendations',
    ],
  },
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Mike Reynolds',
    business: 'Reynolds Plumbing Co.',
    location: 'Austin, TX',
    quote: 'Abdul transformed our Google Ads campaign. We went from spending $4,000/month with barely any calls to generating 50+ quality leads every month. The ROI is incredible.',
    rating: 5,
  },
  {
    id: '2',
    name: 'Sarah Martinez',
    business: 'Martinez HVAC Services',
    location: 'Phoenix, AZ',
    quote: 'I was skeptical at first, but Abdul delivered beyond expectations. Our AC repair business now gets 15-20 calls per week from Google Ads alone. Best investment we\'ve made.',
    rating: 5,
  },
  {
    id: '3',
    name: 'James Wilson',
    business: 'Wilson Electrical',
    location: 'Denver, CO',
    quote: 'The landing page Abdul created for us converts at 12%. Before, we were lucky to get 3%. He truly understands home service businesses.',
    rating: 5,
  },
];

export const caseStudies: CaseStudy[] = [
  {
    id: 'reynolds-plumbing',
    client: 'Reynolds Plumbing Co.',
    industry: 'Plumbing Services',
    location: 'Austin, TX',
    challenge: 'Struggling with high Google Ads costs and poor lead quality. Spending $4,000/month but only getting 8-10 calls, most of which were time-wasters.',
    solution: 'Complete rebuild of Google Ads account with new campaign structure, negative keyword strategy, and custom landing page focused on emergency plumbing services.',
    results: [
      'Reduced cost per lead by 62%',
      'Increased monthly leads from 10 to 52',
      'Landing page conversion rate: 12%',
      'Return on ad spend increased 3.5x',
    ],
    metrics: [
      { label: 'Cost Per Lead', value: '-62%' },
      { label: 'Monthly Leads', value: '52' },
      { label: 'Conversion Rate', value: '12%' },
      { label: 'ROAS Increase', value: '3.5x' },
    ],
    testimonial: testimonials[0],
  },
  {
    id: 'martinez-hvac',
    client: 'Martinez HVAC Services',
    industry: 'HVAC & Air Conditioning',
    location: 'Phoenix, AZ',
    challenge: 'New HVAC company trying to compete against established players. Limited budget, no digital marketing experience, and trying to build a customer base from scratch.',
    solution: 'Started with a focused Google Ads campaign targeting emergency AC repair. Developed trust-building landing page with service area focus and customer reviews.',
    results: [
      'First 30 days: 23 new customers',
      'Cost per acquisition under $45',
      '45% of customers become repeat clients',
      'Business expanded to 3 service trucks within 6 months',
    ],
    metrics: [
      { label: 'New Customers (30 days)', value: '23' },
      { label: 'CPA', value: '$45' },
      { label: 'Repeat Customers', value: '45%' },
      { label: 'Fleet Growth', value: '3 trucks' },
    ],
    testimonial: testimonials[1],
  },
];

export const faqs: FAQ[] = [
  {
    id: '1',
    question: 'How quickly will I see results from Google Ads?',
    answer: 'Most clients see initial results within 2-4 weeks. However, significant improvements typically occur after 60-90 days as we optimize campaigns based on real data. I provide weekly updates so you can track progress from day one.',
    category: 'Google Ads',
  },
  {
    id: '2',
    question: 'What is your minimum monthly budget for Google Ads?',
    answer: 'I recommend a minimum monthly ad spend of $1,500 for home service businesses to see meaningful results. This allows for proper testing and optimization. My management fee starts at $997/month and includes unlimited optimization and support.',
    category: 'Google Ads',
  },
  {
    id: '3',
    question: 'Do you sign long-term contracts?',
    answer: 'No long-term contracts required. I believe in earning your business through results. Most clients stay with me for years because they\'re seeing growth, not because they\'re locked in. You can cancel anytime with 30 days notice.',
    category: 'General',
  },
  {
    id: '4',
    question: 'What home service industries do you work with?',
    answer: 'I specialize exclusively in home service businesses including: plumbing, HVAC, electrical, roofing, landscaping, painting, flooring, pest control, cleaning services, locksmiths, swimming pool maintenance, and general contractors.',
    category: 'Services',
  },
  {
    id: '5',
    question: 'How do you track results?',
    answer: 'Every campaign includes conversion tracking setup for phone calls, form submissions, and in-store visits. You\'ll receive a monthly performance report breaking down leads generated, cost per lead, and revenue attributed to Google Ads.',
    category: 'Reporting',
  },
  {
    id: '6',
    question: 'What makes you different from other Google Ads agencies?',
    answer: 'I focus exclusively on home service businesses, so I understand the unique challenges you face. I don\'t use cookie-cutter approaches. Every campaign is built specifically for your business, goals, and market. Plus, you work directly with me, not a junior account manager.',
    category: 'General',
  },
  {
    id: '7',
    question: 'Can you help with existing Google Ads accounts?',
    answer: 'Absolutely! Many clients come to me after working with agencies that didn\'t deliver results. I start with a free audit of your current account to identify opportunities and problems. Most accounts can be significantly improved within the first month.',
    category: 'Google Ads',
  },
  {
    id: '8',
    question: 'Do you offer emergency or after-hours services?',
    answer: 'As a solo practitioner focused on quality over quantity, I maintain business hours Monday-Friday, 9am-6pm EST. However, I monitor campaigns for major issues 24/7 and respond to urgent concerns within 2 hours during business hours.',
    category: 'General',
  },
];

export const footer: Footer = {
  description: 'Helping home service businesses grow with strategic Google Ads management and conversion-optimized landing pages.',
  links: [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/#services' },
    { label: 'About', href: '/#about' },
    { label: 'Results', href: '/#results' },
    { label: 'Contact', href: '/#contact' },
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
  ],
  socialLinks: [
    { platform: 'LinkedIn', url: 'https://linkedin.com/in/hirekader', icon: 'linkedin' },
    { platform: 'Twitter', url: 'https://twitter.com/hirekader', icon: 'twitter' },
  ],
  contact: {
    email: 'abdul@hirekader.com',
    phone: '+1 (555) 123-4567',
    whatsapp: 'https://wa.me/15551234567',
  },
  copyright: `© ${new Date().getFullYear()} Abdul Kader. All rights reserved.`,
};
