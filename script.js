const currentTimeElement = document.querySelector(".current-time");
const dayElement = document.querySelectorAll(".days p");
const currentDay = new Date().getDay();
let showTwelveHourTime = true;

const twelveHourBtn = document.querySelector(".twelve-hour");
twelveHourBtn.addEventListener("click", () => {
  showTwelveHourTime = true;
  document.querySelector('.active').classList.remove('active');
  twelveHourBtn.classList.add('active');
  replaceTime();
});

const twentyFourHourBtn = document.querySelector(".twentyfour-hour");
twentyFourHourBtn.addEventListener("click", () => {
  showTwelveHourTime = false;
  document.querySelector('.active').classList.remove('active');
  twentyFourHourBtn.classList.add('active');
  replaceTime();
});

dayElement[currentDay].classList.add("active-day");

const replaceTime = () => {
  let today = new Date(),
    h = today.getHours(),
    m = today.getMinutes(),
    s = today.getSeconds();
  if (showTwelveHourTime && h > 12) {
    h = h - 12;
  }

  if (s < 10) {
    s = "0" + s;
  }
  if (m < 10) {
    m = "0" + m;
  }
  currentTimeElement.innerText = h + ":" + m + ":" + s;
  console.log("running");
};

setInterval(replaceTime, 1000);
replaceTime();
