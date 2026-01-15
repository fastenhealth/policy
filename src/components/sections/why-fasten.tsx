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
    title: '3-Line Integration',
    description: [
      'Embed our Fasten Connect widget in your app, site, or workflow with 3 lines of code.',
      'Collect clinical and claims data with no custom integrations or EHR contracts required.',
    ],
    image: {
      src: '/images/homepage/why-fasten/why-choose-3line-integration.png',
      alt: '3-line code snippet for integration',
      type: 'content',
    },
    className: 'overflow-hidden md:col-span-3',
    headerClassName: '',
    imagePosition: 'content',
  },
  {
    title: 'Beyond Treatment Use Cases',
    description: [
      'While HIEs and legacy vendors restrict data sharing to direct patient care only, Fasten Connect empowers you with flexible data access.',
      'Ideal for clinical research, concierge care, underwriting, and digital health applications.',
    ],
    image: {
      src: '/images/homepage/why-fasten/why-choose-beyond-treatment.png',
      alt: 'Use case diagram',
      width: 400,
      height: 45,
    },
    className: 'md:col-span-2 flex flex-col justify-center',
    contentClassName:
      'flex items-center justify-center p-6 max-md:mt-4 max-md:mb-8',
    imagePosition: 'content',
  },
  {
    title: 'Nationwide EHR Coverage',
    description: [
      'Connect to 50,000+ US health systems, including Epic, Cerner, Meditech, and Allscripts.',
      'No need to contract with each system. Fasten Connect handles the interoperability.',
    ],
    image: {
      src: '/images/homepage/why-fasten/why-choose-nationwide-coverage.png',
      alt: 'EHR logos diagram',
      width: '100%',
      height: 45,
    },
    className: 'md:col-span-2',
    imagePosition: 'content',
  },
  {
    title: 'Longitudinal Clinical Data',
    description: [
      'Retrieve complete CCDs, labs, medications, procedures, immunizations, care plans, and more.',
      'Empower your app with structured, patient-authorized health records--no scraping or parsing PDFs.',
    ],
    image: {
      src: '/images/homepage/why-fasten/why-choose-clinical-data.png',
      alt: 'Longitudinal data example',
      width: 600,
      height: 45,
    },
    className: 'overflow-hidden md:col-span-3',
    headerClassName: '',
    imagePosition: 'content',
  },
];

const WhyFasten = () => {
  return (
    <section
      id="why-fasten"
      className="relative w-full py-12 md:py-16 lg:py-20 px-8 sm:px-12 lg:px-16 overflow-hidden bg-subtle-gray bg-subtle-dots section-fade-bottom"
    >
      <div className="mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center justify-center px-4 py-1.5 bg-primary/10 rounded-full mb-3">
            <span className="text-xs font-semibold tracking-wide text-primary">KEY ADVANTAGES</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-5">Why Choose Fasten Connect?</h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Our platform offers unparalleled access to patient data through a simple, secure integration
          </p>
        </div>

        <div className="relative z-10 grid grid-cols-1 gap-8 md:grid-cols-5 md:gap-6">
          {items.map((item, index) => (
            <Card
              key={index}
              className={cn('col-span-1 group hover:shadow-2xl transition-all duration-300 border-foreground/5 hover:border-primary/20', item.className)}
            >
              <CardHeader className={cn('relative', item.headerClassName)}>
                {item.imagePosition === 'header' && (
                  <div className="mb-4 flex justify-center">
                    <div className="p-3 rounded-full inline-flex items-center justify-center">
                      <img
                        src={assetPath(item.image.src)}
                        alt={item.image.alt}
                        width={item.image.width}
                        height={item.image.height}
                        className="flex-1 self-center dark:[filter:brightness(0)_saturate(100%)_invert(100%)]"
                      />
                    </div>
                  </div>
                )}

                <CardTitle className="text-2xl font-bold group-hover:text-primary transition-colors">
                  {item.title}
                </CardTitle>

                {item.description.map((desc, descIndex) => (
                  <CardDescription
                    key={descIndex}
                    className="mt-3 text-base leading-relaxed text-muted-foreground"
                  >
                    {desc}
                  </CardDescription>
                ))}
              </CardHeader>

              <CardContent className={cn(item.contentClassName, 'relative')}>
                {item.image.type === 'fill' ? (
                  <div className="overflow-hidden rounded-lg shadow-lg">
                    <img
                      src={assetPath(item.image.src)}
                      alt={item.image.alt}
                      className="object-cover object-left-top transition-transform group-hover:scale-105 duration-500 h-full"
                    />
                  </div>
                ) : (
                  item.imagePosition === 'content' && (
                    <div className="flex justify-center rounded-xl">
                      <img
                        src={assetPath(item.image.src)}
                        alt={item.image.alt}
                        width={item.image.width}
                        height={item.image.height}
                        className="self-center dark:[filter:brightness(0)_saturate(100%)_invert(100%)]"
                      />
                    </div>
                  )
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyFasten;
