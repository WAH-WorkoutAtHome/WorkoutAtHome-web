
import 'regenerator-runtime';
import '../styles/style.css';
import '../styles/responsive.css';
import '../styles/tutorial.css';
import App from './views/app';
 
const app = new App({
  header: document.querySelector('header'), // Tambahkan elemen header
  content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
});