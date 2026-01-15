import { Check, ChevronRight } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { assetPath } from '@/lib/utils';

export default function LaunchPricing() {
  return (
    <section
      id="launch-today"
      className="bg-subtle-secondary text-background w-full overflow-hidden py-12 md:py-16 lg:py-20"
    >
      <div className="mx-auto max-w-7xl relative z-10 px-8 sm:px-12 lg:px-16">
        <div className="relative overflow-hidden rounded-3xl border border-primary-700/30 bg-primary-900 px-8 py-12 shadow-xl md:p-12 lg:p-16">
          <div className="md:flex md:items-center md:justify-between md:gap-12 lg:gap-16">
            <div className="md:w-7/12 lg:w-2/3">
              <div className="mb-6 inline-flex items-center rounded-full bg-background/10 px-4 py-1.5">
                <span className="text-xs font-semibold tracking-wide text-background">
                  ENTERPRISE SOLUTIONS
                </span>
              </div>

              <h2 className="text-background text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
                Enterprise-Grade <span>Solutions</span> for Healthcare
              </h2>

              <p className="text-background/90 mt-6 max-w-2xl text-lg font-medium leading-relaxed md:text-xl">
                Tailored for organizations that demand scalability and security. Our API provides access to patient records from 50,000+ healthcare systems with a single integration.
              </p>

              <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
                {[
                  {
                    title: 'No EHR contracts',
                    description: 'Connect without paperwork',
                  },
                  {
                    title: 'HIPAA-compliant',
                    description: 'Enterprise-grade security',
                  },
                  {
                    title: 'Free developer sandbox',
                    description: 'Test without commitment',
                  },
                  {
                    title: '24/7 support',
                    description: 'Live chat and email',
                  },
                ].map((feature) => (
                  <div key={feature.title} className="flex items-start gap-3">
                    <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-background/20">
                      <Check className="size-4 text-background" />
                    </div>
                    <div>
                      <p className="font-semibold text-background">
                        {feature.title}
                      </p>
                      <p className="text-background/70 text-sm">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 flex flex-wrap items-center gap-6">
                <a
                  href="https://www.hhs.gov/hipaa/index.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-background/10 border-background/20 hover:bg-background/30 rounded-xl border-2 px-6 py-4 transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center gap-4"
                >
                  <img
                    src={assetPath('images/logos/accountable-seal.webp')}
                    alt="HIPAA Compliant"
                    className="h-16 w-auto"
                  />
                  <div className="text-background">
                    <p className="text-lg font-bold">HIPAA Compliant</p>
                    <p className="text-background/80 text-sm">
                      Protected Health Information
                    </p>
                  </div>
                </a>
                <a
                  href="https://www.carinalliance.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-background/10 border-background/20 hover:bg-background/30 rounded-xl border-2 px-6 py-4 transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center gap-4"
                >
                  <img
                    src={assetPath('images/logos/carin.svg')}
                    alt="Carin Alliance"
                    className="h-16 w-auto"
                  />
                  <div className="text-background">
                    <p className="text-lg font-bold">Carin Alliance</p>
                    <p className="text-background/80 text-sm">
                      Code of Conduct Signatory
                    </p>
                  </div>
                </a>
              </div>
            </div>

            <div className="mt-10 md:mt-0 md:w-5/12 lg:w-1/3">
              <div className="bg-background/10 border-background/20 rounded-2xl border p-6 shadow-xl backdrop-blur-sm">
                <div>
                  <p className="text-background/80 text-sm font-semibold uppercase tracking-wider">
                    Enterprise Solution
                  </p>
                  <div className="mt-2">
                    <h3 className="text-background text-4xl font-bold md:text-5xl">
                      Custom
                    </h3>
                    <p className="text-background/70 mt-1 text-lg font-medium">
                      Tailored to your needs
                    </p>
                  </div>
                </div>

                <div className="mt-6 border-t border-background/20 pt-6">
                  <p className="text-background/80 mb-4 text-sm font-medium">
                    Enterprise features include:
                  </p>
                  <ul className="space-y-3 text-sm">
                    {[
                      'Advanced security controls',
                      'Dedicated account manager',
                      'Custom SLAs',
                      'White-glove onboarding',
                      'Custom implementation',
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <Check className="size-4 text-background/90" />
                        <span className="text-background/90">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 space-y-4">
                  <Button
                    size="lg"
                    variant="secondary"
                    className="group w-full rounded-full bg-background text-base font-semibold text-primary-900 shadow-lg hover:bg-background/90"
                    asChild
                  >
                    <a href="https://calendly.com/jason-kulatunga/30min">
                      Book a demo
                      <ChevronRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
                    </a>
                  </Button>

                  <Button
                    size="lg"
                    className="group w-full rounded-full border-2 border-background bg-transparent text-base font-medium hover:bg-background/10"
                    asChild
                  >
                    <a href="https://calendly.com/jason-kulatunga/30min">
                      Contact sales
                      <ChevronRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
                    </a>
                  </Button>
                </div>

                <p className="text-background/60 mt-4 text-center text-xs">
                  Schedule a personalized demo with our team
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
