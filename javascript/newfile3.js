document.getElementById("btn").onclick = function() {
    alert("i am a dialog box")
}
function myFunc() {
    document.getElementById("say").innerText = "lorem jdkjioj jdiosopj"
    document.getElementById("king").style.display = "none"
}
function changeImage() {
    document.getElementById("pix").src = "../images/starimg2.webp"
}
function changeStyle() {
    document.getElementById("blue").style.color = "darkgreen"
    document.getElementById("blue").style.fontFamily = "sans-serif"
    document.getElementById("blue").style.fontStyle = "italic"
}

var x = 4;
var y = 7;
var sum = x + y;

function gethvalue() {
    document.getElementById("laser").write(sum)
}