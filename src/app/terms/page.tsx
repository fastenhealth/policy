import ReactMarkdown from 'react-markdown';

import termsContent from './terms.md?raw';

const Page = () => {
  return (
    <section className="mx-auto max-w-4xl px-4 py-16 md:py-28 lg:py-32">
      <article className="prose prose-lg dark:prose-invert">
        <ReactMarkdown>{termsContent}</ReactMarkdown>
      </article>
    </section>
  );
};

export default Page;
