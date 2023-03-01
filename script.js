var theJumpSloth = "https://illustoon.com/photo/6985.png";
var theStandSloth = "https://www.shutterstock.com/image-vector/sloth-stands-yoga-pose-color-260nw-1948801135.jpg"
var jumpCount = 0;


function jumpTheSloth() {
  let image = document.getElementById("myImage");
  if (image.src.match(theJumpSloth)) {
    return; // do nothing if already jumped
  }
  image.src = theJumpSloth;
  jumpCount++
  document.getElementById("counter").textContent = "Jump Counter - " + jumpCount;
  document.getElementById("jumpButton").disabled = true;
  document.getElementById("unjumpButton").disabled = false;
}

function unjumpTheSloth() {
  let image = document.getElementById("myImage");
  if (!image.src.match(theJumpSloth)) {
    return; // do nothing if not currently jumped
  }
  image.src = theStandSloth;
  document.getElementById("jumpButton").disabled = false;
  document.getElementById("unjumpButton").disabled = true;
}

function nerd() {
  var nerdText = document.getElementById("nerd");
  nerdText.innerHTML = "These forms dont work so stop trying nerd";
}
