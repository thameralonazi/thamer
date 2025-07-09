
function toggleMode() {
  document.body.classList.toggle("dark");
  document.body.classList.toggle("light");
}
function toggleLang() {
  const elements = document.querySelectorAll("[data-en]");
  elements.forEach(el => {
    const currentLang = document.documentElement.lang;
    if (currentLang === "en") {
      el.innerText = el.getAttribute("data-ar");
      document.documentElement.lang = "ar";
      document.documentElement.dir = "rtl";
    } else {
      el.innerText = el.getAttribute("data-en");
      document.documentElement.lang = "en";
      document.documentElement.dir = "ltr";
    }
  });
}
