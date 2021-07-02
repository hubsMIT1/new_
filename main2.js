var score = 0;
var highscore = 0;
//var highscore = localStorage.getItem("myscore"); 
var audio1 = new Audio('./audio1.wav')
var over1 = new Audio('./over.wav')





var up = document.querySelector('.ceiling1');
var down = document.querySelector('.ground1');
var box = document.querySelector('.box');
var hole1 = document.querySelector('.hole1');
var hole2 = document.querySelector('.hole2');
var box1 = document.querySelector('.box1');
var check  = document.querySelector('h2');

var scr = document.querySelector('.end1'); 

function reload() {
location.reload();

}
/*
up.ontouchstart = function () {
box = document.querySelector('.box');
box.style.top = 248 +'px'
//box.classList.add('doUp');
}
//setTimeout()()(() => {
down.ontouchstart = function () {

box = document.querySelector('.box');
//box.innerHTML = up.style.bottom
box.style.top = 470+'px';
}*/

//box.classList.remove('doDown');
//},20000);
setInterval(() => {
/*function reload() {
reload = location.reload();

*/
bx = parseInt(window.getComputedStyle(box,null).getPropertyValue('left'));
by = parseInt(window.getComputedStyle(box,null).getPropertyValue('top'));
bw = parseInt(window.getComputedStyle(box,null).getPropertyValue('width'));
bh = parseInt(window.getComputedStyle(box,null).getPropertyValue('height'));


h1x = parseInt(window.getComputedStyle(hole1,null).getPropertyValue('left'));
h2x = parseInt(window.getComputedStyle(hole2,null).getPropertyValue('left'));

h1y = parseInt(window.getComputedStyle(hole1,null).getPropertyValue('top'));
h2y = parseInt(window.getComputedStyle(hole2,null).getPropertyValue('top'));


x1 = Math.abs((bx)-h1x) ; //dist b/w hole1 and box in x dir;

x2 = Math.abs((bx)-h2x) ; 

y1 = Math.abs(by-(h1y+200)) ;
y2 = Math.abs((by+60)-h2y) ;
bon = Math.abs(h1x-h2x); // its makong difficult some time i will think best way 
console.log(by)
//function check1() {
//check.innerHTML = bx+' ' + by + ' ' + bw +' ' + bh + ' ' + ' '+ h1x + ' ' + h2x + ' ' + h1y + ' ' + h2y + ' ' + x1 + " " + x2 + " " + y1 + " " + y2 +" " + h1x;


if((x1 < (60+3) && y1 < 1 ) && bon >= 50  || (x2 < (60+3) && y2 < 1) && bon > 50) {
btnS = document.querySelector('.btnS');
btnS.style.visibility = 'visible'

btn = document.querySelector('.btn');
btn.style.visibility= 'visible';

hole1.classList.remove('moving1');
box.classList.remove('box1');

hole2.classList.remove('moving2');

up.classList.remove('ceiling1'); 
down.classList.remove('ground1'); 
over1.play();
}

else if( (h1x >  30  && h1x < 64) || (h2x> 30 && h2x< 64)) {
//setInterval(() => {
score  += 1; 
getscore(score);
audio1.play();
//}, 2000); 
}
up.ontouchstart = function () {

//box = document.querySelector('.box1');
box1.style.top = 200+'px'
box.classList.add('doUp');
box1.style.transform = 'rotate(180deg)';
}
//getscore(score);
//setTimeout(() => {
down.ontouchstart = function () {
//console.log("ram");

//box = document.querySelector('box');
//box.innerHTML = up.style.bottom
box.classList.add("doDown");

box1.style.top = (440)+'px';
box1.style.transform = 'rotate(0deg)';
}

//document.querySelector('.high').innerHTML = "highscosnndnmdre"; 

},10);


var highscore = localStorage.getItem("score"); 


function getscore(score) {
//mvar a = localStorage.setItem("sav",score);
check.innerHTML = "Score : " + score ;


//var highscore = localStorage.getItem("myscore"); 
//scr.innerHTML = "Your Score : " + highscore;
//var p =  highscore;

if(score >  highscore){

highscore = score ; 
}
//highscore = Math.max(score,highscore)
//document.querySelector('.high').innerHTML = highscore; 
localStorage.setItem("score",highscore);
//getscore(score); 



//document.querySelector('.high').innerHTML = "/"+ highscore; 

scr.innerHTML = "Your Score : " + score;
document.querySelector('.highS').innerHTML = " Best Score : "+ highscore;
document.querySelector('.high').innerHTML = " / "+highscore; 

}