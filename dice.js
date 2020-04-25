
var r1 =Math.floor(Math.random()*6)+1;

var imgs="images/dice"+r1+".png";

document.querySelectorAll("img")[0].setAttribute("src",imgs);

var r2 =Math.floor(Math.random()*6)+1;

var imgs1="images/dice"+r2+".png";

document.querySelectorAll("img")[1].setAttribute("src",imgs1);

var r3 =Math.floor(Math.random()*6)+1;

var imgs3="images/dice"+r3+".png";

document.querySelectorAll("img")[2].setAttribute("src",imgs3);

if(r1>r2&&r1>r3){
document.querySelector("h1").innerHTML="🚩Player 1 wins";}
else if(r2>r3){
document.querySelector("h1").innerHTML="Player 2 🚩 wins";}
else if(r1==r2==r3)
{
  document.querySelector("h1").innerHTML="Draw 🥺";
}
else {
  document.querySelector("h1").innerHTML="Player 3 wins🚩";
}
