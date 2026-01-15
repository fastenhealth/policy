import { useState } from 'react';

import { Check, ChevronsUpDown } from 'lucide-react';

import { Button } from '../ui/button';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '../ui/collapsible';

import { cn } from '@/lib/utils';

type PlanType = 'standard' | 'professional' | 'enterprise';

interface Plan {
  name: string;
  type: PlanType;
  button: {
    text: string;
    variant: 'outline';
    href: string;
  };
  features: {
    [Category in 'usage' | 'features' | 'support']: {
      name: string;
      value: string | boolean;
    }[];
  };
}

const plans: Plan[] = [
  {
    name: 'Standard',
    type: 'standard',
    button: {
      text: 'Book a demo',
      variant: 'outline',
      href: 'https://calendly.com/jason-kulatunga/30min',
    },
    features: {
      usage: [
        { name: 'Members', value: 'Unlimited' },
        { name: 'Transactions', value: 'Unlimited' },
        { name: 'Teams', value: 'Unlimited' },
      ],
      features: [
        { name: 'Reporting', value: true },
        { name: 'Analytics', value: true },
        { name: 'Import and export', value: true },
        { name: 'Integrations', value: true },
        { name: 'Mainline AI', value: true },
        { name: 'Admin roles', value: true },
        { name: 'Audit log', value: true },
      ],
      support: [
        { name: 'Priority Support', value: true },
        { name: 'Account Manager', value: false },
        { name: 'Uptime SLA', value: false },
      ],
    },
  },
  {
    name: 'Professional',
    type: 'professional',
    button: {
      text: 'Book a demo',
      variant: 'outline',
      href: 'https://calendly.com/jason-kulatunga/30min',
    },
    features: {
      usage: [
        { name: 'Members', value: 'Unlimited' },
        { name: 'Transactions', value: 'Unlimited' },
        { name: 'Teams', value: 'Unlimited' },
      ],
      features: [
        { name: 'Reporting', value: true },
        { name: 'Analytics', value: true },
        { name: 'Import and export', value: true },
        { name: 'Integrations', value: true },
        { name: 'Mainline AI', value: true },
        { name: 'Admin roles', value: true },
        { name: 'Audit log', value: true },
      ],
      support: [
        { name: 'Priority Support', value: true },
        { name: 'Account Manager', value: true },
        { name: 'Uptime SLA', value: false },
      ],
    },
  },
  {
    name: 'Enterprise',
    type: 'enterprise',
    button: {
      text: 'Book a demo',
      variant: 'outline',
      href: 'https://calendly.com/jason-kulatunga/30min',
    },
    features: {
      usage: [
        { name: 'Members', value: 'Unlimited' },
        { name: 'Transactions', value: 'Unlimited' },
        { name: 'Teams', value: 'Unlimited' },
      ],
      features: [
        { name: 'Reporting', value: true },
        { name: 'Analytics', value: true },
        { name: 'Import and export', value: true },
        { name: 'Integrations', value: true },
        { name: 'Mainline AI', value: true },
        { name: 'Admin roles', value: true },
        { name: 'Audit log', value: true },
      ],
      support: [
        { name: 'Priority Support', value: true },
        { name: 'Account Manager', value: true },
        { name: 'Uptime SLA', value: true },
      ],
    },
  },
];

export default function PricingTable() {
  const [selectedPlan, setSelectedPlan] = useState(1);

  return (
    <section className="py-28 lg:py-32">
      <div className="container font-medium">
        <MobilePricingTable
          selectedPlan={selectedPlan}
          onPlanChange={setSelectedPlan}
        />
        <DesktopPricingTable />
      </div>
    </section>
  );
}

const MobilePricingTable = ({
  selectedPlan,
  onPlanChange,
}: {
  selectedPlan: number;
  onPlanChange: (index: number) => void;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const plan = plans[selectedPlan];

  return (
    <div className="md:hidden">
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <div className="flex items-center justify-between border-b py-4">
          <CollapsibleTrigger className="flex items-center gap-2">
            <h3 className="text-2xl font-semibold">{plan.name}</h3>
            <ChevronsUpDown
              className={`size-5 transition-transform ${isOpen ? 'rotate-180' : ''}`}
            />
          </CollapsibleTrigger>
          <Button variant={plan.button.variant} className="w-fit">
            {plan.button.text}
          </Button>
        </div>
        <CollapsibleContent className="flex flex-col space-y-2 p-2">
          {plans.map(
            (p, index) =>
              index !== selectedPlan && (
                <Button
                  size="lg"
                  variant="secondary"
                  key={index}
                  onClick={() => {
                    onPlanChange(index);
                    setIsOpen(false);
                  }}
                >
                  {p.name}
                </Button>
              ),
          )}
        </CollapsibleContent>
      </Collapsible>

      <div className="mt-8">
        {Object.entries(plan.features).map(
          ([category, features], sectionIndex) => (
            <div key={sectionIndex} className="mb-8 space-y-2">
              <h3 className="mb-4 text-lg font-semibold capitalize">
                {category}
              </h3>
              {features.map((feature, featureIndex) => (
                <div
                  key={featureIndex}
                  className="grid grid-cols-2 items-center gap-8"
                >
                  <span className="border-b py-2">{feature.name}</span>
                  <div className="flex items-center gap-1 border-b py-2">
                    {typeof feature.value === 'boolean' ? (
                      feature.value ? (
                        <Check className="size-5" />
                      ) : (
                        <span className="size-5" />
                      )
                    ) : (
                      <div className="flex items-center gap-1">
                        <Check className="size-5" />
                        <span>{feature.value}</span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ),
        )}
      </div>
    </div>
  );
};

const DesktopPricingTable = () => {
  return (
    <div className="hidden md:grid md:grid-cols-4">
      <FeaturesColumn />
      {plans.map((plan, index) => (
        <PricingColumn
          key={plan.name}
          plan={plan}
          isHighlighted={index === 1}
        />
      ))}
    </div>
  );
};

const FeaturesColumn = () => (
  <div>
    <div className="h-[140px]" />
    {Object.entries(plans[0].features).map(([category, features], index) => (
      <div key={index}>
        <h3 className="flex h-20 items-center text-lg font-semibold capitalize">
          {category}
        </h3>
        {features.map((feature, featureIndex) => (
          <div key={featureIndex} className="py-4">
            {feature.name}
          </div>
        ))}
      </div>
    ))}
  </div>
);

const PricingColumn = ({
  plan,
  isHighlighted,
}: {
  plan: Plan;
  isHighlighted: boolean;
}) => {
  const columnClass = cn('px-6', isHighlighted && 'bg-card border rounded-xl');

  return (
    <div className={columnClass}>
      <div className="py-8">
        <h3 className="mb-3 text-2xl font-semibold">{plan.name}</h3>
        <Button variant={plan.button.variant} asChild>
          <a href={plan.button.href}>{plan.button.text}</a>
        </Button>
      </div>

      {Object.entries(plan.features).map(([, features], sectionIndex) => (
        <div key={sectionIndex}>
          <div className="flex h-20 items-center"></div>
          {features.map((feature, featureIndex) => (
            <div
              key={featureIndex}
              className="flex items-center gap-1 border-b py-4"
            >
              {typeof feature.value === 'boolean' ? (
                feature.value ? (
                  <Check className="size-5" />
                ) : (
                  <span className="size-5" />
                )
              ) : (
                <div className="flex items-center gap-1">
                  <Check className="size-4" />
                  <span>{feature.value}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
