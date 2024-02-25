const sliders = document.querySelectorAll(".slider");
const divSliders = document.querySelectorAll(".test");
const indicators = document.querySelectorAll(".indicator");
let baseSliderWidth = sliders.offsetWidth;
let activeIndex = 0; // the current page on the slider
let movies = [
  { src: "./assets/media/media0.webp" },
  { src: "./assets/media/media1.jpg" },
  { src: "./assets/media/media2.webp" },
  { src: "./assets/media/media3.webp" },
  { src: "./assets/media/media4.jpg" },
  { src: "./assets/media/media5.webp" },
  { src: "./assets/media/media6.jpg" },
  { src: "./assets/media/media7.webp" },
  { src: "./assets/media/media8.webp" },
  { src: "./assets/media/media9.jpg" },
  { src: "./assets/media/media10.jpg" },
  { src: "./assets/media/media11.jpg" },
  { src: "./assets/media/media12.jpg" },
  { src: "./assets/media/media13.jpg" },
  { src: "./assets/media/media14.webp" },
  { src: "./assets/media/media15.jpg" },
  { src: "./assets/media/media16.webp" },
  { src: "./assets/media/media17.jpg" },
  { src: "./assets/media/media18.jpg" },
  { src: "./assets/media/media19.webp" },
  { src: "./assets/media/media20.jpg" },
  { src: "./assets/media/media21.webp" },
  { src: "./assets/media/media22.webp" },
  { src: "./assets/media/media23.webp" },
  { src: "./assets/media/media24.jpg" },
  { src: "./assets/media/media25.webp" },
  { src: "./assets/media/media26.webp" },
  { src: "./assets/media/media27.jpg" },
  { src: "./assets/media/media28.jpg" },
  { src: "./assets/media/media29.jpg" },
  { src: "./assets/media/media30.jpg" },
  { src: "./assets/media/media31.webp" },
  { src: "./assets/media/media32.jpg" },
];
// Fill the slider with all the movies in the "movies" array
function populateSlider() {
  for (let i = 0; i < sliders.length; i++) {
    movies.forEach((image) => {
      // Clone the initial movie thats included in the html, then replace the image with a different one
      const trendingMovie = document.getElementById("trending");
      const watchItMovie = document.getElementById("watch-it-again");
      let clone = trendingMovie.cloneNode(true);
      let img = clone.querySelector("img");
      img.src = image.src;
      sliders[i].insertBefore(clone, sliders[i].childNodes[sliders[i].childNodes.length - 1]);
    });
  }
}
populateSlider();
populateSlider();
// delete the initial movie in the html
const firstTrending = document.getElementById("trending");
const firstWatchIt = document.getElementById("watch-it-again");
const newRelease = document.getElementById("new-release");
firstTrending.remove();
firstWatchIt.remove();
newRelease.remove();
// Update the indicators that show which page we're currently on
function updateIndicators(index) {
  indicators.forEach((indicator) => {
    indicator.classList.remove("active");
  });
  let newActiveIndicator = indicators[index];
  newActiveIndicator.classList.add("active");
}

// Scroll Left button
divSliders.forEach((div) => {
  const btnLeft = div.querySelector(".moveLeft");
  btnLeft.addEventListener("click", function (e) {
    let movieWidth = document.querySelector(".movie").getBoundingClientRect().width;
    let scrollDistance = movieWidth * 6;
    div.querySelector(".slider").scrollBy({
      top: 0,
      left: -scrollDistance,
      behavior: "smooth",
    });
    activeIndex = (activeIndex - 1) % 3;
    console.log(activeIndex);
    updateIndicators(activeIndex);
  });
});

// Scroll Right button
divSliders.forEach((div) => {
  const btnRight = div.querySelector(".moveRight");
  btnRight.addEventListener("click", function (e) {
    let movieWidth = document.querySelector(".movie").getBoundingClientRect().width;
    let scrollDistance = movieWidth * 6;
    console.log(`movieWidth = ${movieWidth}`);
    console.log(`scrolling right ${scrollDistance}`);
    console.log(btnRight);
    console.log(div.querySelector(".slider"));
    // if we're on the last page
    if (activeIndex == 2) {
      populateSlider();
      div.querySelector(".slider").scrollBy({
        top: 0,
        left: +scrollDistance,
        behavior: "smooth",
      });
      activeIndex = 0;
      updateIndicators(activeIndex);
    } else {
      div.querySelector(".slider").scrollBy({
        top: 0,
        left: +scrollDistance,
        behavior: "smooth",
      });
      activeIndex = (activeIndex + 1) % 3;
      console.log(activeIndex);
      updateIndicators(activeIndex);
    }
  });
});
