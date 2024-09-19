let smallerSlider = document.querySelector("#smallerSlider");
let smallerSliderBtns =document.querySelector(".smallerSliderBtns")
let btn = document.querySelector(".btn")

let RPS = document.createElement("img");
RPS.setAttribute('src', './assets/images/RPS.png');
RPS.classList.add("slides")
RPS.classList.add("RPS")
smallerSlider.appendChild(RPS)

let WDS = document.createElement("img");
WDS.setAttribute("src", "./assets/images/WDS.png");
WDS.classList.add("slides")
WDS.classList.add("WDS")
smallerSlider.appendChild(WDS)

let weather = document.createElement("img");
weather.setAttribute("src", "./assets/images/weather.png");
weather.classList.add("slides")
weather.classList.add("weather")
smallerSlider.appendChild(weather)

let reactProfile = document.createElement("img");
reactProfile.setAttribute("src", "./assets/images/profile.png");
reactProfile.classList.add("slides")
reactProfile.classList.add("reactProfile")
smallerSlider.appendChild(reactProfile)

let TDL = document.createElement("img");
TDL.setAttribute("src", "./assets/images/tdl.png");
TDL.classList.add("slides")
TDL.classList.add("TDL")
smallerSlider.appendChild(TDL)

let Website = document.createElement("button")
Website.classList.add("Website")
Website.classList.add("sbtn")
Website.innerText = "Website"
smallerSliderBtns.appendChild(Website)

let gitHub = document.createElement("button")
gitHub.classList.add("gitHub")
gitHub.classList.add("sbtn")
gitHub.innerText = "gitHub"
smallerSliderBtns.appendChild(gitHub)

const linkObj = [
  {
    gitHub: "https://github.com/Tomal1/to-do-list-CRUD2",
    URL: "#"
  },
  {
    gitHub: "https://github.com/Tomal1/Rock-Paper-and-Scissors",
    URL: "https://tomal1.github.io/Rock-Paper-and-Scissors/"
  },
  {
    gitHub: "https://github.com/Tomal1/Work-Day-Scheduler",
    URL: "https://tomal1.github.io/Work-Day-Scheduler/"
  },
  {
    gitHub: "https://github.com/Tomal1/6_weather_app",
    URL: "https://tomal1.github.io/6_weather_app/"
  },
  {
   gitHub: "https://github.com/Tomal1/tomal",
   URL: "https://tomal1.github.io/tomal/"
  }

];

let index = 1;

const plusIndex = (n) => {
    index = index + n;
    showImage(index);
  };

const showImage = (n) => {
  let x = document.getElementsByClassName("slides");
  console.log(n)

  if (n > x.length) {
    index = 1;
  }

  if (n < 1) {
    index = x.length;
  }

  for (let i = 0; i < x.length; i++) {

      x[i].style.display = "none";
  }

  Website.addEventListener("click", ()=> location.href = linkObj[n].URL)
  gitHub.addEventListener("click", ()=> location.href = linkObj[n].gitHub)

  x[index - 1].style.display = "block";
 
};