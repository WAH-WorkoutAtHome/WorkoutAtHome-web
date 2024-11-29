import routes from '../routes/routes';
import UrlParser from '../routes/url-parser';
import NavbarGuest from '../utils/navbar-guest';
import NavbarUser from '../utils/navbar-user';
import Footer from '../utils/footer';
import Tutorial from './pages/tutorial';

class App {
  constructor({ header, content, footer }) {
    this._header = header; // Elemen header
    this._content = content; // Elemen main content
    this._footer = footer;  // Elemen footer
  }

  async _renderHeader() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const { resource } = url;

    // Tentukan navbar berdasarkan halaman
    if (resource === 'dashboard-guest' ||
      resource === 'biodata'
    ) {
      this._header.innerHTML = await NavbarGuest.render();
      await NavbarGuest.afterRender();
    } else if (
      resource === 'dashboard-user' ||
      resource === 'kalendar' ||
      resource === 'tutorial' ||
      resource === 'kalkulator-gizi' ||
      resource === 'profile'
    ) {
      this._header.innerHTML = await NavbarUser.render();
      await NavbarUser.afterRender();
    } else if (resource === 'tutorial') {
      this._header.innerHTML = await NavbarUser.render();
      await NavbarUser.afterRender();
      // this._header.innerHTML = await Tutorial.render();
      // await Tutorial.afterRender();  
    } else {
      this._header.innerHTML = await NavbarGuest.render();
      await NavbarUser.afterRender();
    }
  }

  async _renderFooter() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const { resource } = url;

    // Render footer hanya untuk halaman tertentu
    if (
      resource === 'dashboard-guest' ||
      resource === 'dashboard-user' ||
      resource === 'tutorial'

    ) {
      this._footer.innerHTML = await Footer.render();
      await Footer.afterRender();
    } else {
      this._footer.innerHTML = ''; // Bersihkan elemen footer untuk halaman lain
    }
  }

  async renderPage() {
    // Render header sesuai halaman
    await this._renderHeader();

    // Render footer sesuai halaman
    await this._renderFooter();

    // Render main content
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    this._content.innerHTML = await page.render();
    await page.afterRender();
  }
}

export default App;
