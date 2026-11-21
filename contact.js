const body = document.body;
const themeBtn = document.getElementById("themeBtn");
const contactForm = document.getElementById("contactForm");
const contactName = document.getElementById("contactName");
const contactPhone = document.getElementById("contactPhone");
const contactEmail = document.getElementById("contactEmail");
const contactSubject = document.getElementById("contactSubject");
const contactMessage = document.getElementById("contactMessage");
const contactAlert = document.getElementById("contactAlert");
const sendContactTelegram = document.getElementById("sendContactTelegram");

const telegramUsername = "PRO_MAX1253";

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

function showContactAlert(type, message) {
  if (!contactAlert) return;

  contactAlert.className = `form-alert ${type}`;
  contactAlert.textContent = message;
}

function toEnglishDigits(str) {
  return str
    .replace(/[۰-۹]/g, function(digit) {
      return "۰۱۲۳۴۵۶۷۸۹".indexOf(digit);
    })
    .replace(/[٠-٩]/g, function(digit) {
      return "٠١٢٣٤٥٦٧٨٩".indexOf(digit);
    });
}

function normalizePhone(phone) {
  return toEnglishDigits(phone)
    .replace(/\s+/g, "")
    .replace(/-/g, "");
}

function validatePhone(phone) {
  return /^09\d{9}$/.test(phone);
}

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function createContactTelegramMessage(data) {
  return `☎️ خبرینو | پیام تماس با ما

سلام 👋
از طریق صفحه تماس با ما سایت خبرینو پیام می‌دم.

👤 نام و نام خانوادگی:
${data.name}

📞 شماره تماس:
${data.phone}

📧 ایمیل:
${data.email}

📌 موضوع پیام:
${data.subject}

📝 متن پیام:
${data.message}

━━━━━━━━━━━━━━

✨ با تشکر از خبرینو 🙏`;
}

function createContactTelegramLink(data) {
  const message = createContactTelegramMessage(data);
  const encodedMessage = encodeURIComponent(message);

  return `https://t.me/${telegramUsername}?text=${encodedMessage}`;
}

if (themeBtn) {
  themeBtn.addEventListener("click", toggleTheme);
}

if (sendContactTelegram) {
  sendContactTelegram.addEventListener("click", function(event) {
    event.preventDefault();

    const nameValue = contactName.value.trim();
    const phoneValue = normalizePhone(contactPhone.value.trim());
    const emailValue = contactEmail.value.trim();
    const subjectValue = contactSubject.value.trim();
    const messageValue = contactMessage.value.trim();

    if (!nameValue || !phoneValue || !emailValue || !subjectValue || !messageValue) {
      showContactAlert("error", "لطفاً همه فیلدها را کامل وارد کنید.");
      return;
    }

    if (!validatePhone(phoneValue)) {
      showContactAlert("error", "شماره تماس باید با 09 شروع شود و ۱۱ رقم باشد.");
      return;
    }

    if (!validateEmail(emailValue)) {
      showContactAlert("error", "لطفاً ایمیل را به‌درستی وارد کنید.");
      return;
    }

    const contactData = {
      name: nameValue,
      phone: phoneValue,
      email: emailValue,
      subject: subjectValue,
      message: messageValue,
      date: new Date().toLocaleString("fa-IR")
    };

    localStorage.setItem("lastContactMessage", JSON.stringify(contactData));

    showContactAlert("success", "در حال انتقال به تلگرام خبرینو...");

    setTimeout(function() {
      window.location.href = createContactTelegramLink(contactData);
    }, 600);
  });
}

loadTheme();
