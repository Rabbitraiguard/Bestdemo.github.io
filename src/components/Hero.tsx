import { Button } from "@/components/ui/button";
import { ArrowRight, Package, Globe, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/logistics-hero.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70" />
      
      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            บริการโลจิสติกส์
            <span className="block text-secondary">ระดับมืออาชีพ</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed">
            ผู้เชี่ยวชาญด้านการส่งออก นำเข้า และพิธีการทางศุลกากร 
            ให้บริการครบวงจรด้วยประสบการณ์กว่า 15 ปี
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Link to="/quote">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                ขอใบเสนอราคา
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/services">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                ดูบริการของเรา
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center space-x-3">
              <div className="p-3 bg-secondary/20 rounded-lg">
                <Package className="h-8 w-8 text-secondary" />
              </div>
              <div>
                <div className="text-2xl font-bold">10,000+</div>
                <div className="text-white/80">การส่งออกสำเร็จ</div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="p-3 bg-secondary/20 rounded-lg">
                <Globe className="h-8 w-8 text-secondary" />
              </div>
              <div>
                <div className="text-2xl font-bold">50+</div>
                <div className="text-white/80">ประเทศที่บริการ</div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="p-3 bg-secondary/20 rounded-lg">
                <Shield className="h-8 w-8 text-secondary" />
              </div>
              <div>
                <div className="text-2xl font-bold">99.9%</div>
                <div className="text-white/80">ความปลอดภัย</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;