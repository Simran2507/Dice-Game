var randomVariable1;
randomVariable1=Math.floor(Math.random()*6+1);
var randomImage = "dice"+randomVariable1+".png";//dice1.png to dice6.png
var randomImageSrc ="images/"+randomImage ;//images/dice1.png to 6


var secondOne= document.querySelector(".img1").setAttribute("src",randomImageSrc);

var randomVariable2;
randomVariable2= Math.floor(Math.random()*6+1);
var randomDiceImage = "images/dice"+randomVariable2 +".png";
var secondOne= document.querySelector(".img2").setAttribute("src", randomDiceImage);

if(randomVariable1>randomVariable2){
    document.querySelector("h1").textContent="Player 1 Win";
}
else if(randomVariable1<randomVariable2){
    document.querySelector("h1").textContent="Player 2 Win";
}
else{
    document.querySelector("h1").textContent="Draw ! ";
}

