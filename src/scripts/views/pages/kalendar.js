const Kalendar = {
  render() {
    return `
    <style>
     
      .popup-hidden {
        display: none !important;
      }

      .popup {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 999;
        transition: opacity 0.3s ease;
      }

      .popup-content {
        background-color: #fff;
        padding: 30px;
        border-radius: 8px;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
        width: 400px;
        max-width: 90%;
        animation: popupFadeIn 0.5s ease-out;
      }

      @keyframes popupFadeIn {
        0% {
          opacity: 0;
          transform: scale(0.8);
        }
        100% {
          opacity: 1;
          transform: scale(1);
        }
      }

      .popup h2 {
        font-size: 24px;
        margin-bottom: 20px;
        color: #333;
        text-align: center;
      }

      .popup label {
        display: block;
        margin: 10px 0 5px;
        font-weight: bold;
        color: #555;
      }

      .popup select,
      .popup input[type="date"] {
        width: 100%;
        padding: 10px;
        margin-bottom: 20px;
        border: 1px solid #ccc;
        border-radius: 5px;
        font-size: 16px;
      }

      .popup button {
        width: 48%;
        padding: 12px;
        margin-top: 10px;
        border: none;
        border-radius: 5px;
        font-size: 16px;
        cursor: pointer;
      }

      .popup-submit {
        background-color: #28a745;
        color: #fff;
      }

      .popup-close {
        background-color: #dc3545;
        color: #fff;
        float: right;
      }

      .popup button:hover {
        opacity: 0.9;
      }
    </style>

    <!-- Hero Section -->
    <section class="hero-calendar" id="hero-calendar">
      <div class="hero-content-calendar">
        <h1 class="hero-title">Mulai Program Olahraga <br>di Rumah Anda!</h1>
        <p class="hero-quote-calendar">Apakah Anda ingin mencapai tujuan kebugaran tanpa harus pergi ke gym? Dengan fitur penjadwalan olahraga di rumah, Anda dapat merencanakan latihan yang sesuai dengan tujuan dan gaya hidup Anda — langsung dari kenyamanan rumah! Kami akan membantu Anda membuat jadwal latihan yang efektif dan aman, dengan latihan yang bisa dilakukan tanpa peralatan mahal. Cukup klik tombol di bawah ini untuk menyinkronkan jadwal olahraga Anda.</p>
        <button class="join-button" id="auth-calendar-button">Sinkronkan Jadwal</button>
      </div>
      <div class="hero-images-user">
        <img class="lazyload" data-src="./images/heroes/kalendar.jpg" alt="Workout 2">
      </div>
    </section>

    <!-- Pop-up Form -->
    <div id="schedule-popup" class="popup popup-hidden">
      <div class="popup-content">
        <h2>Buat Jadwal Baru</h2>
        <form id="schedule-form">
          <label for="target">Target</label>
          <select id="target" name="target" required>
            <option value="weight_loss">Weight Loss</option>
            <option value="core_strength">Core Strength</option>
            <option value="muscle_building">Gain Muscle</option>
            <option value="maintenance">Maintenance</option>
          </select>

          <label for="start-date">Tanggal Mulai</label>
          <input type="date" id="start-date" name="startDate" required />

          <button type="submit" class="popup-submit">Jadwalkan</button>
          <button type="button" id="popup-close" class="popup-close">Batal</button>
        </form>
      </div>
    </div>
    `;
  },

  async afterRender() {
    console.log("Kalendar page is loaded");
    window.location.hash = "#/kalendar";

    const authButton = document.getElementById("auth-calendar-button");
    const popup = document.getElementById("schedule-popup");
    const closePopupButton = document.getElementById("popup-close");
    const scheduleForm = document.getElementById("schedule-form");

    let accessToken = localStorage.getItem("access_token");

    if (accessToken) {
      popup.classList.remove("popup-hidden");
    }

    authButton.addEventListener("click", async () => {
      try {
        const authResponse = await fetch(
          "https://workoutathome.pemweb.cloud/calendar/auth"
        );
        if (!authResponse.ok)
          throw new Error("Gagal mendapatkan URL autentikasi");
        const { url } = await authResponse.json();

        window.location.href = url;
      } catch (error) {
        console.error("Error saat autentikasi kalender:", error);
        alert(
          "Terjadi kesalahan saat mencoba menyinkronkan kalender. Silakan coba lagi."
        );
      }
    });

    closePopupButton.addEventListener("click", () => {
      popup.classList.add("popup-hidden");
    });

    scheduleForm.addEventListener("submit", async (event) => {
      event.preventDefault();

      const target = document.getElementById("target").value;
      const startDate = document.getElementById("start-date").value;

      if (!accessToken) {
        alert("Token tidak ditemukan. Silakan login terlebih dahulu.");
        return;
      }

      try {
        const scheduleResponse = await fetch(
          "https://workoutathome.pemweb.cloud/calendar/generate",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${accessToken}`,
            },
            body: JSON.stringify({
              target,
              startDate,
              googleAuth: { access_token: accessToken },
            }),
          }
        );

        if (!scheduleResponse.ok) throw new Error("Gagal membuat jadwal");
        const result = await scheduleResponse.json();

        alert("Jadwal berhasil dibuat! Detail: " + JSON.stringify(result));
        popup.classList.add("popup-hidden");
      } catch (error) {
        console.error("Error saat membuat jadwal:", error);
        alert("Gagal membuat jadwal. Silakan coba lagi.");
      }
    });
  },
};

export default Kalendar;
