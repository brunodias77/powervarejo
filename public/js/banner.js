let currentSlide = 0;
let totalSlide = 2;

const dots = document.querySelectorAll(".btn-banner");
const images = document.querySelectorAll(".banner img");

function next() {
  document
    .querySelector(`#content${currentSlide + 1}`)
    .classList.remove("active");
  currentSlide = (totalSlide + currentSlide + 1) % totalSlide;
  document.querySelector(`#content${currentSlide + 1}`).classList.add("active");
}
function prev() {
  document
    .querySelector(`#content${currentSlide + 1}`)
    .classList.remove("active");
  currentSlide = (totalSlide + currentSlide - 1) % totalSlide;
  document.querySelector(`#content${currentSlide + 1}`).classList.add("active");
}
