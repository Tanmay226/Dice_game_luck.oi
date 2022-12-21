console.log("Let's test your luck.");


function randomNoGenerator(n) {
var n =Math.random()*6 ;

     n =Math.floor(n)+1;
    
   return n;
}


var randomNumber1 = randomNoGenerator();

var imageSrc = "/dice"+ randomNumber1 + ".png";
var finalImageSrc = "./images"+ imageSrc;
var image1 = document.querySelector("img").setAttribute("src",finalImageSrc);
// short code


//  player 2 
var randomNumber2 = Math.floor(Math.random()*6)+1;
var imageSrc1 = "/dice"+ randomNumber2+ ".png";
var finalImageSrc2 = "./images"+ imageSrc1;
document.querySelector(".img2").setAttribute("src",finalImageSrc2);


// declear winer

if (randomNumber1>randomNumber2) {
    document.querySelector("h1").innerHTML= "Player 1 Wins!🚩"
    
} else if(randomNumber1<randomNumber2) {
    document.querySelector("h1").innerHTML="Player 2 wins!🚩"
}else{
    document.querySelector("h1").innerHTML= "Draw!"
}
