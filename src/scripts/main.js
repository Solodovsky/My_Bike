document.addEventListener("DOMContentLoaded", function () {
  const menuLinks = document.querySelectorAll(".hero-section__header__icons a");
  const menuButton = menuLinks[2];
  const burgerMenu = document.getElementById("burgerMenu");
  const closeBtn = document.getElementById("closeMenuBtn");

  menuButton.addEventListener("click", (e) => {
    e.preventDefault();
    burgerMenu.classList.add("active");
    document.body.classList.add("menu-open");
  });

  closeBtn.addEventListener("click", () => {
    burgerMenu.classList.remove("active");
    document.body.classList.remove("menu-open");
  });
});
