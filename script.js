document.addEventListener('DOMContentLoaded', () => {
    // 1. Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileLinks = mobileMenu.querySelectorAll('.mobile-link');

    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('is-open');
        const isOpen = mobileMenu.classList.contains('is-open');
        mobileMenuBtn.textContent = isOpen ? 'Close' : 'Menu';
    });

    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('is-open');
            mobileMenuBtn.textContent = 'Menu';
        });
    });

    // 2. Section Switcher (Tabs) 
    window.switchSection = function(targetId) {
        const sections = document.querySelectorAll('.section');
        const navItems = document.querySelectorAll('.desktop-nav a, .mobile-menu a');

        sections.forEach(section => {
            section.classList.remove('active');
        });

        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.classList.add('active');
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href') === `#${targetId}`) {
                item.classList.add('active');
            }
        });
    };

    const allNavLinks = document.querySelectorAll('.desktop-nav a, .mobile-menu a');
    allNavLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            switchSection(targetId);
        });
    });

    // Contact Form Submission Handler 
    window.handleFormSubmit = function(event) {
        event.preventDefault();
        
        const name = document.getElementById('name').value;
        const formMessage = document.getElementById('formMessage');
        
        formMessage.style.color = 'var(--accent)';
        formMessage.textContent = `Thank you, ${name}! Your message has been sent successfully.`;
        
        document.getElementById('contactForm').reset();
        
        setTimeout(() => {
            formMessage.textContent = '';
        }, 5000);
    };
});