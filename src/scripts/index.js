import 'regenerator-runtime'; // Untuk mendukung async/await
import '../styles/style.css';
import '../styles/responsive.css';
import App from './views/app';

// Inisialisasi aplikasi
const app = new App({
  header: document.querySelector('header'), // Elemen header
  content: document.querySelector('#mainContent'), // Elemen konten utama
  footer: document.querySelector('footer'), // Elemen footer
});

// Event listener untuk menangani perubahan hash pada URL
window.addEventListener('hashchange', async () => {
  await app.renderPage(); // Pastikan menunggu render selesai
});

// Event listener untuk menangani saat halaman selesai dimuat
window.addEventListener('load', async () => {
  await app.renderPage(); // Pastikan menunggu render selesai
});
