const KalkulatorGizi = {
  render() {
    return `
      <style>
        body {
          font-family: 'Poppins', sans-serif;
          background-color: white;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
        }

        h1 {
          text-align: center;
          font-size: 1rem;
          margin-top: 30px;
          color: #000;
        }

        .calculator-title p {
          text-align: center;
          max-width: 600px;
          margin: 10px auto 0px;
          color: #555;
        }

        .container {
          display: flex;
          gap: 50px;
          justify-content: center;
          margin-top: 30px;
        }

        @media screen and (max-width: 800px) {
          .container {
            display: grid;
            grid-template-columns: repeat(1, 1fr);
            justify-items: center;
            }
        }

        @media (max-width: 600px) {
          .container {
            padding: 40px;
          }
        }

        .box {
          background-color: #fff;
          border-radius: 10px;
          box-shadow: 0px 0px 15px 2px rgba(0, 0, 0, 0.25);
          padding: 20px;
          width: 100%;
          max-width: 400px;
        }

        .box h2 {
          text-align: center;
          color: #fff;
          background-color: #4a00e0;
          padding: 10px;
          border-radius: 10px 10px 0 0;
          font-size: 1.5rem;
          margin: -20px -20px 20px -20px;
        }

        form {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 5px;
        }

        label {
          font-weight: bold;
          font-size: 1rem;
          color: #333;
        }

        input,
        select {
          padding: 10px;
          font-size: 1rem;
          border: 1px solid #ddd;
          border-radius: 5px;
          transition: all 0.3s ease;
        }

        input:focus,
        select:focus {
          outline: none;
          border-color: #4a00e0;
          box-shadow: 0 0 5px rgba(74, 0, 224, 0.5);
        }

        button.calculate-btn {
          padding: 10px;
          font-size: 1rem;
          font-weight: bold;
          color: #fff;
          background-color: #4a00e0;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        button.calculate-btn:hover {
          background-color: #3600b3;
        }

        .result {
          text-align: left;
        }

        .result h3 {
          font-size: 1rem;
          margin: 10px 0;
        }

        .result p,
        .result ul {
          color: #555;
          line-height: 1.6;
        }

        ul {
          list-style: disc;
          padding-left: 20px;
        }

        /* Loading Spinner */
        .loading {
          display: none;
          justify-content: center;
          align-items: center;
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(255, 255, 255, 0.8);
          z-index: 9999;
        }

        .loading div {
          width: 50px;
          height: 50px;
          border: 5px solid #6CF3E5;
          border-top: 5px solid #4a00e0;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }

        .loading p {
          font-size: 1.5rem;
          color: #4a00e0;
          margin-left: 20px;
          font-weight: bold;
        }

        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      </style>
      <div class="calculator-title">
        <h1>Hitung Kalori Harian Anda dengan Mudah!</h1>
        <p>Fitur ini membantu Anda merencanakan pola makan yang tepat untuk mencapai tujuan kebugaran.</p>
      </div>
      <div class="container">
        <div class="box">
          <h2>Kalkulator Harian</h2>
          <form id="nutrition-form">
            <div class="form-group">
              <label for="weight">Berat Badan (kg)</label>
              <input type="number" id="weight" placeholder="Masukkan berat badan" required />
            </div>

            <div class="form-group">
              <label for="activity">Tingkat Aktivitas</label>
              <select id="activity" required>
                <option value="">Pilih Aktivitas</option>
                <option value="ringan">Rendah</option>
                <option value="sedang">Sedang</option>
                <option value="berat">Tinggi</option>
                <option value="atlet">Atlet</option>
              </select>
            </div>

            <div class="form-group">
              <label for="diet">Tujuan Diet</label>
              <select id="diet" required>
                <option value="">Pilih Tujuan</option>
                <option value="turunkan berat badan">Menurunkan Berat</option>
                <option value="naikkan berat badan">Meningkatkan Berat</option>
                <option value="menaikkan masa otot">Meningkatkan Otot</option>
                <option value="mempertahankan berat badan">Mempertahankan Berat</option>
              </select>
            </div>

            <button type="submit" class="calculate-btn">Hitung</button>
          </form>
        </div>

        <div class="box">
          <h2>Hasil</h2>
          <div class="result" id="result">
            <h3>Angka Kecukupan Gizi Anda:</h3>
            <p><strong>Kalori:</strong> -</p>
            <p><strong>Protein:</strong> -</p>
            <p><strong>Toleransi Gula:</strong> -</p>
            <h3>Rekomendasi Makanan:</h3>
            <div id="food-recommendations">Belum ada rekomendasi.</div>
          </div>
        </div>
      </div>
      <div class="loading" id="loading">
        <div></div>
        <p>Tunggu sebentar yaa...</p>
      </div>
    `;
  },

  async afterRender() {
    const form = document.getElementById("nutrition-form");
    const loadingElement = document.getElementById("loading");
    const recommendationsElement = document.getElementById(
      "food-recommendations"
    );
    const resultElement = document.getElementById("result");

    form.addEventListener("submit", async (event) => {
      event.preventDefault();

      const weight = document.getElementById("weight").value;
      const activityLevel = document.getElementById("activity").value;
      const dietGoal = document.getElementById("diet").value;

      loadingElement.style.display = "flex";

      try {
        const response = await fetch(
          "https://workoutathome.pemweb.cloud/calculator/calories",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ weight, activityLevel, dietGoal }),
          }
        );

        if (!response.ok) throw new Error("Gagal menghitung kalori.");

        const { data } = await response.json();

        resultElement.innerHTML = `
          <h3>Angka Kecukupan Gizi Anda:</h3>
          <p><strong>Kalori:</strong> ${data.calories} kkal</p>
          <p><strong>Protein:</strong> ${data.protein} gram</p>
          <p><strong>Toleransi Gula:</strong> ${data.sugar} gram</p>
          ${data.foodRecommendations}
        `;

        const foodSections = data.foodRecommendations.split("\n\n");
        const formattedRecommendations = foodSections
          .map((section) => {
            const [title, ...items] = section.split("\n");
            const formattedItems = items
              .map((item) => `<li>${item.trim()}</li>`)
              .join("");
            return `<strong>${title}</strong><ul>${formattedItems}</ul>`;
          })
          .join("");

        recommendationsElement.innerHTML = formattedRecommendations;
      } catch (error) {
        resultElement.innerHTML = `<p><strong>Error:</strong> ${error.message}</p>`;
      } finally {
        loadingElement.style.display = "none";
      }
    });
  },
};

export default KalkulatorGizi;
