import Image from 'next/image';

export function About() {
  return (
    <section id="about" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-square rounded-3xl bg-gradient-to-br from-primary-100 to-primary-200 overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-8xl lg:text-9xl font-bold text-primary-500/20 font-heading">AK</div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-xl border border-gray-100">
              <div className="text-3xl font-bold text-primary-500">7+</div>
              <div className="text-sm text-gray-600">Years Experience</div>
            </div>
          </div>

          {/* Content */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              I Help Home Service Businesses{' '}
              <span className="text-primary-500">Grow Through Smart Advertising</span>
            </h2>

            <div className="space-y-4 text-gray-600">
              <p>
                I&apos;m Abdul Kader, a Google Ads specialist focused exclusively on home service businesses.
                After years of managing campaigns for agencies, I noticed that home service professionals
                were being underserved — generic strategies, cookie-cutter campaigns, and little understanding
                of their unique challenges.
              </p>
              <p>
                That&apos;s why I built my practice around this specific niche. I understand the seasonal
                demand, the importance of local visibility, and what motivates homeowners to choose one
                service provider over another.
              </p>
              <p>
                Every campaign I create is tailored to your specific market, service area, and business goals.
                No junior account managers, no automated systems — you work directly with me.
              </p>
            </div>

            {/* Key Points */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary-50 flex items-center justify-center">
                  <svg className="w-5 h-5 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-sm font-medium text-gray-700">100+ Clients Served</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary-50 flex items-center justify-center">
                  <svg className="w-5 h-5 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-sm font-medium text-gray-700">$2M+ Ad Spend Managed</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary-50 flex items-center justify-center">
                  <svg className="w-5 h-5 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-sm font-medium text-gray-700">Google Certified</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary-50 flex items-center justify-center">
                  <svg className="w-5 h-5 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-sm font-medium text-gray-700">No Long-Term Contracts</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
