var sprite
var player
var monsters
var number
var bulletGroup
var monstersArray = []
var monsternumber
var player1
var theBullets = [];
var gun
function preload(){
	
}

function setup() {
	createCanvas(800, 700);
	//player = createSprite(400, 300, 20, 20)
	player1 = new Player(400, 300)

	//monsters = new Zombie()
	

	//sprite = new Zombie()
	
	//sprite.rotation += 90

	//monsters = new Map()
	number = 0;

	bulletGroup = new Group()
	
	//gun = new Gun(player1)

  
}


function draw() {
	background(255)
	//sprite.follow()

	/*if(keyDown("w")){
		player.y -= 5

	}
	if(keyDown("a")){
		player.x -= 5

	}
	if(keyDown("d")){
		player.x += 5

	}
	if(keyDown("s")){
		player.y += 5

		
	}*/

	//if(mouseIsPressed){

		//setInterval(shoot, 500)
		//shoot()
		

		
	//}

	//zombie()
	zombie()

	//monsters.follow()
	for(var i = 0; i<monstersArray.length;i++){
		monstersArray[i].follow(player1)
		monsternumber = i

	}

	player1.display()
	

  	drawSprites();

 
}

/*function mousePressed(){
	theBullets.push(new Bullet(player1));
	console.log("firing"+theBullets.length)
	

}*/

/*function mouseReleased(){
	for(var i = 0;i<theBullets.length;i++){
		theBullets[i].display()
		//theBullets[i].travel()
		//theBullets[i].stillAlive()
	}
}*/

function zombie(){

	/*monsters.set(number, new Zombie);
	number += 1*/
	if(frameCount%200 === 0){
	monsters = new Zombie(Math.round(random(20, 780)), Math.round(random(20, 680)))
	monstersArray.push(monsters)

	
	
	}

	

	

	
}

function shoot(){
	bullet = createSprite(player1.x, player1.y, 1, 5)
	bulletGroup.add(bullet)
	if(bullet.x < mouseX && bullet.y < mouseY){
		bullet.velocityX = 2//(mouseX - bullete.x)/100
		bullet.velocityY = 2//(mouseY - bullete.y)/100
		monsters.isShot(bulletGroup)
  
		}else if(bullet.x > mouseX && bullet.y < mouseY){
		  bullet.velocityX = -2//(mouseX - bullete.x)/100
		  bullet.velocityY = 2//(mouseY - bullete.y)/100
		  monsters.isShot(bulletGroup)
		}else if(bullet.x < mouseX && bullet.y > mouseY){
		  bullet.velocityX = 2//(mouseX - bullete.x)/100
		  bullet.velocityY = -2//(mouseY - bullete.y)/100
		  monsters.isShot(bulletGroup)
  
		}else if(bullet.x > mouseX && bullet.y > mouseY){
		  bullet.velocityX = -2//(mouseX - bullete.x)/100
		  bullet.velocityY = -2//(mouseY - bullete.y)/100
		  monsters.isShot(bulletGroup)
  
		
		}else if(bullet.x == mouseX && bullet.y > mouseY){
			bullet.velocityX = 0
			bullet.velocityY = -2
			monsters.isShot(bullet)
		}else if(bullet.x == mouseX && bullet.y < mouseY){
		  bullet.velocityX = 0
		  bullet.velocityY = 2
		  monsters.isShot(bullet)
	  }else if(bullet.x > mouseX && bullet.y == mouseY){
		bullet.velocityX = -2
		bullet.velocityY = 0
		monsters.isShot(bullet)
	}else if(bullet.x < mouseX && bullet.y == mouseY){
	  bullet.velocityX = 2
	  bullet.velocityY = 0
	  monsters.isShot(bullet)
  }

  

}





