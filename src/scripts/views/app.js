import routes from "../routes/routes";
import UrlParser from "../routes/url-parser";
import NavbarGuest from "../utils/navbar-guest";
import NavbarUser from "../utils/navbar-user";
import Footer from "../utils/footer";

class App {
  constructor({ header, content, footer }) {
    this._header = header; // Elemen header
    this._content = content; // Elemen main content
    this._footer = footer; // Elemen footer
  }

  async _renderHeader() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const { resource } = url;

    // Tentukan navbar berdasarkan halaman
    if (resource === "dashboard-guest" || resource === "biodata") {
      this._header.innerHTML = await NavbarGuest.render();
      await NavbarGuest.afterRender();
    } else if (
      resource === "dashboard-user" ||
      resource === "kalendar" ||
      resource === "tutorial" ||
      resource === "kalkulator-gizi" ||
      resource === "profile" ||
      resource === 'tutorial' ||
      resource === 'chatbot' ||
      localStorage.getItem("userToken")
    ) {
      this._header.innerHTML = await NavbarUser.render();
      await NavbarUser.afterRender();
    } else {
      this._header.innerHTML = await NavbarGuest.render();
      await NavbarUser.afterRender();
    }
  }

  async _renderFooter() {
    // Render footer di semua halaman
    this._footer.innerHTML = await Footer.render();
    await Footer.afterRender();
  }

  async renderPage() {
    // Render header sesuai halaman
    await this._renderHeader();

    // Render footer di semua halaman
    await this._renderFooter();

    // Render main content
    const url = UrlParser.parseActiveUrlWithCombiner();
    console.log(url);

    const page = routes[url];
    // console.log(page);

    this._content.innerHTML = await page.render();
    await page.afterRender();
  }
}


export default App;
