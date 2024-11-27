// import DrawerInitiator from '../utils/drawer-initiator';
import routes from '../routes/routes';
import UrlParser from '../routes/url-parser';
import NavbarGuest from '../utils/navbar-guest';
import NavbarUser from '../utils/navbar-user';
import Tutorial from './pages/tutorial';

class App {
  constructor({ header, content }) {
    this._header = header; // Elemen header
    this._content = content; // Elemen main content
  }

  async _renderHeader() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const { resource } = url;

    // Tentukan apakah user adalah guest atau user
    if (resource === 'dashboard-guest') {
      this._header.innerHTML = await NavbarGuest.render();
      await NavbarGuest.afterRender();
    } else if (resource === 'dashboard-user') {
      this._header.innerHTML = await NavbarUser.render();
      await NavbarUser.afterRender();
    } else if (resource === 'tutorial') {
      this._header.innerHTML = await NavbarUser.render();
      await NavbarUser.afterRender();
      // this._header.innerHTML = await Tutorial.render();
      // await Tutorial.afterRender();  
    } 
  }

  async renderPage() {
    // Render header sesuai halaman
    await this._renderHeader();

    // Render main content
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    this._content.innerHTML = await page.render();
    await page.afterRender();
  }
}

export default App;