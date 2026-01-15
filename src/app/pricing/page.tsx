import Logos from '@/components/sections/logos';
import PricingCards from '@/components/sections/pricing-cards';
import PricingTable from '@/components/sections/pricing-table';

export type PricingTier = {
  name: string;
  price: string;
  description: string;
  features: string[];
  cta: {
    text: string;
    href: string;
  };
};

const PRICING_TIERS: PricingTier[] = [
  {
    name: 'STARTER',
    price: '$0',
    description: 'Free for everyone',
    features: ['Unlimited members', '250 transactions', 'No support'],
    cta: {
      text: 'Start for free',
      href: '/signup',
    },
  },
  {
    name: 'BASIC',
    price: '$29.99',
    description: 'per user per month',
    features: [
      'All free plan features and...',
      'Mainline AI',
      'Unlimited teams',
    ],
    cta: {
      text: '7 days free',
      href: '/signup',
    },
  },
  {
    name: 'ENTERPRISE',
    price: '$ENT',
    description: 'Custom pricing',
    features: [
      'All basic plan features and...',
      'Advanced security controls',
      'Migration support',
    ],
    cta: {
      text: 'Book a demo',
      href: '/contact',
    },
  },
];

export default function PricingPage() {
  return (
    <section>
      {/* Pricing tiers */}
      <PricingCards items={PRICING_TIERS} />

      <Logos />
      <PricingTable />
    </section>
  );
}
