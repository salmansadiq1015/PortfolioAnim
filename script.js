let banner = document.querySelector(".banner");
let dayNight = document.querySelector(".dayNight");

function toggleNightMode() {
  banner.classList.toggle("night");
  // Save the state in local storage
  localStorage.setItem("nightMode", banner.classList.contains("night"));
}

dayNight.addEventListener("click", toggleNightMode);

// Check if there's a previous state saved in local storage
const nightModeState = localStorage.getItem("nightMode");

// If there is a previous state, apply it
if (nightModeState !== null) {
  if (nightModeState === "true") {
    banner.classList.add("night");
  }
}

// Typing Effect---------------===>

var typed = new Typed("#text", {
  strings: [
    "Salman",
    "Software Engineer",
    "Web Developer",
    "Youtuber",
    "Programmer",
  ],
  typeSpeed: 50,
});
