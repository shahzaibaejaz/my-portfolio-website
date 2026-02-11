// Mobile menu toggle
const menu = document.getElementById("menu");
const nav = document.getElementById("nav");

menu.addEventListener("click", () => {
  menu.classList.toggle("active");
  nav.classList.toggle("active");
});

// Smooth scroll & auto-close mobile menu on link click
document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('active');   // menu hide on click
    menu.classList.remove('active');
  });
});

// Optional: Sticky header always visible
const header = document.getElementById("header");
window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 50);
});
const theme = document.getElementById("theme");

theme.onclick = () => {
  document.body.classList.toggle("light"); // toggle light class

  // change icon
  theme.textContent = document.body.classList.contains("light") ? "☀️" : "🌙";
};
