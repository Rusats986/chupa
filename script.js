     // Анимация при загрузке страницы
     window.onload = function() {
        const heroTitle = document.querySelector('.hero h1');
        const heroText = document.querySelector('.hero p');
        
        setTimeout(() => {
            heroTitle.style.opacity = '1';
            heroTitle.style.transform = 'translateY(0)';
        }, 300);
        
        setTimeout(() => {
            heroText.style.opacity = '1';
            heroText.style.transform = 'translateY(0)';
        }, 600);
    };
    
    // Анимация при скроллинге
    window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('.section');
        
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (sectionTop < windowHeight * 0.8) {
                section.classList.add('active');
            }
        });
    });
    
    // Анимация процесса переработки
    const processBtn = document.querySelector('.process-btn');
    const processSteps = document.querySelectorAll('.process-step');
    let currentStep = 0;
    
    processBtn.addEventListener('click', function() {
        processSteps[currentStep].classList.remove('active');
        currentStep = (currentStep + 1) % processSteps.length;
        processSteps[currentStep].classList.add('active');
    });