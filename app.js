/* DOM Consts & Global Variables */
let loadingResult = false;

const tossImgEl = document.querySelector(".toss-img-wrapper");
const tossButtonEl = document.querySelector(".btn-toss");
const tossResultEl = document.querySelector(".toss-result");

/* Custom Handlers */
const tossCoin = () => {
  if (Math.random() < 0.5) {
    tossResultEl.textContent = "Tails";
  } else {
    tossResultEl.textContent = "Heads";
  }
};

/* Event Handlers */
tossButtonEl.addEventListener("click", tossCoin);
tossImgEl.addEventListener("click", tossCoin);

/* Render DOM */
