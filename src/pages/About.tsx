// นำเข้าส่วนประกอบที่จำเป็น
import Navbar from "@/components/Navbar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Award, Users, Clock, Globe, Target, Heart } from "lucide-react";
import { Link } from "react-router-dom";

// ข้อมูลผู้ก่อตั้งบริษัท
const companyFounders = [
  {
    name: "คุณสมชาย ใจดี",
    position: "ประธานเจ้าหน้าที่บริหาร (CEO)",
    experience: "25+ ปี",
    expertise: "ผู้เชี่ยวชาญด้านการส่งออก-นำเข้า และพิธีการศุลกากร",
    background: "จบการศึกษาระดับปริญญาโท สาขาการจัดการโลจิสติกส์ จากจุฬาลงกรณ์มหาวิทยาลัย มีประสบการณ์ในอุตสาหกรรมโลจิสติกส์มากกว่า 25 ปี เคยดำรงตำแหน่งผู้บริหารระดับสูงในบริษัทโลจิสติกส์ชั้นนำหลายแห่ง",
    achievements: [
      "รางวัลผู้ประกอบการดีเด่นด้านโลจิสติกส์ ปี 2020",
      "ที่ปรึกษาคณะกรรมการการค้าระหว่างประเทศ",
      "วิทยากรในการฝึกอบรมด้านศุลกากรระดับชาติ"
    ]
  },
  {
    name: "คุณสุรีย์ ชาญโลจิสติกส์",
    position: "รองประธานเจ้าหน้าที่บริหาร (COO)",
    experience: "20+ ปี",
    expertise: "ผู้เชี่ยวชาญด้านการบริหารจัดการและพัฒนาระบบโลจิสติกส์",
    background: "จบการศึกษาระดับปริญญาโท สาขาการจัดการห่วงโซ่อุปทาน จากมหาวิทยาลัยธรรมศาสตร์ มีประสบการณ์ในการพัฒนาระบบโลจิสติกส์และการบริหารจัดการองค์กรมากกว่า 20 ปี",
    achievements: [
      "รางวัลนวัตกรรมด้านโลจิสติกส์ ปี 2019",
      "ผู้นำในการพัฒนาระบบ Digital Logistics",
      "กรรมการสมาคมผู้ประกอบการโลจิสติกส์ไทย"
    ]
  }
];

// ค่านิยมขององค์กร
const organizationValues = [
  {
    icon: Target,
    title: "ความแม่นยำ",
    description: "ให้ความสำคัญกับความแม่นยำในทุกขั้นตอน เพื่อให้ลูกค้าได้รับบริการที่ดีที่สุด"
  },
  {
    icon: Heart,
    title: "ใส่ใจลูกค้า",
    description: "มุ่งมั่นในการให้บริการที่เกินความคาดหวัง และสร้างความพึงพอใจสูงสุดให้กับลูกค้า"
  },
  {
    icon: Award,
    title: "มืออาชีพ",
    description: "ทีมงานที่มีความเชี่ยวชาญและประสบการณ์สูง พร้อมให้คำปรึกษาในทุกด้าน"
  },
  {
    icon: Clock,
    title: "ตรงเวลา",
    description: "ให้ความสำคัญกับการส่งมอบตามเวลาที่กำหนด เพื่อสร้างความเชื่อมั่นให้กับลูกค้า"
  }
];

// เหตุการณ์สำคัญของบริษัท
const companyTimeline = [
  { year: "2008", event: "ก่อตั้งบริษัท LogiThai Express" },
  { year: "2012", event: "เปิดสาขาที่ท่าเรือแหลมฉบัง" },
  { year: "2015", event: "ได้รับใบรับรองมาตรฐาน ISO 9001:2015" },
  { year: "2018", event: "เปิดสาขาที่สนามบินสุวรรณภูมิ" },
  { year: "2020", event: "เปิดตัวระบบ Digital Logistics Platform" },
  { year: "2023", event: "ขยายบริการครอบคลุม 50+ ประเทศทั่วโลก" }
];

// สถิติสำคัญของบริษัท
const companyStatistics = [
  { number: "15+", label: "ปีประสบการณ์", bgColor: "bg-primary/5", textColor: "text-primary" },
  { number: "1,000+", label: "ลูกค้า", bgColor: "bg-secondary/10", textColor: "text-secondary" },
  { number: "50+", label: "ประเทศ", bgColor: "bg-primary/5", textColor: "text-primary" },
  { number: "99.9%", label: "ความพึงพอใจ", bgColor: "bg-secondary/10", textColor: "text-secondary" }
];

// ส่วนประกอบหน้าเกี่ยวกับเรา
const About = () => {

  // ส่วนประกอบสถิติบริษัท
  const CompanyStatisticsSection = () => (
    <div className="grid grid-cols-2 gap-6">
      {companyStatistics.map((stat, index) => (
        <div key={index} className={`text-center p-6 ${stat.bgColor} rounded-lg`}>
          <div className={`text-3xl font-bold ${stat.textColor} mb-2`}>{stat.number}</div>
          <div className="text-sm text-muted-foreground">{stat.label}</div>
        </div>
      ))}
    </div>
  );

  // ส่วนประกอบข้อมูลผู้ก่อตั้ง
  const FoundersSection = () => (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      {companyFounders.map((founder, index) => (
        <Card key={index} className="p-8">
          <CardHeader className="text-center pb-6">
            {/* รูปภาพหรือไอคอนผู้ก่อตั้ง */}
            <div className="w-24 h-24 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
              <Users className="h-12 w-12 text-primary" />
            </div>
            
            {/* ชื่อและตำแหน่ง */}
            <CardTitle className="text-2xl">{founder.name}</CardTitle>
            <CardDescription className="text-lg font-medium text-primary">
              {founder.position}
            </CardDescription>
            <div className="text-secondary font-semibold">
              ประสบการณ์ {founder.experience}
            </div>
          </CardHeader>
          
          <CardContent className="space-y-6">
            {/* ความเชี่ยวชาญ */}
            <div>
              <h4 className="font-semibold mb-2">ความเชี่ยวชาญ:</h4>
              <p className="text-muted-foreground">{founder.expertise}</p>
            </div>
            
            {/* ประวัติการศึกษา */}
            <div>
              <h4 className="font-semibold mb-2">ประวัติการศึกษาและประสบการณ์:</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {founder.background}
              </p>
            </div>

            {/* รางวัลและความสำเร็จ */}
            <div>
              <h4 className="font-semibold mb-3">รางวัลและความสำเร็จ:</h4>
              <ul className="space-y-2">
                {founder.achievements.map((achievement, achievementIndex) => (
                  <li key={achievementIndex} className="flex items-start text-sm text-muted-foreground">
                    <Award className="h-4 w-4 text-secondary mr-2 mt-0.5 flex-shrink-0" />
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );

  // ส่วนประกอบค่านิยมองค์กร
  const CompanyValuesSection = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {organizationValues.map((value, index) => {
        const IconComponent = value.icon;
        return (
          <Card key={index} className="text-center p-6 hover:shadow-lg transition-all duration-300">
            <CardHeader className="pb-4">
              {/* ไอคอนค่านิยม */}
              <div className="mx-auto p-4 bg-primary/10 rounded-full w-fit">
                <IconComponent className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-xl">{value.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {value.description}
              </p>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );

  // ส่วนประกอบเส้นทางการเติบโต
  const TimelineSection = () => (
    <div className="relative">
      {/* เส้นเวลากลาง */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary/20"></div>
      
      <div className="space-y-12">
        {companyTimeline.map((milestone, index) => (
          <div key={index} className={`flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
            {/* การ์ดเหตุการณ์ */}
            <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
              <Card className="p-6">
                <div className="text-2xl font-bold text-primary mb-2">{milestone.year}</div>
                <p className="text-muted-foreground">{milestone.event}</p>
              </Card>
            </div>
            
            {/* จุดบนเส้นเวลา */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background"></div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* ส่วนหัวหน้า */}
      <section className="bg-gradient-to-r from-primary to-primary-glow text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              เกี่ยวกับ LogiThai Express
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-white/90">
              ผู้นำด้านโลจิสติกส์ในประเทศไทย ให้บริการมามากกว่า 15 ปี 
              ด้วยความเชี่ยวชาญและประสบการณ์ที่ยาวนาน
            </p>
          </div>
        </div>
      </section>

      {/* ประวัติความเป็นมา */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* เนื้อหาประวัติ */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                ประวัติความเป็นมา
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  LogiThai Express ก่อตั้งขึ้นในปี 2008 โดยกลุ่มผู้เชี่ยวชาญด้านโลจิสติกส์ 
                  ที่มีประสบการณ์ยาวนานในอุตสาหกรรมการขนส่งและพิธีการศุลกากร
                </p>
                <p>
                  เราเริ่มต้นจากความต้องการที่จะให้บริการโลจิสติกส์ที่มีคุณภาพ 
                  โดยใส่ใจในรายละเอียดและมุ่งมั่นในการสร้างความพึงพอใจให้กับลูกค้า
                </p>
                <p>
                  ปัจจุบันเราเป็นหนึ่งในผู้นำด้านโลจิสติกส์ในประเทศไทย 
                  โดยให้บริการลูกค้ามากกว่า 1,000 ราย ครอบคลุมการส่งออก-นำเข้าไปยัง 50+ ประเทศทั่วโลก
                </p>
              </div>
            </div>
            
            {/* สถิติบริษัท */}
            <CompanyStatisticsSection />
          </div>
        </div>
      </section>

      {/* ส่วนผู้ก่อตั้ง */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">ผู้ก่อตั้ง</h2>
            <p className="text-xl text-muted-foreground">
              ผู้นำองค์กรที่มีประสบการณ์และความเชี่ยวชาญระดับสูง
            </p>
          </div>
          
          <FoundersSection />
        </div>
      </section>

      {/* ค่านิยมองค์กร */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">ค่านิยมองค์กร</h2>
            <p className="text-xl text-muted-foreground">
              หลักการที่เราใช้ในการให้บริการและดำเนินธุรกิจ
            </p>
          </div>
          
          <CompanyValuesSection />
        </div>
      </section>

      {/* เส้นทางการเติบโต */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">เส้นทางการเติบโต</h2>
            <p className="text-xl text-muted-foreground">
              ความก้าวหน้าของเราตลอด 15+ ปีที่ผ่านมา
            </p>
          </div>
          
          <TimelineSection />
        </div>
      </section>

      {/* ส่วนเรียกร้องให้ติดต่อ */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            พร้อมเป็นพันธมิตรทางธุรกิจของคุณ
          </h2>
          <p className="text-xl mb-8 text-white/90">
            เข้าร่วมเป็นส่วนหนึ่งของลูกค้า 1,000+ รายที่วางใจให้เราดูแลธุรกิจโลจิสติกส์
          </p>
          
          {/* ปุ่มติดต่อ */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/quote">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90">
                ขอใบเสนอราคา
              </Button>
            </Link>
            <Link to="/services">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                ดูบริการของเรา
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;