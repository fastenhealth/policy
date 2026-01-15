import { PlusSigns } from '@/components/icons/plus-signs';
import JoinUs from '@/components/sections/join-us';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import { assetPath } from '@/lib/utils';

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative container max-w-5xl py-10 md:py-12 lg:py-15">
        <div className="">
          <h1 className="text-4xl font-semibold tracking-tighter md:text-5xl lg:text-6xl">
            A different
            <br />
            kind of bank.
          </h1>
          <p className="text-muted-foreground font-mona mt-4 max-w-xl text-2xl md:text-3xl">
            We&apos;re on a mission to transform financial services by
            harnessing vast amounts of untapped financial data.
          </p>
        </div>
        {/* Background decoration */}
        <>
          <div className="absolute inset-0 z-[-1] -translate-y-1/2 translate-x-1/4 blur-[100px] will-change-transform">
            <div className="bg-primary-gradient/25 absolute top-0 right-0 h-[250px] w-[800px] -translate-x-1/5 rounded-full md:h-[300px]" />
            <div className="bg-secondary-gradient/15 absolute top-0 right-0 size-[250px] -translate-x-1/3 -translate-y-1/3 rounded-full md:size-[400px]" />
          </div>
          <div className="absolute -inset-40 z-[-1] [mask-image:radial-gradient(circle_at_center,black_0%,black_20%,transparent_80%)]">
            <PlusSigns className="text-foreground/[0.05] h-full w-full" />
          </div>
        </>
      </section>

      {/* Stats Section */}
      <section className="container max-w-5xl border-y py-5">
        <h2 className="mini-title">By the numbers</h2>
        <div className="mt-6 grid grid-cols-2 gap-8 md:grid-cols-4">
          <div>
            <h3 className="text-4xl font-medium tracking-tight md:text-5xl lg:text-6xl">
              $150M
            </h3>
            <p className="text-muted-foreground mt-1 font-medium">Raised</p>
          </div>
          <div>
            <h3 className="text-4xl font-medium tracking-tight md:text-5xl lg:text-6xl">
              20K
            </h3>
            <p className="text-muted-foreground mt-1 font-medium">Companies</p>
          </div>
          <div>
            <h3 className="text-4xl font-medium tracking-tight md:text-5xl lg:text-6xl">
              1.3B
            </h3>
            <p className="text-muted-foreground mt-1 font-medium">
              Monthly transactions
            </p>
          </div>
          <div>
            <h3 className="text-4xl font-medium tracking-tight md:text-5xl lg:text-6xl">
              1.5K
            </h3>
            <p className="text-muted-foreground mt-1 font-medium">
              Connections per minute
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="container max-w-5xl py-10 md:py-12 lg:py-15">
        <div className="max-w-xl space-y-5 md:space-y-8 lg:space-y-10">
          <p className="text-lg">
            Financial services have changed, are changing, and will continue to
            change -- for the better. Now is the time for finance to be
            developer-first and API-driven. But in order to do this -- it needs a
            new foundation.
          </p>

          <h2 className="font-mona text-2xl font-medium tracking-tight md:text-3xl">
            We were always told that banks can&apos;t be platforms.
          </h2>
          <p className="text-lg">
            Everyone tried fixing the problem by layering APIs on legacy
            systems, creating abstractions and inefficiencies. We have spent
            years building and scaling companies like Plaid, Stripe, and Affirm,
            confronting these limitations firsthand. The current solutions
            aren&apos;t good enough. We believe that banking infrastructure must
            be reimagined as an API platform. But we had to start from ground
            zero.
          </p>
        </div>
      </section>

      {/* Image Grid Section */}
      <section className="my-5 pb-10 md:my-8 md:pb-12 lg:my-12 lg:pb-15">
        <Carousel
          opts={{
            align: 'start',
          }}
        >
          <CarouselContent className="-ml-4">
            <CarouselItem className="basis-[80%] lg:basis-1/3 xl:basis-[40%]">
              <div className="relative h-[330px] lg:h-[440px]">
                <img
                  src={assetPath('images/about/4.webp')}
                  alt="Charter team member working"
                  className="absolute inset-0 h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            </CarouselItem>
            <CarouselItem className="basis-[80%] lg:basis-1/3 xl:basis-[40%]">
              <div className="relative h-[330px] lg:h-[440px]">
                <img
                  src={assetPath('images/about/2.webp')}
                  alt="Modern workspace setup"
                  className="absolute inset-0 h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            </CarouselItem>
            <CarouselItem className="basis-[80%] lg:basis-1/3 xl:basis-[40%]">
              <div className="relative h-[330px] lg:h-[440px]">
                <img
                  src={assetPath('images/about/3.webp')}
                  alt="Team collaboration"
                  className="absolute inset-0 h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </section>

      {/* CoreAPI Section */}
      <section className="container max-w-5xl pb-10 md:pb-20">
        <div className="mr-0 ml-auto max-w-xl space-y-5 md:space-y-8 lg:-translate-x-10 lg:space-y-10">
          <p className="text-lg">
            We started building CoreAPI in 2019 and launched in 2022. Every
            endpoint has been designed from the ground up -- with no technical
            debt or legacy systems. We are purpose-built to power financial
            innovation for the next hundred years.
          </p>

          <h2 className="font-mona text-2xl font-medium tracking-tight md:text-3xl">
            We are a bit of a unique company -- not your standard tech or fintech
            company.
          </h2>

          <p className="text-lg">
            We are 100% founder and team-owned, profitable, and we keep our team
            lean. Over time, this page will become more polished, but for now,
            we&apos;re focused on delivering for developers.
          </p>
        </div>
      </section>

      {/* Founding Team Section */}
      <section className="container max-w-5xl py-10 md:py-12 lg:py-15">
        <div className="grid gap-5 md:grid-cols-2 md:gap-10 lg:gap-16">
          <div className="order-2 md:order-1">
            <h2 className="font-mona text-3xl font-semibold md:text-4xl">
              The founding team
            </h2>
            <p className="mt-5 text-lg md:mt-6">
              We started building CoreAPI in 2019 and launched in 2022. Every
              endpoint has been designed from the ground up -- with no technical
              debt or legacy systems. We are purpose-built to power financial
              innovation for the next hundred years. We are 100% founder and
              team-owned, profitable, and we keep our team lean. Over time, this
              page will become more polished, but for now, we&apos;re focused on
              delivering for developers. If you&apos;re interested in building
              the future of financial APIs, check out our open roles below.
            </p>
          </div>
          <div className="relative order-1 h-[300px] w-full md:order-2 md:h-[400px]">
            <img
              src={assetPath('images/about/1.webp')}
              alt="Founding team collaboration"
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <JoinUs />
    </>
  );
}
