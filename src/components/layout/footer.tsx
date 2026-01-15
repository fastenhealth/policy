import { Link } from 'react-router-dom';

import {
  FaGithub,
  FaLinkedin,
  FaReddit,
  FaTwitter,
} from 'react-icons/fa';

import { assetPath } from '@/lib/utils';

const sections = [
  {
    title: 'Policies',
    links: [
      { name: 'Privacy Policy', href: '/privacy_policy.html' },
      { name: 'Terms and Conditions', href: '/terms.html' },
      {
        name: 'Fasten Connect Privacy',
        href: '/connect/privacy_policy.html',
      },
    ],
  },
  {
    title: 'Company',
    links: [
      { name: 'About', href: 'https://www.fastenhealth.com/about' },
      { name: 'Team', href: 'https://www.linkedin.com/company/fastenhealth/' },
      { name: 'Blog', href: 'https://blog.fastenhealth.com' },
      { name: 'Careers', href: 'https://wellfound.com/company/fasten-health' },
    ],
  },
  {
    title: 'Support',
    links: [
      { name: 'Docs', href: 'https://docs.connect.fastenhealth.com/' },
      { name: 'Developer Portal', href: 'https://portal.connect.fastenhealth.com/' },
      { name: 'Security', href: 'https://trust.fastenhealth.com/' },
      { name: 'Help Desk', href: 'https://fastenhealth.zendesk.com' },
    ],
  },
];

const socialLinks = [
  { icon: FaTwitter, href: 'https://twitter.com/fastenhealth' },
  { icon: FaGithub, href: 'https://github.com/fastenhealth/fasten-onprem/' },
  { icon: FaReddit, href: 'https://www.reddit.com/r/FastenHealth/' },
  { icon: FaLinkedin, href: 'https://www.linkedin.com/company/fastenhealth/' },
];

const logo = {
  url: 'https://www.fastenhealth.com',
  src: assetPath('images/layout/banner.png'),
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
    <section className="px-8 py-20 sm:px-12 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="flex w-full flex-col items-center justify-between gap-10 text-center lg:flex-row lg:items-start lg:text-left">
          <div className="flex w-full flex-col items-center justify-between gap-6 lg:items-start">
            <div className="flex items-center lg:justify-start">
              <a href={logo.url} target="_blank" rel="noreferrer">
                <img
                  src={logo.src}
                  alt={logo.alt}
                  title={logo.title}
                  className="h-9 mix-blend-multiply"
                  style={{ filter: 'brightness(1.05)' }}
                />
              </a>
            </div>
            <p className="text-muted-foreground max-w-sm text-sm leading-relaxed">
              Securely access and share healthcare data from 50,000+ systems with
              one simple integration.
            </p>
            <ul className="text-muted-foreground flex items-center space-x-6">
              {socialLinks.map((socialLink, idx) => (
                <li
                  key={idx}
                  className="font-medium transition-colors hover:text-primary"
                >
                  <a
                    href={socialLink.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <socialLink.icon className="size-6" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid w-full grid-cols-3 gap-6 lg:gap-20">
            {sections.map((section, sectionIdx) => (
              <div key={sectionIdx}>
                <h3 className="mb-6 text-base font-bold">{section.title}</h3>
                <ul className="text-muted-foreground space-y-4 text-sm">
                  {section.links.map((link, linkIdx) => (
                    <li
                      key={linkIdx}
                      className="font-medium transition-colors hover:text-primary"
                    >
                      <FooterLink href={link.href}>{link.name}</FooterLink>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
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
