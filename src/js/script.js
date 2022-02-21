window.onload = function () {
  document
    .getElementById("toggleDarkLight")
    .addEventListener("click", darkModeToggle);
};

function darkModeToggle() {
  let element = document.getElementById("home");
  element.classList.toggle("darkMode");
}
