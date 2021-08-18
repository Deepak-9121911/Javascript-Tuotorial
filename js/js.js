window.addEventListener("scroll", function () {
  var nav = document.querySelector("nav");
  nav.classList.toggle("sticky", window.scrollY > 0);
});

var button=document.getElementById("start-btn")
button.onmouseover = () => {
  button.classList.toggle("btn-large-mouseover")
}
button.onmouseout = () => {
  button.classList.toggle("btn-large-mouseover")
}
function mouseOver() {
  document.getElementById("mouseoverme").innerHTML = "Mouse is Over ME";
}
function mouseOut() {
  document.getElementById("mouseoverme").innerHTML = "Mouse Over ME";
}
function msg() {
  var ask = confirm("Are you sure?");
  if (ask == true) {
    alert("Deleted");
  } else {
    alert("Cancelled");
  }
}
function goBack() {
  window.history.back();
}
function goForward() {
  window.history.forward();
}
function timeoutFunc() {
  alert("Hello");
}
