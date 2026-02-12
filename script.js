
const typingText = document.getElementById("typing-text");
const phrases = {
  en: ["Hello, I'm Thamer.", "I'm an IT specialist.", "Welcome to my portfolio!"],
  ar: ["مرحبًا، أنا ثامر.", "أخصائي تقنية معلومات.", "أهلاً بك في موقعي!"]
};
let lang = "en", i = 0, j = 0, isDeleting = false;

function type() {
  const phrase = phrases[lang][i];
  typingText.innerText = phrase.slice(0, j);
  if (!isDeleting && j < phrase.length) {
    j++;
    setTimeout(type, 100);
  } else if (isDeleting && j > 0) {
    j--;
    setTimeout(type, 50);
  } else {
    isDeleting = !isDeleting;
    if (!isDeleting) i = (i + 1) % phrases[lang].length;
    setTimeout(type, 1000);
  }
}
type();

function toggleMode() {
  const body = document.body;
  const btn = document.getElementById("mode-toggle");
  body.classList.toggle("dark");
  const isDark = body.classList.contains("dark");
  btn.innerText = isDark ? "☀" : "🌙";
  localStorage.setItem("theme", isDark ? "dark" : "light");
}

// Load saved theme
document.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark");
    const btn = document.getElementById("mode-toggle");
    if(btn) btn.innerText = "☀";
  }
});
function toggleLang() {
  lang = lang === "en" ? "ar" : "en";
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  document.querySelectorAll("[data-en]").forEach(el => {
    el.innerText = lang === "ar" ? el.dataset.ar : el.dataset.en;
  });
}

// Add click sound effect
const clickSound = new Audio("click.mp3");
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("button, a").forEach(el => {
    el.addEventListener("click", () => {
      clickSound.currentTime = 0;
      clickSound.play();
    });
  });
});
