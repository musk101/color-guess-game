var colors=generaterandomcolors(6)
var squares= document.querySelectorAll(".square");
var pickedcolor= pickcolor();
var colorfoundout= document.getElementById("colortobefound");
var msg =document.getElementById("message");
colorfoundout.textContent = pickedcolor;
for(var i=0;i<squares.length;i++)
{
squares[i].style.background=colors[i];
squares[i].addEventListener("click",function()
{
    var clickedcolor=this.style.background;
    if(clickedcolor === pickedcolor)
    {
    msg.textContent="correct bruh";
    changecolors(clickedcolor);
    }
    else
    {
        this.style.background = "#0000";
        msg.textContent ="try again bruh";
    }
})
}
function changecolors(color)
{
    for(var i=0;i<squares.length;i++)
    squares[i].style.background = color;
}
function pickcolor()
{
    var random= Math.floor(Math.random() * colors.length);
    return colors[random];
}
function generaterandomcolors(n)
{
    var arr=[];
    for(var i=0;i<n;i++)
    {
arr.push(randomcolor())

    }
    return arr;
}
function randomcolor()
{
   var r= Math.floor(Math.random() * 256);
   var g= Math.floor(Math.random() * 256);
   var b= Math.floor(Math.random() * 256);
   return "rgb(" + r + ", " + g + ", " + b + ")";
}