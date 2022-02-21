window.onload = () => {
  document
    .getElementById("toggleDarkLight")
    .addEventListener("click", darkLightToggle);
};

function darkLightToggle() {
  const bodySwitch = document.querySelector("body");
  bodySwitch.classList.toggle("ligth");

  const headerSwitch = document.querySelector("header");
  headerSwitch.classList.toggle("lightheader");

  const mainSwitch = document.querySelector("main");
  mainSwitch.classList.toggle("lightMode");

  const footerSwitch = document.querySelector("footer");
  footerSwitch.classList.toggle("Lightfooter");
}
