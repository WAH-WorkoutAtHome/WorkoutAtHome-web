const KalkulatorGizi= {
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
      font-size: 2rem;
      margin-top: 30px;
      color: #000;
    }

    .calculator-title p {
      text-align: center;
      max-width: 600px;
      margin: 10px auto 0px;
      color: #555;
    }

    .result p {
      max-width: 600px;
      margin: 30px auto 0px;
      color: #555;
    }

    .container {
      display: flex;
      gap: 50px;
      justify-content: center;
    }

    .box {
      background-color: #fff;
      border-radius: 10px;
      box-shadow: 0px 0px 15px 2px rgba(0, 0, 0, 0.25);
      padding: 20px;
      width: 420px;
      height: 300px;
    }

    .box h2 {
      background-color: #4a00e0;
      color: #fff;
      text-align: center;
      padding: 10px;
      box-shadow: 0px 0px 15px 2px rgba(0, 0, 0, 0.25);
      font-size: 1.2rem;
      margin: -20px -20px 20px -20px;
    }

    .form-group {
      margin-bottom: 15px;
    }

    label {
      display: block;
      margin-bottom: 5px;
    }

    select,
    input {
      width: 100%;
      padding: 10px;
      border-radius: 5px;
      border: 1px solid #ccc;
    }

    .calculate-btn {
      padding: 10px 20px;
  background-color: #6CF3E5;
  border: none;
  border-radius: 30px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  color: #000;
    }

    .calculate-btn:hover {
      background-color: #3ecce9e2;
    }

    .result {
      text-align: left;
    }

    .result h3 {
      font-size: 1rem;
      margin: 10px 0;
    }
  </style>
  <div class="calculator-title">
       <h1>Hitung Kalori Harian Anda dengan Mudah!</h1>
  <p>Fitur ini membantu Anda merencanakan pola makan yang tepat untuk mencapai tujuan kebugaran, baik itu menurunkan berat badan, membentuk otot, atau menjaga kebugaran secara umum.</p>
  </div>
  <div class="container">
    <!-- Kalkulator Harian -->
    <div class="box">
      <h2>Kalkulator Harian</h2>
      <form>
        <div class="form-group">
          <label for="activity">Tingkat Aktivitas</label>
          <select id="activity">
            <option value="">Pilih Aktivitas</option>
            <option value="low">Rendah</option>
            <option value="moderate">Sedang</option>
            <option value="high">Tinggi</option>
          </select>
        </div>
        <div class="form-group">
          <label for="diet">Tujuan Diet</label>
          <select id="diet">
            <option value="">Pilih Tujuan</option>
            <option value="loss">Menurunkan Berat</option>
            <option value="maintain">Menjaga Berat</option>
            <option value="gain">Meningkatkan Berat</option>
          </select>
        </div>
        <button type="button" class="calculate-btn">Calculate</button>
      </form>
    </div>

    <!-- Kalori Harian -->
    <div class="box">
      <h2>Kalori Harian</h2>
      <div class="result">
        <h3>Angka Kecukupan Gizi Anda adalah:</h3>
        <p><strong>Kalori Harian:</strong> -</p>
        <p><strong>Protein Harian:</strong> -</p>
        <p><strong>Toleransi Gula:</strong> -</p>
      </div>
    </div>
  </div>
        `;
    },

    async afterRender() {
      // logika perhitungan
      },
    };
  
  export default KalkulatorGizi;