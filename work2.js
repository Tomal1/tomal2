let smallerSlider = document.querySelector("#smallerSlider");

// the links
const linkObj = [
  {
    src: "./assets/images/tdl.png",
    gitHub: "https://github.com/Tomal1/to-do-list-CRUD2",
    URL: "#",
  },
  {
    src: "./assets/images/RPS.png",
    gitHub: "https://github.com/Tomal1/rock-paper-scissors",
    URL: "https://tomal1.github.io/rock-paper-scissors/",
  },
  {
    src: "./assets/images/WDS.png",
    gitHub: "https://github.com/Tomal1/Work-Day-Scheduler",
    URL: "https://tomal1.github.io/Work-Day-Scheduler/",
  },
  {
    src: "./assets/images/weather.png",
    gitHub: "https://github.com/Tomal1/Weather_app",
    URL: "https://tomal1.github.io/Weather_app/",
  },
  {
    src: "./assets/images/profile.png",
    gitHub: "https://github.com/Tomal1/tomal",
    URL: "https://tomal1.github.io/tomal/",
  },
];

const renderImg = () => {
  smallerSlider.innerHTML = linkObj
    .map(
      (x) =>
        `<div class="thumCon">
      <div class=imageDiv>
        <img src="${x.src}" class="slides">
      </div>
      <div class="btnDiv">
                  <button class="sbtn" onclick="window.location.href='${x.URL}'">URL</button>
        <button class="sbtn" onclick="window.location.href='${x.gitHub}'">GitHub</button>
      </div>

    </div>`
    )
    .join("");
};

renderImg();
