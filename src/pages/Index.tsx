import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductGrid from "@/components/ProductGrid";
import CollectionFeature from "@/components/CollectionFeature";
import Bestsellers from "@/components/Bestsellers";
import Lifestyle from "@/components/Lifestyle";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <ProductGrid />
        <CollectionFeature />
        <Bestsellers />
        <Lifestyle />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
