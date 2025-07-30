import { useState } from "react";
import Navbar from "@/components/Navbar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { Calculator, FileText, Phone, Mail, MapPin, Clock } from "lucide-react";

const Quote = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    companyName: "",
    contactName: "",
    email: "",
    phone: "",
    serviceType: "",
    origin: "",
    destination: "",
    cargoType: "",
    weight: "",
    dimensions: "",
    urgency: "",
    additionalServices: [] as string[],
    description: ""
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleServiceChange = (service: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      additionalServices: checked 
        ? [...prev.additionalServices, service]
        : prev.additionalServices.filter(s => s !== service)
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!formData.companyName || !formData.contactName || !formData.email || !formData.phone || !formData.serviceType) {
      toast({
        title: "กรุณากรอกข้อมูลให้ครบถ้วน",
        description: "โปรดตรวจสอบข้อมูลที่จำเป็นทั้งหมด",
        variant: "destructive",
      });
      return;
    }

    // Success message
    toast({
      title: "ส่งคำขอใบเสนอราคาสำเร็จ!",
      description: "เราจะติดต่อกลับภายใน 24 ชั่วโมง",
    });

    // Reset form
    setFormData({
      companyName: "",
      contactName: "",
      email: "",
      phone: "",
      serviceType: "",
      origin: "",
      destination: "",
      cargoType: "",
      weight: "",
      dimensions: "",
      urgency: "",
      additionalServices: [],
      description: ""
    });
  };

  const additionalServiceOptions = [
    "ประกันภัยสินค้า",
    "บรรจุหีบห่อพิเศษ",
    "การติดตาม GPS",
    "บริการเก็บสินค้า",
    "การตรวจสอบคุณภาพ",
    "บริการขนของขึ้น-ลง",
    "การประกอบ/ติดตั้ง",
    "บริการด่วนพิเศษ"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary-glow text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              ขอใบเสนอราคา
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-white/90">
              กรอกข้อมูลเพื่อรับใบเสนอราคาที่เหมาะสมกับความต้องการของคุณ
              เราจะติดต่อกลับภายใน 24 ชั่วโมง
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1">
            <Card className="sticky top-8">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Phone className="h-5 w-5 mr-2 text-primary" />
                  ติดต่อเรา
                </CardTitle>
                <CardDescription>
                  ช่องทางการติดต่ออื่นๆ หากต้องการความช่วยเหลือเร่งด่วน
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start space-x-3">
                  <Phone className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <div className="font-medium">โทรศัพท์</div>
                    <div className="text-muted-foreground">02-123-4567</div>
                    <div className="text-muted-foreground">081-234-5678</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Mail className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <div className="font-medium">อีเมล</div>
                    <div className="text-muted-foreground">info@logithai.com</div>
                    <div className="text-muted-foreground">sales@logithai.com</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <div className="font-medium">ที่อยู่</div>
                    <div className="text-muted-foreground text-sm">
                      123 ถนนสาทร แขวงสีลม<br />
                      เขตบางรัก กรุงเทพฯ 10500
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Clock className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <div className="font-medium">เวลาทำการ</div>
                    <div className="text-muted-foreground text-sm">
                      จันทร์-ศุกร์: 8:00-18:00<br />
                      เสาร์: 8:00-12:00<br />
                      บริการฉุกเฉิน 24/7
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <div className="text-sm text-muted-foreground mb-3">
                    💡 <strong>เคล็ดลับ:</strong> ยิ่งให้ข้อมูลละเอียด ยิ่งได้ราคาที่แม่นยำ
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Quote Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calculator className="h-6 w-6 mr-2 text-primary" />
                  แบบฟอร์มขอใบเสนอราคา
                </CardTitle>
                <CardDescription>
                  กรุณากรอกข้อมูลให้ครบถ้วนเพื่อให้เราสามารถเสนอราคาที่เหมาะสมที่สุด
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Company Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="companyName" className="text-base font-medium">
                        ชื่อบริษัท *
                      </Label>
                      <Input
                        id="companyName"
                        value={formData.companyName}
                        onChange={(e) => handleInputChange("companyName", e.target.value)}
                        placeholder="กรอกชื่อบริษัท"
                        className="mt-1"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="contactName" className="text-base font-medium">
                        ชื่อผู้ติดต่อ *
                      </Label>
                      <Input
                        id="contactName"
                        value={formData.contactName}
                        onChange={(e) => handleInputChange("contactName", e.target.value)}
                        placeholder="กรอกชื่อผู้ติดต่อ"
                        className="mt-1"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="email" className="text-base font-medium">
                        อีเมล *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        placeholder="กรอกอีเมล"
                        className="mt-1"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone" className="text-base font-medium">
                        เบอร์โทรศัพท์ *
                      </Label>
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        placeholder="กรอกเบอร์โทรศัพท์"
                        className="mt-1"
                        required
                      />
                    </div>
                  </div>

                  {/* Service Information */}
                  <div className="border-t pt-6">
                    <h3 className="text-lg font-semibold mb-4">ข้อมูลบริการ</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="serviceType" className="text-base font-medium">
                          ประเภทบริการ *
                        </Label>
                        <Select value={formData.serviceType} onValueChange={(value) => handleInputChange("serviceType", value)}>
                          <SelectTrigger className="mt-1">
                            <SelectValue placeholder="เลือกประเภทบริการ" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="export">บริการส่งออก</SelectItem>
                            <SelectItem value="import">บริการนำเข้า</SelectItem>
                            <SelectItem value="customs">พิธีการศุลกากร</SelectItem>
                            <SelectItem value="domestic">ขนส่งภายในประเทศ</SelectItem>
                            <SelectItem value="consulting">ที่ปรึกษาโลจิสติกส์</SelectItem>
                            <SelectItem value="other">อื่นๆ</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="urgency" className="text-base font-medium">
                          ความเร่งด่วน
                        </Label>
                        <Select value={formData.urgency} onValueChange={(value) => handleInputChange("urgency", value)}>
                          <SelectTrigger className="mt-1">
                            <SelectValue placeholder="เลือกความเร่งด่วน" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="standard">ปกติ (7-14 วัน)</SelectItem>
                            <SelectItem value="urgent">เร่งด่วน (3-7 วัน)</SelectItem>
                            <SelectItem value="express">ด่วนพิเศษ (1-3 วัน)</SelectItem>
                            <SelectItem value="same-day">ภายในวันเดียว</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                      <div>
                        <Label htmlFor="origin" className="text-base font-medium">
                          จุดต้นทาง
                        </Label>
                        <Input
                          id="origin"
                          value={formData.origin}
                          onChange={(e) => handleInputChange("origin", e.target.value)}
                          placeholder="เช่น กรุงเทพฯ, ประเทศไทย"
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="destination" className="text-base font-medium">
                          จุดปลายทาง
                        </Label>
                        <Input
                          id="destination"
                          value={formData.destination}
                          onChange={(e) => handleInputChange("destination", e.target.value)}
                          placeholder="เช่น โตเกียว, ญี่ปุ่น"
                          className="mt-1"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Cargo Information */}
                  <div className="border-t pt-6">
                    <h3 className="text-lg font-semibold mb-4">ข้อมูลสินค้า</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div>
                        <Label htmlFor="cargoType" className="text-base font-medium">
                          ประเภทสินค้า
                        </Label>
                        <Input
                          id="cargoType"
                          value={formData.cargoType}
                          onChange={(e) => handleInputChange("cargoType", e.target.value)}
                          placeholder="เช่น อุปกรณ์อิเล็กทรอนิกส์"
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="weight" className="text-base font-medium">
                          น้ำหนัก (กก.)
                        </Label>
                        <Input
                          id="weight"
                          value={formData.weight}
                          onChange={(e) => handleInputChange("weight", e.target.value)}
                          placeholder="เช่น 1000"
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="dimensions" className="text-base font-medium">
                          ขนาด (ก×ย×ส ซม.)
                        </Label>
                        <Input
                          id="dimensions"
                          value={formData.dimensions}
                          onChange={(e) => handleInputChange("dimensions", e.target.value)}
                          placeholder="เช่น 100×80×60"
                          className="mt-1"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Additional Services */}
                  <div className="border-t pt-6">
                    <h3 className="text-lg font-semibold mb-4">บริการเสริม</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {additionalServiceOptions.map((service) => (
                        <div key={service} className="flex items-center space-x-2">
                          <Checkbox
                            id={service}
                            checked={formData.additionalServices.includes(service)}
                            onCheckedChange={(checked) => handleServiceChange(service, checked as boolean)}
                          />
                          <Label htmlFor={service} className="text-sm font-normal">
                            {service}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Additional Information */}
                  <div className="border-t pt-6">
                    <Label htmlFor="description" className="text-base font-medium">
                      รายละเอียดเพิ่มเติม
                    </Label>
                    <Textarea
                      id="description"
                      value={formData.description}
                      onChange={(e) => handleInputChange("description", e.target.value)}
                      placeholder="กรุณาระบุรายละเอียดเพิ่มเติมที่ต้องการให้เราทราบ..."
                      className="mt-1 min-h-[100px]"
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 pt-6">
                    <Button type="submit" size="lg" className="flex-1">
                      <FileText className="h-5 w-5 mr-2" />
                      ส่งคำขอใบเสนอราคา
                    </Button>
                    <Button type="button" variant="outline" size="lg" className="sm:w-auto">
                      <Phone className="h-5 w-5 mr-2" />
                      โทรปรึกษา
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quote;