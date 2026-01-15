import { PlusSigns } from '../icons/plus-signs';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { assetPath, cn } from '@/lib/utils';

const items = [
  {
    title: (
      <>
        Unparalleled
        <br />
        VAR flexibility
      </>
    ),
    description: [
      'VAR is often known for its lengthy processing times. At Charter, we focus on achieving the fastest VAR transfers--often completed within hours.',
      'Unlike traditional banks and middleware, we connect directly with the Federal Reserve to ensure the fastest, most transparent transfers possible.',
    ],
    image: {
      src: '/images/homepage/why-charter/1.webp',
      alt: 'Code snippet',
      type: 'fill',
    },
    className:
      'flex flex-col pl-6 py-6 overflow-hidden md:col-span-3 md:flex-row gap-6 md:gap-12',
    headerClassName: 'flex-2 p-0',
    contentClassName:
      'relative h-[320px] w-full self-center overflow-hidden rounded-l-xl border md:flex-1',
  },
  {
    title: 'Unparalleled VAR flexibility',
    description: [
      'VAR has a reputation for taking too long. At Charter, we optimise for the fastest VAR transfers possible -- often in a matter of hours.',
      'Unlike legacy banks and middleware providers, we have a direct connection to the Federal Reserve to facilitate the quickest transfers.',
    ],
    image: {
      src: '/images/homepage/why-charter/2.svg',
      alt: 'VAR Process Flow',
      width: 283,
      height: 45,
    },
    className: 'md:col-span-2 flex flex-col justify-center',
    contentClassName:
      'flex  items-center justify-center p-6 max-md:mt-4 max-md:mb-8',
    imagePosition: 'content',
  },
  {
    title: 'Unparalleled VAR flexibility',
    description: [
      'VAR has a reputation for taking too long. At Charter, we optimise for the fastest VAR transfers possible -- often in a matter of hours.',
    ],
    image: {
      src: '/images/homepage/why-charter/3.svg',
      alt: 'VAR Process Diagram',
      width: 283,
      height: 45,
    },
    className: 'md:col-span-2',
    headerClassName: 'h-full',
    imagePosition: 'header',
  },
  {
    title: 'Unparalleled VAR flexibility',
    description: [
      'Unlike traditional banks and middleware, we connect directly with the Federal Reserve to ensure the fastest, most transparent transfers possible.',
    ],
    image: {
      src: '/images/homepage/code-snippet.webp',
      alt: 'Code snippet',
      type: 'fill',
    },
    className: 'overflow-hidden md:col-span-3 ',
    headerClassName: '',
    contentClassName:
      'relative h-[242px] mt-2 p-0 ml-8 w-full md:max-w-[400px] lg:max-w-[500px] overflow-hidden md:mx-auto shadow-xl rounded-t-2xl',
  },
];

const WhyCharter = () => {
  return (
    <section
      id="why-charter"
      className="relative container py-16 md:py-28 lg:py-32"
    >
      <h3 className="mini-title">WHY CHARTER?</h3>

      <div className="relative z-10 mt-8 grid grid-cols-1 gap-6 md:grid-cols-5">
        {items.map((item, index) => (
          <Card
            key={index}
            className={cn('col-span-1 shadow-xl', item.className)}
          >
            <CardHeader className={item.headerClassName}>
              {item.imagePosition === 'header' && (
                <img
                  src={assetPath(item.image.src)}
                  alt={item.image.alt}
                  width={item.image.width}
                  height={item.image.height}
                  className="flex-1 self-center max-md:mt-4 max-md:mb-8 dark:[filter:brightness(0)_saturate(100%)_invert(100%)]"
                  loading="lazy"
                />
              )}
              <CardTitle className="text-3xl">{item.title}</CardTitle>
              {item.description.map((desc, i) => (
                <CardDescription
                  key={i}
                  className="mt-2 text-base leading-snug font-medium"
                >
                  {desc}
                </CardDescription>
              ))}
            </CardHeader>
            <CardContent className={item.contentClassName}>
              {item.image.type === 'fill' ? (
                <img
                  src={assetPath(item.image.src)}
                  alt={item.image.alt}
                  className="absolute inset-0 h-full w-full object-cover object-left-top"
                  loading="lazy"
                />
              ) : (
                item.imagePosition === 'content' && (
                  <img
                    src={assetPath(item.image.src)}
                    alt={item.image.alt}
                    width={item.image.width}
                    height={item.image.height}
                    className="self-center dark:[filter:brightness(0)_saturate(100%)_invert(100%)]"
                    loading="lazy"
                  />
                )
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Background decoration */}
      <>
        <div className="absolute inset-0 isolate will-change-transform">
          <div className="bg-primary-gradient/28 absolute top-1/2 size-[700px] -translate-y-1/2 rounded-full blur-[300px]" />
          <div className="bg-secondary-gradient/16 absolute top-1/2 right-0 size-[700px] -translate-y-1/2 -rotate-12 rounded-full blur-[300px]" />
          <div className="bg-tertiary-gradient/6 absolute right-20 bottom-1/4 z-[1] h-[500px] w-[800px] -rotate-12 rounded-full blur-[100px] md:bottom-10" />
        </div>
        <div className="absolute -inset-x-20 top-0 [mask-image:radial-gradient(circle_at_center,black_0%,black_20%,transparent_85%)]">
          <PlusSigns className="text-foreground/[0.075] h-full w-full" />
        </div>
      </>
    </section>
  );
};

export default WhyCharter;
