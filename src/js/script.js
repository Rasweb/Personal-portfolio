import { Projects } from "./data/projects.js";

window.onload = () => {
  document
    .getElementById("toggleDarkLight")
    .addEventListener("click", darkLightToggle);
  createHtml();
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

//     this.title = title;
//     this.image = image;
//     this.imageAlt = imageAlt;
//     this.description = description;
//     this.link = link;

let project1 = new Projects(
  "Clone website",
  "/src/images/CloneWebsite.png",
  "A clone website, with hero image",
  "This is a clone site, it was developed with Gulp, Sass, and HTML. It is also my very first HTML & CSS project.",
  "https://github.com/Rasweb/HTML-CSS-Uppgift2.git"
);

let project2 = new Projects(
  "To-Do List",
  "/src/images/ToDo.png",
  "A to-do list with localstorage.",
  "This is a javaScript to-do list with localStorage. It's also the first javaScript project I've ever done.",
  "https://github.com/Rasweb/JavaScript-BasicCourse-Assignment1.git"
);

let project3 = new Projects(
  "JavaScript group assignment",
  "/src/images/HomeGrownRecords.png",
  "A fictional music shop using objects",
  " This is a group assignment with two other students, I created the forms and their properties and also the testing for the site using cypress.",
  "https://github.com/ViggoOhlsson/Project_Butik.git"
);

let project4 = new Projects(
  "Rating app with Js and Sass/scss",
  "/src/images/RatingState.png",
  "A Rating site using Js and Sass.",
  "This is a challenge from FrontendMentor.io It's a simple rating app using JavaScript and Sass. ",
  "https://github.com/Rasweb/Frontend_Mentor-Interactive-rating-component.git"
);

let project5 = new Projects(
  "NodeJs To-do list",
  "/src/images/NodeJsTodo.png",
  "A Node express to-do list with CRUD",
  "This is a to-do list created using NodeJs and with Express and express handlebars.",
  "https://github.com/Rasweb/Nodejs-TODO.git"
);

let allProjects = [project1, project2, project3, project4, project5];

function createHtml() {
  const main = document.getElementById("main");
  const ul = document.createElement("ul");

  for (let i = 0; i < allProjects.length; i++) {
    const li = document.createElement("li");

    const h3 = document.createElement("h3");
    h3.innerHTML = allProjects[i].title;

    const imageCont = document.createElement("div");
    const image = document.createElement("img");
    image.src = allProjects[i].image;
    image.alt = allProjects[i].imageAlt;

    const pCont = document.createElement("div");
    pCont.className = "proText";
    const p = document.createElement("p");
    p.innerHTML = allProjects[i].description;

    const a = document.createElement("a");
    a.href = allProjects[i].link;
    a.target = "_blank";
    a.innerHTML = "Do you want to know more?";

    imageCont.appendChild(image);
    pCont.appendChild(p);
    pCont.appendChild(a);
    li.appendChild(h3);
    li.appendChild(imageCont);
    li.appendChild(pCont);
    ul.appendChild(li);
    main.appendChild(ul);
  }
}
