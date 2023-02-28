
const colorChangerOne = firstChildren.children[2];
const colorChangerTwo = secondChildren.children[2];

colorChangerOne.style.backgroundColor = trainingData.color[0];
colorChangerTwo.style.backgroundColor = trainingData.color[1];

let counterOne = 0;
let counterTwo = 0;

let counterObj = Object.assign(colorChangerOne,colorChangerTwo);


// const angle = document.getElementsByClassName('rectangle');



// angle[0].style.marginTop = "123px";

// console.dir(angle);


colorChangerOne.addEventListener("click", function () {
  counterOne = counterOne + 1;
  if (counterOne >= 1) {
    colorChangerOne.style.backgroundColor = ColorWhite;
    screenOne.style.backgroundColor = ColorBlack;
    firstTitle.style.color = ColorWhite;
    firstPara.style.color = ColorWhite;
  }
  if (counterOne === 2) {
    colorChangerOne.style.backgroundColor = ColorBlack;
    screenOne.style.backgroundColor = ColorWhite;
    firstTitle.style.color = ColorBlack;
    firstPara.style.color = ColorBlack;
  }
  if (counterOne === 3) {
    counterOne = 1;
  }

// })

// colorChangerTwo.addEventListener("click", function () {
//   counterTwo = counterTwo + 1;
  if (counterOne >= 1) {
    colorChangerTwo.style.backgroundColor = ColorBlack;
    screenTwo.style.backgroundColor = ColorWhite;
    secondTitle.style.color = ColorBlack;
    secondPara.style.color = ColorBlack;
  }
  if (counterOne === 2) {
    colorChangerTwo.style.backgroundColor = ColorWhite;
    screenTwo.style.backgroundColor = ColorBlack;
    secondTitle.style.color = ColorWhite;
    secondPara.style.color = ColorWhite;
  }
  if (counterOne === 3) {
    counterOne = 1;
  }


})