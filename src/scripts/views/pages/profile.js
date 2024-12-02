const Profile = {
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
          min-width: 200px;
          display: flex;
          flex-direction: column;
          gap: 20px;
          margin-top: 10px;
          margin-left: 30px;
          margin-right: 30px;
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

        .update-button {
          padding: 12px 25px;
          background-color: #6CF3E5;
          border: none;
          border-radius: 30px;
          font-size: 12px;
          font-weight: 700;
          cursor: pointer;
          color: #000;
          margin-top: 20px;
        }

        .update-button:hover {
          background-color: #57d8c1;
        }

        .logout-button {
          padding: 10px 20px;
          background-color: #ff5e57;
          border: none;
          border-radius: 30px;
          font-size: 12px;
          font-weight: 700;
          cursor: pointer;
          color: white;
          margin-top: 10px;
          align-self: center;
        }

        .logout-button:hover {
          background-color: #e04848;
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
        <h2>Profile</h2>
        <form id="profile-form">
          <div class="form-group">
            <label for="nama">Nama Pengguna</label>
            <input type="text" id="nama" name="nama" placeholder="Masukkan Nama" required>
          </div>

          <!-- Row for Gender and Date of Birth -->
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

          <!-- Row for Height and Weight -->
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

          <button type="submit" class="update-button">Ubah Profile</button>
          <button id="logout-button" class="logout-button">Keluar akun</button>
        </form>
      </div>
    `;
  },

  async afterRender() {
    // Ambil elemen-elemen penting
    const savedData = JSON.parse(localStorage.getItem("userBiodata")) || {};
    const profileForm = document.querySelector("#profile-form");
    const updateButton = document.querySelector(".update-button");
    const logoutButton = document.getElementById("logout-button");

    // Isi formulir dengan data yang tersimpan
    function populateForm(data) {
      document.getElementById("nama").value = data.nama || "";
      document.getElementById("gender").value = data.gender || "";
      document.getElementById("dob").value = data.dob || "";
      document.getElementById("height").value = data.height || "";
      document.getElementById("weight").value = data.weight || "";
    }

    // Nonaktifkan input form secara default
    function toggleFormEditable(isEditable) {
      const inputs = profileForm.querySelectorAll("input, select");
      inputs.forEach((input) => {
        input.disabled = !isEditable;
      });
    }

    // Set data ke form saat pertama kali di-load
    populateForm(savedData);
    toggleFormEditable(false);

    // Event listener untuk tombol "Ubah Profile"
    updateButton.addEventListener("click", (event) => {
      event.preventDefault();
      const isEditing = updateButton.textContent === "Simpan Perubahan";

      if (isEditing) {
        // Simpan data baru
        const formData = new FormData(profileForm);
        const updatedBiodata = {
          nama: formData.get("nama").trim(),
          gender: formData.get("gender"),
          dob: formData.get("dob"),
          height: formData.get("height"),
          weight: formData.get("weight"),
        };

        // Validasi input
        if (
          !updatedBiodata.nama ||
          !updatedBiodata.gender ||
          !updatedBiodata.dob ||
          !updatedBiodata.height ||
          !updatedBiodata.weight
        ) {
          alert("Semua kolom wajib diisi!");
          return;
        }

        // Simpan ke localStorage
        localStorage.setItem("userBiodata", JSON.stringify(updatedBiodata));
        alert("Profil berhasil diperbarui!");
        updateButton.textContent = "Ubah Profile";
        toggleFormEditable(false);
      } else {
        // Aktifkan mode edit
        toggleFormEditable(true);
        updateButton.textContent = "Simpan Perubahan";
      }
    });

    // Event listener untuk tombol logout
    logoutButton.addEventListener("click", () => {
      localStorage.removeItem("userToken");
      localStorage.removeItem("userBiodata");
      window.location.href = "/#/dashboard-guest";
    });
  },
};

export default Profile;
