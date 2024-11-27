const Footer = {
    render() {
      return `
      <section  class="footer">
      <div class="footer-container">
            <div class="footer-section logo-text">
                <img src="./images/heroes/WAH-logo.jpeg" alt="Logo WAH" class="footer-logo">
                <p>Workout at Home adalah platform yang menyediakan berbagai program latihan di rumah untuk membantu Anda mencapai tujuan kebugaran dengan mudah dan efektif.</p>
            </div>
            <div class="footer-section">
                <h3>KONTAK KAMI</h3>
                <p>Email: wah@supportus.com</p>
                <p>Phone: +111 222 333</p>
            </div>
            <div class="footer-section">
                <h3>IKUTI KAMI</h3>
                <div class="social-icons">
                    <a href="#"><img src="./images/icon/instagram.png" alt="Instagram"></a>
                    <a href="#"><img src="./images/icon/linkedin.png" alt="LinkedIn"></a>
                    <a href="#"><img src="./images/icon/github.png" alt="GitHub"></a>
                </div>
            </div>
        </div>
        <div class="footer-bottom">
            <p>Copyright © 2024, WAH</p>
        </div>
        </section>
        `;
    },

    async afterRender() {
    
      },
    };
  
  export default Footer;