import { Link } from 'react-router-dom';

import { FcGoogle } from 'react-icons/fc';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { assetPath } from '@/lib/utils';

const Signup = () => {
  return (
    <section className="bg-sand-100 py-16 md:py-28 lg:py-32">
      <div className="container">
        <div className="flex flex-col gap-4">
          <Card className="mx-auto w-full max-w-sm">
            <CardHeader className="flex flex-col items-center space-y-0">
              <img
                src={assetPath('images/layout/logo.svg')}
                alt="logo"
                width={128}
                height={23}
                className="mb-7 dark:[filter:brightness(0)_saturate(100%)_invert(100%)]"
                loading="lazy"
              />
              <p className="mb-2 text-2xl font-bold">Start your free trial</p>
              <p className="text-muted-foreground">
                Sign up in less than 2 minutes.
              </p>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <Input type="text" placeholder="Enter your name" required />
                <Input type="email" placeholder="Enter your email" required />
                <div>
                  <Input
                    type="password"
                    placeholder="Enter your password"
                    required
                  />
                  <p className="text-muted-foreground mt-1 text-sm">
                    Must be at least 8 characters.
                  </p>
                </div>
                <Button type="submit" className="mt-2 w-full">
                  Create an account
                </Button>
                <Button variant="outline" className="w-full">
                  <FcGoogle className="mr-2 size-5" />
                  Sign up with Google
                </Button>
              </div>
              <div className="text-muted-foreground mx-auto mt-8 flex justify-center gap-1 text-sm">
                <p>Already have an account?</p>
                <Link to="/login" className="text-primary font-medium">
                  Log in
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Signup;
