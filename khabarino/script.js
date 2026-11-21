const body = document.body;
const siteHeader = document.getElementById("siteHeader");
const menuBtn = document.getElementById("menuBtn");
const closeMenu = document.getElementById("closeMenu");
const mobileMenu = document.getElementById("mobileMenu");
const menuOverlay = document.getElementById("menuOverlay");
const searchBtn = document.getElementById("searchBtn");
const searchModal = document.getElementById("searchModal");
const closeSearch = document.getElementById("closeSearch");
const searchForm = document.getElementById("searchForm");
const searchInput = document.getElementById("searchInput");
const themeBtn = document.getElementById("themeBtn");
const todayDate = document.getElementById("todayDate");
const breakingText = document.getElementById("breakingText");
const importantNews = document.getElementById("importantNews");
const importantPrev = document.getElementById("importantPrev");
const importantNext = document.getElementById("importantNext");
const heroTabs = document.querySelectorAll(".hero-tab");
const saveFeatured = document.getElementById("saveFeatured");
const statNumbers = document.querySelectorAll(".stat-box strong");
const searchResultsSection = document.getElementById("searchResultsSection");
const searchResultsGrid = document.getElementById("searchResultsGrid");
const searchInfo = document.getElementById("searchInfo");
const clearSearchResults = document.getElementById("clearSearchResults");

const breakingNews = [
  "آخرین تغییرات بازار ارز اعلام شد",
  "تیم ملی برای مسابقات آسیایی آماده می‌شود",
  "نسل جدید ابزارهای هوش مصنوعی معرفی شد",
  "شاخص بورس امروز با رشد همراه بود",
  "پیش‌بینی وضعیت آب‌وهوا برای روزهای آینده منتشر شد"
];

const newsData = [
  {
    title: "نشست مهم سران منطقه با محوریت توسعه همکاری‌های اقتصادی برگزار شد",
    category: "سیاسی",
    type: "politics",
    time: "۴۵ دقیقه قبل",
    image: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&w=900&q=80",
    desc: "در این نشست درباره مسیرهای تازه همکاری سیاسی و اقتصادی میان کشورهای منطقه گفت‌وگو شد."
  },
  {
    title: "قیمت جهانی انرژی بار دیگر در مسیر افزایشی قرار گرفت",
    category: "اقتصادی",
    type: "economy",
    time: "۱ ساعت قبل",
    image: "https://images.unsplash.com/photo-1642543348745-03b1219733d9?auto=format&fit=crop&w=900&q=80",
    desc: "افزایش تقاضا و تحولات بازار جهانی باعث رشد دوباره قیمت انرژی شده است."
  },
  {
    title: "ستاره جوان فوتبال با عملکرد درخشان خود خبرساز شد",
    category: "ورزشی",
    type: "sport",
    time: "۲ ساعت قبل",
    image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=900&q=80",
    desc: "عملکرد چشمگیر این بازیکن جوان باعث توجه رسانه‌ها و هواداران فوتبال شده است."
  },
  {
    title: "نسل جدید تراشه‌های هوشمند با مصرف انرژی کمتر معرفی شد",
    category: "فناوری",
    type: "tech",
    time: "۳ ساعت قبل",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80",
    desc: "این تراشه‌ها برای دستگاه‌های هوشمند، لپ‌تاپ‌ها و مراکز داده عملکرد سریع‌تری ارائه می‌دهند."
  },
  {
    title: "بررسی تازه کارشناسان درباره آینده بازار سرمایه منتشر شد",
    category: "اقتصادی",
    type: "economy",
    time: "۴ ساعت قبل",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=900&q=80",
    desc: "کارشناسان روند احتمالی بازار سرمایه در ماه‌های آینده را بررسی کرده‌اند."
  },
  {
    title: "تغییرات تازه در ترکیب تیم ملی برای مسابقات پیش‌رو اعلام شد",
    category: "ورزشی",
    type: "sport",
    time: "۵ ساعت قبل",
    image: "https://images.unsplash.com/photo-1518091043644-c1d4457512c6?auto=format&fit=crop&w=900&q=80",
    desc: "کادر فنی تیم ملی فهرست تازه بازیکنان را برای اردو و مسابقات آینده اعلام کرد."
  },
  {
    title: "پلتفرم‌های دیجیتال وارد رقابت تازه‌ای در جذب کاربران شدند",
    category: "فناوری",
    type: "tech",
    time: "۶ ساعت قبل",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=900&q=80",
    desc: "رقابت میان پلتفرم‌ها برای ارائه تجربه بهتر، سرعت بیشتر و محتوای اختصاصی افزایش یافته است."
  },
  {
    title: "جزئیات تازه‌ای از لایحه جدید مدیریت شهری اعلام شد",
    category: "سیاسی",
    type: "politics",
    time: "۷ ساعت قبل",
    image: "https://images.unsplash.com/photo-1495020689067-958852a7765e?auto=format&fit=crop&w=900&q=80",
    desc: "این لایحه با هدف بهبود خدمات شهری و مدیریت بهتر منابع عمومی ارائه شده است."
  }
];

const featuredSearchNews = [
  {
    title: "تحولات تازه در دنیای فناوری؛ رقابت شرکت‌های بزرگ وارد مرحله جدید شد",
    category: "خبر ویژه",
    type: "tech",
    time: "۲۰ دقیقه قبل",
    image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=1400&q=80",
    desc: "موج جدیدی از نوآوری‌های دیجیتال مسیر آینده رسانه‌ها، اقتصاد و سبک زندگی کاربران را تغییر خواهد داد."
  },
  {
    title: "بازارهای مالی امروز با تغییرات قابل توجهی همراه شدند",
    category: "اقتصادی",
    type: "economy",
    time: "۱ ساعت قبل",
    image: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=900&q=80",
    desc: "تحلیل‌گران از تغییرات مهم در بازارهای مالی و سرمایه‌گذاری طی ساعات اخیر خبر داده‌اند."
  },
  {
    title: "برنامه مسابقات هفته آینده لیگ اعلام شد",
    category: "ورزشی",
    type: "sport",
    time: "۲ ساعت قبل",
    image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=900&q=80",
    desc: "برنامه جدید مسابقات لیگ با تغییر زمان چند دیدار حساس منتشر شد."
  },
  {
    title: "هوش مصنوعی نقش پررنگ‌تری در رسانه‌های آنلاین پیدا کرد",
    category: "فناوری",
    type: "tech",
    time: "۳ ساعت قبل",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80",
    desc: "رسانه‌های دیجیتال برای تولید محتوا، تحلیل داده و شخصی‌سازی خبرها بیشتر از هوش مصنوعی استفاده می‌کنند."
  }
];

const allSearchNews = [...featuredSearchNews, ...newsData];

let newsIndex = 0;

function openMobileMenu() {
  if (!mobileMenu || !menuOverlay) {
    return;
  }

  mobileMenu.classList.add("active");
  menuOverlay.classList.add("active");
  body.style.overflow = "hidden";
}

function closeMobileMenu() {
  if (!mobileMenu || !menuOverlay) {
    return;
  }

  mobileMenu.classList.remove("active");
  menuOverlay.classList.remove("active");

  if (!searchModal || !searchModal.classList.contains("active")) {
    body.style.overflow = "";
  }
}

function openSearch() {
  if (!searchModal || !searchInput) {
    return;
  }

  searchModal.classList.add("active");
  body.style.overflow = "hidden";

  setTimeout(function() {
    searchInput.focus();
  }, 250);
}

function closeSearchModal() {
  if (!searchModal || !searchInput) {
    return;
  }

  searchModal.classList.remove("active");

  if (!mobileMenu || !mobileMenu.classList.contains("active")) {
    body.style.overflow = "";
  }

  searchInput.value = "";
}

function toggleTheme() {
  body.classList.toggle("dark");

  if (body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");

    if (themeBtn) {
      themeBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
    }
  } else {
    localStorage.setItem("theme", "light");

    if (themeBtn) {
      themeBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';
    }
  }
}

function loadTheme() {
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark") {
    body.classList.add("dark");

    if (themeBtn) {
      themeBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
    }
  } else {
    body.classList.remove("dark");

    if (themeBtn) {
      themeBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';
    }
  }
}

function setTodayDate() {
  if (!todayDate) {
    return;
  }

  const now = new Date();

  const date = new Intl.DateTimeFormat("fa-IR", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  }).format(now);

  todayDate.textContent = date;
}

function changeBreakingNews() {
  if (!breakingText) {
    return;
  }

  breakingText.style.opacity = "0";
  breakingText.style.transform = "translateY(8px)";

  setTimeout(function() {
    breakingText.textContent = breakingNews[newsIndex];
    breakingText.style.opacity = "1";
    breakingText.style.transform = "translateY(0)";
    newsIndex = (newsIndex + 1) % breakingNews.length;
  }, 250);
}

function handleScrollHeader() {
  if (!siteHeader) {
    return;
  }

  if (window.scrollY > 20) {
    siteHeader.classList.add("scrolled");
  } else {
    siteHeader.classList.remove("scrolled");
  }
}

function normalizeText(text) {
  return text
    .toString()
    .trim()
    .toLowerCase()
    .replace(/ي/g, "ی")
    .replace(/ك/g, "ک")
    .replace(/‌/g, " ")
    .replace(/\s+/g, " ");
}

function highlightText(text, query) {
  const cleanQuery = normalizeText(query);

  if (!cleanQuery) {
    return text;
  }

  const escapedQuery = cleanQuery.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const regex = new RegExp(escapedQuery, "gi");

  return text.replace(regex, function(match) {
    return `<mark class="highlight-search">${match}</mark>`;
  });
}

function searchNews(query) {
  const cleanQuery = normalizeText(query);

  return allSearchNews.filter(function(item) {
    const searchableText = normalizeText(`${item.title} ${item.category} ${item.type} ${item.time} ${item.desc}`);
    return searchableText.includes(cleanQuery);
  });
}

function renderSearchResults(results, query) {
  if (!searchResultsSection || !searchResultsGrid || !searchInfo) {
    return;
  }

  searchResultsSection.classList.add("active");

  if (results.length === 0) {
    searchInfo.textContent = `برای عبارت «${query}» هیچ خبری پیدا نشد.`;

    searchResultsGrid.innerHTML = `
      <div class="no-result-box">
        <div>
          <i class="fa-solid fa-magnifying-glass"></i>
          <h3>نتیجه‌ای پیدا نشد</h3>
          <p>عبارت دیگری را امتحان کنید یا از کلمات کوتاه‌تر مثل فناوری، ورزش، اقتصاد یا سیاست استفاده کنید.</p>
        </div>
      </div>
    `;

    searchResultsGrid.style.gridTemplateColumns = "1fr";
    return;
  }

  searchResultsGrid.style.gridTemplateColumns = "";
  searchInfo.textContent = `${results.length.toLocaleString("fa-IR")} خبر برای عبارت «${query}» پیدا شد.`;

  searchResultsGrid.innerHTML = results.map(function(item) {
    return `
      <article class="search-result-card">
        <div class="search-result-img">
          <img src="${item.image}" alt="${item.category}">
          <span>${item.category}</span>
        </div>

        <div class="search-result-body">
          <h3>${highlightText(item.title, query)}</h3>
          <p>${highlightText(item.desc, query)}</p>

          <div class="search-result-footer">
            <small><i class="fa-regular fa-clock"></i> ${item.time}</small>
            <a href="#">
              مطالعه
              <i class="fa-solid fa-arrow-left"></i>
            </a>
          </div>
        </div>
      </article>
    `;
  }).join("");
}

function runSearch(value) {
  if (!searchInput) {
    return;
  }

  const query = value.trim();

  if (query.length < 2) {
    searchInput.value = "";
    searchInput.placeholder = "حداقل دو حرف وارد کنید";
    searchInput.focus();
    return;
  }

  const results = searchNews(query);

  renderSearchResults(results, query);
  closeSearchModal();

  setTimeout(function() {
    if (searchResultsSection) {
      searchResultsSection.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  }, 250);
}

function handleSearchSubmit(event) {
  event.preventDefault();
  runSearch(searchInput.value);
}

function handleKeyboard(event) {
  if (event.key === "Escape") {
    closeMobileMenu();
    closeSearchModal();
  }

  if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
    event.preventDefault();
    openSearch();
  }
}

function renderImportantNews(category = "all") {
  if (!importantNews) {
    return;
  }

  const filteredNews = category === "all" ? newsData : newsData.filter(function(item) {
    return item.type === category;
  });

  importantNews.innerHTML = filteredNews.map(function(item, index) {
    return `
      <article class="important-card">
        <div class="important-img">
          <img src="${item.image}" alt="${item.category}">
          <span>${item.category}</span>
        </div>

        <div class="important-body">
          <h3>${item.title}</h3>

          <div class="important-footer">
            <small><i class="fa-regular fa-clock"></i> ${item.time}</small>
            <button class="save-card" data-id="${index}">
              <i class="fa-regular fa-bookmark"></i>
            </button>
          </div>
        </div>
      </article>
    `;
  }).join("");

  importantNews.scrollTo({
    left: importantNews.scrollWidth,
    behavior: "smooth"
  });

  activateSaveButtons();
}

function activateSaveButtons() {
  document.querySelectorAll(".save-card").forEach(function(button) {
    button.addEventListener("click", function() {
      button.classList.toggle("saved");

      if (button.classList.contains("saved")) {
        button.innerHTML = '<i class="fa-solid fa-bookmark"></i>';
      } else {
        button.innerHTML = '<i class="fa-regular fa-bookmark"></i>';
      }
    });
  });
}

function slideImportantNews(direction) {
  if (!importantNews) {
    return;
  }

  const card = importantNews.querySelector(".important-card");
  const cardWidth = card ? card.offsetWidth + 16 : 300;

  importantNews.scrollBy({
    left: direction * cardWidth,
    behavior: "smooth"
  });
}

function animateStats() {
  statNumbers.forEach(function(number) {
    const target = Number(number.dataset.count);
    let current = 0;
    const step = Math.ceil(target / 70);

    const timer = setInterval(function() {
      current += step;

      if (current >= target) {
        current = target;
        clearInterval(timer);
      }

      number.textContent = current.toLocaleString("fa-IR");
    }, 18);
  });
}

function observeStats() {
  const statsSection = document.querySelector(".hero-stats");

  if (!statsSection) {
    return;
  }

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        animateStats();
        observer.disconnect();
      }
    });
  }, {
    threshold: 0.35
  });

  observer.observe(statsSection);
}

if (menuBtn) {
  menuBtn.addEventListener("click", openMobileMenu);
}

if (closeMenu) {
  closeMenu.addEventListener("click", closeMobileMenu);
}

if (menuOverlay) {
  menuOverlay.addEventListener("click", closeMobileMenu);
}

if (searchBtn) {
  searchBtn.addEventListener("click", openSearch);
}

if (closeSearch) {
  closeSearch.addEventListener("click", closeSearchModal);
}

if (themeBtn) {
  themeBtn.addEventListener("click", toggleTheme);
}

if (searchForm) {
  searchForm.addEventListener("submit", handleSearchSubmit);
}

window.addEventListener("scroll", handleScrollHeader);
document.addEventListener("keydown", handleKeyboard);

if (searchModal) {
  searchModal.addEventListener("click", function(event) {
    if (event.target === searchModal) {
      closeSearchModal();
    }
  });
}

document.querySelectorAll(".search-tags button").forEach(function(button) {
  button.addEventListener("click", function() {
    searchInput.value = button.textContent;
    runSearch(button.textContent);
  });
});

document.querySelectorAll(".mobile-nav a").forEach(function(link) {
  link.addEventListener("click", function() {
    closeMobileMenu();
  });
});

heroTabs.forEach(function(tab) {
  tab.addEventListener("click", function() {
    heroTabs.forEach(function(item) {
      item.classList.remove("active");
    });

    tab.classList.add("active");
    renderImportantNews(tab.dataset.category);
  });
});

if (importantPrev) {
  importantPrev.addEventListener("click", function() {
    slideImportantNews(1);
  });
}

if (importantNext) {
  importantNext.addEventListener("click", function() {
    slideImportantNews(-1);
  });
}

if (saveFeatured) {
  saveFeatured.addEventListener("click", function() {
    saveFeatured.classList.toggle("saved");

    if (saveFeatured.classList.contains("saved")) {
      saveFeatured.innerHTML = '<i class="fa-solid fa-bookmark"></i>';
    } else {
      saveFeatured.innerHTML = '<i class="fa-regular fa-bookmark"></i>';
    }
  });
}

if (clearSearchResults) {
  clearSearchResults.addEventListener("click", function() {
    searchResultsSection.classList.remove("active");
    searchResultsGrid.innerHTML = "";
    searchInfo.textContent = "";
  });
}

loadTheme();
setTodayDate();
changeBreakingNews();
setInterval(changeBreakingNews, 3500);
renderImportantNews();
observeStats();

const breakingTrack = document.getElementById("breakingTrack");

if (breakingTrack) {
  breakingTrack.addEventListener("mouseenter", function () {
    breakingTrack.style.animationPlayState = "paused";
  });

  breakingTrack.addEventListener("mouseleave", function () {
    breakingTrack.style.animationPlayState = "running";
  });
}

const newsModalOverlay = document.getElementById("newsModalOverlay");
const newsModalClose = document.getElementById("newsModalClose");
const newsModalCloseBtn = document.getElementById("newsModalCloseBtn");
const newsModalImage = document.getElementById("newsModalImage");
const newsModalCategory = document.getElementById("newsModalCategory");
const newsModalDate = document.getElementById("newsModalDate");
const newsModalTitle = document.getElementById("newsModalTitle");
const newsModalText = document.getElementById("newsModalText");
const newsModalShare = document.getElementById("newsModalShare");
const openNewsModalButtons = document.querySelectorAll(".open-news-modal");

let activeNewsTitle = "";
let activeNewsText = "";

function openNewsModal(button) {
  const title = button.dataset.title;
  const category = button.dataset.category;
  const date = button.dataset.date;
  const image = button.dataset.image;
  const text = button.dataset.text;

  activeNewsTitle = title;
  activeNewsText = text;

  newsModalTitle.textContent = title;
  newsModalCategory.textContent = category;
  newsModalDate.textContent = date;
  newsModalImage.src = image;
  newsModalImage.alt = title;
  newsModalText.textContent = text;

  newsModalOverlay.classList.add("active");
  document.body.classList.add("modal-open");
}

function closeNewsModal() {
  newsModalOverlay.classList.remove("active");
  document.body.classList.remove("modal-open");
}

openNewsModalButtons.forEach(function(button) {
  button.addEventListener("click", function(event) {
    event.preventDefault();
    openNewsModal(button);
  });
});

if (newsModalClose) {
  newsModalClose.addEventListener("click", closeNewsModal);
}

if (newsModalCloseBtn) {
  newsModalCloseBtn.addEventListener("click", closeNewsModal);
}

if (newsModalOverlay) {
  newsModalOverlay.addEventListener("click", function(event) {
    if (event.target === newsModalOverlay) {
      closeNewsModal();
    }
  });
}

document.addEventListener("keydown", function(event) {
  if (event.key === "Escape" && newsModalOverlay.classList.contains("active")) {
    closeNewsModal();
  }
});

if (newsModalShare) {
  newsModalShare.addEventListener("click", function() {
    const shareText = `${activeNewsTitle}\n\n${activeNewsText}`;

    if (navigator.share) {
      navigator.share({
        title: activeNewsTitle,
        text: shareText,
        url: window.location.href
      });
    } else {
      navigator.clipboard.writeText(shareText);
      newsModalShare.innerHTML = 'کپی شد <i class="fa-solid fa-check"></i>';

      setTimeout(function() {
        newsModalShare.innerHTML = 'اشتراک‌گذاری <i class="fa-solid fa-share-nodes"></i>';
      }, 1800);
    }
  });
}

const latestFilters = document.querySelectorAll(".latest-filter");
const latestNewsCards = document.querySelectorAll(".latest-news-card");
const latestLoadMore = document.getElementById("latestLoadMore");
const miniNewsletterForm = document.getElementById("miniNewsletterForm");
const miniNewsletterEmail = document.getElementById("miniNewsletterEmail");
const miniNewsletterAlert = document.getElementById("miniNewsletterAlert");

function showMiniNewsletterAlert(type, message) {
  if (!miniNewsletterAlert) return;

  miniNewsletterAlert.className = `mini-newsletter-alert ${type}`;
  miniNewsletterAlert.textContent = message;
}

function validateMiniEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

latestFilters.forEach(function(filterButton) {
  filterButton.addEventListener("click", function() {
    latestFilters.forEach(function(btn) {
      btn.classList.remove("active");
    });

    filterButton.classList.add("active");

    const selectedCategory = filterButton.dataset.filter;

    latestNewsCards.forEach(function(card) {
      const cardCategory = card.dataset.category;

      if (selectedCategory === "all" || selectedCategory === cardCategory) {
        card.classList.remove("hide");
      } else {
        card.classList.add("hide");
      }
    });
  });
});

if (latestLoadMore) {
  latestLoadMore.addEventListener("click", function() {
    latestLoadMore.innerHTML = 'فعلاً خبر بیشتری وجود ندارد <i class="fa-solid fa-check"></i>';
    latestLoadMore.disabled = true;
  });
}

if (miniNewsletterForm) {
  miniNewsletterForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const emailValue = miniNewsletterEmail.value.trim();

    if (!emailValue) {
      showMiniNewsletterAlert("error", "لطفاً ایمیل خود را وارد کنید.");
      return;
    }

    if (!validateMiniEmail(emailValue)) {
      showMiniNewsletterAlert("error", "لطفاً ایمیل را به‌درستی وارد کنید.");
      return;
    }

    localStorage.setItem("khabarinoNewsletterEmail", emailValue);

    showMiniNewsletterAlert("success", "عضویت شما در خبرنامه با موفقیت ثبت شد.");
    miniNewsletterEmail.value = "";
  });
}

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(function(item) {
  const question = item.querySelector(".faq-question");

  question.addEventListener("click", function() {
    faqItems.forEach(function(otherItem) {
      if (otherItem !== item) {
        otherItem.classList.remove("active");
      }
    });

    item.classList.toggle("active");
  });
});

const backToTop = document.getElementById("backToTop");

if (backToTop) {
  backToTop.addEventListener("click", function() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}

document.addEventListener("click", function(e) {
  const btn = e.target.closest(".open-news-modal");
  if (!btn) return;
  
  const title = btn.getAttribute("data-title");
  const isVideo = btn.getAttribute("data-is-video");
  const videoSrc = btn.getAttribute("data-video");
  const image = btn.getAttribute("data-image");
  const text = btn.getAttribute("data-text") || "";

  document.getElementById("newsModalTitle").textContent = title;
  const body = document.getElementById("newsModalBody");

  if (isVideo === "true") {
    body.innerHTML = `
      <video controls autoplay style="width:100%; border-radius:15px;">
        <source src="${videoSrc}" type="video/mp4">
      </video>
      <p class="mt-3">${text}</p>`;
  } else {
    body.innerHTML = `
      <img src="${image}" class="img-fluid rounded-4 mb-3">
      <p>${text}</p>`;
  }

  new bootstrap.Modal(document.getElementById('newsModal')).show();
});

document.addEventListener("click", function (e) {
  const btn = e.target.closest(".open-news-modal");
  if (!btn) return;
  e.preventDefault();
  const title = btn.getAttribute("data-title");
  const text = btn.getAttribute("data-text");
  const videoSrc = btn.getAttribute("data-video");
  const isVideo = btn.getAttribute("data-is-video") === "true";
  const image = btn.getAttribute("data-image");
  const container = document.getElementById("modalMediaContainer");
  document.getElementById("newsModalTitle").textContent = title;
  document.getElementById("newsModalText").textContent = text;
  if (isVideo && videoSrc) {
    container.innerHTML = `<video controls autoplay style="width:100%; border-radius:15px;"><source src="${videoSrc}" type="video/mp4"></video>`;
  } else {
    container.innerHTML = `<img src="${image}" style="width:100%; border-radius:15px;">`;
  }
  new bootstrap.Modal(document.getElementById("newsModal")).show();
});

document.getElementById("newsModal").addEventListener("hidden.bs.modal", function () {
  document.getElementById("modalMediaContainer").innerHTML = "";
});
