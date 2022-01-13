var userColors = [];
var simonColors = [];
var level = 0;
var going = false;
var levelEnd = true;

var highScore = localStorage.getItem('highScore') || 0;


var buttons = {
  start: {
    element: document.getElementById("startButton"),
    classes: document.getElementById("startButton").classList,
    innerHTML: document.getElementById("startButton").innerHTML,
    clicked: function(){
      console.log('Start button clicked');
      if (going || levelEnd == false) {
        return;
      }
      going = true;
      levelEnd = false;
      userColors = [];
      document.getElementById("curList").innerHTML = ("Your current input:" + userColors.toString());
      document.getElementById("startButton").innerHTML = "";
      startNext();
    }
  },
  red: {
    element: document.getElementById("redButton"),
    classes: document.getElementById("redButton").classList,
    innerHTML: document.getElementById("redButton").innerHTML,
    clicked: function() {
      if (going || levelEnd) return;
      console.log('Red button clicked');
      userColors.push('R');
      console.log(userColors);
      buttons.red.classes.add("shadow");
      buttons.red.classes.remove("red");
      setTimeout(() => {
        buttons.red.classes.remove("shadow");
        buttons.red.classes.add("red");
      }, 500);
      buttons.red.innerHTML = ("Your current input:" + userColors.toString());
      checkAnswer();
    }
  },

  blue: {
    element: document.getElementById("blueButton"),
    classes: document.getElementById("blueButton").classList,
    innerHTML: document.getElementById("blueButton").innerHTML,
    clicked: function() {
      if (going || levelEnd) return;
      console.log('Blue button clicked');
      userColors.push('B');
      console.log(userColors);
      buttons.blue.classes.add("shadow");
      buttons.blue.classes.remove("blue");
      setTimeout(() => {
        buttons.blue.classes.remove("shadow");
        buttons.blue.classes.add("blue");
      }, 500);
      buttons.blue.innerHTML = ("Your current input:" + userColors.toString());
      checkAnswer();
    }
  },

  green: {
    element: document.getElementById("greenButton"),
    classes: document.getElementById("greenButton").classList,
    innerHTML: document.getElementById("greenButton").innerHTML,
    clicked: function() {
      if (going || levelEnd) return;
      console.log('Green button clicked');
      userColors.push('G');
      console.log(userColors);
      buttons.green.classes.add("shadow");
      buttons.green.classes.remove("green");
      setTimeout(() => {
        buttons.green.classes.remove("shadow");
        buttons.green.classes.add("green");
      }, 500);
      buttons.green.innerHTML = ("Your current input:" + userColors.toString());
      checkAnswer();
    }
  },

  yellow: {
    element: document.getElementById("yellowButton"),
    classes: document.getElementById("yellowButton").classList,
    innerHTML: document.getElementById("yellowButton").innerHTML,
    clicked: function() {
      if (going || levelEnd) return;
      console.log('Yellow button clicked');
      userColors.push('Y');
      console.log(userColors);
      buttons.yellow.classes.add("shadow");
      buttons.yellow.classes.remove("yellow");
      setTimeout(() => {
        buttons.yellow.classes.remove("shadow");
        buttons.yellow.classes.add("yellow");
      }, 500);
      buttons.yellow.innerHTML = ("Your current input:" + userColors.toString());
      checkAnswer();
    }
  }
}

updateHighScore();

function letterToColor(a) {
  if (a == 'R') {
    return "red";
  } else if (a == 'B') {
    return "blue";
  } else if (a == 'G') {
    return "green";
  } else if (a == 'Y') {
    return "yellow";
  }
}

function randomColor() {
  var rand = Math.floor(Math.random() * 4);
  if (rand == 0) {
    return 'R';
  } else if (rand == 1) {
    return 'B';
  } else if (rand == 2) {
    return 'G';
  } else if (rand == 3) {
    return 'Y';
  }
}

function updateHighScore() {
  if (level > highScore) {
    highScore = level;
    localStorage.setItem('highScore', highScore);
  }
  document.getElementById("highScore").innerHTML = "High Score: " + highScore;
}

function startNext() {
  going = true;
  userColors = [];
  document.getElementById("curList").innerHTML = ("Your current input:" + userColors.toString());

  level++;
  document.getElementById("level").innerHTML = "Level: " + level;
  var nextColor = letterToColor(randomColor());
  simonColors.push(nextColor);
  console.log(simonColors);
  var index = 0;
  var i1 = setInterval(
    function() {
      if (index >= simonColors.length) {
        clearInterval(i1);
        going = false;
        return;
      }
      var curColor = simonColors[index];
      buttons.start.element.style.background = curColor;
      document.getElementById("startButton").innerHTML = curColor;
      console.log(curColor);
      var i2 = setInterval(function() {
        buttons.start.element.style.background = "white";
        document.getElementById("startButton").innerHTML = "";
        clearInterval(i2);
      }, 500);

      index++;
    }, 1000);
  //setTimeout(()=>{document.getElementById("startButton").classList.remove(nextColor)}, 500);

  //document.getElementById("startButton").innerHTML = "";
}

function startButtonClicked() {
  console.log('Start button clicked');
  if (going || levelEnd == false) {
    return;
  }
  going = true;
  levelEnd = false;
  userColors = [];
  document.getElementById("curList").innerHTML = ("Your current input:" + userColors.toString());
  document.getElementById("startButton").innerHTML = "";
  startNext();
}

function checkAnswer() {
  if (userColors.length > simonColors.length) {
    return;
  }
  var correct = true;
  for (var i = 0; i < userColors.length; i++) {
    if (letterToColor(userColors[i]) != simonColors[i]) {
      correct = false;
      break;
    }
  }
  console.log(correct);
  if (!correct) {
    levelEnd = true;
    level = 0;
    document.getElementById("level").innerHTML = "Level: " + level;
    simonColors = [];
    document.getElementById("startButton").innerHTML = "Start";
  } else if (correct && userColors.length == simonColors.length) {
    updateHighScore();
    startNext();
    //document.getElementById("startButton").innerHTML = "Start";
  }

}




// function redButtonClicked() {
//   if (going || levelEnd) return;
//   console.log('Red button clicked');
//   userColors.push('R');
//   console.log(userColors);
//   document.getElementById("redButton").classList.add("shadow");
//   document.getElementById("redButton").classList.remove("red");
//   setTimeout(() => {
//     document.getElementById("redButton").classList.remove("shadow");
//     document.getElementById("redButton").classList.add("red");
//   }, 500);
//   document.getElementById("curList").innerHTML = ("Your current input:" + userColors.toString());
//   checkAnswer();
//
// }

// function blueButtonClicked() {
//   if (going || levelEnd) return;
//   console.log('Blue button clicked');
//   userColors.push('B');
//   console.log(userColors);
//   document.getElementById("blueButton").classList.add("shadow");
//   document.getElementById("blueButton").classList.remove("blue");
//   setTimeout(() => {
//     document.getElementById("blueButton").classList.remove("shadow");
//     document.getElementById("blueButton").classList.add("blue");
//   }, 500);
//   document.getElementById("curList").innerHTML = ("Your current input:" + userColors.toString());
//   checkAnswer();
// }
//
// function greenButtonClicked() {
//   if (going || levelEnd) return;
//   console.log('Green button clicked');
//   userColors.push('G');
//   console.log(userColors);
//   document.getElementById("greenButton").classList.add("shadow");
//   document.getElementById("greenButton").classList.remove("green");
//   setTimeout(() => {
//     document.getElementById("greenButton").classList.remove("shadow");
//     document.getElementById("greenButton").classList.add("green");
//   }, 500);
//   document.getElementById("curList").innerHTML = ("Your current input:" + userColors.toString());
//   checkAnswer();
// }
//
// function yellowButtonClicked() {
//   if (going || levelEnd) return;
//   console.log('Yellow button clicked');
//   userColors.push('Y');
//   console.log(userColors);
//   document.getElementById("yellowButton").classList.add("shadow");
//   document.getElementById("yellowButton").classList.remove("yellow");
//   setTimeout(() => {
//     document.getElementById("yellowButton").classList.remove("shadow");
//     document.getElementById("yellowButton").classList.add("yellow");
//   }, 500);
//   document.getElementById("curList").innerHTML = ("Your current input:" + userColors.toString());
//   checkAnswer();
// }


buttons.start.element.addEventListener("click", buttons.start.clicked);
buttons.red.element.addEventListener("click", buttons.red.clicked);
buttons.blue.element.addEventListener("click", buttons.blue.clicked);
buttons.green.element.addEventListener("click", buttons.green.clicked);
buttons.yellow.element.addEventListener("click", buttons.yellow.clicked);
