function getSecondsSinceStartOfDay() {
  return (
    new Date().getSeconds() +
    new Date().getMinutes() * 60 +
    new Date().getHours() * 3600
  );
}

const hourHand = document.querySelector("#hour");
const minuteHand = document.querySelector("#minutes");
const secondHand = document.querySelector("#seconds");

let currentDegree = 255;

setInterval(function () {
  var time = getSecondsSinceStartOfDay();
  // console.log(time);

  // time = seconds
  // time / 60 = minutes
  // time/3600 = hours

  let hours = time / 3600;

  console.log(time);

  document.getElementById("seconds").style.transform = `rotate(${time}deg)`;
  document.getElementById("minutes").style.transform = `rotate(${
    time / 60
  }deg)`;
  let hour = (document.getElementById("hour").style.transform = `rotate(${
    hours + 180
  }deg)`);
  console.log(hour);

  // your code here
}, 1000);
