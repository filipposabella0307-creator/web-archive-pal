import { Heart } from "lucide-react";
import { Button } from "./ui/button";
import productSerum from "@/assets/product-serum.jpg";
import productCream from "@/assets/product-cream.jpg";
import productMask from "@/assets/product-mask.jpg";
import productOil from "@/assets/product-oil.jpg";

const bestsellers = [
  { name: "Oat Serum", price: "$48.00", image: productSerum },
  { name: "Oat Repair", price: "$52.00", image: productCream },
  { name: "Oat Face Mask", price: "$38.00", image: productMask },
  { name: "Oat Essential Water", price: "$42.00", image: productOil },
  { name: "Oat Collection Set", price: "$165.00", image: productCream },
];

const Bestsellers = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-4xl">Bestsellers</h2>
          <a href="#" className="text-sm underline hover:no-underline">
            See all of our products →
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {bestsellers.map((product, index) => (
            <div key={index} className="group">
              <div className="relative mb-4">
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-4 right-4 z-10 bg-background/80 backdrop-blur-sm hover:bg-background"
                >
                  <Heart className="h-4 w-4" />
                </Button>
                <div className="aspect-square overflow-hidden bg-card">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </div>
              <div className="text-center space-y-2">
                <h3 className="text-sm tracking-wide uppercase">{product.name}</h3>
                <p className="text-sm text-muted-foreground">{product.price}</p>
                <Button variant="ghost" size="icon" className="mx-auto">
                  <span className="text-xl">+</span>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Bestsellers;
