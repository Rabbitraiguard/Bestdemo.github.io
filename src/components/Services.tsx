import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Ship, Plane, FileCheck, Truck, Clock, Users } from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      icon: Ship,
      title: "บริการส่งออก",
      description: "บริการส่งออกสินค้าทางเรือและทางอากาศ พร้อมจัดการเอกสารครบถ้วน",
      features: ["จัดการเอกสารส่งออก", "ประสานงานกับท่าเรือ", "ติดตามสถานะการขนส่ง", "ประกันภัยสินค้า"],
      color: "bg-blue-50 border-blue-200"
    },
    {
      icon: Plane,
      title: "บริการนำเข้า",
      description: "บริการนำเข้าสินค้าจากต่างประเทศ จัดการพิธีการศุลกากรครบวงจร",
      features: ["ผ่านพิธีการศุลกากร", "จัดเก็บสินค้าในคลังสินค้า", "ขนส่งถึงปลายทาง", "ตรวจสอบคุณภาพสินค้า"],
      color: "bg-green-50 border-green-200"
    },
    {
      icon: FileCheck,
      title: "พิธีการทางศุลกากร",
      description: "ผู้เชี่ยวชาญด้านพิธีการศุลกากร จัดการเอกสารและภาษีอากรทุกประเภท",
      features: ["ยื่นใบขนสินค้า", "คำนวณภาษีอากร", "ตรวจปล่อยสินค้า", "ยื่นขอใบอนุญาตพิเศษ"],
      color: "bg-orange-50 border-orange-200"
    },
    {
      icon: Truck,
      title: "ขนส่งภายในประเทศ",
      description: "บริการขนส่งสินค้าภายในประเทศ ครอบคลุมทุกพื้นที่ในประเทศไทย",
      features: ["รถบรรทุกทุกขนาด", "ติดตาม GPS แบบเรียลไทม์", "บรรจุหีบห่อปลอดภัย", "ประกันภัยครอบคลุม"],
      color: "bg-purple-50 border-purple-200"
    },
    {
      icon: Clock,
      title: "บริการด่วนพิเศษ",
      description: "บริการขนส่งด่วนสำหรับสินค้าเร่งด่วน ดำเนินการตลอด 24 ชั่วโมง",
      features: ["ดำเนินการ 24/7", "Fast Track Clearance", "ติดต่อตลอดเวลา", "รับประกันเวลา"],
      color: "bg-red-50 border-red-200"
    },
    {
      icon: Users,
      title: "ที่ปรึกษาโลจิสติกส์",
      description: "ให้คำปรึกษาด้านโลจิสติกส์ วางแผนการขนส่ง และเพิ่มประสิทธิภาพ",
      features: ["วิเคราะห์ต้นทุน", "วางแผนเส้นทาง", "เพิ่มประสิทธิภาพ", "รายงานผลการดำเนินงาน"],
      color: "bg-indigo-50 border-indigo-200"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            บริการของเรา
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            ให้บริการโลจิสติกส์ครบวงจร ตั้งแต่การส่งออก นำเข้า พิธีการศุลกากร 
            ไปจนถึงการขนส่งภายในประเทศ
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className={`${service.color} hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}>
              <CardHeader>
                <div className="p-3 bg-primary/10 rounded-lg w-fit">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link to="/quote">
                  <Button className="w-full" variant="outline">
                    ขอใบเสนอราคา
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

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