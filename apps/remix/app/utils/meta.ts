import { NEXT_PUBLIC_WEBAPP_URL } from '@documenso/lib/constants/app';

export const appMetaTags = (title?: string) => {
  const description =
    'Logistfy, LLC is a logistics company that provides freight forwarding and logistics services to the world.';

  return [
    {
      title: title ? `${title} - LGFY` : 'LGFY',
    },
    {
      name: 'description',
      content: description,
    },
    {
      name: 'keywords',
      content:
        'LGFY, logistics, freight forwarding, logistics services, logistics company, logistics solutions, logistics management, logistics transportation, logistics operations, logistics technology, logistics innovation, logistics efficiency, logistics optimization, logistics improvement, logistics improvement, logistics improvement',
    },
    {
      name: 'author',
      content: 'LGYF, LLC',
    },
    {
      name: 'robots',
      content: 'index, follow',
    },
    {
      property: 'og:title',
      content: 'LGFY - Logistics Forwarding and Logistics Services',
    },
    {
      property: 'og:description',
      content: description,
    },
    {
      property: 'og:image',
      content: `${NEXT_PUBLIC_WEBAPP_URL()}/opengraph-image.jpg`,
    },
    {
      property: 'og:type',
      content: 'website',
    },
    // {
    //   name: 'twitter:card',
    //   content: 'summary_large_image',
    // },
    // {
    //   name: 'twitter:site',
    //   content: '@documenso',
    // },
    // {
    //   name: 'twitter:description',
    //   content: description,
    // },
    // {
    //   name: 'twitter:image',
    //   content: `${NEXT_PUBLIC_WEBAPP_URL()}/opengraph-image.jpg`,
    // },
  ];
};
