


var arav, gun, theif, diamond, ground, bullet;
var agd,ai, gi, ti, di, bgi;


function preload()
{
	bgi = loadImage("purple background.jpeg");
	ai = loadImage("agd-removebg-preview.png");
	agd = loadImage("agd-left-removebg-preview.png");
	di = loadImage("diamond-removebg-preview.png");
	ti = loadImage("theif_test-removebg-preview.png");
}

function setup() {
	createCanvas(windowWidth,windowHeight);


	arav = createSprite(windowWidth/2,windowHeight/2+300,100,100)
	arav.addImage(ai)
	arav.scale = 0.5

	

	
}


function draw() {
  rectMode(CENTER);
  background(bgi);
  
  drawSprites();

  
  //gun.display()
  

  if(keyIsDown(RIGHT_ARROW)){
	bullet = createSprite(arav.x, arav.y+40, 20,10)
	bullet.display()
   }else if(keyIsDown(LEFT_ARROW)){
	bullet = new Bullet(0, 690);
	bullet.display()
   }

   if(frameCount%60 == 0){
	this.dir = Math.round(Math.random())
      
        
        
	if(this.dir === 0){
		theif = createSprite(10,windowHeight/2+300, 10, 10);
		theif.addImage(ti);
		theif.scale = 0.5;
		theif.velocityX = 5;
	}else{
		theif = createSprite(windowWidth - 10,windowHeight/2+300, 10, 10);
		theif.addImage(ti);
		theif.scale = 0.5;
		theif.velocityX = -5;
	}
	
   }
 
}



