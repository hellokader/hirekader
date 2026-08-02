import { caseStudies } from '@/data/content';

export function Results() {
  return (
    <section id="results" className="py-16 lg:py-24 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Real Results for Real Home Service Businesses
          </h2>
          <p className="text-lg text-gray-400">
            See how I&apos;ve helped plumbing, HVAC, and electrical companies transform their Google Ads performance.
          </p>
        </div>

        {/* Case Studies */}
        <div className="space-y-8 lg:space-y-12">
          {caseStudies.map((study, index) => (
            <div
              key={study.id}
              className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Content */}
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary-500/20 text-primary-400 rounded-full text-sm font-medium mb-4">
                  {study.industry}
                </div>
                <h3 className="text-2xl font-bold mb-2">{study.client}</h3>
                <p className="text-gray-400 text-sm mb-4">{study.location}</p>

                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-1">Challenge</h4>
                    <p className="text-gray-400">{study.challenge}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-1">Solution</h4>
                    <p className="text-gray-400">{study.solution}</p>
                  </div>
                </div>

                {/* Testimonial */}
                {study.testimonial && (
                  <blockquote className="bg-gray-800/50 rounded-xl p-4 border-l-4 border-primary-500">
                    <p className="text-gray-300 italic mb-2">&ldquo;{study.testimonial.quote}&rdquo;</p>
                    <cite className="text-sm text-gray-500 not-italic">
                      — {study.testimonial.name}, {study.testimonial.business}
                    </cite>
                  </blockquote>
                )}
              </div>

              {/* Metrics */}
              <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                <div className="grid grid-cols-2 gap-4">
                  {study.metrics.map((metric, idx) => (
                    <div
                      key={idx}
                      className="bg-gray-800/50 rounded-xl p-6 text-center"
                    >
                      <div className="text-3xl lg:text-4xl font-bold text-primary-400 mb-1">
                        {metric.value}
                      </div>
                      <div className="text-sm text-gray-400">{metric.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 lg:mt-16 text-center">
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-primary-500 rounded-xl hover:bg-primary-600 transition-colors"
          >
            Get Your Custom Strategy
            <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
