const nav = document.querySelector("#nav");
const text = document.querySelector(".sec-text");

class Landing {
  scroll = () => {
    window.addEventListener("scroll", () => {
      nav.classList.toggle("sticky", window.scrollY > 200);
    });
  };

  //funcationality for anmated text on landing page
  textLord = () => {
    setTimeout(() => {
      text.textContent = "Hi my name is Tomal";
    }, 0);
    setTimeout(() => {
      text.textContent = "I am a Web devloper";
    }, 5000);
    setTimeout(() => {
      text.textContent = "Please take a look below";
    }, 10000);
  };
}

const invoke = new Landing();
invoke.scroll();
invoke.textLord();
setInterval(invoke.textLord, 15000);

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

    const frontPic = document.querySelector(".gallery-item-3"); //selects first image we see
    //turns that elemnt attribute into a number
    const target = parseInt(frontPic.getAttribute("data-index"));

    const info = [
      {
        message:
          "Play Rock, Paper and Scissors against the computer, the technolagies used to build this application were: HTML, CSS and vanilla JavaScript. After entering the game click on one of the options (rock, paper or scissors) and the wait for the computer to select its option to dertermin who will become the winner.",
        gitHub: "https://github.com/Tomal1/Rock-Paper-and-Scissors",
        URL: "https://tomal1.github.io/Rock-Paper-and-Scissors/",
      },
      {
        message:
          "This is a calendar application that allow the client to save entries for different hours throughout the day. It tracks the time and then color codes the calender depending on certain conditions. There is a button next to each entry section which allows the client to append notes next to the appropriate time slot.",
        gitHub: "https://github.com/Tomal1/Work-Day-Scheduler",
        URL: "https://tomal1.github.io/Work-Day-Scheduler/",
      },
      {
        message:
          "When a city name is inputted; the next 5 day weather conditions will be forecasted onto little cards situated in the middle of the screen. The app uses the input and appends it to the API url to extrapolate all relevant data (such as temperature, date, wind speed ect..) to populate the cards.",
        gitHub: "https://github.com/Tomal1/6_weather_app",
        URL: "https://tomal1.github.io/6_weather_app/",
      },
      {
        message:
          "Another personal profile using react, the app has been heavily influenced from a YouTube video which caught my attenttion so I decided to build from scratch by watching the video, this project was a fantastic way to learn react non the less.",
        gitHub: "https://github.com/Tomal1/tomal",
        URL: "https://tomal1.github.io/tomal/",
      },
      {
        message:
          "This is a full stack to do list, the technologies used to build this app include: HTML, CSS, JS, Node, Express and MariaDB. Note: this app has not been deployed but can be downloaded from my github repo and the run on your local machine.",
        gitHub: "https://github.com/Tomal1/to-do-list-CRUD2",
        URL: "#",
      },
    ];

    for (let i = 0; i < info.length; i++) {
      infoDisplay.textContent = info[target - 1].message;
      gitHubBTN.onclick = () =>
        (window.location = `${info[target - 1].gitHub}`);
      Url.onclick = () => (window.location = `${info[target - 1].URL}`);
    }
  }

  setCurrentState(direction) {
    //determingin what each arrow dose
    direction.className === "gallery-controls-previous" 
    ? this.carouselArray.unshift(this.carouselArray.pop()) 
    :this.carouselArray.push(this.carouselArray.shift());
    
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

const exampleCarousel = new Carousel(galleryContainer,galleryItems,galleryControls);

exampleCarousel.setControls();
exampleCarousel.useControls();
exampleCarousel.updateGallery(); // accessing our class (Carousel) and then invoking a function (updateGalary)