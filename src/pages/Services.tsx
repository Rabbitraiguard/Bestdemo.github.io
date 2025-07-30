import Navbar from "@/components/Navbar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Ship, Plane, FileCheck, Truck, Clock, Users, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const ServicesPage = () => {
  const mainServices = [
    {
      icon: Ship,
      title: "บริการส่งออก",
      description: "บริการส่งออกสินค้าทางเรือและทางอากาศ พร้อมจัดการเอกสารครบถ้วน",
      details: [
        "ให้คำปรึกษาเกี่ยวกับระเบียบการส่งออก",
        "จัดทำเอกสารส่งออกครบถ้วน (Invoice, Packing List, Certificate of Origin)",
        "ประสานงานกับสายการบิน/เรือ",
        "ติดตามสถานะการขนส่งแบบเรียลไทม์",
        "จัดการประกันภัยสินค้า",
        "บริการ Door to Door"
      ],
      benefits: [
        "ลดต้นทุนการขนส่ง",
        "ประหยัดเวลา",
        "ลดความเสี่ยง",
        "เพิ่มความน่าเชื่อถือ"
      ]
    },
    {
      icon: Plane,
      title: "บริการนำเข้า",
      description: "บริการนำเข้าสินค้าจากต่างประเทศ จัดการพิธีการศุลกากรครบวงจร",
      details: [
        "ให้คำปรึกษาระเบียบการนำเข้า",
        "ผ่านพิธีการศุลกากรขาเข้า",
        "จัดเก็บสินค้าในคลังสินค้าที่ได้มาตรฐาน",
        "ขนส่งสินค้าถึงปลายทางอย่างปลอดภัย",
        "ตรวจสอบคุณภาพและปริมาณสินค้า",
        "บริการหลังการขาย"
      ],
      benefits: [
        "การนำเข้าที่รวดเร็ว",
        "ปลอดภัยและน่าเชื่อถือ",
        "ต้นทุนที่แข่งขันได้",
        "บริการครบวงจร"
      ]
    },
    {
      icon: FileCheck,
      title: "พิธีการทางศุลกากร",
      description: "ผู้เชี่ยวชาญด้านพิธีการศุลกากร จัดการเอกสารและภาษีอากรทุกประเภท",
      details: [
        "ยื่นใบขนสินค้าขาเข้า-ขาออก",
        "คำนวณภาษีอากรและค่าธรรมเนียมต่างๆ",
        "ประสานงานการตรวจปล่อยสินค้า",
        "ยื่นขอใบอนุญาตพิเศษ (License)",
        "จัดการเอกสาร FDA, มอก., กรมประมง",
        "บริการปรึกษาด้านกฎหมายศุลกากร"
      ],
      benefits: [
        "ผ่านศุลกากรรวดเร็ว",
        "ถูกต้องตามกฎหมาย",
        "ประหยัดค่าใช้จ่าย",
        "หลีกเลี่ยงปัญหา"
      ]
    }
  ];

  const additionalServices = [
    {
      icon: Truck,
      title: "ขนส่งภายในประเทศ",
      description: "บริการขนส่งสินค้าภายในประเทศ ครอบคลุมทุกพื้นที่ในประเทศไทย"
    },
    {
      icon: Clock,
      title: "บริการด่วนพิเศษ",
      description: "บริการขนส่งด่วนสำหรับสินค้าเร่งด่วน ดำเนินการตลอด 24 ชั่วโมง"
    },
    {
      icon: Users,
      title: "ที่ปรึกษาโลจิสติกส์",
      description: "ให้คำปรึกษาด้านโลจิสติกส์ วางแผนการขนส่ง และเพิ่มประสิทธิภาพ"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary-glow text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              บริการโลจิสติกส์ครบวงจร
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-white/90">
              ผู้เชี่ยวชาญด้านการส่งออก นำเข้า และพิธีการทางศุลกากร 
              ให้บริการครบวงจรด้วยประสบการณ์กว่า 15 ปี
            </p>
            <Link to="/quote">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90">
                ขอใบเสนอราคาฟรี
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">บริการหลักของเรา</h2>
            <p className="text-xl text-muted-foreground">
              บริการโลจิสติกส์มืออาชีพที่ได้รับการยอมรับในระดับสากล
            </p>
          </div>

          <div className="space-y-16">
            {mainServices.map((service, index) => (
              <div key={index} className={`flex flex-col lg:flex-row items-center gap-12 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="lg:w-1/2">
                  <Card className="p-8 shadow-lg border-l-4 border-l-primary">
                    <CardHeader className="p-0 mb-6">
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="p-3 bg-primary/10 rounded-lg">
                          <service.icon className="h-8 w-8 text-primary" />
                        </div>
                        <CardTitle className="text-2xl">{service.title}</CardTitle>
                      </div>
                      <CardDescription className="text-lg">
                        {service.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="p-0">
                      <h4 className="font-semibold mb-4 text-lg">รายละเอียดบริการ:</h4>
                      <ul className="space-y-2 mb-6">
                        {service.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                      <Link to="/quote">
                        <Button className="w-full lg:w-auto">
                          ขอใบเสนอราคา
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="lg:w-1/2">
                  <div className="bg-primary/5 p-8 rounded-lg">
                    <h4 className="font-semibold mb-4 text-lg">ประโยชน์ที่คุณได้รับ:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {service.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-sm">
                          <div className="w-2 h-2 bg-secondary rounded-full" />
                          <span className="font-medium">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">บริการเสริม</h2>
            <p className="text-xl text-muted-foreground">
              บริการเพิ่มเติมเพื่อตอบสนองความต้องการที่หลากหลาย
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="mx-auto p-4 bg-primary/10 rounded-full w-fit">
                    <service.icon className="h-10 w-10 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Link to="/quote">
                    <Button variant="outline" className="w-full">
                      สอบถามเพิ่มเติม
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            พร้อมให้บริการคุณแล้ววันนี้
          </h2>
          <p className="text-xl mb-8 text-white/90">
            ติดต่อเราเพื่อรับคำปรึกษาฟรีและใบเสนอราคาที่เหมาะสมกับความต้องการของคุณ
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/quote">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90">
                ขอใบเสนอราคา
              </Button>
            </Link>
            <Link to="/about">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                เกี่ยวกับเรา
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;