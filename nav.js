const nav = document.querySelector("#nav");
const checkbox = document.querySelector(".checkbox");
const checkbox2 = document.querySelector(".checkbox2");
const star = document.querySelector("*");

const background = () => {
  star.style.background = "#282828";
  star.style.color = "white";
  // function for day and night mode

  checkbox.addEventListener("change", () => {
    if (checkbox.checked) {
      star.style.background = "#d7d0d0";
      star.style.color = "#282828";
    } else {
      star.style.background = "#282828";
      star.style.color = "white";
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