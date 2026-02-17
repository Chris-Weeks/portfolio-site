document.addEventListener('DOMContentLoaded', () => {
    const initialDelay = 2000;
    const centerDuration = 5000;
    const words = ["Hello", "Witaj", "Bonjour", "Hola", "Guten Tag", "Ciao"];

    const element = document.querySelector('.hello-title');
    const overlay = document.querySelector('.loader-overlay');
    const spinner = document.querySelector('#initial-loader');


    const rect = element.getBoundingClientRect();
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    const moveX = centerX - rect.left - (rect.width / 2);
    const moveY = centerY - rect.top - (rect.height / 2);


    element.style.transform = `translate(${moveX}px, ${moveY}px)`;
    document.body.classList.add('loading');


    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    const typeEffect = () => {
        const currentWord = words[wordIndex];
        element.textContent = currentWord.substring(0, charIndex);

        let typeSpeed = 100;
        if (isDeleting) typeSpeed /= 2;

        if (!isDeleting && charIndex < currentWord.length) {
            charIndex++;
            typeSpeed = 100 + Math.random() * 50;
            setTimeout(typeEffect, typeSpeed);
        } else if (isDeleting && charIndex > 0) {
            charIndex--;
            setTimeout(typeEffect, typeSpeed);
        } else {
            isDeleting = !isDeleting;
            if (!isDeleting) {
                wordIndex = (wordIndex + 1) % words.length;
            }
            const pauseTime = isDeleting ? 1000 : 500;
            setTimeout(typeEffect, pauseTime);
        }
    };


    setTimeout(() => {
        spinner.style.opacity = '0';
        element.style.opacity = '1';

        typeEffect();

        setTimeout(() => {
            element.style.transform = 'translate(0, 0)';

            overlay.style.opacity = '0';

            document.body.classList.remove('loading');

            setTimeout(() => {
                overlay.style.display = 'none';
            }, 800);

        }, centerDuration);

    }, initialDelay);
});