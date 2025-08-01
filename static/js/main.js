// Main JavaScript file for LogiThai Express website

// Global variables
let currentPage = window.location.pathname;

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    loadPageContent();
    setupMobileMenu();
});

// Initialize navigation and set active states
function initializeNavigation() {
    loadNavbar();
    setActiveNavItem();
}

// Load navbar into containers
function loadNavbar() {
    const navbarHTML = `
        <nav class="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b sticky top-0 z-50">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex justify-between h-16">
                    <!-- โลโก้บริษัท -->
                    <div class="flex items-center">
                        <a href="/" class="flex items-center space-x-2">
                            <i class="fas fa-box h-8 w-8 text-primary text-2xl"></i>
                            <span class="font-bold text-xl text-primary">LogiThai Express</span>
                        </a>
                    </div>

                    <!-- เมนูสำหรับคอมพิวเตอร์ -->
                    <div class="hidden md:flex items-center space-x-8">
                        <a href="/" class="nav-link flex items-center space-x-1 px-3 py-2 text-sm font-medium transition-colors hover:text-primary">
                            <i class="fas fa-home h-4 w-4"></i>
                            <span>หน้าแรก</span>
                        </a>
                        <a href="/services.html" class="nav-link flex items-center space-x-1 px-3 py-2 text-sm font-medium transition-colors hover:text-primary">
                            <i class="fas fa-truck h-4 w-4"></i>
                            <span>บริการ</span>
                        </a>
                        <a href="/about.html" class="nav-link flex items-center space-x-1 px-3 py-2 text-sm font-medium transition-colors hover:text-primary">
                            <i class="fas fa-user h-4 w-4"></i>
                            <span>เกี่ยวกับเรา</span>
                        </a>
                        <a href="/quote.html" class="nav-link flex items-center space-x-1 px-3 py-2 text-sm font-medium transition-colors hover:text-primary">
                            <i class="fas fa-file-text h-4 w-4"></i>
                            <span>ขอใบเสนอราคา</span>
                        </a>
                        
                        <!-- ปุ่มติดต่อเรา -->
                        <button class="btn btn-secondary" onclick="showContactModal()">
                            ติดต่อเรา
                        </button>
                    </div>

                    <!-- ปุ่มเมนูมือถือ -->
                    <div class="md:hidden flex items-center">
                        <button id="mobile-menu-button" class="btn btn-ghost">
                            <i id="menu-icon" class="fas fa-bars h-6 w-6"></i>
                        </button>
                    </div>
                </div>

                <!-- เมนูสำหรับมือถือ -->
                <div id="mobile-menu" class="md:hidden hidden">
                    <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background border-t">
                        <a href="/" class="mobile-nav-link flex items-center space-x-2 px-3 py-2 text-base font-medium transition-colors">
                            <i class="fas fa-home h-5 w-5"></i>
                            <span>หน้าแรก</span>
                        </a>
                        <a href="/services.html" class="mobile-nav-link flex items-center space-x-2 px-3 py-2 text-base font-medium transition-colors">
                            <i class="fas fa-truck h-5 w-5"></i>
                            <span>บริการ</span>
                        </a>
                        <a href="/about.html" class="mobile-nav-link flex items-center space-x-2 px-3 py-2 text-base font-medium transition-colors">
                            <i class="fas fa-user h-5 w-5"></i>
                            <span>เกี่ยวกับเรา</span>
                        </a>
                        <a href="/quote.html" class="mobile-nav-link flex items-center space-x-2 px-3 py-2 text-base font-medium transition-colors">
                            <i class="fas fa-file-text h-5 w-5"></i>
                            <span>ขอใบเสนอราคา</span>
                        </a>
                        
                        <!-- ปุ่มติดต่อเราสำหรับมือถือ -->
                        <button class="btn btn-secondary w-full mt-4" onclick="showContactModal()">
                            ติดต่อเรา
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    `;

    const navbarContainer = document.getElementById('navbar-container');
    if (navbarContainer) {
        navbarContainer.innerHTML = navbarHTML;
        setupMobileMenu();
    }
}

// Set active navigation item based on current page
function setActiveNavItem() {
    const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
    navLinks.forEach(link => {
        link.classList.remove('active');
        const href = link.getAttribute('href');
        
        if ((currentPage === '/' || currentPage === '/index.html') && href === '/') {
            link.classList.add('active');
        } else if (currentPage.includes(href) && href !== '/') {
            link.classList.add('active');
        }
    });
}

// Setup mobile menu toggle
function setupMobileMenu() {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIcon = document.getElementById('menu-icon');

    if (mobileMenuButton && mobileMenu && menuIcon) {
        mobileMenuButton.addEventListener('click', function() {
            if (mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.remove('hidden');
                menuIcon.classList.remove('fa-bars');
                menuIcon.classList.add('fa-times');
            } else {
                mobileMenu.classList.add('hidden');
                menuIcon.classList.remove('fa-times');
                menuIcon.classList.add('fa-bars');
            }
        });
    }
}

// Load page-specific content
function loadPageContent() {
    if (currentPage === '/' || currentPage === '/index.html') {
        loadHomepageServices();
    }
}

// Load services for homepage
function loadHomepageServices() {
    const servicesData = [
        {
            icon: "fas fa-ship",
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
            icon: "fas fa-plane",
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
            icon: "fas fa-file-check",
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
            icon: "fas fa-truck",
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
            icon: "fas fa-clock",
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
            icon: "fas fa-users",
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

    const servicesGrid = document.getElementById('services-grid');
    if (servicesGrid) {
        servicesGrid.innerHTML = servicesData.map(service => `
            <div class="service-card ${service.bgColor} hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div class="card-header">
                    <!-- ไอคอนบริการ -->
                    <div class="p-3 bg-primary/10 rounded-lg w-fit">
                        <i class="${service.icon} h-8 w-8 text-primary text-2xl"></i>
                    </div>
                    
                    <!-- ชื่อและคำบรรยายบริการ -->
                    <h3 class="card-title text-xl">${service.title}</h3>
                    <p class="card-description text-base">
                        ${service.description}
                    </p>
                </div>
                
                <div class="card-content">
                    <!-- รายการฟีเจอร์ของบริการ -->
                    <ul class="space-y-2 mb-6">
                        ${service.features.map(feature => `
                            <li class="flex items-center text-sm">
                                <div class="w-2 h-2 bg-primary rounded-full mr-3"></div>
                                ${feature}
                            </li>
                        `).join('')}
                    </ul>
                    
                    <!-- ปุ่มขอใบเสนอราคา -->
                    <a href="/quote.html">
                        <button class="btn btn-outline w-full">
                            ขอใบเสนอราคา
                        </button>
                    </a>
                </div>
            </div>
        `).join('');
    }
}

// Toast notification system
function showToast(message, type = 'success') {
    const toastContainer = document.getElementById('toast-container');
    if (!toastContainer) return;

    const toast = document.createElement('div');
    toast.className = `toast ${type === 'success' ? 'toast-success' : 'toast-error'}`;
    toast.innerHTML = `
        <div class="flex items-center justify-between">
            <div class="flex items-center">
                <i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'} mr-2"></i>
                <span>${message}</span>
            </div>
            <button onclick="this.parentElement.parentElement.remove()" class="ml-4">
                <i class="fas fa-times"></i>
            </button>
        </div>
    `;

    toastContainer.appendChild(toast);

    // Auto remove after 5 seconds
    setTimeout(() => {
        if (toast.parentElement) {
            toast.remove();
        }
    }, 5000);
}

// Contact modal functionality
function showContactModal() {
    showToast('กรุณาติดต่อเราที่ 02-123-4567 หรือ info@logithai.com', 'success');
}

// Form validation helpers
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validatePhone(phone) {
    const re = /^[0-9]{8,10}$/;
    return re.test(phone.replace(/[-\s]/g, ''));
}

// Smooth scrolling for anchor links
document.addEventListener('click', function(e) {
    if (e.target.tagName === 'A' && e.target.getAttribute('href').startsWith('#')) {
        e.preventDefault();
        const targetId = e.target.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    }
});

// Handle navigation clicks
document.addEventListener('click', function(e) {
    if (e.target.closest('a[href]')) {
        const link = e.target.closest('a[href]');
        const href = link.getAttribute('href');
        
        // Handle internal links
        if (href.startsWith('/') && !href.startsWith('//')) {
            e.preventDefault();
            
            // Update URL
            if (href === '/') {
                window.location.href = '/index.html';
            } else {
                window.location.href = href;
            }
        }
    }
});

// Export functions for global use
window.showToast = showToast;
window.showContactModal = showContactModal;
window.validateEmail = validateEmail;
window.validatePhone = validatePhone;