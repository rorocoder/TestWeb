var userColors = [];
var simonColors = [];

function redButtonClicked(){
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
}
function blueButtonClicked(){
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
}
function greenButtonClicked(){
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
}
function yellowButtonClicked(){
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
}



document.getElementById("redButton").addEventListener("click", redButtonClicked);
document.getElementById("blueButton").addEventListener("click", blueButtonClicked);
document.getElementById("greenButton").addEventListener("click", greenButtonClicked);
document.getElementById("yellowButton").addEventListener("click", yellowButtonClicked);
