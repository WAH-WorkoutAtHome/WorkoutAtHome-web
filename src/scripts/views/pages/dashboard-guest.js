const DashboardGuest = {
  async render() {
    return `
      
        <!-- Hero Section -->
        <section class="hero" id="hero">
          <div class="hero-images-guest">
            <img class="lazyload" data-src="./images/heroes/dashboard1.png" alt="Workout 1">
            <img class="lazyload" data-src="./images/heroes/dashboard2.png" alt="Workout 2">
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
                <img class="lazyload" data-src="./images/icon/kalender.png" alt="Schedule Icon">
              </div>
              <h2 class="feature-title">Penjadwalan Olahraga</h2>
              <p class="feature-description">
                Fitur untuk menentukan jadwal olahraga dan menyesuaikan dengan target yang diinginkan.
              </p>
            </div>
            <div class="feature-card">
              <div class="feature-icon">
                <img class="lazyload" data-src="./images/icon/video.png" alt="Video Icon">
              </div>
              <h2 class="feature-title">Video Tutorial Olahraga</h2>
              <p class="feature-description">
                Tonton video tutorial olahraga lengkap beserta konten lainnya yang dapat membantu Anda mencapai tujuan kebugaran.
              </p>
            </div>
            <div class="feature-card">
              <div class="feature-icon">
                <img class="lazyload" data-src="./images/icon/kalkulator.png" alt="Calculator Icon">
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
        <section>
            <div class="container">
                <div class="image-section">
                    <img class="lazyload" data-src="./images/heroes/artikel.png" alt="Exercise Image">
                </div>
                <div class="content-section">
                    <h1>Cara Efektif Memulai Workout di Rumah</h1>
                    <p>Workout di rumah kini semakin populer karena fleksibilitas dan kemudahannya. Namun, banyak orang bingung bagaimana cara memulainya. Langkah pertama adalah menentukan tujuan. Apakah Anda ingin menurunkan berat badan, membangun otot, atau sekadar menjaga kebugaran? Setelah itu, buat jadwal rutin yang sesuai dengan aktivitas harian Anda.  
                    </p>
                    <p>Pilih area yang nyaman di rumah, pastikan memiliki ruang yang cukup untuk bergerak. Peralatan sederhana seperti matras yoga, resistance band, atau sepasang dumbbell sangat membantu, tetapi tidak wajib. Latihan bodyweight seperti push-up, plank, dan squat juga sangat efektif untuk melatih berbagai kelompok otot tanpa memerlukan alat.  
                    </p>
                    <p>Jangan lupa untuk memulai dengan pemanasan selama 5-10 menit untuk menghindari cedera dan akhiri latihan dengan pendinginan. Kuncinya adalah konsistensi dan menikmati proses. Ingat, setiap langkah kecil adalah kemajuan menuju kesehatan yang lebih baik!</p>
                </div>
                <div class="content-section">
                    <h1>Manfaat Workout di Rumah untuk Kesehatan Fisik dan Mental</h1>
                    <p>Banyak yang menganggap workout di rumah hanya membantu kebugaran fisik, tetapi manfaatnya jauh lebih luas. Secara fisik, workout di rumah membantu meningkatkan kekuatan otot, fleksibilitas, dan daya tahan tubuh. Bahkan olahraga ringan seperti stretching atau yoga dapat meningkatkan postur tubuh dan mengurangi risiko sakit punggung akibat duduk terlalu lama.  
                    </p>
                    <p>Sementara itu, manfaat mental dari olahraga sering kali tidak disadari. Aktivitas fisik memicu pelepasan endorfin, hormon yang membuat Anda merasa bahagia dan rileks. Latihan seperti yoga atau meditasi aktif dapat membantu meredakan stres, meningkatkan fokus, dan memberikan rasa tenang.  
                    </p>
                    <p>Keuntungan lain dari workout di rumah adalah fleksibilitas waktu. Anda dapat berlatih kapan saja, baik di pagi hari untuk memulai hari dengan energi positif atau di malam hari untuk melepas penat setelah bekerja. Tidak perlu khawatir tentang biaya gym atau perjalanan ke tempat fitness, menjadikan workout di rumah pilihan yang praktis dan efisien.</p>
                </div>
                <div class="image-section">
                    <img class="lazyload" data-src="./images/heroes/artikel2.jpg" alt="Exercise Image">
                </div>
            </div>
            <div class="container-hero">
                <div class="image-section-hero">
                    <img class="lazyload" data-src="./images/heroes/artikel3.jpg" alt="Exercise Image">
                </div>
                 <div class="content-section-hero">
                    <h1>Workout Sederhana yang Bisa Dilakukan di Rumah</h1>
                    <p>Banyak orang berpikir bahwa olahraga di rumah membutuhkan peralatan mahal atau ruang yang luas, padahal sebenarnya tidak. Anda bisa mulai dengan latihan sederhana yang efektif untuk meningkatkan kebugaran tanpa alat tambahan. Latihan seperti squat atau lunges sangat bagus untuk memperkuat otot kaki dan bokong. Selain itu, push-up adalah pilihan klasik untuk membangun otot lengan dan dada tanpa memerlukan beban tambahan.  
                    </p>
                    <p>Jika Anda ingin meningkatkan kekuatan inti tubuh, plank adalah salah satu latihan terbaik yang bisa dilakukan. Latihan ini tidak hanya menguatkan otot perut tetapi juga punggung dan bahu Anda. Sementara itu, jumping jacks dapat menjadi alternatif untuk latihan kardio di ruang terbatas. Gerakan sederhana ini meningkatkan detak jantung sekaligus melatih seluruh tubuh.  
                    </p>
                    <p>Konsistensi adalah kunci dalam workout di rumah. Tidak perlu memulai dengan durasi yang panjang; cukup 15-20 menit sehari dapat membawa perubahan besar jika dilakukan secara rutin. Pastikan Anda melakukan pemanasan sebelum memulai untuk menghindari cedera, dan akhiri dengan pendinginan agar otot-otot Anda tetap fleksibel. Dengan rutinitas yang terencana dan kemauan kuat, olahraga di rumah dapat menjadi solusi yang mudah dan efektif untuk menjaga kebugaran tubuh Anda.</p>
                </div>
            </div>
        </section>
  
        <!-- Tentang Kami Section -->
        <section class="about-section" id="tentangkami">
          <h1>TENTANG KAMI</h1>
          <div class="team-container">
            <div class="team-member">
              <div class="profile-pic">
              <img class="lazyload" data-src="./images/about/irwin.jpg" alt="Back End 1">
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
              <img class="lazyload" data-src="./images/about/luniko.jpg" alt="Back End 2">
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
                <img class="lazyload" data-src="./images/about/cana.jpg" alt="Front End 2">
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
                <img class="lazyload" data-src="./images/about/mey.jpg" alt="Front End 1">
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
      `;
  },

  async afterRender() {
    const loginButton = document.querySelectorAll(".loginButton");
    const googleLogin = () => {
      // Redireksi ke server OAuth (backend)
      window.location.href = "https://workoutathome.pemweb.cloud/auth/google";
    };

    loginButton.forEach((el) => {
      el.addEventListener("click", googleLogin);
    });

    // Cek login
    const userToken = localStorage.getItem("userToken");
    if (userToken) {
      window.location.href = "/#/biodata";
    }
  },
};

export default DashboardGuest;
