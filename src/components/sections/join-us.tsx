import React from 'react';

import { Button } from '../ui/button';

const JoinUs = () => {
  const jobCategories = [
    {
      name: 'Engineering',
      jobs: [
        {
          title: 'Interoperability Developer',
          location: 'NYC',
          link: 'https://wellfound.com/l/2Bd91s',
        },
      ],
    },
    {
      name: 'Design',
      jobs: [
        { title: 'Designer', location: 'NYC/Remote', link: '' },
      ],
    },
  ];

  return (
    <section className="w-full py-10 md:py-12 lg:py-15 px-8 sm:px-12 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="border-t pt-5">
          <div className="max-w-2xl">
            <h3 className="mini-title mb-3">CAREERS AT FASTEN</h3>
            <h2 className="text-4xl font-semibold tracking-tight md:text-4xl">
              Join us
            </h2>
            <p className="text-muted-foreground font-mona mt-4 max-w-2xl pb-10 text-2xl md:pb-12 md:text-3xl lg:pb-15">
              Building the foundation of HealthTech in NYC.
            </p>

            {jobCategories.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <h3 className="border-foreground border-b py-6 text-lg font-semibold">
                  {category.name}
                </h3>
                <div className="">
                  {category.jobs.map((job, jobIndex) => (
                    <div
                      key={`${categoryIndex}-${jobIndex}`}
                      className="flex items-center justify-between gap-10 border-b py-3 md:gap-16 lg:gap-28"
                    >
                      <h4 className="flex-1 font-medium">{job.title}</h4>
                      <p className="text-muted-foreground">{job.location}</p>
                      <Button variant="outline" size="pill-sm" className="group" asChild>
                        <a
                          href={job.link || '#'}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center gap-2"
                        >
                          View listing
                        </a>
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinUs;
