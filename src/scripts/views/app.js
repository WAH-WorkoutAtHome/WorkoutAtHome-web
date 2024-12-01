import routes from "../routes/routes";
import UrlParser from "../routes/url-parser";
import NavbarGuest from "../utils/navbar-guest";
import NavbarUser from "../utils/navbar-user";
import Footer from "../utils/footer";

class App {
  constructor({ header, content, footer }) {
    this._header = header;
    this._content = content;
    this._footer = footer;
  }

  async _renderHeader() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const { resource } = url;

    if (resource === "dashboard-guest" || resource === "biodata") {
      this._header.innerHTML = await NavbarGuest.render();
      await NavbarGuest.afterRender();
    } else if (
      resource === "dashboard-user" ||
      resource === "kalendar" ||
      resource === "tutorial" ||
      resource === "kalkulator-gizi" ||
      resource === "profile" ||
      resource === "tutorial" ||
      resource === "chatbot" ||
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
    this._footer.innerHTML = await Footer.render();
    await Footer.afterRender();
  }

  async renderPage() {
    await this._renderHeader();
    await this._renderFooter();

    const url = UrlParser.parseActiveUrlWithCombiner();
    console.log(`URL aktif: ${url}`);

    const page = routes[url.split("?")[0]];
    if (!page) {
      console.error(`Rute tidak ditemukan untuk URL: ${url}`);
      this._content.innerHTML = "<h1>Halaman tidak ditemukan</h1>";
      return;
    }

    console.log(`Halaman yang ditemukan:`, page);

    this._content.innerHTML = await page.render();
    await page.afterRender();
  }
}

export default App;
