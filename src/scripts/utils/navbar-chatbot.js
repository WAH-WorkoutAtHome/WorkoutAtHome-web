const NavbarChatbot = {
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
          <li><a href="/#/dashboard-user">BERANDA</a></li>
          <li><a href="/#/kalendar">KALENDAR</a></li>
          <li><a href="/#/tutorial">TUTORIAL</a></li>
          <li><a href="/#/kalkulator-gizi">KALKULATOR GIZI</a></li>
          <li><a href="/#/chatbot">CHAT AI</a></li>
          <li>
            <a href="/#/profile" class="profile-button">
              <img class="lazyload" data-src="./images/icon/profile.png" alt="Profile"/>
            </a>
          </li>
        </ul>
      </nav>
      `;
    },

  async afterRender() {
    
  },
};
  
  export default NavbarChatbot;
  