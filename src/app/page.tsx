import { Link } from 'react-router-dom';

import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <section className="bg-subtle-gray relative w-full overflow-hidden px-8 py-16 sm:px-12 md:py-20 lg:px-16">
      <div className="mx-auto max-w-4xl text-center">
        <div className="mb-4 inline-flex items-center justify-center rounded-full bg-primary/10 px-4 py-1.5">
          <span className="text-xs font-semibold tracking-wide text-primary">
            FASTEN HEALTH POLICIES
          </span>
        </div>
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
          Legal & Privacy
        </h1>
        <p className="text-muted-foreground mt-4 text-lg leading-relaxed">
          Read the policies and terms that govern Fasten Health.
        </p>

        <div className="mt-10 grid gap-4 text-left">
          <Link to="/privacy_policy.html" className="block">
            <div className="border-foreground/5 hover:border-primary/20 rounded-2xl border bg-background px-6 py-5 transition-all hover:shadow-md">
              <h2 className="text-lg font-semibold">Privacy Policy</h2>
              <p className="text-muted-foreground mt-2 text-sm">
                How Fasten Health collects, uses, and protects your information.
              </p>
            </div>
          </Link>
          <Link to="/terms.html" className="block">
            <div className="border-foreground/5 hover:border-primary/20 rounded-2xl border bg-background px-6 py-5 transition-all hover:shadow-md">
              <h2 className="text-lg font-semibold">Terms and Conditions</h2>
              <p className="text-muted-foreground mt-2 text-sm">
                The terms that apply when using Fasten Health software and services.
              </p>
            </div>
          </Link>
        </div>

        <div className="mt-10 flex justify-center">
          <Button size="pill" asChild>
            <a href="https://www.fastenhealth.com" target="_blank" rel="noreferrer">
              Visit fastenhealth.com
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
