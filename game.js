
var canvas = document.getElementById("snake")
var context = canvas.getContext("2d");
var box = 32;
var snake = [];
snake[0] = {
    x: 8 * box,
    y: 8 * box
}

$('.btn1').click(function(){
    clearInterval(jogo);
    VeloMenos1x();
})

$('.btn2').click(function(){
    clearInterval(jogo);
    VeloMais1x();
})


var backgroundImage = new Image(); 
var cobraImage = new Image(); 
var foodImage = new Image(); 

cobraImage.src = 'https://i.pinimg.com/originals/c5/5c/26/c55c2608f79acc3f05ed4be58d1fcd7c.jpg';

foodImage.src = 'food-image.png';

backgroundImage.src = 'https://png.pngtree.com/thumb_back/fw800/back_pic/00/12/73/41564036a03c67f.jpg';
 

var direction ="right";
var food = {
    x: Math.floor(Math.random() * 15 + 1) * box,
    y: Math.floor(Math.random() * 15 + 1) * box
}

function VeloMenos1x(){
    clearInterval(jogo);
   var jogo = setInterval(iniciarJogo, 200);
 }
 
 function VeloMais1x(){
    clearInterval(jogo);
   var jogo = setInterval(iniciarJogo, 60);
}
 

function criarBG(){
    context.drawImage(backgroundImage, 0, 0);
    context.beginPath();
}



function criarCobrinha(){
    for(i=0;i < snake.length; i++){
        context.drawImage(cobraImage,snake[i].x, snake[i].y, box, box);
    }
}

function drawFood(){
    context.drawImage(foodImage,food.x, food.y, box, box);
}

document.addEventListener("keydown", update);

function update(event){
    if(event.keyCode == 37 && direction != "right")  direction ="left";
    if(event.keyCode == 38 && direction != "bottom")  direction ="top";
    if(event.keyCode == 39 && direction != "left")  direction ="right";
    if(event.keyCode == 40 && direction != "top")  direction ="bottom";
}

function iniciarJogo(){
    if(snake[0].x > 15 * box && direction == "right") snake[0].x = 0;
    if(snake[0].x < 0 && direction == "left") snake[0].x = 16 * box;
    if(snake[0].y > 15 * box && direction == "bottom") snake[0].y = 0;
    if(snake[0].y < 0 && direction == "top") snake[0].y = 16 * box;

    for(i=1; i < snake.length; i++){
        if(snake[0].x == snake[i].x && snake[0].y == snake[i].y){
            clearInterval(jogo);
            alert('GAME OVER!');
            
        }
    }

    criarBG();
    criarCobrinha();
    drawFood();

    var snakeX = snake[0].x;
    var snakeY = snake[0].y;

     if(direction == "right") snakeX += box;
     if(direction == "left") snakeX -= box;;
     if(direction == "top") snakeY -= box;
     if(direction == "bottom") snakeY += box;

     if(snakeX != food.x || snakeY != food.y){
         snake.pop(3)
     }
     else{food.x = Math.floor(Math.random() * 15 + 1) * box,
       food.y = Math.floor(Math.random() * 15 + 1) * box
     }

     var newHead = {
         x: snakeX,
         y: snakeY
     }

     snake.unshift(newHead);
     
}

var jogo = setInterval(iniciarJogo, 100);



