


document.getElementById("redButton").addEventListener("click", function() {
  console.log('Red button clicked');
  document.getElementById("redButton").classList.add("shadow");
  document.getElementById("redButton").classList.remove("red");
  //setTimeout(document.getElementById("redButton").classList.remove("shadow"), 1000);
});
