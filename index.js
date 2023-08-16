//shrinking nav bar on scroll
const nav = document.querySelector("#nav");
const accordion = document.querySelectorAll(".contentBx");

window.addEventListener("scroll", () => {
  nav.classList.toggle("sticky", window.scrollY > 200);
});

//accordian
for (let i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", function () {
    this.classList.toggle("active");
  });
}

//carousl

const infoCon = document.querySelector("#information");
const infoDisplay = document.querySelector(".info-display");


const gitHubBTN = document.querySelector(".GitHubBTN");
const Url = document.querySelector(".URL");





const galleryContainer = document.querySelector(".gallery-container");
const galleryControlsContainer = document.querySelector(".gallery-controls");
const galleryControls = ["previous", "next"];
const galleryItems = document.querySelectorAll(".gallery-item");


class Carousel {
  constructor(container, items, controls) {
    this.carouselContainer = container;
    this.carouselControls = controls;
    this.carouselArray = [...items];
  }

  updateGallery() {
    this.carouselArray.forEach((el) => {
      el.classList.remove("gallery-item-1");
      el.classList.remove("gallery-item-2");
      el.classList.remove("gallery-item-3");
      el.classList.remove("gallery-item-4");
      el.classList.remove("gallery-item-5");
    });

    this.carouselArray.slice(0, 5).forEach((el, i) => {
      el.classList.add(`gallery-item-${i + 1}`);
    });
    
    const frontPic = document.querySelector(".gallery-item-3");
    
    //thi is how we store to local storage
    const target = parseInt(frontPic.getAttribute("data-index"));

    const info = [
      {
        message: "1) Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
        gitHub: "https://github.com/Tomal1/Rock-Paper-and-Scissors",
        URL: "https://tomal1.github.io/Rock-Paper-and-Scissors/",
      },
      {
        message: "2) Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
        gitHub: "https://github.com/Tomal1/Work-Day-Scheduler",
        URL: "https://tomal1.github.io/Work-Day-Scheduler/",
      },
      {
        message: "3) Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
        gitHub: "https://github.com/Tomal1/6_weather_app",
        URL: "https://tomal1.github.io/6_weather_app/",
      },
      {
        message: "4) Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
        gitHub: "https://github.com/Tomal1/tomal",
        URL: "https://tomal1.github.io/tomal/",
      },
      {
        message: "5) Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
        gitHub: "https://github.com/Tomal1/to-do-list-CRUD2",
        URL: "#",
      },
    ];
  
      for (let i = 2; i < info.length; i++) {
        // must be turned once
        infoDisplay.textContent = info[target  - 1].message;
        gitHubBTN.onclick = () => window.location = `${info[target - 1].gitHub}`;
        Url.onclick = () => window.location = `${info[target - 1].URL}`
  
      }  
        
  }








  setCurrentState(direction) {
    //determingin what each arrow dose
    if (direction.className === "gallery-controls-previous") {
      this.carouselArray.unshift(this.carouselArray.pop());
    } else {
      this.carouselArray.push(this.carouselArray.shift());
    }
    this.updateGallery();
  }

  setControls() {
    // appending text to the arrows
    this.carouselControls.forEach((control) => {
      galleryControlsContainer.appendChild(
        document.createElement("button")
      ).className = `gallery-controls-${control}`;
      document.querySelector(`.gallery-controls-${control}`).innerText =
        control;
    });
  }

  useControls() {
    const triggers = [...galleryControlsContainer.childNodes];

    triggers.forEach((control) => {
      control.addEventListener("click", (e) => {
        e.preventDefault();
        this.setCurrentState(control);
      });
    });
  }
}

const exampleCarousel = new Carousel(
  galleryContainer,
  galleryItems,
  galleryControls
);

exampleCarousel.setControls();
exampleCarousel.useControls();