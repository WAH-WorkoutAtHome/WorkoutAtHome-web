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

  async afterRender() {
    const hamburgerButton = document.querySelector('#hamburgerButton');
    const navigationDrawer = document.querySelector('#navigationDrawer');

    hamburgerButton.addEventListener('click', () => {
      navigationDrawer.classList.toggle('open');
    });

    window.addEventListener('click', (event) => {
      if (!navigationDrawer.contains(event.target) && !hamburgerButton.contains(event.target)) {
        navigationDrawer.classList.remove('open');
      }
    });
  },
};

export default NavbarUser;