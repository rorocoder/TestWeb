var userColors = [];

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
}


document.getElementById("redButton").addEventListener("click", redButtonClicked);
