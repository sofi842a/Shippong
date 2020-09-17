var skibRamtP1 = 0;
var skibRamtP2 = 0;
var Blueboat;
var skib1press = false;
var skib2press = false;
var skib3press = false;
var skib4press = false;
var skib5press = false;
var skib6press = false;
var skib7press = false;
var skib8press = false;
var skib9press = false;
var skib10press = false;
let skibLyd;
let vinderLyd;
let musik;
let konfetti;
t1=0;

function preload(){
    Blueboat = createImg('https://www.iconsdb.com/icons/preview/caribbean-blue/boat-10-xxl.png');
    Blueboat.hide();
    skibLyd = loadSound("BOOM.mp3");
    vinderLyd = loadSound("MLG.mp3");
    konfetti = loadImage('confetti.gif');
    musik = loadSound("POC.mp3");

}

function setup(){
  createCanvas(windowWidth, windowHeight);
  background(250,250,250)
  skib1 = rect(20,150,200,200);
  skib2 = rect(windowWidth/2-220,150,200,200);
  skib3 = rect(20,600,200,200);
  skib4 = rect(windowWidth/2-220,600,200,200);
  skib5 = rect(260,380,200,200);
  skib6 = rect(windowWidth/2+20,150,200,200);
  skib7 = rect(windowWidth-220,150,200,200);
  skib8 = rect(windowWidth/2+20,600,200,200);
  skib9 = rect(windowWidth-220,600,200,200);
  skib10 = rect(windowWidth/2+260,380,200,200);
  streg = rect(windowWidth/2,0,5,5000);
  musik.setVolume(0.1);
  afspilMusik();
}

function draw(){
  fill(0,0,250);
  scoreboardP1 = rect((windowWidth/2)-170,50,150,50);
  fill(255,255,255);
  text("Score " + skibRamtP1,(windowWidth/2)-160,60,150,50);

  fill(0,0,250);
  scoreboardP2 = rect((windowWidth/2)+20,50,150,50);
  fill(255,255,255);
  text("Score " + skibRamtP2,(windowWidth/2)+30,60,150,50);

  image(Blueboat,20,150,200,200);
  image(Blueboat,windowWidth-220,150,200,200);
  image(Blueboat,260,380,200,200);
  image(Blueboat,windowWidth-220,600,200,200);
  image(Blueboat,20,600,200,200);
  image(Blueboat,windowWidth/2+20,600,200,200);
  image(Blueboat,windowWidth/2-220,600,200,200);
  image(Blueboat,windowWidth/2+20,150,200,200);
  image(Blueboat,windowWidth/2-220,150,200,200);
  image(Blueboat,windowWidth/2+260,380,200,200);

  vinder(skibRamtP1);

}

//skib1
function keyPressed(){

  if (keyCode == UP_ARROW && skib1press === false){
    fill(250,0,0);
    rect(20,150,200,200);
    skibRamtP1 += 1;
    console.log(skibRamtP1);
    skibLyd.play();
    skib1press = true;
  }

//skib2
  if (keyCode == DOWN_ARROW && skib2press === false){
    fill(250,0,0);
    rect(windowWidth/2-220,150,200,200);
    skibRamtP1 += 1;
    console.log(skibRamtP1);
    skibLyd.play();
    skib2press = true;
  }

//skib3
  if (keyCode == LEFT_ARROW && skib3press === false){
    fill(250,0,0);
    rect(20,600,200,200);
    skibRamtP1 += 1;
    console.log(skibRamtP1);
    skibLyd.play();
    skib3press = true;
  }

//skib4
  if (keyCode == RIGHT_ARROW && skib4press === false){
    fill(250,0,0);
    rect(windowWidth/2-220,600,200,200);
    skibRamtP1 += 1;
    console.log(skibRamtP1);
    skibLyd.play();
    skib4press = true;
    }

//skib5
  if (key == "a" && skib5press === false){
    fill(250,0,0);
    rect(260,380,200,200);
    skibRamtP1 += 1;
    console.log(skibRamtP1);
    skibLyd.play();
    skib5press = true;
  }

//skib6
    if (key == "w" && skib6press === false){
      fill(250,0,0);
      rect(windowWidth/2+20,150,200,200);
      skibRamtP2 += 1;
      console.log(skibRamtP2);
      skibLyd.play();
      skib6press = true;
  }

//skib7
    if (key == "s" && skib7press === false){
      fill(250,0,0);
      rect(windowWidth-220,150,200,200);
      skibRamtP2 += 1;
      console.log(skibRamtP2);
      skibLyd.play();
      skib7press = true;
}

//skib8
    if (key == "f" && skib8press === false){
      fill(250,0,0);
      rect(windowWidth/2+20,600,200,200);
      skibRamtP2 += 1;
      console.log(skibRamtP2);
      skibLyd.play();
      skib8press = true;
  }

//skib9
  if (key == "d" && skib9press === false){
    fill(250,0,0);
    rect(windowWidth-220,600,200,200);
    skibRamtP2 += 1;
    console.log(skibRamtP2);
    skibLyd.play();
    skib9press = true;
}

//skib10
    if (key == "g" && skib10press === false){
      fill(250,0,0);
      rect(windowWidth/2+260,380,200,200);
      skibRamtP2 += 1;
      console.log(skibRamtP2);
      skibLyd.play();
      skib10press = true;
  }
}

function vinder(skibRamtP1){
  if(skibRamtP1 === 5){
    fill(140,212,122);
    rect(0,0,windowWidth,windowHeight);
    fill(0,176,178);
    textSize(100,100);
    text("SPILLER 2 HAR VUNDET",windowWidth/2-580,windowHeight/2);
    let frame = floor(frameCount / 0.0001) % 60;
    image(konfetti, 0, 0, windowWidth, windowHeight, frame * 400, 0, 400, 400);

  }
  else if(skibRamtP2 === 5){
    fill(140,212,122);
    rect(0,0,windowWidth,windowHeight);
    fill(0,176,178);
    textSize(100,100);
    text("SPILLER 1 HAR VUNDET",windowWidth/2-580,windowHeight/2);
    //vinderLyd.play();
    let frame = floor(frameCount / 0.0001) % 60;
    image(konfetti, 0, 0, windowWidth, windowHeight, frame * 400, 0, 400, 400);
    }
}

function afspilMusik(){
  t1=millis();
  if(t1<262000){
    musik.play();
  }
  else if(t1 === 262000){
    t1=0;
  }
}


//afslutningsfanfare/ gifs
//ledninger isoleret
//lyd på ramte skibe
//evt numre på skibene på skærm og bord
//tape til at holde ledninger og skibe nede
