    const words = ["Hello", "Bonjour", "Hola", "Guten Tag", "Ciao", "Namaste"];
    const element = document.querySelector('.hello');

    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    const typeEffect = () => {
    const currentWord = words[wordIndex];
    element.textContent = currentWord.substring(0, charIndex);

    let typeSpeed = 100;
    if (isDeleting) {
    typeSpeed /= 2;
}
    if (!isDeleting && charIndex < currentWord.length) {
    charIndex++;
    typeSpeed = 100 + Math.random() * 50; // Add slight variation for realism
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
}
    document.addEventListener('DOMContentLoaded', typeEffect);