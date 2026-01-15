import React, { useState } from 'react';

import { ArrowRight } from 'lucide-react';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { assetPath } from '@/lib/utils';

const FEATURES = [
  {
    id: 'clinical-research',
    title: 'For Clinical Research Orgs',
    description:
      'Eliminate delays in trial recruitment by enabling patients to instantly share verified EHR and claims data. Fasten Connect removes the need for manual collection, faxing, or BAAs.',
    image: '/images/homepage/for-customer-type/instant-access-clinical-research.png',
  },
  {
    id: 'patient-recruitment',
    title: 'For Patient Recruitment Agencies',
    description:
      'Speed up screening workflows by giving patients a single button to share their full medical history across 50,000+ health systems -- directly into your intake forms.',
    image: '/images/homepage/for-customer-type/instant-access-patient-recruitment.png',
  },
  {
    id: 'digital-health',
    title: 'For Digital Health Startups',
    description:
      'Launch with rich, structured medical records data without the overhead of EHR contracts or provider credentials.',
    image: '/images/homepage/for-customer-type/instant-access-digital-health.png',
  },
  {
    id: 'global-concierge',
    title: 'For Healthspan & Concierge Services',
    description:
      'Centralize care for traveling clients and expats by aggregating records across US systems into a single longitudinal view -- without needing to chase down every provider.',
    image: '/images/homepage/for-customer-type/instant-access-healthspan.png',
  },
  {
    id: 'ai-pharma',
    title: 'For AI and Pharma Companies',
    description:
      'Unlock high-quality, real-world data from the source, directly from the patient. Build models and pipelines without violating HIPAA or requiring provider relationships.',
    image: '/images/homepage/for-customer-type/instant-access-pharma.png',
  },
];

export default function ForCustomerTypeAccordian() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <section
      id="for-customers"
      className="w-full py-8 md:py-10 lg:py-12 px-8 sm:px-12 lg:px-16 bg-elegant-gradient"
    >
      <div className="mx-auto max-w-5xl">
        <div className="text-center mb-6 md:mb-8">
          <div className="inline-flex items-center justify-center px-4 py-1.5 bg-primary/10 rounded-full mb-3">
            <span className="text-xs font-semibold tracking-wide text-primary">
              PERFECT FOR YOUR ORGANIZATION
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-5">
            Instant Access to Patient Data
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Choose Fasten Connect to accelerate your healthcare initiatives
          </p>
        </div>

        <div className="overflow-hidden rounded-2xl border bg-background shadow-lg">
          <div className="p-8 md:p-10">
            <div className="flex gap-8 overflow-hidden max-md:flex-col">
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
                    className="border-b border-border/30 last:border-none"
                  >
                    <AccordionTrigger
                      className={`hover:no-underline p-4 ${
                        selectedIndex === index ? 'text-primary font-bold' : ''
                      }`}
                    >
                      <h3 className="text-lg font-medium text-left">
                        {feature.title}
                      </h3>
                    </AccordionTrigger>

                    <AccordionContent className="px-1 pb-5 text-muted-foreground">
                      <p className="text-base leading-relaxed">
                        {feature.description}
                      </p>

                      <div className="relative mt-4 h-[160px] w-full md:hidden rounded overflow-hidden">
                        <img
                          src={assetPath(feature.image)}
                          alt={feature.title}
                          className="object-cover object-left-top h-full"
                        />
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>

              <div className="relative h-[300px] max-md:hidden md:w-[40%] rounded-xl overflow-hidden">
                <img
                  src={assetPath(FEATURES[selectedIndex].image)}
                  alt={FEATURES[selectedIndex].title}
                  className="object-cover object-left-top h-full"
                />
              </div>
            </div>

            <div className="mt-10 flex justify-center">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white rounded-full shadow-md shadow-primary/20"
                asChild
              >
                <a href="https://calendly.com/jason-kulatunga/30min">
                  Book a Demo
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
