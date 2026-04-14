// Kategori -> Fourthwall Koleksiyon Linkleri
const categoryLinks = {
  "Best Seller": "https://bookandread.store/collections/best-seller",
  "New Arrivals": "https://bookandread.store/collections/new-arrivals",
  "Medical & Nursing": "https://bookandread.store/collections/medical-nursing",
  "Textbooks": "https://bookandread.store/collections/textbooks",
  "Engineering & Mathematics": "https://bookandread.store/collections/engineering-mathematics",
  "Business & Career": "https://bookandread.store/collections/business-career",
  "Bestseller Novels": "https://bookandread.store/collections/bestseller-novels",
  "Student Favorites": "https://bookandread.store/collections/student-favorites",
  "Psychology & Counseling": "https://bookandread.store/collections/psychology-counseling",
  "History & Humanities": "https://bookandread.store/collections/history-humanities",
  "Natural Sciences": "https://bookandread.store/collections/natural-sciences",
  "Software & Computer Science": "https://bookandread.store/collections/software-computer-science",
  "Education": "https://bookandread.store/collections/education",
  "Herbal & Alternative Medicine": "https://bookandread.store/collections/herbal-alternative-medicine"
};

// Sayfa yüklendiğinde kategori linklerini aktif et
document.addEventListener('DOMContentLoaded', function() {
  const categoryCards = document.querySelectorAll('[data-category]');
  categoryCards.forEach(card => {
    const category = card.getAttribute('data-category');
    if (categoryLinks[category]) {
      card.addEventListener('click', (e) => {
        e.preventDefault();
        window.location.href = categoryLinks[category];
      });
    }
  });
});
