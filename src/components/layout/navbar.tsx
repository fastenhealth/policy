import React, { useCallback, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';
import { assetPath, cn } from '@/lib/utils';

const NAVBAR_ITEMS = [
  { label: 'Privacy Policy', href: '/privacy_policy.html' },
  { label: 'Terms', href: '/terms.html' },
];

type NavLinkProps = {
  href: string;
  className?: string;
  onClick?: () => void;
  children: React.ReactNode;
};

const NavLink = React.forwardRef<HTMLAnchorElement, NavLinkProps>(
  ({ href, className, onClick, children }, ref) => (
    <Link to={href} className={className} onClick={onClick} ref={ref}>
      {children}
    </Link>
  ),
);
NavLink.displayName = 'NavLink';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const pathname = location.pathname;

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 10);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      document.body.classList.remove('overflow-hidden');
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isMenuOpen, handleScroll]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div
        className={`w-full px-8 sm:px-12 lg:px-16 transition-all duration-300 ${
          isScrolled ? 'py-3 lg:py-3' : 'py-4 lg:pt-6'
        }`}
      >
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between">
          <Link to="/" className="flex items-center">
            <img
              src={assetPath('images/logos/banner-trimmed-2.png')}
              alt="Fasten"
              className="h-7 w-auto mix-blend-multiply"
              style={{ filter: 'brightness(1.05)' }}
            />
          </Link>

          <NavigationMenu className="hidden w-full items-center justify-center gap-16 lg:flex">
            <NavigationMenuList className="flex space-x-8">
              {NAVBAR_ITEMS.map((link) => (
                <NavigationMenuItem key={link.label}>
                  <NavigationMenuLink asChild>
                    <NavLink
                      href={link.href}
                      className={cn(
                        'hover:text-accent-foreground p-3 lg:text-base',
                        pathname === link.href && 'text-accent-foreground',
                      )}
                    >
                      {link.label}
                    </NavLink>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          <div className="flex items-center gap-2.5">
            <div className="text-muted-foreground hidden items-center gap-3 font-medium lg:flex">
              <Button asChild size="pill">
                <a href="https://www.fastenhealth.com" target="_blank" rel="noreferrer">
                  FastenHealth.com
                </a>
              </Button>
            </div>

            <button
              className="relative flex size-8 lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              <div className="absolute left-1/2 top-1/2 block w-[18px] -translate-x-1/2 -translate-y-1/2">
                <span
                  aria-hidden="true"
                  className={`absolute block h-0.5 w-full rounded-full bg-current transition duration-500 ease-in-out ${
                    isMenuOpen ? 'rotate-45' : '-translate-y-1.5'
                  }`}
                ></span>
                <span
                  aria-hidden="true"
                  className={`absolute block h-0.5 w-full rounded-full bg-current transition duration-500 ease-in-out ${
                    isMenuOpen ? 'opacity-0' : ''
                  }`}
                ></span>
                <span
                  aria-hidden="true"
                  className={`absolute block h-0.5 w-full rounded-full bg-current transition duration-500 ease-in-out ${
                    isMenuOpen ? '-rotate-45' : 'translate-y-1.5'
                  }`}
                ></span>
              </div>
            </button>
          </div>
        </div>
      </div>

      <div
        className={cn(
          'bg-background absolute inset-0 top-full container flex h-[calc(100vh-64px)] flex-col transition-all duration-300 ease-in-out lg:hidden',
          isMenuOpen
            ? 'visible translate-x-0 opacity-100'
            : 'invisible translate-x-full opacity-0',
        )}
      >
        <div className="mt-8 space-y-2">
          <a
            href="https://www.fastenhealth.com"
            className="block"
            onClick={() => setIsMenuOpen(false)}
          >
            <Button size="pill-full">FastenHealth.com</Button>
          </a>
        </div>

        <nav className="mt-3 flex flex-1 flex-col gap-6">
          {NAVBAR_ITEMS.map((link) => (
            <NavLink
              key={link.label}
              href={link.href}
              className={cn(
                'text-lg tracking-[-0.36px]',
                pathname === link.href && 'text-muted-foreground',
              )}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}

          <Link
            to="/"
            className={cn(
              'text-lg tracking-[-0.36px]',
              pathname === '/' && 'text-muted-foreground',
            )}
            onClick={() => setIsMenuOpen(false)}
          >
            All Policies
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
