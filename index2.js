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

show(1);
