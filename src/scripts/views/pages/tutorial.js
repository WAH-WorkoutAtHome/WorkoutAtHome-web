const Tutorial = {
  async render() {
    return `
    <style>
    h2 {
      text-align: center;
    }

    .video-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      justify-items: center;
      gap: 20px;
      padding: 45px;  
    }

    /* Responsive Video Grid */
    @media (max-width: 1200px) {
      .video-grid {
        grid-template-columns: repeat(2, 1fr); /* 2 kolom untuk tablet */
        gap: 15px; /* Kurangi jarak antar elemen */
      }
    }

    @media (max-width: 768px) {
      .video-grid {
        grid-template-columns: repeat(1, 1fr); /* 1 kolom untuk ponsel */
        gap: 12px; /* Kurangi jarak antar elemen */
      }
    }
    </style>
    
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-img-container">
        <div class="hero-images">
          <div class="hero-text">
            <h1>Mulai Latihan dengan<br/>Tutorial Kami!</h1>
            <p>
              Mulai perjalanan kebugaran Anda di sini dan capai<br/>tujuan sehat dengan
              latihan yang bisa dilakukan di<br/>rumah.
            </p>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Search Bar -->
    <div class="search-container">
      <input 
        type="text" 
        id="search-input" 
        placeholder="Cari kategori latihan" 
      />
      <button id="search-button">Cari</button>
    </div>
    
    <!-- Video Tutorial Sections -->
    <section class="upper-body-container" data-category="upper body">
      <h2>Upper Body</h2>
      <div class="video-grid">
          <iframe class="lazyload" data-src="https://www.youtube.com/embed/mm47bCaCzpQ?si=DOcjG2v2XSpULIl0" allowfullscreen></iframe>
          <iframe class="lazyload" data-src="https://www.youtube.com/embed/v1ywvzu0Eu4?si=2NaW4rSpc18XyqSk" allowfullscreen></iframe>
          <iframe class="lazyload" data-src="https://www.youtube.com/embed/0Yx_qbbzM0c?si=OuI937KXOMN3CtN4" allowfullscreen></iframe>
          <iframe class="lazyload" data-src="https://www.youtube.com/embed/bEesWO3qFKU?si=HiwsBf9I0caKpEt-" allowfullscreen></iframe>
          <iframe class="lazyload" data-src="https://www.youtube.com/embed/nBLl4U1ZfbE?si=G0xQZ9IvKHEmJSOU" allowfullscreen></iframe>
          <iframe class="lazyload" data-src="https://www.youtube.com/embed/KsXMJx9_Wj4?si=NWdBDVu3RcnYvIb7" allowfullscreen></iframe>
          <iframe class="lazyload" data-src="https://www.youtube.com/embed/w1sFVRcpE2g?si=zGPmr7kZutt3DagY" allowfullscreen></iframe>
      </div>
    </section>

    <section class="lower-body-container" data-category="lower body">
      <h2>Lower Body</h2>
      <div class="video-grid">
          <iframe class="lazyload" data-src="https://www.youtube.com/embed/X0xt0fYTZv8?si=lrR5wRVfSmewj9vz" allowfullscreen></iframe>
          <iframe class="lazyload" data-src="https://www.youtube.com/embed/k6kZTMsBzTk?si=RHDqhyA53jgCGnoV" allowfullscreen></iframe>
          <iframe class="lazyload" data-src="https://www.youtube.com/embed/GfUpbhaCK7Y?si=bpIhj1yyIPZ6U2tA" allowfullscreen></iframe>
          <iframe class="lazyload" data-src="https://www.youtube.com/embed/qus4gntUw-o?si=Yv8cbFSADAjFAMmR" allowfullscreen></iframe>
          <iframe class="lazyload" data-src="https://www.youtube.com/embed/r4aMIs0ouPU?si=4ZD3RSpPNgQZleR9" allowfullscreen></iframe>
      </div>
    </section>

    <section class="cardio-container" data-category="cardio">
      <h2>Cardio</h2>
      <div class="video-grid">
          <iframe class="lazyload" data-src="https://www.youtube.com/embed/a-V4Or5xyis?si=vdhcF3iAmJ65WfEf" allowfullscreen></iframe>
          <iframe class="lazyload" data-src="https://www.youtube.com/embed/yH5qEZDfZtM?si=bBfvgqMZivx6Tzc2" allowfullscreen></iframe>
          <iframe class="lazyload" data-="https://www.youtube.com/embed/dj03_VDetdw?si=7s6l-OMRKI79TmVr" allowfullscreen></iframe>
          <iframe class="lazyload" data-src="https://www.youtube.com/embed/yXHgcYpUVD4?si=HLKy5XUejb24eQB7" allowfullscreen></iframe>
          <iframe class="lazyload" data-src="https://www.youtube.com/embed/W5IiasNutB8?si=aiuadA5MZTT8WxS3" allowfullscreen></iframe>
      </div>
    </section>

    <section class="core-container" data-category="core">
      <h2>Core</h2>
      <div class="video-grid">
          <iframe class="lazyload" data-src="https://www.youtube.com/embed/8PwoytUU06g?si=2e2ao5k0le3xdPQM" allowfullscreen></iframe>
          <iframe class="lazyload" data-src="https://www.youtube.com/embed/5i8y-_cbwgw?si=niRrT7DmjzbE9R9t" allowfullscreen></iframe>
          <iframe class="lazyload" data-src="https://www.youtube.com/embed/D0K-U0pFj4k?si=TYuAnSeU-hXe29My" allowfullscreen></iframe>
          <iframe class="lazyload" data-src="https://www.youtube.com/embed/E4BpA2jCB2g?si=CD8KB_6K9kWSk7hM" allowfullscreen></iframe>
          <iframe class="lazyload" data-src="https://www.youtube.com/embed/sQp904QUFc0?si=qMBFVnOzi067-Jgw" allowfullscreen></iframe>
      </div>
    </section>
    `;
  },

  async afterRender() {
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');
    const sections = document.querySelectorAll('section[data-category]');

    const filterSections = () => {
      const query = searchInput.value.toLowerCase();

      sections.forEach((section) => {
        const category = section.getAttribute('data-category').toLowerCase();
        if (category.includes(query)) {
          section.style.display = ''; 
        } else {
          section.style.display = 'none'; 
        }
      });
    };

    searchInput.addEventListener('input', filterSections);
    searchButton.addEventListener('click', filterSections);
  },
};

export default Tutorial;
