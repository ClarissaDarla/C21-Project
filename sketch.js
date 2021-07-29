
var astronaut;

function setup() {
  createCanvas(400, 400);
}

function preload(){
  bg=loadImage("iss.png")
  sleep = loadImage ("sleep.png")
  brush = loadImage ("brush.png")
  gym = loadAnimation ("gym1.png,gym2.png")
  eat = loadAnimation ("eat1.png,eat2.png")
  drink = loadAnimation ("drink1.png,drink2.png")
  move = loadAnimation ("move.png,move1.png")
}

function draw() {
  background(220);
  
  astronaut=createSprite(300,230)
  astronaut.addImage("sleeping",sleep)
  astronaut.scale = 0.1

  if (keyDown("up")){
    astronaut.addAnimation("brushing",brush)
    astronaut.changeAnimation("brushing")
    astronaut.y = 350
    astronaut.velocityX = 0
    astronaut.velocityY = 0
  }

  if (keyDown("down")){
    astronaut.addAnimation("gymming",gym)
    astronaut.changeAnimation("gymming")
    astronaut.y = 350
    astronaut.velocityX = 0
    astronaut.velocityY = 0
  }

  if (keyDown("left")){
    astronaut.addAnimation("eating",eat)
    astronaut.changeAnimation("eating")
    astronaut.y = 350
    astronaut.velocityX = 0
    astronaut.velocityY = 0
  }
  if (keyDown("right")){
    astronaut.addAnimation("bathing",bath)
    astronaut.changeAnimation("bathing")
    astronaut.y = 350
    astronaut.velocityX = 0
    astronaut.velocityY = 0
  }

  if (keyDown("m")){
    astronaut.addAnimation("moving",move)
    astronaut.changeAnimation("moving")
    astronaut.y = 350
    astronaut.velocityX = 0
    astronaut.velocityY = 0
  }


}