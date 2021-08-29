const card = document.querySelector(".card");
const container = document.querySelector(".container");

const description = document.querySelector(".description");
const kakyoin = document.querySelector(".kakyoin");
const view = document.querySelector(".view");
const detail = document.querySelector(".info h3");
const characters = document.querySelector(".characters");


container.addEventListener("mousemove", (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
  card.style.transform = `rotateX(${yAxis}deg) rotateY(${xAxis}deg)`;
});

//AnimateIn
 container.addEventListener("mouseenter", (event) => {
  card.style.transition = "none";
  // Popout
  kakyoin.style.transform = "translateZ(200px)";
  description.style.transform = "translateZ(150px)";
  detail.style.transform = "translateZ(125px)";
  characters.style.transform = "translateZ(100px)";
  view.style.transform = "translateZ(75px)";
});

//AnimateOut
container.addEventListener("mouseleave", (event) => {
  card.style.transition = "all 0.5s ease";
  card.style.transform = `rotateX(0deg) rotateY(0deg)`;
  //Popback
 kakyoin.style.transform = "translateZ(0px)";
  detail.style.transform = "translateZ(0px)";
  description.style.transform = "translateZ(0px)";
  characters.style.transform = "translateZ(0px)";
  view.style.transform = "translateZ(0px)";
});

