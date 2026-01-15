import { PlusSigns } from '@/components/icons/plus-signs';
import Testimonials from '@/components/sections/testimonials';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

const FAQ_ITEMS = [
  {
    category: 'SUPPORT',
    items: [
      {
        question: 'Is there a free version?',
        answer:
          'Yes! We offer a generous free plan with just enough features except that one feature you really want! Our strategy is to get your credit card details on file then steadily double our prices against inflation rates.',
      },
      {
        question: 'How do I update my account without breaking my laptop?',
        answer:
          'Our platform is designed with safety in mind. You can update your account settings through our intuitive dashboard without any risk to your hardware. We have multiple safeguards in place to prevent any system conflicts.',
      },
      {
        question: 'Is support free, or do I need to Google everything?',
        answer:
          "We provide comprehensive support at no additional cost. Our dedicated support team is available 24/7 to help you with any questions or issues you might encounter. No need to rely on Google - we're here to help!",
      },
      {
        question: 'Are you going to be subsumed by AI?',
        answer:
          'While we embrace AI technology to enhance our services, we maintain a strong human element in our operations. Our team works alongside AI to provide the best possible service while ensuring human oversight and decision-making remain central to our operations.',
      },
    ],
  },
  {
    category: 'YOUR ACCOUNT',
    items: [
      {
        question: 'Is support free, or do I need to Google everything?',
        answer:
          "We provide comprehensive support at no additional cost. Our dedicated support team is available 24/7 to help you with any questions or issues you might encounter. No need to rely on Google - we're here to help!",
      },
      {
        question: 'Are you going to be subsumed by AI?',
        answer:
          'While we embrace AI technology to enhance our services, we maintain a strong human element in our operations. Our team works alongside AI to provide the best possible service while ensuring human oversight and decision-making remain central to our operations.',
      },
    ],
  },
  {
    category: 'OTHER QUESTIONS',
    items: [
      {
        question: 'Is support free, or do I need to Google everything?',
        answer:
          "We provide comprehensive support at no additional cost. Our dedicated support team is available 24/7 to help you with any questions or issues you might encounter. No need to rely on Google - we're here to help!",
      },
      {
        question: 'Are you going to be subsumed by AI?',
        answer:
          'While we embrace AI technology to enhance our services, we maintain a strong human element in our operations. Our team works alongside AI to provide the best possible service while ensuring human oversight and decision-making remain central to our operations.',
      },
    ],
  },
];

export default function FAQPage() {
  return (
    <>
      <section className="relative py-16 md:py-28 lg:py-32">
        <div className="container">
          <div className="text-center">
            <h1 className="text-4xl font-semibold tracking-tight md:text-5xl lg:text-6xl">
              Frequently Asked Questions
            </h1>
            <p className="text-muted-foreground mt-4 text-2xl md:text-3xl">
              Everything you need to know about Charter
            </p>
          </div>

          <div className="mx-auto mt-8 max-w-2xl space-y-12 md:mt-12 lg:mt-20">
            {FAQ_ITEMS.map((category) => (
              <Card key={category.category} className="border-hidden">
                <CardHeader className="pb-0">
                  <h3 className="text-accent-foreground border-b pb-4 font-mono text-sm font-medium tracking-widest uppercase">
                    {category.category}
                  </h3>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    {category.items.map((item, i) => (
                      <AccordionItem
                        key={i}
                        value={`${category.category}-${i}`}
                        className="border-muted border-b last:border-0"
                      >
                        <AccordionTrigger className="text-base font-medium hover:no-underline">
                          {item.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground text-base font-medium">
                          {item.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        <div className="absolute -inset-40 z-[-1] [mask-image:radial-gradient(circle_at_center,black_0%,black_20%,transparent_75%)]">
          <PlusSigns className="text-foreground/[0.05] h-full w-full" />
        </div>
      </section>
      <Testimonials />
    </>
  );
}
