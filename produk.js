/* produk.js - Logic Filtering Produk dengan Dropdown (Select) */

document.addEventListener('DOMContentLoaded', () => {
    // Ambil elemen Select Dropdown
    const filterSelect = document.getElementById('kategoriPakaian');
    const productCards = document.querySelectorAll('.product-card');

    if (filterSelect && productCards.length > 0) {
        
        // Ubah event listener menjadi 'change' karena menggunakan Select Option
        filterSelect.addEventListener('change', (e) => {
            // Ambil nilai (value) dari opsi yang dipilih
            const selectedCategory = e.target.value;

            // Filter kartu produk
            productCards.forEach(card => {
                const cardCategory = card.getAttribute('data-category');

                if (selectedCategory === 'all' || cardCategory === selectedCategory) {
                    // === TAMPILKAN (SHOW) ===
                    card.classList.remove('hidden');
                    
                    // [PENTING] Hapus style inline untuk mengatasi konflik dengan ScrollReveal
                    card.removeAttribute('style'); 
                    
                    // Pastikan element tampil
                    card.style.display = 'block'; 
                    
                    // Tambahkan animasi fade-in sederhana
                    card.style.animation = 'fadeInPage 0.5s ease-in-out';
                } else {
                    // === SEMBUNYIKAN (HIDE) ===
                    card.classList.add('hidden');
                    card.style.display = 'none'; 
                }
            });

            // Sinkronisasi ScrollReveal (Jika library dimuat)
            // if (typeof ScrollReveal !== 'undefined') {
            //     try { 
            //         ScrollReveal().sync(); 
            //     } catch (e) {
            //         console.log("ScrollReveal sync skipped");
            //     }
            // }
        });
    }
});