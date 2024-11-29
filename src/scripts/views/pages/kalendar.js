const Kalendar = {
    render() {
      return ` 
       <!-- Hero Section -->
        <section class="hero-calendar" id="hero-calendar">
        <div class="hero-content-calendar">
          <h1 class="hero-title">Mulai Program Olahraga <br>di Rumah Anda!</br></h1>
          <p class="hero-quote-calendar">Apakah Anda ingin mencapai tujuan kebugaran tanpa harus pergi ke gym? Dengan fitur penjadwalan olahraga di rumah, Anda dapat merencanakan latihan yang sesuai dengan tujuan dan gaya hidup Anda — langsung dari kenyamanan rumah! Kami akan membantu Anda membuat jadwal latihan yang efektif dan aman, dengan latihan yang bisa dilakukan tanpa peralatan mahal. Cukup isi informasi berikut untuk mendapatkan rencana olahraga yang disesuaikan dengan kebutuhan Anda.</p>
          <button class="join-button"><a href="fitur">Isi Data</a></button>
        </div>
        <div class="hero-images-user">
          <img src="./images/heroes/kalendar.jpg" alt="Workout 2">
        </div>
          </section>
        `;
    },

    async afterRender() {
        
      },
    };
  
  export default Kalendar;