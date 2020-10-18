var colors=["rgb(255, 0, 0)","rgb(0, 255, 0)","rgb(0, 0, 255)","rgb(255, 255, 0)","rgb(0, 255, 255)","rgb(255, 0, 255)"]

var squares= document.querySelectorAll(".square");
var pickedcolor= colors[3];
var colorfoundout= document.getElementById("colortobefound");
colorfoundout.textContent = pickedcolor;
for(var i=0;i<squares.length;i++)
{
squares[i].style.background=colors[i];
}