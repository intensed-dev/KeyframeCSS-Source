document.addEventListener("DOMContentLoaded", () => {
  const script = document.createElement("script");
  script.src = "https://unpkg.com/lucide@latest";
  script.onload = () => {
    lucide.createIcons();
  };
  document.body.appendChild(script);
});
