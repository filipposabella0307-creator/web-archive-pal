import productSerum from "@/assets/product-serum.jpg";
import productCream from "@/assets/product-cream.jpg";
import productMask from "@/assets/product-mask.jpg";
import productOil from "@/assets/product-oil.jpg";

const products = [
  { image: productSerum, alt: "Oat serum in elegant glass bottle" },
  { image: productCream, alt: "Luxury oat cream in minimalist jar" },
  { image: productMask, alt: "Nourishing oat face mask" },
  { image: productOil, alt: "Essential oat oil treatment" },
];

const ProductGrid = () => {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="aspect-square overflow-hidden mb-4 bg-background">
                <img
                  src={product.image}
                  alt={product.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
