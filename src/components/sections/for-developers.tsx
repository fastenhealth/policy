import { Calendar, ChevronRight, Terminal, Timer, Wallet } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { CopyButton } from '@/components/ui/copy-button';
import { CodeHighlight } from '@/components/ui/code-highlight';

const features = [
  {
    description: 'Dozens of EHRs supported out of the box.',
    icon: Timer,
    href: '/integrations',
  },
  {
    description: 'Comprehensive documentation and support.',
    icon: Wallet,
    href: 'https://docs.connect.fastenhealth.com',
  },
  {
    description: 'Free sandbox access for developers.',
    icon: Terminal,
    href: 'https://portal.connect.fastenhealth.com',
  },
  {
    description: 'FHIR R4 USCDIv1 compliant data model.',
    icon: Calendar,
    href: 'https://www.healthit.gov/isp/united-states-core-data-interoperability-uscdi',
  },
];

const embedSnippet = `<html>
<head>
    <link href="https://cdn.fastenhealth.com/connect/v3/fasten-stitch-element.css" rel="stylesheet">
    <script src="https://cdn.fastenhealth.com/connect/v3/fasten-stitch-element.js" type="module"></script>
</head>
<body>
    <fasten-stitch-element public-id="pub_live_123456324234234"></fasten-stitch-element>
</body>
</html>`;

export default function ForDevelopers() {
  return (
    <section
      id="for-developers"
      className="relative py-12 md:py-16 lg:py-20 px-8 sm:px-12 lg:px-16 overflow-hidden bg-subtle-warm bg-subtle-dots section-fade-bottom"
    >
      <div className="mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center justify-center px-4 py-1.5 bg-primary/10 rounded-full mb-3">
            <span className="text-xs font-semibold tracking-wide text-primary">
              FOR DEVELOPERS
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-5">Developer Friendly</h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            One Integration. One FHIR Standard. Limitless Use Cases.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="border rounded-xl p-6 bg-background hover:shadow-md transition-shadow border-foreground/5 hover:border-primary/20"
              >
                <feature.icon className="text-primary size-6 mb-4" />
                <p className="font-medium mb-4 text-sm leading-relaxed">
                  {feature.description}
                </p>
                <a
                  href={feature.href}
                  className="inline-flex items-center text-primary font-medium text-xs group"
                >
                  Learn more
                  <ChevronRight className="ml-1 size-3 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            ))}
          </div>

          <div className="rounded-xl overflow-hidden border shadow-lg bg-slate-900">
            <div className="bg-slate-800 p-3 border-b border-slate-700 flex items-center justify-between">
              <p className="text-sm font-mono text-slate-300">
                fasten-connect-example.js
              </p>
              <CopyButton
                textToCopy={embedSnippet}
                className="bg-slate-700 hover:bg-slate-600 text-slate-200 text-xs py-1 px-2 rounded flex items-center"
              />
            </div>
            <div className="p-6 md:p-8 overflow-auto">
              <CodeHighlight code={embedSnippet} language="html" />
            </div>
          </div>
        </div>

        <div className="text-center mt-12 md:mt-16">
          <Button
            className="rounded-full bg-primary hover:bg-primary/90 text-white shadow-md shadow-primary/20"
            size="lg"
            asChild
          >
            <a href="https://docs.connect.fastenhealth.com">
              <Terminal className="mr-2 size-4" />
              View API Documentation
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
