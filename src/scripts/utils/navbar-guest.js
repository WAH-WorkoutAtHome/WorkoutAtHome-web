const NavbarGuest = {
  render() {
    return `
      <div class="app-bar__menu">
        <button id="hamburgerButton" aria-label="Open navigation menu">☰</button>
      </div>
      <div class="app-bar__brand">
        <img src="./images/heroes/WAH-logo.jpeg" alt="WAH Logo" class="app-bar__brand__logo">
      </div>
      <nav id="navigationDrawer" class="app-bar__navigation">
        <ul>
          <li><a href="#dashboard-guest">BERANDA</a></li>
          <li><a href="#fitur">FITUR</a></li>
          <li><a href="#tentangkami">TENTANG KAMI</a></li>
          <li>
            <a href="#login">
              <button id="loginButton" class="loginButton">Login with Google</button>
            </a>
          </li>
        </ul>
      </nav>
    `;
  },

  //
  // Ada beberapa perubahan dibagian after render sampai sebelum export default NavbarGuest
  //
  async afterRender() {
    const hamburgerButton = document.querySelector("#hamburgerButton");
    const navigationDrawer = document.querySelector("#navigationDrawer");

    hamburgerButton.addEventListener("click", () => {
      const isOpen = navigationDrawer.classList.contains("open");

      if (isOpen) {
        // Menutup menu dengan transisi halus
        navigationDrawer.style.maxHeight = "0";
        navigationDrawer.classList.remove("open");
      } else {
        // Menampilkan menu dengan transisi halus
        navigationDrawer.style.maxHeight = navigationDrawer.scrollHeight + "px";
        navigationDrawer.classList.add("open");
      }
    });

    // Menutup menu jika klik di luar navigasi
    window.addEventListener("click", (event) => {
      if (
        !navigationDrawer.contains(event.target) &&
        !hamburgerButton.contains(event.target)
      ) {
        navigationDrawer.classList.remove("open");
        navigationDrawer.style.maxHeight = navigationDrawer.scrollHeight + "px";
      }
    });

    hamburgerButton.addEventListener("click", (event) => {
      event.stopPropagation(); // Mencegah event klik menutup menu
    });
  },
};

export default NavbarGuest;
