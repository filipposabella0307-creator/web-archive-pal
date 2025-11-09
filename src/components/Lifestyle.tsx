import { Button } from "./ui/button";
import lifestyle1 from "@/assets/lifestyle-1.jpg";
import lifestyle2 from "@/assets/lifestyle-2.jpg";
import heroImage from "@/assets/hero-oat-collection.jpg";

const Lifestyle = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="bg-accent p-12 flex flex-col justify-center items-start space-y-6">
            <h3 className="text-3xl">Easy sun lite.</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              A complete assortment of our oat-originated, carbon-positive formulae across the entire suite.
            </p>
            <Button variant="luxury" size="lg" className="rounded-full px-12">
              Shop Now
            </Button>
          </div>

          <div className="aspect-[3/4] overflow-hidden">
            <img
              src={lifestyle1}
              alt="Luxury skincare spa setting"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="space-y-8">
            <div className="aspect-square overflow-hidden">
              <img
                src={heroImage}
                alt="Oat collection product on natural stone"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-square overflow-hidden">
              <img
                src={lifestyle2}
                alt="Woman with glowing skin using oat cream"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Lifestyle;
