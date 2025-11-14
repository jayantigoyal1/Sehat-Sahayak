document.addEventListener('DOMContentLoaded', () => {

    const next = document.querySelector('.next');
    const prev = document.querySelector('.prev');
    const slides = document.querySelector(".slides");

    if (next && prev && slides) {
        next.addEventListener('click', function() {
            let items = document.querySelectorAll(".items");
            items[0].classList.add('exit');
            
            setTimeout(() => {
                slides.appendChild(items[0]);
                items[0].classList.remove('exit'); 
            }, 500); 
        });

        prev.addEventListener('click', function() {
            let items = document.querySelectorAll(".items");
            let lastItem = items[items.length - 1];
            
            slides.prepend(lastItem);
        });
    }

    const menuToggle = document.getElementById('menu-toggle');
    const navLinksMenu = document.getElementById('nav-links-menu');
    const menuIcon = document.getElementById('icon2');

    if (menuToggle && navLinksMenu && menuIcon) {
        menuToggle.addEventListener('click', () => {
            navLinksMenu.classList.toggle('active');
            
            if (navLinksMenu.classList.contains('active')) {
                menuIcon.classList.remove('fa-bars');
                menuIcon.classList.add('fa-times');
            } else {
                menuIcon.classList.remove('fa-times');
                menuIcon.classList.add('fa-bars');
            }
        });
    }
    
    const sections = document.querySelectorAll('.service-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, i) => { 
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('is-visible');
                }, i * 150); 
                
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1 
    });

    sections.forEach(section => {
        observer.observe(section);
    });

});