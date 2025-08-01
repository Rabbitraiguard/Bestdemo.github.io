// นำเข้าส่วนประกอบที่จำเป็น
import { Button } from "@/components/ui/button";
import { ArrowRight, Package, Globe, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/logistics-hero.jpg";

// ข้อมูลสถิติของบริษัท
const companyStats = [
  {
    icon: Package,
    number: "10,000+",
    description: "การส่งออกสำเร็จ"
  },
  {
    icon: Globe,
    number: "50+",
    description: "ประเทศที่บริการ"
  },
  {
    icon: Shield,
    number: "99.9%",
    description: "ความปลอดภัย"
  }
];

// ส่วนประกอบหน้าหลัก (Hero Section)
const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* ภาพพื้นหลัง */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* เลเยอร์สีทับภาพพื้นหลัง */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70" />
      
      {/* เนื้อหาหลัก */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
        <div className="max-w-3xl">
          
          {/* หัวข้อหลัก */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            บริการโลจิสติกส์
            <span className="block text-secondary">ระดับมืออาชีพ</span>
          </h1>
          
          {/* คำบรรยาย */}
          <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed">
            ผู้เชี่ยวชาญด้านการส่งออก นำเข้า และพิธีการทางศุลกากร 
            ให้บริการครบวงจรด้วยประสบการณ์กว่า 15 ปี
          </p>
          
          {/* ปุ่มต่างๆ */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            {/* ปุ่มขอใบเสนอราคา */}
            <Link to="/quote">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                ขอใบเสนอราคา
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            
            {/* ปุ่มดูบริการ */}
            <Link to="/services">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                ดูบริการของเรา
              </Button>
            </Link>
          </div>

          {/* สถิติบริษัท */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {companyStats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="flex items-center space-x-3">
                  {/* ไอคอน */}
                  <div className="p-3 bg-secondary/20 rounded-lg">
                    <IconComponent className="h-8 w-8 text-secondary" />
                  </div>
                  
                  {/* ข้อมูลสถิติ */}
                  <div>
                    <div className="text-2xl font-bold">{stat.number}</div>
                    <div className="text-white/80">{stat.description}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;