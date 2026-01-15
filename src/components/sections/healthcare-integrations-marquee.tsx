import React from 'react';

import { assetPath } from '@/lib/utils';

const originalIntegrations = [
  [
    { image: '/images/logos/ehrs/ascension.svg' },
    { image: '/images/logos/ehrs/epic.png' },
    { image: '/images/logos/ehrs/hca.png' },
    { image: '/images/logos/ehrs/humana.svg' },
  ],
  [
    { image: '/images/logos/ehrs/kaiser.png' },
    { image: '/images/logos/ehrs/medicare.png' },
    { image: '/images/logos/ehrs/mychart.png' },
    { image: '/images/logos/ehrs/f8f9ce28-d79b-4b54-9f7d-3f0aaba88c2c.png' },
  ],
  [
    { image: '/images/logos/ehrs/89bb6993-b806-49a2-84e2-6e70705c504a.png' },
    { image: '/images/logos/ehrs/9fcc4529-7dc9-4c66-9198-574f978c8bb7.png' },
    { image: '/images/logos/ehrs/68952002-f17e-4086-aae5-841241b194dd.png' },
    { image: '/images/logos/ehrs/767b97b9-4538-433f-ab7a-14ccb0053323.png' },
  ],
  [
    { image: '/images/logos/ehrs/74078880-4084-430e-bc6c-223e5990cef8.png' },
    { image: '/images/logos/ehrs/10668246-1077-4c1d-a6ce-0557c9476e77.png' },
    { image: '/images/logos/ehrs/f7e4fc08-c6f6-426b-be98-d60aa36d3b8b.png' },
    { image: '/images/logos/ehrs/65308856-beaa-46a0-9775-20c6c9322add.png' },
  ],
  [
    { image: '/images/logos/ehrs/6e901e85-8f45-4c60-8d1f-12621aad07f1.png' },
    { image: '/images/logos/ehrs/e675376d-03de-4e66-8196-eaccda536ad5.png' },
    { image: '/images/logos/ehrs/a36fd256-2751-464f-b6d7-418279595b1e.png' },
    { image: '/images/logos/ehrs/c623f37e-6399-4a13-909f-3d9886130673.png' },
    { image: '/images/logos/ehrs/467592a3-7f5f-4258-909e-a99ca971ce15.png' },
    { image: '/images/logos/ehrs/5ad8a5ab-6570-4f1e-8002-30a051ec52c2.png' },
    { image: '/images/logos/ehrs/ddbef50d-3940-4411-9dea-6bf759704c6e.png' },
    { image: '/images/logos/ehrs/fc2dcde0-0848-4b09-aeaf-bfef58120de9.png' },
    { image: '/images/logos/ehrs/347c0df7-5817-470e-8b28-2802f90461f6.png' },
    { image: '/images/logos/ehrs/ec5bc181-5466-4ebd-9e42-471593b8d104.png' },
    { image: '/images/logos/ehrs/d3b1eba5-ec53-4e6d-9600-9510afbc4dda.png' },
    { image: '/images/logos/ehrs/16483fad-5c24-4766-ad53-bd78551f0768.png' },
    { image: '/images/logos/ehrs/ae8026ed-e74b-4bf3-9f53-458c250420ba.png' },
    { image: '/images/logos/ehrs/907d39f4-6b30-46cd-b0c8-f525c636c933.png' },
    { image: '/images/logos/ehrs/6b076b97-18f7-452d-9f09-20dffb01729f.png' },
    { image: '/images/logos/ehrs/c7feccc5-ad10-4aeb-91b0-12b6b93feeba.png' },
    { image: '/images/logos/ehrs/c66a7c1e-21f2-44aa-9486-cdfb5ad699ba.png' },
    { image: '/images/logos/ehrs/82af2366-1d27-4665-ba99-e5a60a75205a.png' },
    { image: '/images/logos/ehrs/2289e832-64da-47d9-82ef-1f4e15ccf627.png' },
    { image: '/images/logos/ehrs/26768525-2b04-4715-9159-3679598289a3.png' },
    { image: '/images/logos/ehrs/80af4067-77e9-4c13-b617-4f370dc14d3f.png' },
    { image: '/images/logos/ehrs/ec6c5f06-d7f8-4eac-8e2f-6cda4536d8ab.png' },
    { image: '/images/logos/ehrs/93ee1d70-6eaa-487b-84d1-cc18bcda253f.png' },
    { image: '/images/logos/ehrs/6d5ba4db-4b63-4277-bb80-dc278dbe28bd.png' },
    { image: '/images/logos/ehrs/b22e4e71-1121-4fca-b158-efbb906918e9.png' },
    { image: '/images/logos/ehrs/49fd46d0-05ce-4c7d-923c-3891935f6947.png' },
    { image: '/images/logos/ehrs/19652f82-98b9-44e6-9964-e426192a723d.png' },
    { image: '/images/logos/ehrs/314a06fc-4efc-4e34-8048-565455e4f3e1.png' },
    { image: '/images/logos/ehrs/8123cfc7-53b6-45d6-ace3-b64d4bd3234b.png' },
    { image: '/images/logos/ehrs/35159b16-a1b5-45ba-9d4f-83f471d5f44b.png' },
    { image: '/images/logos/ehrs/d6c0016f-aaec-4764-ac28-7a6eda64b693.png' },
    { image: '/images/logos/ehrs/d09c7811-213b-4c19-9154-48e57174f239.png' },
    { image: '/images/logos/ehrs/2bcdcc4c-0f13-4edb-85f4-2c9f4f948df0.png' },
    { image: '/images/logos/ehrs/4a4720a0-0efc-4b63-a83d-a8cc5b1c15ad.png' },
    { image: '/images/logos/ehrs/98f680b2-15c4-4854-902b-ed6b69425164.png' },
    { image: '/images/logos/ehrs/32283b0a-3c36-4f92-b9c2-dd2edf3a3db1.png' },
    { image: '/images/logos/ehrs/d56e9e82-3f62-4ce8-8a55-27da90fbe183.png' },
    { image: '/images/logos/ehrs/4fc37973-195c-4e25-8751-331a3b88e685.png' },
    { image: '/images/logos/ehrs/fb0bb8fa-8336-4b26-bdc5-7f8a432c1d94.png' },
    { image: '/images/logos/ehrs/7ca2d9d1-d300-479d-ab85-f956b6ef60de.png' },
    { image: '/images/logos/ehrs/4fd8bb55-bb2d-4748-a134-bbab7a22e4db.png' },
    { image: '/images/logos/ehrs/63cde119-f9d8-468d-900a-1976211739f8.png' },
    { image: '/images/logos/ehrs/e8290a84-88a1-4eac-a5b4-b2c63146b2c9.png' },
    { image: '/images/logos/ehrs/13b592f9-5c8b-4f90-aa54-5ab57a29ea89.png' },
    { image: '/images/logos/ehrs/0398ce8e-9200-430c-a654-f2057bc9a2d4.png' },
    { image: '/images/logos/ehrs/92b1d310-99a1-4de2-99b6-975eaf5a3744.png' },
    { image: '/images/logos/ehrs/418d563f-bd82-473f-a738-cd9775db4e56.png' },
    { image: '/images/logos/ehrs/8fb52893-1e93-4fea-adba-838e9b42e4d2.png' },
    { image: '/images/logos/ehrs/acec8466-8b0a-4adc-9929-561b7136fccb.png' },
    { image: '/images/logos/ehrs/3d01addb-1103-49ca-9c74-3027112e4aa8.png' },
    { image: '/images/logos/ehrs/5f5973bf-d11c-4f99-9b86-b1303cea3503.png' },
    { image: '/images/logos/ehrs/1317665c-e5c4-48b8-b3a5-2a90aa0283d7.png' },
    { image: '/images/logos/ehrs/48f2153e-6f4a-4da5-99a5-775a888c218a.png' },
    { image: '/images/logos/ehrs/34451b52-0f65-4e1a-91aa-5f2b1420f4b7.png' },
    { image: '/images/logos/ehrs/d3a10e7c-63c1-4309-b801-e42ce6e575d5.png' },
    { image: '/images/logos/ehrs/4c74937f-c30d-49c8-993e-c5a133f92414.png' },
    { image: '/images/logos/ehrs/5c4c748f-acd5-4fc8-b6cd-a37f629709fb.png' },
    { image: '/images/logos/ehrs/0293e1f1-291e-48ad-a5d0-cc7fcb062603.png' },
    { image: '/images/logos/ehrs/407f63d2-8fc7-42dd-9a46-23c76693789b.png' },
    { image: '/images/logos/ehrs/6d5de058-cc60-4f07-89db-bcc6817bb115.png' },
    { image: '/images/logos/ehrs/a1c9be32-3539-4390-bf01-828d5fb9f57d.png' },
    { image: '/images/logos/ehrs/562c8d0a-e524-49d7-81c2-70b34b4b9a15.png' },
    { image: '/images/logos/ehrs/8023b832-eaca-414a-9a53-c2fe423087d2.png' },
    { image: '/images/logos/ehrs/e8e73128-7722-4514-9684-1c17d43d880e.png' },
    { image: '/images/logos/ehrs/24cb81a7-dd2b-4b07-808b-f6611fea0393.png' },
    { image: '/images/logos/ehrs/5266bc57-58db-4171-8d73-a2a40ff380d2.png' },
    { image: '/images/logos/ehrs/9752c0a1-49f5-4842-8554-bfa3a6a3c3b4.png' },
    { image: '/images/logos/ehrs/df4a6dd3-672f-4547-8ade-609df28dcda9.png' },
    { image: '/images/logos/ehrs/921bb517-fdc9-4ca2-b9fc-a9e17e6cb8fc.png' },
    { image: '/images/logos/ehrs/e3f229a1-8637-49b1-abaa-84d228aff34a.png' },
    { image: '/images/logos/ehrs/53f22687-4635-4bff-99e2-2eacdc402359.png' },
    { image: '/images/logos/ehrs/c7fe32b2-97c6-45f7-90f8-47213c9b85f1.png' },
    { image: '/images/logos/ehrs/a7a87c72-1d8a-42d6-b0a4-c72b7dd8933a.png' },
    { image: '/images/logos/ehrs/2630415e-1871-437a-84de-52ad7ce88f3e.png' },
    { image: '/images/logos/ehrs/b53ff282-4725-45f7-a436-89f77320f062.png' },
  ],
];

const allLogos = originalIntegrations.flat().map((logo, index) => {
  const fileName = logo.image.split('/').pop()?.split('.')[0];
  return {
    src: logo.image,
    name: `${fileName || 'logo'}-${index}`,
  };
});

export default function HealthcareIntegrationsMarquee() {
  return (
    <section className="w-full bg-background/5 py-8">
      <div className="text-center mb-6">
        <h2 className="text-muted-foreground text-2xl font-medium">
          Integrates with 50,000+ healthcare organizations across the US
        </h2>
      </div>

      <div className="relative w-full overflow-hidden">
        <div className="from-background absolute left-0 z-20 h-full w-20 bg-linear-to-r to-transparent"></div>
        <div className="from-background absolute right-0 z-20 h-full w-20 bg-linear-to-l to-transparent"></div>

        <div className="flex whitespace-nowrap">
          <div className="animate-[marquee_1000s_linear_infinite] will-change-transform flex-none flex items-center py-3">
            {[...Array(10)].map((_, i) => (
              <React.Fragment key={`marquee-logos-1-${i}`}>
                {allLogos.map((logo) => (
                  <div
                    key={`${logo.name}-marquee-1-repeat-${i}`}
                    className="mx-3 flex items-center justify-center"
                    title={logo.name.split('-')[0]}
                  >
                    <img
                      src={assetPath(logo.src)}
                      alt={logo.name.replace('-', ' ')}
                      className="h-7 w-auto object-contain filter grayscale opacity-70 transition-all duration-300 hover:grayscale-0 hover:opacity-100"
                    />
                  </div>
                ))}
              </React.Fragment>
            ))}
          </div>

          <div
            className="animate-[marquee_180s_linear_infinite] will-change-transform flex-none flex items-center py-3"
            aria-hidden="true"
          >
            {[...Array(10)].map((_, i) => (
              <React.Fragment key={`marquee-logos-2-${i}`}>
                {allLogos.map((logo) => (
                  <div
                    key={`${logo.name}-marquee-2-repeat-${i}`}
                    className="mx-3 flex items-center justify-center"
                    title={logo.name.split('-')[0]}
                  >
                    <img
                      src={assetPath(logo.src)}
                      alt={logo.name.replace('-', ' ')}
                      className="h-7 w-auto object-contain filter grayscale opacity-70 transition-all duration-300 hover:grayscale-0 hover:opacity-100"
                    />
                  </div>
                ))}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
