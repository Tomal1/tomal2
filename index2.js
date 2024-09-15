let smallerSlider = document.querySelector("#smallerSlider");

let RPS = document.createElement("img");
RPS.setAttribute('src', './assets/images/RPS.png');
RPS.classList.add("slides")
smallerSlider.appendChild(RPS)

let WDS = document.createElement("img");
WDS.setAttribute("src", "./assets/images/WDS.png");
WDS.classList.add("slides")
smallerSlider.appendChild(WDS)

let weather = document.createElement("img");
weather.setAttribute("src", "./assets/images/weather.png");
weather.classList.add("slides")
smallerSlider.appendChild(weather)

let reactProfile = document.createElement("img");
reactProfile.setAttribute("src", "./assets/images/profile.png");
reactProfile.classList.add("slides")
smallerSlider.appendChild(reactProfile)

let TDL = document.createElement("img");
TDL.setAttribute("src", "./assets/images/tdl.png");
TDL.classList.add("slides")
smallerSlider.appendChild(TDL)


let index = 1;

const plusIndex = (n) => {
  index = index + 1;
  showImage(index);
};

const showImage = (n) => {
  let i;
  let x = document.getElementsByClassName("slides");

  if (n > x.length) {
    index = 1;
  }

  if (n < 1) {
    index = x.length;
  }

  for (let i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }

  x[index - 1].style.display = "block";
};
