import { Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-20 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          <div className="space-y-4">
            <h3 className="text-sm tracking-widest uppercase mb-6">Contact Us</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>+39 1234 567 890</p>
              <p>info@oatcollection.com</p>
              <p>Newsletter</p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm tracking-widest uppercase mb-6">Help</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>Track an order</p>
              <p>Shipping Info</p>
              <p>Returns & Exchanges</p>
              <p>My Account</p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm tracking-widest uppercase mb-6">Contact Us</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>oatcollection@gmail.com</p>
              <p>Via dei Condotti, 85, 00187</p>
              <p>Roma RM, Italy</p>
              <p>P.IVA 01234567891</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-border">
          <div className="text-center mb-8">
            <h2 className="text-3xl tracking-[0.3em] font-normal">П</h2>
          </div>

          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-primary transition-colors">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              <Twitter className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="text-center mt-8 text-xs text-muted-foreground">
          <p>© 2024 OATCOLLECTION - ALL RIGHTS RESERVED</p>
          <p className="mt-2">Cookie Policy - Privacy Policy - Terms and Conditions</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
