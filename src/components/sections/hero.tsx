import { ArrowRight, FileText } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { assetPath } from '@/lib/utils';

export default function Hero() {
  return (
    <section className="pattern-bg relative w-full overflow-hidden px-8 pt-4 pb-0 sm:px-12 md:pt-8 md:pb-0 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 items-center gap-8 md:gap-12 lg:grid-cols-12">
          <div className="text-center lg:col-span-7 lg:text-left">
            <h3 className="mini-title mb-3 text-primary/90 font-semibold tracking-wide">
              HEALTHCARE DATA SIMPLIFIED
            </h3>
            <h1 className="text-4xl font-bold tracking-tight text-pretty sm:text-5xl lg:text-6xl max-w-[35ch]">
              Unlock Patient Data in <span className="text-primary">Minutes</span>, Not Months
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground lg:text-xl max-w-[40ch] mx-auto lg:mx-0">
              Deliver faster, more personalized care with real-time access to clinical data from
              50,000+ healthcare systems. No faxes, no contracts, no friction.
            </p>

            <div className="mt-8 md:mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <Button size="pill-full" className="sm:size-pill-lg" asChild>
                <a
                  href="https://calendly.com/jason-kulatunga/30min"
                  target="_blank"
                  rel="noreferrer"
                >
                  Book a Demo
                  <ArrowRight className="ml-2 size-4" />
                </a>
              </Button>
              <Button
                size="pill-full"
                variant="outline"
                className="sm:size-pill-lg"
                asChild
              >
                <a
                  href="https://docs.connect.fastenhealth.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FileText className="mr-2 size-4" />
                  View Documentation
                </a>
              </Button>
            </div>
          </div>

          <div className="relative order-first flex items-center justify-center lg:order-none lg:col-span-5 lg:justify-end">
            <div className="bg-card text-card-foreground col-span-1 cursor-pointer overflow-hidden rounded-xl border border-foreground/5 shadow-sm transition-all duration-300 hover:border-primary/20 hover:shadow-2xl md:col-span-3 aspect-video w-full max-h-[400px]">
              <video className="h-full w-full object-cover" controls preload="metadata">
                <source src={assetPath('media/Fasten-Widget-5.26.25.mp4')} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
