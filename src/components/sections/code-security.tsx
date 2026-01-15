import { useState } from 'react';

import { PlusSigns } from '../icons/plus-signs';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { assetPath } from '@/lib/utils';

const FEATURES = [
  {
    id: 'move-money',
    title: 'Move and hold money',
    description:
      'Previously, emerging financial companies were forced to navigate costly middleware solutions that connected them to outdated sponsor bank systems.',
    image: '/images/homepage/code-snippet.webp',
  },
  {
    id: 'card-program',
    title: 'Build a modern card program',
    description:
      'Create and manage virtual and physical cards with complete control over spending limits, merchant categories, and real-time transaction monitoring.',
    image: '/images/homepage/code-snippet.webp',
  },
  {
    id: 'lend-money',
    title: 'Lend money',
    description:
      'Offer various lending products through our platform with automated underwriting, loan servicing, and compliance management.',
    image: '/images/homepage/code-snippet.webp',
  },
];

export default function CodeSecurity() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <section
      id="code-security"
      className="container max-w-5xl py-16 md:py-28 lg:py-32"
    >
      <div className="from-primary-gradient/20 relative overflow-hidden rounded-3xl border bg-linear-to-bl to-transparent py-5 md:py-6 lg:py-8">
        <div className="absolute inset-0 z-[-1]">
          <PlusSigns className="text-foreground/[0.05] h-full w-full" />
        </div>
        <div className="md:px-6 lg:px-8">
          <div className="max-md:px-5">
            <h3 className="mini-title">WHY CHARTER?</h3>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl lg:text-5xl">
              Code security
            </h2>
          </div>
          <div className="mt-10 flex gap-12 overflow-hidden max-md:flex-col md:mt-16 lg:mt-20">
            <Accordion
              type="single"
              className="flex-1"
              defaultValue="0"
              onValueChange={(value) => setSelectedIndex(Number(value))}
            >
              {FEATURES.map((feature, index) => (
                <AccordionItem
                  key={feature.id}
                  value={index.toString()}
                  className="border-border/30 last:border-none"
                >
                  <AccordionTrigger className="hover:no-underline max-md:px-5">
                    <h3 className="text-input font-inter text-xl font-bold">
                      {feature.title}
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent className="">
                    <p className="text-muted-foreground leading-relaxed font-medium max-md:px-5">
                      {feature.description}
                    </p>
                    <div className="relative mt-4 h-[280px] translate-x-5 md:hidden">
                      <img
                        src={assetPath(feature.image)}
                        alt={feature.title}
                        className="absolute inset-0 h-full w-full rounded-2xl object-cover object-left-top shadow-xl"
                        loading="lazy"
                      />
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            <div className="relative h-[240px] max-md:hidden max-md:translate-x-6 md:flex-1">
              <img
                src={assetPath(FEATURES[selectedIndex].image)}
                alt={FEATURES[selectedIndex].title}
                className="absolute inset-0 h-full w-full rounded-2xl object-cover object-left-top shadow-xl"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
