# โลจิสติกส์ไทย - เว็บไซต์บริการโลจิสติกส์

เว็บไซต์บริการโลจิสติกส์ครบวงจร ด้วยเทคโนโลยี HTML, CSS และ JavaScript ที่เรียบง่ายและใช้งานได้ทันที

## คุณสมบัติ

- 🚛 หน้าแรกแสดงบริการหลัก
- 📋 หน้าบริการแสดงรายละเอียดครบถ้วน
- 👥 หน้าเกี่ยวกับเราพร้อมข้อมูลผู้บริหาร
- 📝 หน้าขอใบเสนอราคาพร้อมฟอร์มที่สมบูรณ์
- 📱 Responsive Design สำหรับทุกขนาดหน้าจอ
- ⚡ โหลดเร็วและใช้งานง่าย

## โครงสร้างไฟล์

```
simple-logistics-website/
├── index.html          # หน้าแรก
├── services.html       # หน้าบริการ
├── about.html          # หน้าเกี่ยวกับเรา
├── quote.html          # หน้าขอใบเสนอราคา
├── css/
│   └── styles.css      # ไฟล์ CSS หลัก
├── js/
│   └── main.js         # ไฟล์ JavaScript หลัก
├── images/
│   └── favicon.ico     # ไอคอนเว็บไซต์
└── README.md           # คู่มือการใช้งาน
```

## การติดตั้งและใช้งาน

### 1. การใช้งานทั่วไป
- เปิดไฟล์ `index.html` ด้วยเว็บเบราว์เซอร์
- เว็บไซต์พร้อมใช้งานทันที

### 2. การ Deploy บน GitHub Pages

#### ขั้นตอนที่ 1: อัปโหลดไฟล์
1. สร้าง Repository ใหม่บน GitHub
2. อัปโหลดไฟล์ทั้งหมดใน folder นี้
3. ไปที่ Settings > Pages
4. เลือก Source: Deploy from a branch
5. เลือก Branch: main (หรือ master)
6. กด Save

#### ขั้นตอนที่ 2: เข้าถึงเว็บไซต์
- เว็บไซต์จะพร้อมใช้งานที่ `https://username.github.io/repository-name`

### 3. การ Deploy บน Netlify
1. ไปที่ [Netlify.com](https://netlify.com)
2. ลาก folder ทั้งหมดไปวางในหน้า deploy
3. เว็บไซต์จะทำงานทันที

### 4. การ Deploy บน Vercel
1. ไปที่ [Vercel.com](https://vercel.com)
2. เชื่อมต่อกับ GitHub repository
3. deploy โดยอัตโนมัติ

## การปรับแต่ง

### 1. เปลี่ยนข้อมูลบริษัท
แก้ไขข้อมูลใน HTML files:
- ชื่อบริษัท: แก้ในทุกไฟล์ที่มี "โลจิสติกส์ไทย"
- ข้อมูลติดต่อ: แก้ใน footer ของทุกหน้า
- ที่อยู่: แก้ในส่วน footer และหน้า quote.html

### 2. เปลี่ยนสีธีม
แก้ไขใน `css/styles.css`:
```css
/* สีหลัก */
#2563eb -> สีที่ต้องการ

/* สีรอง */
#1d4ed8 -> สีที่ต้องการ
```

### 3. เพิ่มหน้าใหม่
1. สร้างไฟล์ HTML ใหม่
2. คัดลอก template จากหน้าที่มีอยู่
3. เพิ่ม navigation link ในทุกหน้า

### 4. เปลี่ยนฟอนต์
แก้ไขใน HTML head section:
```html
<link href="https://fonts.googleapis.com/css2?family=FONT_NAME" rel="stylesheet">
```

## ฟีเจอร์

### JavaScript Functions
- ✅ Mobile navigation (hamburger menu)
- ✅ Form validation
- ✅ Smooth scrolling
- ✅ Active navigation highlighting
- ✅ Form submission handling
- ✅ Responsive design support

### CSS Features  
- ✅ Modern gradient backgrounds
- ✅ Card-based layouts
- ✅ Hover effects and animations
- ✅ Mobile-first responsive design
- ✅ Professional typography
- ✅ Icon integration with Font Awesome

## เบราว์เซอร์ที่รองรับ

- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Safari 12+
- ✅ Edge 79+
- ✅ มือถือทุกระบบ

## การติดต่อและสนับสนุน

หากต้องการความช่วยเหลือในการปรับแต่งหรือพัฒนาเพิ่มเติม สามารถติดต่อได้ที่:

- 📧 Email: info@logithai.com
- 📞 โทร: 02-123-4567
- 💬 ตัวอย่างการใช้งาน: [เปิดไฟล์ index.html]

## ลิขสิทธิ์

© 2024 โลจิสติกส์ไทย - สงวนลิขสิทธิ์