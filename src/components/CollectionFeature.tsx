import { Button } from "./ui/button";

const CollectionFeature = () => {
  return (
    <section className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <div className="w-32 h-32 rounded-full bg-accent mx-auto" />
          
          <div className="space-y-6">
            <h3 className="text-4xl md:text-5xl">OAT collection</h3>
            <p className="text-muted-foreground leading-relaxed max-w-md mx-auto">
              A compelling assortment of oat-originated, tactile ingredients and more packaged within the entire suite.
            </p>
            <Button variant="luxury" size="lg" className="rounded-full px-12">
              Shop Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollectionFeature;
