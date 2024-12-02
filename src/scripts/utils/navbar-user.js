const NavbarUser = {
  render() {
    return `
      <!-- Header -->
      <div class="app-bar__menu">
        <button id="hamburgerButton" aria-label="Open navigation menu">☰</button>
      </div>
      <div class="app-bar__brand">
        <img src="./images/heroes/WAH-logo.jpeg" alt="WAH Logo" class="app-bar__brand__logo">
      </div>
      <nav id="navigationDrawer" class="app-bar__navigation">
        <ul>
          <li><a href="/#/dashboard-user">BERANDA</a></li>
          <li><a href="/#/kalendar">KALENDAR</a></li>
          <li><a href="/#/tutorial">TUTORIAL</a></li>
          <li><a href="/#/kalkulator-gizi">KALKULATOR GIZI</a></li>
          <li><a href="/#/chatbot">WAH BOT</a></li>
          <li>
            <a href="/#/profile" class="profile-button">
              <img src="./images/icon/profile.png" alt="Profile"/>
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
    const drawer = document.querySelector("#drawer");



    hamburgerButton.addEventListener("click", () => {
      const isOpen = navigationDrawer.classList.contains("open");

      

      if (isOpen) {
        // Menutup menu dengan transisi halus
        navigationDrawer.style.maxHeight = "0";
        navigationDrawer.classList.remove("open");
        drawer.classList.remove('open');
      } else {
        // Menampilkan menu dengan transisi halus
        navigationDrawer.style.maxHeight = navigationDrawer.scrollHeight + "px";
        navigationDrawer.classList.add("open");
        drawer.classList.add('open');
      }
    });

    // Menutup menu jika klik di luar navigasi
    window.addEventListener("click", (event) => {
      if (
        !navigationDrawer.contains(event.target) &&
        !hamburgerButton.contains(event.target)
      ) {
        navigationDrawer.classList.remove("open");
        drawer.classList.remove("open");
        navigationDrawer.style.maxHeight = navigationDrawer.scrollHeight + "px";
      }
    });

    hamburgerButton.addEventListener("click", (event) => {
      event.stopPropagation(); // Mencegah event klik menutup menu
    });
  },
};

export default NavbarUser;
