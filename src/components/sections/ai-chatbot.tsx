import { Link } from 'react-router-dom';

import { ChevronRight, Timer, Wallet, Terminal, Calendar } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from '@/components/ui/card';

const features = [
  {
    description: 'Faster than Wire, and more affordable, too.',
    icon: Timer,
    href: '/pricing',
  },
  {
    description: 'Send or request funds. FedNow does both.',
    icon: Wallet,
    href: '/pricing',
  },
  {
    description: 'API request to creation in seven minutes.',
    icon: Terminal,
    href: '/pricing',
  },
  {
    description: 'Settle any time, any day. What Bank holiday?',
    icon: Calendar,
    href: '/pricing',
  },
];

export default function AIChatbot() {
  return (
    <section id="ai-chatbot" className="relative py-16 md:py-28 lg:py-32">
      <div className="container max-w-5xl">
        <div className="text-center">
          <h3 className="mini-title">MORE COMPUTER FUGAZI</h3>

          <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl lg:text-6xl">
            And we have an AI chatbot
          </h2>
          <p className="text-muted-foreground mt-3 text-xl font-medium md:text-2xl">
            {`We're betting on agents replacing our staff next year.`}
          </p>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-2.5 md:mt-12 lg:mt-20 lg:grid-cols-4 lg:gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader className="max-md:p-3">
                <feature.icon className="text-primary size-8" />
                <CardDescription className="text-foreground mt-4 font-medium">
                  {feature.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="mt-auto max-md:p-3">
                <Button
                  variant="outline"
                  asChild
                  className="border-border group w-[min(100%,300px)]"
                >
                  <Link to={feature.href}>
                    Learn more
                    <span className="sr-only">
                      {' '}
                      about {feature.description.toLowerCase()}
                    </span>
                    <ChevronRight className="ml-1 size-4 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
