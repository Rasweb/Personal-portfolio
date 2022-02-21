//import { Projects } from "./data/projects.js";

window.onload = () => {
  // createHTML;
  document
    .getElementById("toggleDarkLight")
    .addEventListener("click", darkModeToggle);
};

function darkModeToggle() {
  let element = document.getElementById("home");
  element.classList.toggle("darkMode");
}

// let pro1 = new Projects(
//   "Clone website",
//   "../images/CloneWebsite.png",
//   "A clone website, with hero image.",
//   "This is a clone site, it was developed with Gulp, Sass, and HTML. It is also my very first HTML & CSS project.",
//   "https://github.com/Rasweb/HTML-CSS-Uppgift2.git"
// );

// let pro2 = new Projects(
//   "To-Do List",
//   "../images/ToDo.png",
//   "A to-do list with localstorage",
//   "This is a javaScript to-do list with localStorage. It's also the first javaScript project I've ever done.",
//   "https://github.com/Rasweb/JavaScript-BasicCourse-Assignment1.git"
// );

// let pro3 = new Projects(
//   "JavaScript group assignment",
//   "../images/HomeGrownRecords.png",
//   "A fictional music shop using objects.",
//   "This is a group assignment with two other students, I created the forms and their properties and also the testing for the site using cypress.",
//   "https://github.com/ViggoOhlsson/Project_Butik.git"
// );

// let pro4 = new Projects(
//   "HTML & CSS group assignment",
//   "../images/ettLitetHem.png",
//   "A swedish website created using Bootstrap",
//   "This is a group assignment with 2 other people, it was created with the help of Bootstrap, Sass and Gulp. I created the Contact(Kontakt) page and the about(Om) page.",
//   "https://github.com/FannyRosen/ettlitethem.git"
// );

// let pro5 = new Projects(
//   "NodeJs To-do list",
//   "../images/NodeJsTodo.png",
//   "A Node express to-do list with CRUD",
//   "This is a to-do list created using NodeJs and with Express and express handlebars.",
//   "https://github.com/Rasweb/Nodejs-TODO.git"
// );

// let projectArray = [pro1, pro2, pro3, pro4, pro5];

// function createHTML() {
//   const main = document.querySelector("main");
//   const ul = document.createElement("ul");

//   for (let i = 0; i < projectArray.length; i++) {
//     const li = document.createElement("li");

//     const h3 = document.createElement("h3");

//     const imageCont = document.createElement("div");
//     imageCont.id = `pro${i}`;

//     const p = document.createElement("p");
//     p.innerHTML = projectArray[i].info;
//     const pCont = document.createElement("div");
//     pCont.id = proText;

//     const a = document.createElement("a");
//     a.title = "link";
//     a.href = projectArray[i].linkTo;
//     a.innerHTML = "Do you want to know more?";
//     a.target = "_blank";

//     const image = document.createElement("img");
//     image.src = projectArray[i].img;
//     image.alt = projectArray[i].imgAlt;
//     h3.innerHTML = projectArray[i].title;

//     li.appendChild(h3);
//     imageCont.appendChild(image);
//     li.appendChild(imageCont);
//     pCont.appendChild(p);
//     li.appendChild(pCont);
//     pCont.appendChild(a);
//     ul.appendChild(li);
//     main.appendChild(ul);
//   }
// }
