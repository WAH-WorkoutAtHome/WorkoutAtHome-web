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
            <li><a href="#hero">BERANDA</a></li>
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
  
  export default NavbarGuest;
  