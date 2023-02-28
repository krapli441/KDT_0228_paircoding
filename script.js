
let mainContainer = document.getElementById('container'); // 메인 컨테이너 식별


let screenOne = mainContainer.children[0];

screenOne.style.backgroundColor = trainingData.color[1];

let screenTwo = mainContainer.children[1];


screenTwo.style.backgroundColor = trainingData.color[0];



let firstChildren = mainContainer.children[0];
let firstTitle = firstChildren.children[0];
let firstPara = firstChildren.children[1];
let secondChildren = mainContainer.children[1];
let secondTitle = secondChildren.children[0];
let secondPara = secondChildren.children[1];



function styleSet(W, H) {
  styleObj = {
    W: firstChildren.style.width = W,
    H: firstChildren.style.height = H,
    W: secondChildren.style.width = W,
    H: secondChildren.style.height = H,


  }
  return styleObj;
}
styleSet("430px", "932px");


let para = trainingData.paragraph;
function fontSet(p, colorOne, colorTwo, colorThree) {
  fontObj = {
    p: firstPara.innerText = p,
    p: secondPara.innerText = p,
    colorOne: firstPara.style.color = colorOne,
    colorTwo: secondPara.style.color = colorTwo,
    colorThree: secondTitle.style.color = colorThree
  }

}
let ColorBlack = trainingData.color[0];
let ColorWhite = trainingData.color[1];

fontSet(para, ColorBlack, ColorWhite, ColorWhite);


// firstChildren.innerText = trainingData.paragraph;


// function (){}



// .innerText = trainingData.paragraph;
// .innerText = trainingData.paragraph;


// let ff = firstChildren.children[1].innerText;
// ff = trainingData.paragraph;

