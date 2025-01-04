const nav = document.querySelector("#nav");
const checkbox = document.querySelector(".checkbox");
const checkbox2 = document.querySelector(".checkbox2");
const star = document.querySelector("*");
const GCP = document.querySelector(".gallery-controls-previous");
const GCN = document.querySelector(".gallery-controls-next");
const logos = document.querySelectorAll(".logos");

const background = () => {
  let dominant = window
    .getComputedStyle(document.documentElement)
    .getPropertyValue("--dominant");
  let minor = window
    .getComputedStyle(document.documentElement)
    .getPropertyValue("--minor");
  let dominant2 = window
    .getComputedStyle(document.documentElement)
    .getPropertyValue("--dominant2");
  let minor2 = window
    .getComputedStyle(document.documentElement)
    .getPropertyValue("--minor2");
  let everything = window
    .getComputedStyle(document.documentElement)
    .getPropertyValue("--everything");

  star.style.background = dominant;
  star.style.color = minor;
  GCP.style.color = minor;
  GCN.style.color = minor;

  // function for day and night mode

  checkbox.addEventListener("change", () => {
    if (checkbox.checked) {
      star.style.background = dominant2;
      star.style.color = minor2;
      GCP.style.color = minor2;
      GCN.style.color = minor2;
    } else {
      star.style.background = dominant;
      star.style.color = minor;
      GCP.style.color = minor;
      GCN.style.color = minor;
      infoDisplay.style.color = minor;


    }
  });

  checkbox2.addEventListener("change", () => {
    if (checkbox2.checked) {
      star.style.background = "#d7d0d0";
      star.style.color = "#282828";
    } else {
      star.style.background = "#282828";
      star.style.color = "white";
    }
  });
};
background();

// function for sidebar to navbar

const showSideBar = () => {
  const sidebar = document.querySelector(".navBar");
  window.innerWidth >= 1300 ? "" : (sidebar.style.display = "flex");
};

const hideNavBar = () => {
  const sidebar = document.querySelector(".navBar");
  sidebar.style.display = "none";
};

// this is a function for the shrinking navbar
const scroll = () => {
  window.innerWidth >= 1300
    ? window.addEventListener("scroll", () => {
        nav.classList.toggle("sticky", window.scrollY > 200);
      })
    : "";
};
scroll();
