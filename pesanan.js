/* pesanan.js - KHUSUS untuk halaman pesanan.html */

document.addEventListener('DOMContentLoaded', () => {
    const pesanForm = document.getElementById('pesanForm');
    
    if (pesanForm) {
        pesanForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const model = document.getElementById('model').value;
            const nama = document.getElementById('nama').value;
            const alamat = document.getElementById('alamat').value;
            const catatan = document.getElementById('catatan').value;
            const nomorAdmin = "6281234517484"; 

            const pesan = `Halo Admin, saya ingin memesan:%0A
Model: ${model}%0A
Nama: ${nama}%0A
Alamat: ${alamat}%0A
Catatan: ${catatan}`;

            const url = `https://api.whatsapp.com/send?phone=${nomorAdmin}&text=${pesan}`;
            window.open(url, '_blank');
        });
    }
});