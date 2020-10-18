var colors=generaterandomcolors(6);
var squares= document.querySelectorAll(".square");
var pickedcolor= pickcolor();
var h1=document.querySelector("h1");
var colorfoundout= document.getElementById("colortobefound");
var msg =document.getElementById("message");
var easybtn=document.getElementById("e");
easybtn.addEventListener("click",function(){
    hardbtn.classList.remove("selected");
    easybtn.classList.add("selected");
    colors= generaterandomcolors(3);
    pickedcolor= pickedcolor();
    colorfoundout.textContent= pickedcolor;
    for(var i=0;i<squares.length;i++)
    {
    if(colors[i])
    {
        squares[i].style.background = colors[i];
    }
    else
    {
        squares[i].style.display= "none";
    }}});
var hardbtn=document.getElementById("h");
hardbtn.addEventListener("click",function(){
    easybtn.classList.remove("selected");
    hardbtn.classList.add("selected");
})
var resetbutton =document.querySelector("#reset");
resetbutton.addEventListener("click",function()
{
   colors= generaterandomcolors(6)
   pickedcolor =pickcolor();
   colorfoundout.textContent=pickedcolor;

})
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
    h1.style.background= pickedcolor;
    resetbutton.textContent="play again?";
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