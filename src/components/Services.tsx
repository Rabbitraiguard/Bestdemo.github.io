// นำเข้าส่วนประกอบที่จำเป็น
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Ship, Plane, FileCheck, Truck, Clock, Users } from "lucide-react";
import { Link } from "react-router-dom";

// ข้อมูลบริการทั้งหมด
const ourServices = [
  {
    icon: Ship,
    title: "บริการส่งออก",
    description: "บริการส่งออกสินค้าทางเรือและทางอากาศ พร้อมจัดการเอกสารครบถ้วน",
    features: [
      "จัดการเอกสารส่งออก", 
      "ประสานงานกับท่าเรือ", 
      "ติดตามสถานะการขนส่ง", 
      "ประกันภัยสินค้า"
    ],
    bgColor: "bg-blue-50 border-blue-200"
  },
  {
    icon: Plane,
    title: "บริการนำเข้า",
    description: "บริการนำเข้าสินค้าจากต่างประเทศ จัดการพิธีการศุลกากรครบวงจร",
    features: [
      "ผ่านพิธีการศุลกากร", 
      "จัดเก็บสินค้าในคลังสินค้า", 
      "ขนส่งถึงปลายทาง", 
      "ตรวจสอบคุณภาพสินค้า"
    ],
    bgColor: "bg-green-50 border-green-200"
  },
  {
    icon: FileCheck,
    title: "พิธีการทางศุลกากร",
    description: "ผู้เชี่ยวชาญด้านพิธีการศุลกากร จัดการเอกสารและภาษีอากรทุกประเภท",
    features: [
      "ยื่นใบขนสินค้า", 
      "คำนวณภาษีอากร", 
      "ตรวจปล่อยสินค้า", 
      "ยื่นขอใบอนุญาตพิเศษ"
    ],
    bgColor: "bg-orange-50 border-orange-200"
  },
  {
    icon: Truck,
    title: "ขนส่งภายในประเทศ",
    description: "บริการขนส่งสินค้าภายในประเทศ ครอบคลุมทุกพื้นที่ในประเทศไทย",
    features: [
      "รถบรรทุกทุกขนาด", 
      "ติดตาม GPS แบบเรียลไทม์", 
      "บรรจุหีบห่อปลอดภัย", 
      "ประกันภัยครอบคลุม"
    ],
    bgColor: "bg-purple-50 border-purple-200"
  },
  {
    icon: Clock,
    title: "บริการด่วนพิเศษ",
    description: "บริการขนส่งด่วนสำหรับสินค้าเร่งด่วน ดำเนินการตลอด 24 ชั่วโมง",
    features: [
      "ดำเนินการ 24/7", 
      "Fast Track Clearance", 
      "ติดต่อตลอดเวลา", 
      "รับประกันเวลา"
    ],
    bgColor: "bg-red-50 border-red-200"
  },
  {
    icon: Users,
    title: "ที่ปรึกษาโลจิสติกส์",
    description: "ให้คำปรึกษาด้านโลจิสติกส์ วางแผนการขนส่ง และเพิ่มประสิทธิภาพ",
    features: [
      "วิเคราะห์ต้นทุน", 
      "วางแผนเส้นทาง", 
      "เพิ่มประสิทธิภาพ", 
      "รายงานผลการดำเนินงาน"
    ],
    bgColor: "bg-indigo-50 border-indigo-200"
  }
];

// ส่วนประกอบบริการ
const Services = () => {

  // ส่วนประกอบการ์ดบริการแต่ละอัน
  const ServiceCard = ({ service, index }: { service: typeof ourServices[0], index: number }) => {
    const IconComponent = service.icon;
    
    return (
      <Card className={`${service.bgColor} hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}>
        <CardHeader>
          {/* ไอคอนบริการ */}
          <div className="p-3 bg-primary/10 rounded-lg w-fit">
            <IconComponent className="h-8 w-8 text-primary" />
          </div>
          
          {/* ชื่อและคำบรรยายบริการ */}
          <CardTitle className="text-xl">{service.title}</CardTitle>
          <CardDescription className="text-base">
            {service.description}
          </CardDescription>
        </CardHeader>
        
        <CardContent>
          {/* รายการฟีเจอร์ของบริการ */}
          <ul className="space-y-2 mb-6">
            {service.features.map((feature, featureIndex) => (
              <li key={featureIndex} className="flex items-center text-sm">
                <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                {feature}
              </li>
            ))}
          </ul>
          
          {/* ปุ่มขอใบเสนอราคา */}
          <Link to="/quote">
            <Button className="w-full" variant="outline">
              ขอใบเสนอราคา
            </Button>
          </Link>
        </CardContent>
      </Card>
    );
  };

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* หัวข้อหลัก */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            บริการของเรา
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            ให้บริการโลจิสติกส์ครบวงจร ตั้งแต่การส่งออก นำเข้า พิธีการศุลกากร 
            ไปจนถึงการขนส่งภายในประเทศ
          </p>
        </div>

        {/* กริดแสดงบริการทั้งหมด */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ourServices.map((service, index) => (
            <ServiceCard 
              key={index} 
              service={service} 
              index={index} 
            />
          ))}
        </div>

        {/* ปุ่มดูบริการทั้งหมด */}
        <div className="text-center mt-12">
          <Link to="/services">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              ดูบริการทั้งหมด
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;