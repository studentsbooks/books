// Ana JavaScript - BookAndRead
(function() {
  'use strict';

  // Slider Verileri (_config.yml yerine burada tanımlı)
  const slidesData = [
    {
      image: "https://placehold.co/1200x400/1a1a1a/ffffff?text=Medical+%26+Nursing",
      title: "Medical & Nursing Resources",
      description: "Access essential textbooks for healthcare professionals",
      buttonText: "Explore Collection →",
      link: "https://bookandread.store/collections/medical-nursing"
    },
    {
      image: "https://placehold.co/1200x400/2c3e50/ffffff?text=Test+Prep+2026",
      title: "Test Prep & AP Guides 2026",
      description: "Prepare for success with premium study materials",
      buttonText: "View Guides →",
      link: "https://bookandread.store/collections/test-prep"
    },
    {
      image: "https://placehold.co/1200x400/1b4332/ffffff?text=Engineering+%26+Math",
      title: "Engineering & Mathematics",
      description: "Core textbooks for STEM students",
      buttonText: "Browse Books →",
      link: "https://bookandread.store/collections/engineering-mathematics"
    }
  ];

  let currentSlide = 0;
  let slideInterval;
  let isPlaying = true;

  function renderSlides() {
    const container = document.getElementById('slidesContainer');
    if (!container) return;
    container.innerHTML = slidesData.map(slide => `
      <div class="slide">
        <div class="slide-content">
          <h2>${slide.title}</h2>
          <p>${slide.description}</p>
          <a href="${slide.link}" class="slide-btn">${slide.buttonText}</a>
        </div>
        <div class="slide-image">
          <img src="${slide.image}" alt="${slide.title}">
        </div>
      </div>
    `).join('');
    updateIndicators();
  }

  function updateIndicators() {
    const container = document.getElementById('sliderIndicators');
    if (!container) return;
    container.innerHTML = slidesData.map((_, i) => 
      `<span class="dot ${i === currentSlide ? 'active' : ''}" data-index="${i}"></span>`
    ).join('');
    document.querySelectorAll('.dot').forEach(dot => {
      dot.addEventListener('click', (e) => {
        currentSlide = parseInt(e.target.dataset.index);
        updateSlidePosition();
        resetTimer();
      });
    });
  }

  function updateSlidePosition() {
    const slides = document.getElementById('slidesContainer');
    if (slides) slides.style.transform = `translateX(-${currentSlide * 100}%)`;
    updateIndicators();
  }

  function nextSlide() { currentSlide = (currentSlide + 1) % slidesData.length; updateSlidePosition(); }
  function prevSlide() { currentSlide = (currentSlide - 1 + slidesData.length) % slidesData.length; updateSlidePosition(); }
  
  function startTimer() {
    if (slideInterval) clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, 5000);
    isPlaying = true;
    const btn = document.getElementById('playPauseBtn');
    if (btn) btn.textContent = '⏸';
  }
  
  function stopTimer() {
    if (slideInterval) clearInterval(slideInterval);
    isPlaying = false;
    const btn = document.getElementById('playPauseBtn');
    if (btn) btn.textContent = '▶';
  }
  
  function resetTimer() { if (isPlaying) { stopTimer(); startTimer(); } }

  document.addEventListener('DOMContentLoaded', () => {
    renderSlides();
    startTimer();
    
    document.getElementById('prevSlide')?.addEventListener('click', () => { prevSlide(); resetTimer(); });
    document.getElementById('nextSlide')?.addEventListener('click', () => { nextSlide(); resetTimer(); });
    document.getElementById('playPauseBtn')?.addEventListener('click', () => isPlaying ? stopTimer() : startTimer());
    
    // Kupon banner zaten template ile oluşturuldu, ek işlem gerekmez.
  });
})();
