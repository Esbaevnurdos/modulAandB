document.addEventListener("DOMContentLoaded", function () {
  const menuButton = document.getElementById("menuButton");
  const navbar = document.getElementById("navbar");

  menuButton.addEventListener("click", function () {
    navbar.classList.toggle("show");
  });
});
