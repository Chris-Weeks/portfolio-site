document.addEventListener('DOMContentLoaded', () => {
    // --- CONFIGURATION ---
    const initialDelay = 2000; // Time for just the spinner
    const centerDuration = 5000; // Time text stays in center
    const words = ["Hello", "Bonjour", "Hola", "Guten Tag", "Ciao", "Namaste"];

    // --- ELEMENTS ---
    const element = document.querySelector('.hello-title');
    const overlay = document.querySelector('.loader-overlay');
    const spinner = document.querySelector('#initial-loader');

    // --- 1. CALCULATE CENTER POSITION ---
    // We do this immediately so it's ready before we show it
    const rect = element.getBoundingClientRect();
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    const moveX = centerX - rect.left - (rect.width / 2);
    const moveY = centerY - rect.top - (rect.height / 2);

    // Force text to center (it is currently invisible via CSS opacity:0)
    element.style.transform = `translate(${moveX}px, ${moveY}px)`;
    document.body.classList.add('loading'); // Stop Scroll

    // --- 2. THE TYPING SCRIPT (Restored to Infinite) ---
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
                wordIndex = (wordIndex + 1) % words.length; // Infinite Loop
            }
            const pauseTime = isDeleting ? 1000 : 500;
            setTimeout(typeEffect, pauseTime);
        }
    };

    // --- 3. THE ANIMATION TIMELINE ---

    // STEP A: Wait 2 seconds (Loader spins)
    setTimeout(() => {

        // Hide Spinner
        spinner.style.opacity = '0';

        // Show Text (Fade In)
        element.style.opacity = '1';

        // Start Typing Logic
        typeEffect();

        // STEP B: Wait 5 seconds (Text types in center)
        setTimeout(() => {

            // Move to Final Position (Hero)
            element.style.transform = 'translate(0, 0)';

            // Fade out the white background
            overlay.style.opacity = '0';

            // Enable Scrolling
            document.body.classList.remove('loading');

            // Cleanup overlay from DOM
            setTimeout(() => {
                overlay.style.display = 'none';
            }, 800);

        }, centerDuration);

    }, initialDelay);
});