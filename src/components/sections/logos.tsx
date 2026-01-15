import { assetPath } from '@/lib/utils';

const ITEMS = [
  {
    name: 'Mercury',
    src: '/images/logos/mercury.svg',
    width: 143,
    height: 26,
    href: 'https://mercury.com',
  },
  {
    name: 'Watershed',
    src: '/images/logos/watershed.svg',
    width: 154,
    height: 31,
    href: 'https://watershed.com',
  },
  {
    name: 'Retool',
    src: '/images/logos/retool.svg',
    width: 113,
    height: 22,
    href: 'https://retool.com',
  },
  {
    name: 'Descript',
    src: '/images/logos/descript.svg',
    width: 112,
    height: 27,
    href: 'https://descript.com',
  },
  {
    name: 'Perplexity',
    src: '/images/logos/perplexity.svg',
    width: 141,
    height: 32,
    href: 'https://perplexity.ai',
  },
  {
    name: 'Monzo',
    src: '/images/logos/monzo.svg',
    width: 104,
    height: 18,
    href: 'https://monzo.com',
  },
  {
    name: 'Ramp',
    src: '/images/logos/ramp.svg',
    width: 105,
    height: 28,
    href: 'https://ramp.com',
  },
  {
    name: 'Raycast',
    src: '/images/logos/raycast.svg',
    width: 128,
    height: 33,
    href: 'https://raycast.com',
  },
  {
    name: 'Arc',
    src: '/images/logos/arc.svg',
    width: 90,
    height: 28,
    href: 'https://arc.com',
  },
];

export default function Logos() {
  return (
    <section className="overflow-hidden">
      <h2 className="text-muted-foreground text-center text-2xl">
        From next-gen startups to established enterprises.
      </h2>

      <div className="relative mt-10 flex w-full">
        <div className="from-background absolute left-0 z-20 h-full w-10 bg-linear-to-r to-transparent" />
        <div className="from-background absolute right-0 z-20 h-full w-10 bg-linear-to-l to-transparent" />

        {/* First marquee group */}
        <div className="animate-[marquee_240s_linear_infinite] flex shrink-0 items-center gap-12">
          {Array.from({ length: 10 }).map((_, i) =>
            ITEMS.map((logo, index) => (
              <a
                href={logo.href}
                target="_blank"
                key={`${index}-${i}`}
                className="p-6"
                rel="noreferrer"
              >
                <img
                  src={assetPath(logo.src)}
                  alt={logo.name}
                  width={logo.width}
                  height={logo.height}
                  className="object-contain transition-opacity hover:opacity-70"
                />
              </a>
            )),
          )}
        </div>
        {/* Second marquee group */}
        <div className="animate-[marquee_240s_linear_infinite] flex shrink-0 items-center gap-12">
          {Array.from({ length: 10 }).map((_, i) =>
            ITEMS.map((logo, index) => (
              <a
                href={logo.href}
                target="_blank"
                key={`${index}-b-${i}`}
                className="p-6"
                rel="noreferrer"
              >
                <img
                  src={assetPath(logo.src)}
                  alt={logo.name}
                  width={logo.width}
                  height={logo.height}
                  className="object-contain transition-opacity hover:opacity-70"
                />
              </a>
            )),
          )}
        </div>
      </div>
    </section>
  );
}
