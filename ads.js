const body = document.body;
const themeBtn = document.getElementById("themeBtn");
const adsForm = document.getElementById("adsForm");
const brandName = document.getElementById("brandName");
const managerName = document.getElementById("managerName");
const phoneNumber = document.getElementById("phoneNumber");
const adsPlan = document.getElementById("adsPlan");
const adsMessage = document.getElementById("adsMessage");
const formAlert = document.getElementById("formAlert");
const sendTelegramBtn = document.getElementById("sendTelegramBtn");

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

function showAlert(type, message) {
  if (!formAlert) return;

  formAlert.className = `form-alert ${type}`;
  formAlert.textContent = message;
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

function createTelegramMessage(data) {
  return `📣 خبرینو | درخواست تبلیغات

سلام 👋
برای تبلیغات در سایت شما پیام می‌دم.

🏢 نام برند:
${data.brand}

👤 نام مسئول:
${data.manager}

📞 شماره تماس:
${data.phone}

💎 انتخاب پلن:
${data.plan}

📝 توضیحات:
${data.message}

━━━━━━━━━━━━━━

✨ با تشکر از خبرینو 🙏`;
}

function createTelegramLink(data) {
  const message = createTelegramMessage(data);
  const encodedMessage = encodeURIComponent(message);

  return `https://t.me/${telegramUsername}?text=${encodedMessage}`;
}

if (themeBtn) {
  themeBtn.addEventListener("click", toggleTheme);
}

if (sendTelegramBtn) {
  sendTelegramBtn.addEventListener("click", function(event) {
    event.preventDefault();

    const brandValue = brandName.value.trim();
    const managerValue = managerName.value.trim();
    const phoneValue = normalizePhone(phoneNumber.value.trim());
    const planValue = adsPlan.value.trim();
    const messageValue = adsMessage.value.trim();

    if (!brandValue || !managerValue || !phoneValue || !planValue || !messageValue) {
      showAlert("error", "لطفاً همه فیلدها را کامل وارد کنید.");
      return;
    }

    if (!validatePhone(phoneValue)) {
      showAlert("error", "شماره تماس باید با 09 شروع شود و ۱۱ رقم باشد.");
      return;
    }

    const requestData = {
      brand: brandValue,
      manager: managerValue,
      phone: phoneValue,
      plan: planValue,
      message: messageValue,
      date: new Date().toLocaleString("fa-IR")
    };

    localStorage.setItem("lastAdsRequest", JSON.stringify(requestData));

    const telegramLink = createTelegramLink(requestData);

    window.location.href = telegramLink;
  });
}

loadTheme();
