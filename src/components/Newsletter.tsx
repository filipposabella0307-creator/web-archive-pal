import { Button } from "./ui/button";
import { Input } from "./ui/input";

const Newsletter = () => {
  return (
    <section className="py-32 bg-card">
      <div className="container mx-auto px-6">
        <div className="max-w-xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl">
              Subscribe to our newsletter and get a
              <br />
              10% discount on your first order
            </h2>
          </div>
          
          <div className="flex gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="YOUR EMAIL"
              className="bg-background border-border text-center tracking-wider placeholder:tracking-wider"
            />
            <Button variant="default" className="px-8 tracking-wider uppercase text-xs">
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
