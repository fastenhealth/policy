import { Link } from 'react-router-dom';

import { assetPath } from '@/lib/utils';

const policyLinks = [
  { name: 'Privacy Policy', href: '/privacy_policy.html' },
  { name: 'Terms and Conditions', href: '/terms.html' },
];

const logo = {
  url: 'https://www.fastenhealth.com',
  src: assetPath('images/logos/banner-trimmed-2.png'),
  alt: 'Fasten',
  title: 'Fasten Health',
};

type FooterLinkProps = {
  href: string;
  children: React.ReactNode;
};

const FooterLink = ({ href, children }: FooterLinkProps) => {
  if (href.startsWith('http')) {
    return (
      <a href={href} target="_blank" rel="noreferrer">
        {children}
      </a>
    );
  }

  return <Link to={href}>{children}</Link>;
};

export default function Footer() {
  return (
    <section className="px-8 py-16 sm:px-12 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="flex w-full flex-col items-center justify-between gap-10 text-center lg:flex-row lg:items-center lg:text-left">
          <div className="flex w-full flex-col items-center gap-4 lg:items-start">
            <a href={logo.url} target="_blank" rel="noreferrer">
              <img
                src={logo.src}
                alt={logo.alt}
                title={logo.title}
                className="h-8 mix-blend-multiply"
                style={{ filter: 'brightness(1.05)' }}
              />
            </a>
            <p className="text-muted-foreground max-w-sm text-sm leading-relaxed">
              Fasten Health policies and legal terms.
            </p>
          </div>
          <div className="w-full max-w-xs">
            <h3 className="mb-4 text-base font-bold">Policies</h3>
            <ul className="text-muted-foreground space-y-3 text-sm">
              {policyLinks.map((link) => (
                <li
                  key={link.href}
                  className="font-medium transition-colors hover:text-primary"
                >
                  <FooterLink href={link.href}>{link.name}</FooterLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="text-muted-foreground mt-10 flex flex-col justify-between gap-5 border-t border-border/30 pt-8 text-center text-sm font-medium lg:flex-row lg:items-center lg:text-left">
          <p>(c) {new Date().getFullYear()} Fasten Health, Inc. All rights reserved.</p>
          <ul className="flex justify-center gap-6 lg:justify-start">
            <li className="transition-colors hover:text-primary">
              <FooterLink href="/terms.html">Terms and Conditions</FooterLink>
            </li>
            <li className="transition-colors hover:text-primary">
              <FooterLink href="/privacy_policy.html">Privacy Policy</FooterLink>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
