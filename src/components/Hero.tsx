import { Button } from "./ui/button";
import heroImage from "@/assets/hero-oat-collection.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-sm tracking-wider uppercase text-muted-foreground">
                Growing on the OAT, I collaborate grasses ecology, restoring depleting energy and increasing soil carbon levels with every harvest
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-6xl md:text-7xl lg:text-8xl tracking-tight">
                OAT COLLECTION
              </h2>
              <Button variant="luxury" size="lg" className="rounded-full px-12">
                Shop Now
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={heroImage}
                alt="Oat Collection luxury skincare product"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-card p-8 max-w-xs">
              <p className="text-sm leading-relaxed">
                A compelling assortment of oat-originated, carbon neutral philosophy across the entire suite.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
