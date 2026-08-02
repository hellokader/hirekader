import Link from 'next/link';

export function Hero() {
  return (
    <section className="relative pt-20 lg:pt-24 min-h-screen flex items-center bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="text-center lg:text-left animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 text-primary-600 rounded-full text-sm font-medium mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
              </span>
              Google Ads Expert for Home Service Businesses
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Generate More{' '}
              <span className="text-primary-500">High-Quality Leads</span>{' '}
              with Google Ads
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0">
              I help plumbers, HVAC technicians, electricians, and other home service professionals
              attract more customers through strategic Google Ads campaigns that actually convert.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-primary-500 rounded-xl hover:bg-primary-600 transition-all hover:shadow-lg hover:-translate-y-0.5"
              >
                Get Your Free Google Ads Audit
                <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="#results"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-gray-700 bg-white border-2 border-gray-200 rounded-xl hover:border-gray-300 hover:bg-gray-50 transition-all"
              >
                See Case Studies
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="mt-12 pt-8 border-t border-gray-100">
              <div className="grid grid-cols-3 gap-8">
                <div className="text-center lg:text-left">
                  <div className="text-3xl font-bold text-gray-900">100+</div>
                  <div className="text-sm text-gray-500">Home Services Managed</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-3xl font-bold text-gray-900">$2M+</div>
                  <div className="text-sm text-gray-500">Ad Spend Managed</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-3xl font-bold text-gray-900">62%</div>
                  <div className="text-sm text-gray-500">Avg. Cost Per Lead Reduction</div>
                </div>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative animate-scale-in">
            <div className="relative z-10">
              <div className="bg-gradient-to-br from-primary-500 to-primary-700 rounded-3xl p-8 lg:p-12 shadow-2xl">
                <div className="text-center text-white">
                  <div className="text-6xl lg:text-8xl font-bold font-heading mb-4">HK</div>
                  <div className="text-xl font-medium opacity-90">Google Ads Expert</div>
                  <div className="mt-2 opacity-75">Home Service Specialist</div>
                </div>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary-200 rounded-full opacity-50 blur-2xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary-300 rounded-full opacity-40 blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
