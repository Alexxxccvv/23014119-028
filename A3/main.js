// 1. Navbar collapse toggle
function initNavbarEvents() {
  const toggle = document.getElementById("nav-toggle");
  const menu = document.getElementById("nav-menu");
  if (toggle && menu) {
    toggle.addEventListener("click", () => {
      menu.classList.toggle("hidden");
    });
  }
}

// 2. Scroll to top
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// 3. Highlight active nav link
function setActiveLink() {
  const links = document.querySelectorAll("nav a");
  links.forEach(link => {
    if (link.href === window.location.href) {
      link.classList.add("font-bold", "text-blue-600");
    }
  });
}

// 4. Wishlist feature
function setupWishlistButtons() {
  const buttons = document.querySelectorAll(".wishlist-btn");
  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      const title = btn.getAttribute("data-title");
      if (title) {
        let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
        if (!wishlist.includes(title)) {
          wishlist.push(title);
          localStorage.setItem("wishlist", JSON.stringify(wishlist));
          alert(`"${title}" added to wishlist!`);
        } else {
          alert(`"${title}" is already in your wishlist.`);
        }
      }
    });
  });
}

// 5. Search filtering
function setupSearchFilter() {
  const searchInput = document.getElementById("game-search");
  const gameList = document.getElementById("games-list");
  if (searchInput && gameList) {
    searchInput.addEventListener("input", () => {
      const term = searchInput.value.toLowerCase();
      const items = gameList.getElementsByTagName("li");
      for (let i = 0; i < items.length; i++) {
        const txt = items[i].textContent.toLowerCase();
        items[i].style.display = txt.includes(term) ? "" : "none";
      }
    });
  }
}

// 6. Scroll progress bar
function scrollProgressBar() {
  const scrollBar = document.getElementById("scroll-progress");
  if (scrollBar) {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (scrollTop / docHeight) * 100;
    scrollBar.style.width = progress + "%";
  }
}

// 7. Back-to-top button visibility
function setupBackToTopButton() {
  const btn = document.getElementById("back-to-top");
  if (btn) {
    btn.style.display = window.scrollY > 300 ? "block" : "none";
  }
}

// 8. Count total games
function countGames() {
  const list = document.getElementById("games-list");
  const display = document.getElementById("game-count");
  if (list && display) {
    display.innerText = "Total Games: " + list.children.length;
  }
}

// 9. Make game cards clickable
function setupGameCards() {
  const cards = document.querySelectorAll(".game-card");
  cards.forEach(card => {
    card.addEventListener("click", () => {
      const link = card.getAttribute("data-link");
      if (link) window.location.href = link;
    });
  });
}

// 10. Init everything on load
document.addEventListener("DOMContentLoaded", () => {
  initNavbarEvents();
  setActiveLink();
  setupSearchFilter();
  countGames();
  setupGameCards();
  setupWishlistButtons();
});

window.addEventListener("scroll", () => {
  scrollProgressBar();
  setupBackToTopButton();
});
