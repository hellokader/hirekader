import { Metadata } from 'next';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://hirekader.com';

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': `${siteUrl}/#person`,
      name: 'Abdul Kader',
      jobTitle: 'Google Ads Specialist',
      description: 'Expert Google Ads management for home service businesses including plumbing, HVAC, electrical, and more.',
      url: siteUrl,
      sameAs: [
        'https://linkedin.com/in/hirekader',
        'https://twitter.com/hirekader',
      ],
      knowsAbout: [
        'Google Ads',
        'Lead Generation',
        'Home Service Marketing',
        'Conversion Optimization',
        'Digital Marketing',
      ],
    },
    {
      '@type': 'ProfessionalService',
      '@id': `${siteUrl}/#professionalservice`,
      name: 'Abdul Kader - Google Ads for Home Service Businesses',
      image: `${siteUrl}/og-image.png`,
      url: siteUrl,
      telephone: '+15551234567',
      email: 'abdul@hirekader.com',
      priceRange: '$$',
      serviceType: 'Google Ads Management',
      areaServed: 'United States',
      availableLanguage: 'English',
      founder: { '@id': `${siteUrl}/#person` },
    },
    {
      '@type': 'WebSite',
      '@id': `${siteUrl}/#website`,
      url: siteUrl,
      name: 'Abdul Kader - Google Ads for Home Service Businesses',
      publisher: { '@id': `${siteUrl}/#person` },
      description: 'Expert Google Ads management for home service businesses. Generate more leads and grow your business.',
      inLanguage: 'en-US',
    },
    {
      '@type': 'Service',
      name: 'Google Ads Management',
      description: 'Full-service Google Ads management for home service businesses.',
      provider: { '@id': `${siteUrl}/#person` },
      serviceType: 'Google Ads Management',
      areaServed: 'United States',
    },
    {
      '@type': 'Service',
      name: 'Landing Page Design',
      description: 'High-converting landing pages for home service businesses.',
      provider: { '@id': `${siteUrl}/#person` },
      serviceType: 'Web Design',
      areaServed: 'United States',
    },
    {
      '@type': 'Service',
      name: 'Lead Generation',
      description: 'Build a steady stream of high-quality leads for your home service business.',
      provider: { '@id': `${siteUrl}/#person` },
      serviceType: 'Lead Generation',
      areaServed: 'United States',
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${siteUrl}/#breadcrumb`,
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: siteUrl,
        },
      ],
    },
  ],
};

export function StructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
