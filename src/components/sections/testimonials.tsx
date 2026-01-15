import { useState } from 'react';

import { assetPath, cn } from '@/lib/utils';

interface Testimonial {
  id: number;
  quote: string;
  author: string;
  role: string;
  logo: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    quote:
      "Our users are individuals and families struggle to manage the chaos of fragmented health information for themselves and their loved ones - Fasten got us a huge step closer to bridging the information gap that erodes people's confidence engaging in their care.  I would recommend Fasten Health to anyone who desires to help people access their health records and to empower them to become first class citizens in their care.",
    author: 'Jill Michal',
    role: 'Founder, Kith+Kin',
    logo: '/images/logos/customers/kith+kin.svg',
  },
  {
    id: 2,
    quote:
      "Working with Fasten Health has been a great experience from the very start. Jason and his team made the onboarding process seamless, and their platform's developer experience is top-notch, allowing us to integrate quickly and efficiently.",
    author: 'Elliot Katz',
    role: 'Founder, Novellia',
    logo: '/images/logos/customers/novellia.png',
  },
  {
    id: 3,
    quote:
      "From a developer perspective, it's clear Fasten's a product built and designed for engineers. The quality and thoughtfulness shows through in both the documentation and integration. I also appreciate how responsive they are to issues and feature requests. It's great working with Fasten Health!",
    author: 'Greg Kuwaye',
    role: 'CTO, Nurra Health',
    logo: '/images/logos/customers/nurra-health.svg',
  },
];

export default function Testimonials() {
  const [activePage, setActivePage] = useState(0);
  const testimonialsPerPage = 3;
  const totalPages = Math.ceil(TESTIMONIALS.length / testimonialsPerPage);

  const paginatedTestimonials = TESTIMONIALS.slice(
    activePage * testimonialsPerPage,
    (activePage + 1) * testimonialsPerPage,
  );

  return (
    <section
      id="testimonials"
      className="relative w-full py-6 md:py-8 lg:py-10 px-4 sm:px-6 lg:px-8 overflow-hidden bg-elegant-gradient section-fade-bottom"
      aria-label="Customer Testimonials"
    >
      <div className="mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-8 md:mb-10">
          <div className="inline-flex items-center justify-center px-4 py-1.5 bg-primary/10 rounded-full mb-3">
            <span className="text-xs font-semibold tracking-wide text-primary">
              SUCCESS STORIES
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-5">
            What Our Customers Say
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Healthcare organizations are transforming patient care with Fasten Connect
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {paginatedTestimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>

        {totalPages > 1 && (
          <div className="mt-10 flex justify-center items-center gap-5">
            <button
              className="group p-3 rounded-full border border-foreground/10 hover:bg-foreground/5 hover:border-primary/20 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              onClick={() => setActivePage((prev) => Math.max(0, prev - 1))}
              disabled={activePage === 0}
              aria-label="Previous testimonials"
            >
              <svg
                className="w-5 h-5 text-foreground/70 group-hover:text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <div className="flex gap-3" role="tablist" aria-label="Testimonials pages">
              {Array.from({ length: totalPages }).map((_, index) => (
                <button
                  key={index}
                  className={cn(
                    'size-3 cursor-pointer rounded-full transition-all duration-300',
                    index === activePage
                      ? 'bg-primary scale-125'
                      : 'bg-foreground/20 hover:bg-foreground/40',
                  )}
                  onClick={() => setActivePage(index)}
                  aria-label={`Go to testimonials page ${index + 1}`}
                  aria-selected={index === activePage}
                  role="tab"
                />
              ))}
            </div>

            <button
              className="group p-3 rounded-full border border-foreground/10 hover:bg-foreground/5 hover:border-primary/20 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              onClick={() =>
                setActivePage((prev) => Math.min(totalPages - 1, prev + 1))
              }
              disabled={activePage === totalPages - 1}
              aria-label="Next testimonials"
            >
              <svg
                className="w-5 h-5 text-foreground/70 group-hover:text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="flex flex-col h-full rounded-3xl border border-foreground/5 bg-background/80 backdrop-blur-sm shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:translate-y-[-2px]">
      <div className="relative flex-grow p-4 md:p-6 flex flex-col justify-center">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/3 to-background/0 z-0"></div>

        <div className="mb-1 mt-0 text-primary/30 text-4xl font-serif relative z-10">
          &ldquo;
        </div>

        <blockquote className="font-serif text-lg md:text-xl leading-relaxed text-balance mb-2 relative z-10">
          {testimonial.quote.length > 180
            ? `${testimonial.quote.substring(0, 180)}...`
            : testimonial.quote}
        </blockquote>

        <div className="mt-auto border-t border-foreground/10 flex items-center gap-4 relative z-10 pt-2">
          <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center font-serif text-xl font-bold text-primary shadow-inner">
            {testimonial.author.charAt(0)}
          </div>

          <div className="flex-grow">
            <div className="flex flex-wrap items-center gap-2">
              <div>
                <cite className="text-base font-semibold not-italic">
                  {testimonial.author}
                </cite>
                <p className="text-muted-foreground text-sm font-medium">
                  {testimonial.role}
                </p>
              </div>
            </div>
          </div>

          {testimonial.logo && (
            <div className="relative h-8 w-16">
              <img
                src={assetPath(testimonial.logo)}
                alt={`${testimonial.author}'s company logo`}
                className="object-contain dark:invert h-full"
                aria-hidden="true"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
