import "./import/modules";

let sliderHendlerPrev = document.querySelector(".special__slider-arrow--prev");
let sliderHendlerNext = document.querySelector(".special__slider-arrow--next");
let slides = document.querySelectorAll(".special__slide");
let slidesArray = Array.prototype.slice.call(slides, 0);
let currentSlide = 0;

function nextSlide() {
  goToSlide(currentSlide + 1);
}

function previousSlide() {
  goToSlide(currentSlide - 1);
}

function goToSlide(n) {
  slidesArray[currentSlide].classList.remove("special__slide--active");
  slidesArray[currentSlide].classList.add("special__slide--hidden");
  currentSlide = (n + slidesArray.length) % slidesArray.length;
  slidesArray[currentSlide].classList.remove("special__slide--hidden");
  slidesArray[currentSlide].classList.add("special__slide--active");
}

sliderHendlerNext.onclick = function() {
  nextSlide();
};

sliderHendlerPrev.onclick = function() {
  previousSlide();
};

// quiz
let poll = document.querySelector(".poll");

let pollHendler = document.querySelectorAll(".poll__btn");
let pollQuestion = document.querySelectorAll(".poll__question-block");
let pollQuestion1 = document.querySelector(".poll__question-block-1");
let pollQuestion2 = document.querySelector(".poll__question-block-2");
let pollQuestion3 = document.querySelector(".poll__question-block-3");
let pollQuestionItem = document.querySelectorAll(".poll__rooms-item");
let currentQuestion = 0;
let selections = {
  typeRoom: "",
  typeWallpaper: "",
  diliveryTime: ""
};
let pollBar = document.querySelector(".poll__bar--done");
// let selections = [];

let pollInputRadio = document.querySelectorAll("input[type=radio]");

function check(num) {
  for (var i = 0; i < pollInputRadio.length; i++) {
    if (pollInputRadio[i].checked) {
      // alert("selected: " + pollInputRadio[i].id);
      // selections[num].push(pollInputRadio[i].id);
      selections[num] = pollInputRadio[i].id;
    }
  }
}

function nextQuestion(n) {

  pollQuestion[currentQuestion].classList.remove(
    "poll__question-block--active"
  );
  pollQuestion[currentQuestion].classList.add("poll__question-block--hidden");
  currentQuestion = (n + pollQuestion.length) % pollQuestion.length;

  pollQuestion1.onclick = function(e) {
    selections.typeRoom = e.target.id;
  };

  pollQuestion2.onclick = function(e) {
    selections.typeWallpaper = e.target.id;
  };

  pollQuestion3.onclick = function(e) {
    selections.diliveryTime = e.target.id;
  };

  pollBar.style.width = "calc(" + pollBar.style.width + "25%)";
  
  console.log(selections);

  pollQuestion[currentQuestion].classList.remove(
    "poll__question-block--hidden"
  );
  pollQuestion[currentQuestion].classList.add("poll__question-block--active");
}

pollHendler[currentQuestion].onclick = function(e) {
  nextQuestion(currentQuestion + 1);
};

