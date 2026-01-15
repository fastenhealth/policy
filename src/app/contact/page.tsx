import { PlusSigns } from '@/components/icons/plus-signs';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

export default function ContactPage() {
  return (
    <section className="relative py-16 md:py-28 lg:py-32">
      <div className="container max-w-2xl">
        <div className="text-center">
          <h1 className="text-4xl font-semibold tracking-tight md:text-5xl lg:text-6xl">
            Book a demo
          </h1>
          <p className="text-muted-foreground mt-4 text-2xl md:text-3xl">
            Learn how Charter can work for you
          </p>
        </div>

        <form className="mt-8 space-y-5 md:mt-12 lg:mt-20">
          {/* First Name */}
          <div className="flex flex-col gap-2">
            <Label htmlFor="firstName">First name</Label>
            <Input id="firstName" placeholder="Enter your first name" />
          </div>

          {/* Last Name */}
          <div className="flex flex-col gap-2">
            <Label htmlFor="lastName">Last name</Label>
            <Input id="lastName" placeholder="Enter your last name" />
          </div>

          {/* Email */}
          <div className="flex flex-col gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email address"
            />
          </div>

          {/* Company */}
          <div className="flex flex-col gap-2">
            <Label htmlFor="company">
              Company name{' '}
              <span className="text-muted-foreground">(optional)</span>
            </Label>
            <Input id="company" placeholder="Enter your company name" />
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="employees">Number of employees</Label>
            <Input
              id="employees"
              placeholder="Enter number of employees"
              type="number"
            />
          </div>

          {/* Message */}
          <div className="flex flex-col gap-2">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              rows={5}
              placeholder="Enter your message"
              className="resize-none"
            />
          </div>

          <div className="flex justify-end">
            <Button type="submit" size="lg">
              Submit
            </Button>
          </div>
        </form>
      </div>
      <div className="absolute -inset-40 z-[-1] [mask-image:radial-gradient(circle_at_center,black_0%,black_20%,transparent_75%)]">
        <PlusSigns className="text-foreground/[0.05] h-full w-full" />
      </div>
    </section>
  );
}
