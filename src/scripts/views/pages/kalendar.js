const Kalendar = {
  render() {
    return `
      <!-- Hero Section -->
      <section class="hero-calendar" id="hero-calendar">
        <div class="hero-content-calendar">
          <h1 class="hero-title">Mulai Program Olahraga <br>di Rumah Anda!</br></h1>
          <p class="hero-quote-calendar">Apakah Anda ingin mencapai tujuan kebugaran tanpa harus pergi ke gym? Dengan fitur penjadwalan olahraga di rumah, Anda dapat merencanakan latihan yang sesuai dengan tujuan dan gaya hidup Anda — langsung dari kenyamanan rumah! Kami akan membantu Anda membuat jadwal latihan yang efektif dan aman, dengan latihan yang bisa dilakukan tanpa peralatan mahal. Cukup klik tombol di bawah ini untuk menyinkronkan jadwal olahraga Anda.</p>
          <button class="join-button" id="auth-calendar-button">Sinkronkan Jadwal</button>
        </div>
        <div class="hero-images-user">
          <img class="lazyload" data-src="./images/heroes/kalendar.jpg" alt="Workout 2">
        </div>
      </section>
    `;
  },

  async afterRender() {
    const authButton = document.getElementById("auth-calendar-button");

    // Menambahkan event listener untuk tombol autentikasi
    authButton.addEventListener("click", async () => {
      try {
        // Step 1: Dapatkan URL autentikasi
        const authResponse = await fetch("http://localhost:3000/calendar/auth");
        if (!authResponse.ok)
          throw new Error("Gagal mendapatkan URL autentikasi");
        const { url } = await authResponse.json();

        // Step 2: Redirect pengguna ke URL autentikasi
        window.location.href = url;
      } catch (error) {
        console.error("Error saat autentikasi kalender:", error);
        alert(
          "Terjadi kesalahan saat mencoba menyinkronkan kalender. Silakan coba lagi."
        );
      }
    });

    // Step 3: Jika sudah kembali dari OAuth2, ambil token
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get("code"); // Ambil kode dari query string
    if (code) {
      try {
        const tokenResponse = await fetch(
          `http://localhost:3000/calendar/oauth2callback?code=${code}`
        );
        if (!tokenResponse.ok) throw new Error("Gagal mendapatkan akses token");
        const { tokens } = await tokenResponse.json();
        console.log("Akses token:", tokens);

        // Step 4: Ambil data event
        const eventsResponse = await fetch(
          "http://localhost:3000/calendar/events",
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${tokens.accessToken}`, // Gunakan token untuk otorisasi
            },
          }
        );
        if (!eventsResponse.ok)
          throw new Error("Gagal mendapatkan event kalender");
        const events = await eventsResponse.json();
        console.log("Event Kalender:", events);

        alert("Sinkronisasi berhasil! Lihat konsol untuk detail event.");
      } catch (error) {
        console.error("Error saat mengambil data event:", error);
        alert(
          "Gagal menyinkronkan jadwal. Pastikan Anda sudah memberikan akses."
        );
      }
    }
  },
};

export default Kalendar;
