// Main JavaScript file for Logistics Website

// DOM Elements
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

// Mobile Navigation Toggle
function toggleMobileMenu() {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
}

// Close mobile menu when clicking on a link
function closeMobileMenu() {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}

// Set active navigation link based on current page
function setActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
}

// Smooth scrolling for anchor links
function smoothScroll(target) {
    const element = document.querySelector(target);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Form validation and submission
function handleQuoteForm() {
    const form = document.getElementById('quoteForm');
    if (!form) return;

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(form);
        const data = {};
        
        // Convert FormData to object
        for (let [key, value] of formData.entries()) {
            data[key] = value;
        }
        
        // Basic validation
        if (!validateForm(data)) {
            return;
        }
        
        // Show success message
        showSuccessMessage();
        
        // Reset form
        form.reset();
    });
}

// Form validation
function validateForm(data) {
    const requiredFields = ['companyName', 'contactName', 'email', 'phone', 'serviceType'];
    const errors = [];
    
    requiredFields.forEach(field => {
        if (!data[field] || data[field].trim() === '') {
            errors.push(getFieldLabel(field));
        }
    });
    
    // Email validation
    if (data.email && !isValidEmail(data.email)) {
        errors.push('รูปแบบอีเมลไม่ถูกต้อง');
    }
    
    // Phone validation
    if (data.phone && !isValidPhone(data.phone)) {
        errors.push('รูปแบบเบอร์โทรศัพท์ไม่ถูกต้อง');
    }
    
    if (errors.length > 0) {
        showErrorMessage('กรุณากรอกข้อมูลให้ครบถ้วน:\n' + errors.join('\n'));
        return false;
    }
    
    return true;
}

// Get field label for error messages
function getFieldLabel(field) {
    const labels = {
        'companyName': 'ชื่อบริษัท',
        'contactName': 'ชื่อผู้ติดต่อ',
        'email': 'อีเมล',
        'phone': 'เบอร์โทรศัพท์',
        'serviceType': 'ประเภทบริการ'
    };
    return labels[field] || field;
}

// Email validation
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Phone validation (Thai phone number format)
function isValidPhone(phone) {
    const phoneRegex = /^(\+66|0)[0-9]{8,9}$/;
    return phoneRegex.test(phone.replace(/[-\s]/g, ''));
}

// Show success message
function showSuccessMessage() {
    const message = document.createElement('div');
    message.className = 'alert alert-success';
    message.innerHTML = `
        <div style="background-color: #10b981; color: white; padding: 1rem; border-radius: 8px; margin: 1rem 0; text-align: center;">
            <i class="fas fa-check-circle"></i>
            ส่งข้อมูลเรียบร้อยแล้ว! เราจะติดต่อกลับภายใน 24 ชั่วโมง
        </div>
    `;
    
    const form = document.getElementById('quoteForm');
    form.parentNode.insertBefore(message, form);
    
    // Remove message after 5 seconds
    setTimeout(() => {
        message.remove();
    }, 5000);
    
    // Scroll to message
    message.scrollIntoView({ behavior: 'smooth' });
}

// Show error message
function showErrorMessage(message) {
    const errorDiv = document.createElement('div');
    errorDiv.className = 'alert alert-error';
    errorDiv.innerHTML = `
        <div style="background-color: #ef4444; color: white; padding: 1rem; border-radius: 8px; margin: 1rem 0; text-align: center;">
            <i class="fas fa-exclamation-triangle"></i>
            ${message}
        </div>
    `;
    
    const form = document.getElementById('quoteForm');
    form.parentNode.insertBefore(errorDiv, form);
    
    // Remove message after 5 seconds
    setTimeout(() => {
        errorDiv.remove();
    }, 5000);
    
    // Scroll to message
    errorDiv.scrollIntoView({ behavior: 'smooth' });
}

// Animate elements on scroll
function animateOnScroll() {
    const elements = document.querySelectorAll('.service-card, .founder-card, .value-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    elements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(element);
    });
}

// Initialize page functions
function initializePage() {
    // Set active navigation link
    setActiveNavLink();
    
    // Initialize form handling
    handleQuoteForm();
    
    // Initialize scroll animations
    animateOnScroll();
    
    // Add click event to hamburger menu
    if (hamburger) {
        hamburger.addEventListener('click', toggleMobileMenu);
    }
    
    // Add click events to navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', closeMobileMenu);
    });
    
    // Handle anchor links
    document.addEventListener('click', function(e) {
        if (e.target.tagName === 'A' && e.target.getAttribute('href').startsWith('#')) {
            e.preventDefault();
            smoothScroll(e.target.getAttribute('href'));
        }
    });
}

// Run when DOM is loaded
document.addEventListener('DOMContentLoaded', initializePage);

// Handle window resize
window.addEventListener('resize', function() {
    if (window.innerWidth > 768) {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    }
});

// Add loading animation
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
});

// Utility functions
const utils = {
    // Format phone number for display
    formatPhone: function(phone) {
        if (!phone) return '';
        const cleaned = phone.replace(/\D/g, '');
        if (cleaned.startsWith('66')) {
            return '+66 ' + cleaned.substr(2, 2) + '-' + cleaned.substr(4, 3) + '-' + cleaned.substr(7);
        }
        if (cleaned.startsWith('0')) {
            return cleaned.substr(0, 3) + '-' + cleaned.substr(3, 3) + '-' + cleaned.substr(6);
        }
        return phone;
    },
    
    // Format date for display
    formatDate: function(date) {
        const options = { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric',
            timeZone: 'Asia/Bangkok'
        };
        return new Date(date).toLocaleDateString('th-TH', options);
    },
    
    // Debounce function
    debounce: function(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }
};

// Export utils for use in other scripts
window.LogisticsUtils = utils;