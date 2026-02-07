/* script.js - Digunakan di SEMUA halaman */

document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. Fitur Auto Slide Banner (KHUSUS HOME) ---
    const slides = document.querySelectorAll('.slide');
    if (slides.length > 0) {
        let currentSlide = 0;
        const slideInterval = 5000; 

        function nextSlide() {
            slides[currentSlide].classList.remove('active');
            currentSlide = (currentSlide + 1) % slides.length;
            slides[currentSlide].classList.add('active');
        }

        setInterval(nextSlide, slideInterval);
    }

    // --- 2. Global Scroll Reveal Animation ---
    // Inisialisasi animasi dasar untuk semua halaman
    if (typeof ScrollReveal !== 'undefined') {
        const sr = ScrollReveal({
            origin: 'bottom',
            distance: '50px',
            duration: 1000,
            reset: true // Hati-hati: reset true bisa menyembunyikan elemen saat scroll balik
        });

        sr.reveal('.reveal-text', { interval: 200 });
        sr.reveal('.reveal-card', { interval: 200 });
        sr.reveal('.reveal-top', { origin: 'top', distance: '30px' });
    }
});