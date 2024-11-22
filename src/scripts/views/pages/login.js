
const Login = {
  async render() {
    return `
      <div class="login-container">
        <div class="login-form">
          <div class="logo-container">
            <img src="./images/heroes/WAH-logo.jpeg" alt="WAH Logo" class="login-logo">
            <h1>WORKOUT AT HOME</h1>
          </div>
          
          <form>
            <div class="input-group">
              <input type="email" id="email" placeholder="email" required>
            </div>
            <div class="input-group">
              <input type="password" id="password" placeholder="password" required>
            </div>
            <div class="login-button">
              <button type="submit">LOGIN</button>
            </div>
            <div class="social-login">
              <p>or continue with</p>
              <div class="social-icons">
                <button class="social-btn google">Google</button>
                <button class="social-btn facebook">Facebook</button>
              </div>
            </div>
            <p class="signup-link">Belum Memiliki Akun?</p>
          </form>
        </div>
      </div>
    `;
  },

  async afterRender() {
    // Fungsi ini bisa digunakan jika ada interaksi lebih lanjut setelah render
  },
};

export default Login;
