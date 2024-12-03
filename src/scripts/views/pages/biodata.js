const Biodata = {
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

        .profile-container {
          background-color: white;
          padding: 20px;
          border-radius: 24px;
          box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
          width: 700px;
          display: flex;
          flex-direction: column;
          gap: 20px;
          margin-top: 10px;
          margin-left: auto;
          margin-right: auto;
          margin-bottom: 50px;
        }

        .profile-container h2 {
          text-align: center;
          color: #333;
          font-size: 24px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-top: 15px;
        }

        .form-row {
          display: flex;
          justify-content: space-between;
          gap: 20px;
        }

        .form-group label {
          font-weight: 400;
          margin-bottom: 5px;
          color: rgba(0, 0, 0, 0.6);
          font-size: 16px;
        }

        .form-group input,
        .form-group select {
          padding: 12px;
          border: 1px solid rgba(0, 0, 0, 0.49);
          border-radius: 8px;
          font-size: 14px;
          width: 100%;
          box-sizing: border-box;
        }

        .form-group select {
          cursor: pointer;
        }

        .submit-button {
          padding: 12px 25px;
          background-color: #6CF3E5;
          border: none;
          border-radius: 30px;
          font-size: 16px;
          font-weight: 700;
          cursor: pointer;
          color: #000;
          margin-top: 20px;
        }

        .submit-button:hover {
          background-color: #57d8c1;
        }

        .form-row .form-group {
          flex: 1;
        }

        .form-row .form-group:first-child {
          margin-right: 10px;
        }

        .form-row .form-group:last-child {
          margin-left: 10px;
        }
      </style>

      <div class="profile-container">
        <h2>Biodata</h2>
        <form id="biodata-form">
          <div class="form-group">
            <label for="nama">Nama Pengguna</label>
            <input type="text" id="nama" name="nama" placeholder="Masukkan Nama" required>
          </div>

          <div class="form-row">
            <div class="form-group">
              <label for="gender">Jenis Kelamin</label>
              <select id="gender" name="gender" required>
                <option value="">Pilih Jenis Kelamin</option>
                <option value="laki-laki">Laki-laki</option>
                <option value="perempuan">Perempuan</option>
              </select>
            </div>
            <div class="form-group">
              <label for="dob">Tanggal Lahir</label>
              <input type="date" id="dob" name="dob" required>
            </div>
          </div>

          <div class="form-row">
            <div class="form-group">
              <label for="height">Tinggi Badan (cm)</label>
              <input type="number" id="height" name="height" placeholder="Masukkan Tinggi Badan" required>
            </div>
            <div class="form-group">
              <label for="weight">Berat Badan (kg)</label>
              <input type="number" id="weight" name="weight" placeholder="Masukkan Berat Badan" required>
            </div>
          </div>

          <button type="submit" class="submit-button">Selanjutnya</button>
        </form>
      </div>
    `;
  },

  async afterRender() {
    const form = document.querySelector("#biodata-form");

    form.addEventListener("submit", (event) => {
      event.preventDefault();

      const formData = new FormData(form);
      const biodata = {
        nama: formData.get("nama").trim(),
        gender: formData.get("gender"),
        dob: formData.get("dob"),
        height: formData.get("height"),
        weight: formData.get("weight"),
      };

      localStorage.setItem("biodata", JSON.stringify(biodata));
      alert("Biodata berhasil disimpan!");
      window.location.href = "/#/dashboard-user";
    });
  },
};

export default Biodata;
