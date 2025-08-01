// นำเข้าส่วนประกอบต่างๆ ที่จำเป็น
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// นำเข้าหน้าต่างๆ
import Index from "./pages/Index";
import Services from "./pages/Services";
import About from "./pages/About";
import Quote from "./pages/Quote";
import NotFound from "./pages/NotFound";

// สร้างตัวจัดการข้อมูล (สำหรับจัดการ API calls)
const dataManager = new QueryClient();

// ส่วนประกอบหลักของแอปพลิเคชัน
const App = () => {
  return (
    // ตัวจัดการข้อมูลสำหรับทั้งแอป
    <QueryClientProvider client={dataManager}>
      {/* ตัวจัดการ Tooltip */}
      <TooltipProvider>
        {/* ตัวแจ้งเตือนแบบต่างๆ */}
        <Toaster />
        <Sonner />
        
        {/* ตัวจัดการเส้นทาง (Router) */}
        <BrowserRouter>
          <Routes>
            {/* หน้าแรก */}
            <Route path="/" element={<Index />} />
            
            {/* หน้าบริการ */}
            <Route path="/services" element={<Services />} />
            
            {/* หน้าเกี่ยวกับเรา */}
            <Route path="/about" element={<About />} />
            
            {/* หน้าขอใบเสนอราคา */}
            <Route path="/quote" element={<Quote />} />
            
            {/* หน้าสำหรับเส้นทางที่ไม่พบ (ต้องอยู่ล่างสุดเสมอ) */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
