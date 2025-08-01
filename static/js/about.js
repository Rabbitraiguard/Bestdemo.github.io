// About page specific JavaScript

document.addEventListener('DOMContentLoaded', function() {
    loadFounders();
    loadValues();
    loadTimeline();
});

// Load founders data
function loadFounders() {
    const foundersData = [
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

    const foundersContainer = document.getElementById('founders-container');
    if (foundersContainer) {
        foundersContainer.innerHTML = foundersData.map(founder => `
            <div class="card p-8">
                <div class="card-header text-center pb-6">
                    <!-- รูปภาพหรือไอคอนผู้ก่อตั้ง -->
                    <div class="w-24 h-24 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                        <i class="fas fa-user h-12 w-12 text-primary text-3xl"></i>
                    </div>
                    
                    <!-- ชื่อและตำแหน่ง -->
                    <h3 class="card-title text-2xl">${founder.name}</h3>
                    <p class="card-description text-lg font-medium text-primary">
                        ${founder.position}
                    </p>
                    <div class="text-secondary font-semibold">
                        ประสบการณ์ ${founder.experience}
                    </div>
                </div>
                
                <div class="card-content space-y-6">
                    <!-- ความเชี่ยวชาญ -->
                    <div>
                        <h4 class="font-semibold mb-2">ความเชี่ยวชาญ:</h4>
                        <p class="text-muted-foreground">${founder.expertise}</p>
                    </div>
                    
                    <!-- ประวัติการศึกษา -->
                    <div>
                        <h4 class="font-semibold mb-2">ประวัติการศึกษาและประสบการณ์:</h4>
                        <p class="text-muted-foreground text-sm leading-relaxed">
                            ${founder.background}
                        </p>
                    </div>

                    <!-- รางวัลและความสำเร็จ -->
                    <div>
                        <h4 class="font-semibold mb-3">รางวัลและความสำเร็จ:</h4>
                        <ul class="space-y-2">
                            ${founder.achievements.map(achievement => `
                                <li class="flex items-start text-sm text-muted-foreground">
                                    <i class="fas fa-award h-4 w-4 text-secondary mr-2 mt-0.5 flex-shrink-0"></i>
                                    ${achievement}
                                </li>
                            `).join('')}
                        </ul>
                    </div>
                </div>
            </div>
        `).join('');
    }
}

// Load company values
function loadValues() {
    const valuesData = [
        {
            icon: "fas fa-bullseye",
            title: "ความแม่นยำ",
            description: "ให้ความสำคัญกับความแม่นยำในทุกขั้นตอน เพื่อให้ลูกค้าได้รับบริการที่ดีที่สุด"
        },
        {
            icon: "fas fa-heart",
            title: "ใส่ใจลูกค้า",
            description: "มุ่งมั่นในการให้บริการที่เกินความคาดหวัง และสร้างความพึงพอใจสูงสุดให้กับลูกค้า"
        },
        {
            icon: "fas fa-award",
            title: "มืออาชีพ",
            description: "ทีมงานที่มีความเชี่ยวชาญและประสบการณ์สูง พร้อมให้คำปรึกษาในทุกด้าน"
        },
        {
            icon: "fas fa-clock",
            title: "ตรงเวลา",
            description: "ให้ความสำคัญกับการส่งมอบตามเวลาที่กำหนด เพื่อสร้างความเชื่อมั่นให้กับลูกค้า"
        }
    ];

    const valuesContainer = document.getElementById('values-container');
    if (valuesContainer) {
        valuesContainer.innerHTML = valuesData.map(value => `
            <div class="card text-center p-6 hover:shadow-lg transition-all duration-300">
                <div class="card-header pb-4">
                    <!-- ไอคอนค่านิยม -->
                    <div class="mx-auto p-4 bg-primary/10 rounded-full w-fit">
                        <i class="${value.icon} h-8 w-8 text-primary text-2xl"></i>
                    </div>
                    <h3 class="card-title text-xl">${value.title}</h3>
                </div>
                <div class="card-content">
                    <p class="text-muted-foreground text-sm leading-relaxed">
                        ${value.description}
                    </p>
                </div>
            </div>
        `).join('');
    }
}

// Load company timeline
function loadTimeline() {
    const timelineData = [
        { year: "2008", event: "ก่อตั้งบริษัท LogiThai Express" },
        { year: "2012", event: "เปิดสาขาที่ท่าเรือแหลมฉบัง" },
        { year: "2015", event: "ได้รับใบรับรองมาตรฐาน ISO 9001:2015" },
        { year: "2018", event: "เปิดสาขาที่สนามบินสุวรรณภูมิ" },
        { year: "2020", event: "เปิดตัวระบบ Digital Logistics Platform" },
        { year: "2023", event: "ขยายบริการครอบคลุม 50+ ประเทศทั่วโลก" }
    ];

    const timelineContainer = document.getElementById('timeline-container');
    if (timelineContainer) {
        timelineContainer.innerHTML = `
            <!-- เส้นเวลากลาง -->
            <div class="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary/20"></div>
            
            <div class="space-y-12">
                ${timelineData.map((milestone, index) => `
                    <div class="flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}">
                        <!-- การ์ดเหตุการณ์ -->
                        <div class="w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}">
                            <div class="card p-6">
                                <div class="text-2xl font-bold text-primary mb-2">${milestone.year}</div>
                                <p class="text-muted-foreground">${milestone.event}</p>
                            </div>
                        </div>
                        
                        <!-- จุดบนเส้นเวลา -->
                        <div class="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background"></div>
                    </div>
                `).join('')}
            </div>
        `;
    }
}