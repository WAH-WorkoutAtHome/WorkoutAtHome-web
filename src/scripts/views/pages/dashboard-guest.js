const DashboardGuest = {
    async render() {
      return `
      
        <!-- Hero Section -->
        <section class="hero" id="hero">
          <div class="hero-images">
            <img src="./images/heroes/dashboard1.png" alt="Workout 1">
            <img src="./images/heroes/dashboard2.png" alt="Workout 2">
          </div>
          <p class="hero-quote">"Raih kebugaran dari rumah. Langkah kecil hari ini, kesehatan lebih baik esok hari."</p>
          <button class="join-button"><a class="loginButton" href="#login">Gabung Sekarang</a></button>
        </section>
  
        <!-- Features Section -->
        <section class="features" id="fitur">
          <h1 class="features-title">FITUR</h1>
          <p class="features-description">
            Workout at Home menawarkan fitur latihan di rumah, program yang dapat disesuaikan, instruksi video, dan pelacakan progres.
          </p>
          <div class="features-grid">
            <div class="feature-card">
              <div class="feature-icon">
                <img src="./images/icon/kalender.png" alt="Schedule Icon">
              </div>
              <h2 class="feature-title">Penjadwalan Olahraga</h2>
              <p class="feature-description">
                Fitur untuk menentukan jadwal olahraga dan menyesuaikan dengan target yang diinginkan.
              </p>
            </div>
            <div class="feature-card">
              <div class="feature-icon">
                <img src="./images/icon/video.png" alt="Video Icon">
              </div>
              <h2 class="feature-title">Video Tutorial Olahraga</h2>
              <p class="feature-description">
                Tonton video tutorial olahraga lengkap beserta konten lainnya yang dapat membantu Anda mencapai tujuan kebugaran.
              </p>
            </div>
            <div class="feature-card">
              <div class="feature-icon">
                <img src="./images/icon/kalkulator.png" alt="Calculator Icon">
              </div>
              <h2 class="feature-title">Kalkulator Gizi</h2>
              <p class="feature-description">
                Fitur untuk menghitung kalori harian yang membantu Anda memantau asupan dan pencapaian target nutrisi.
              </p>
            </div>
            <div class="feature-card">
              <div class="feature-icon">
                <img src="./images/icon/chatbot.png" alt="Chat Icon">
              </div>
              <h2 class="feature-title">Chat AI</h2>
              <p class="feature-description">
                Fitur chat dengan AI yang dapat memberikan saran, tips, dan jawaban seputar program untuk mendukung program kebugaran Anda.
              </p>
            </div>
          </div>
        </section>
  
        <!-- Artikel Section -->
        <section class="container">
          <div class="image-section">
            <img src="./images/heroes/artikel.png" alt="Exercise Image">
          </div>
          <div class="content-section">
            <h1>Artikel</h1>
            <p>Olahraga di rumah atau Workout at home sangat disarankan karena memungkinkan Anda menjaga kebugaran tanpa pergi ke gym. Dengan rutinitas yang fleksibel, berbagai latihan bisa dilakukan dengan peralatan sederhana atau tanpa alat sama sekali. Keuntungannya adalah kenyamanan dan efisiensinya, karena dapat dilakukan kapan saja sesuai jadwal pribadi, tanpa biaya gym. Banyak aplikasi dan platform menawarkan program latihan yang dapat disesuaikan dengan tingkat kebugaran, menjadikan workout at home solusi efektif untuk mencapai kesehatan optimal secara terjangkau.</p>
             <div class="card">
              <h2>Manfaat Utama</h2>
              <p>Berolahraga secara teratur membantu memperkuat otot, meningkatkan sirkulasi darah, dan menjaga keseimbangan mental. Ini adalah solusi efektif untuk hidup sehat tanpa harus pergi ke gym.</p>
              <a href="https://www.alodokter.com/beragam-manfaat-olahraga" class="button">→</a>
            </div>
          </div>
        </section>
  
        <!-- Tentang Kami Section -->
        <section class="about-section" id="tentangkami">
          <h1>TENTANG KAMI</h1>
          <div class="team-container">
            <div class="team-member">
              <div class="profile-pic">
              <img src="./images/about/irwin.jpg" alt="Back End 1">
              </div>
              <h2>A. Irwin Putra Pangesti</h2>
              <p class="role">Back End</p>
              <div class="motivation">
                <h3>Motivasi</h3>
                <p>Kode yang aku tulis mungkin bisa ku-debug, tapi rasa ini, tak ada syntax yang bisa memperbaikinya.</p>
              </div>
            </div>
            <div class="team-member">
              <div class="profile-pic">
              <img src="./images/about/luniko.jpg" alt="Back End 2">
              </div>
              <h2>Luniko Jama</h2>
              <p class="role">Back End</p>
              <div class="motivation">
                <h3>Motivasi</h3>
                <p>Seperti sintaks error dalam kode, kegagalan hanyalah tanda bahwa ada yang perlu diperbaiki dan bukan akhir dari segalanya, tetapi awal untuk mencoba lagi dengan lebih baik.</p>
              </div>
            </div>
            <div class="team-member">
              <div class="profile-pic">
                <img src="./images/about/cana.jpg" alt="Front End 2">
              </div>
              <h2>Ahsana Azmiara A.</h2>
              <p class="role">Front End</p>
              <div class="motivation">
                <h3>Motivasi</h3>
                <p>Jadilah seniman digital yang mengubah ide menjadi antarmuka interaktif yang menginspirasi dan memudahkan pengguna.</p>
              </div>
            </div>
            <div class="team-member">
              <div class="profile-pic">
                <img src="./images/about/mey.jpg" alt="Front End 1">
              </div>
              <h2>Meylia Wijayanti</h2>
              <p class="role">Front End</p>
              <div class="motivation">
                <h3>Motivasi</h3>
                <p>Setiap baris kode yang Anda tulis adalah jembatan untuk menciptakan pengalaman pengguna yang mengesankan dan intuitif.</p>
              </div>
            </div>
          </div>
        </section>

            <!-- Chat Widget -->
    <div class="chat-widget">
      <img src="./images/icon/chatbot.png" alt="Chat Widget">
    </div>
      `;
    },
  
    async afterRender() {
      const loginButton = document.querySelectorAll('.loginButton');
      const googleLogin = () => {
        // Redireksi ke server OAuth (backend)
        window.location.href = 'http://localhost:3000/auth/google';
      };
  
      loginButton.forEach(el => {
        el.addEventListener('click', googleLogin);
      });
  
      // Cek login
      const userToken = localStorage.getItem('userToken');
      if (userToken) {
        window.location.href = '/#/dashboard-user';
      }
    },
};
  
  export default DashboardGuest;
  