"use strict";

let hour1 = document.querySelector(".hour");
let minute1 = document.querySelector(".minute");
let second1 = document.querySelector(".second");

function setRotation(element, deg) {
  element.style.setProperty("--rotation", `${deg}deg`);
}

setInterval(function () {
  setClock();
}, 1000);

function setClock() {
  let fullDate = new Date();
  let secund = fullDate.getSeconds() * 6;
  let minute = fullDate.getMinutes() * 6;
  let hours = fullDate.getHours();
  let minute11 = minute / 6 / 12;
  if (hours >= 12) {
    hours = (hours - 12) * 30 + 6 * minute11;
  } else if (hours <= 12) {
    hours = hours * 30 + 6 * minute11;
  }
  console.log(hours);
  setRotation(hour1, hours);
  setRotation(minute1, minute);
  setRotation(second1, secund);
}
