var userColors = [];
var simonColors = [];
var level = 0;
var going = false;
var levelEnd = true;

function letterToColor(a)
{
  if(a=='R')
  {
    return "red";
  }
  else if(a=='B')
  {
    return "blue";
  }
  else if(a=='G')
  {
    return "green";
  }
  else if(a=='Y')
  {
    return "yellow";
  }
}
function randomColor()
{
  var rand = Math.floor(Math.random()*4);
  if(rand==0)
  {
    return 'R';
  }
  else if(rand==1)
  {
    return 'B';
  }
  else if(rand==2)
  {
    return 'G';
  }
  else if(rand==3)
  {
    return 'Y';
  }
}
function startNext()
{
  level++;
  document.getElementById("level").innerHTML = "Level: "+ level;
  var nextColor = letterToColor(randomColor());
  simonColors.push(nextColor);
  console.log(simonColors);
  var index = 0;
  var i1 = setInterval(
    function(){
      if(index>=simonColors.length){
        clearInterval(i1);
        going = false;
        return;
      }
      var curColor = simonColors[index];
      document.getElementById("startButton").style.background=curColor;
      document.getElementById("startButton").innerHTML = curColor;
      console.log(curColor);
      var i2 = setInterval(function(){
        document.getElementById("startButton").style.background="white";
        document.getElementById("startButton").innerHTML = "";
        clearInterval(i2);
      }, 500);

      index++;
    }
    , 1000);
  //setTimeout(()=>{document.getElementById("startButton").classList.remove(nextColor)}, 500);

  //document.getElementById("startButton").innerHTML = "";
}

function startButtonClicked(){
  console.log('Start button clicked');
  if(going||levelEnd==false){
    return;
  }
  going = true;
  levelEnd = false;
  userColors = [];
  document.getElementById("curList").innerHTML=("Your current input:"+userColors.toString());
  document.getElementById("startButton").innerHTML = "";
  startNext();
}
function checkAnswer(){
  if(userColors.length>simonColors.length)
  {
    return;
  }
  var correct = true;
  for(var i = 0;i<userColors.length;i++)
  {
    if(letterToColor(userColors[i])!=simonColors[i])
    {
      correct = false;
      break;
    }
  }
  console.log(correct);
  if(!correct)
  {
    levelEnd =true;
    level=0;
    document.getElementById("level").innerHTML = "Level: "+ level;
    simonColors = [];
    document.getElementById("startButton").innerHTML = "Start";
  }
  else if(correct&&userColors.length==simonColors.length)
  {
    levelEnd =true;
    document.getElementById("startButton").innerHTML = "Start";
  }

}


function redButtonClicked(){
  if(going||levelEnd) return;
  console.log('Red button clicked');
  userColors.push('R');
  console.log(userColors);
  document.getElementById("redButton").classList.add("shadow");
  document.getElementById("redButton").classList.remove("red");
  setTimeout(()=>{
  document.getElementById("redButton").classList.remove("shadow");
  document.getElementById("redButton").classList.add("red");
  }, 500);
  document.getElementById("curList").innerHTML=("Your current input:"+userColors.toString());
  checkAnswer();

}
function blueButtonClicked(){
  if(going||levelEnd) return;
  console.log('Blue button clicked');
  userColors.push('B');
  console.log(userColors);
  document.getElementById("blueButton").classList.add("shadow");
  document.getElementById("blueButton").classList.remove("blue");
  setTimeout(()=>{
  document.getElementById("blueButton").classList.remove("shadow");
  document.getElementById("blueButton").classList.add("blue");
  }, 500);
  document.getElementById("curList").innerHTML=("Your current input:"+userColors.toString());
  checkAnswer();
}
function greenButtonClicked(){
  if(going||levelEnd) return;
  console.log('Green button clicked');
  userColors.push('G');
  console.log(userColors);
  document.getElementById("greenButton").classList.add("shadow");
  document.getElementById("greenButton").classList.remove("green");
  setTimeout(()=>{
  document.getElementById("greenButton").classList.remove("shadow");
  document.getElementById("greenButton").classList.add("green");
  }, 500);
  document.getElementById("curList").innerHTML=("Your current input:"+userColors.toString());
  checkAnswer();
}
function yellowButtonClicked(){
  if(going||levelEnd) return;
  console.log('Yellow button clicked');
  userColors.push('Y');
  console.log(userColors);
  document.getElementById("yellowButton").classList.add("shadow");
  document.getElementById("yellowButton").classList.remove("yellow");
  setTimeout(()=>{
  document.getElementById("yellowButton").classList.remove("shadow");
  document.getElementById("yellowButton").classList.add("yellow");
  }, 500);
  document.getElementById("curList").innerHTML=("Your current input:"+userColors.toString());
  checkAnswer();
}


document.getElementById("startButton").addEventListener("click",startButtonClicked);
document.getElementById("redButton").addEventListener("click", redButtonClicked);
document.getElementById("blueButton").addEventListener("click", blueButtonClicked);
document.getElementById("greenButton").addEventListener("click", greenButtonClicked);
document.getElementById("yellowButton").addEventListener("click", yellowButtonClicked);
