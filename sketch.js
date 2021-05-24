const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;
var thyme;

function preload() {
    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

    
}

function draw(){

    

    if(backgroundImg){
        background(backgroundImg);

    }

    

    Engine.update(engine);

    
    
}

async function getBackgroundImg(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();
    var dateTime=responseJSON.datetime;
    var hour=dateTime.slice(11,13);

    if(hour>=24 && hour<=2){
        bg="s-6.JPG";
    }else if(hour>=2 && hour<=4){
        bg="s-6.JPG";
    }else if(hour>=4 && hour<=6){
        bg="s-6.JPG";
    }else if (hour>=6 && hour<=8){
        bg="s-2.JPG";
    }else if (hour>=8 && hour<=10){
        bg="s-2.JPG";
    }else if (hour>=10 && hour<=12){
        bg="s-2.JPG";
    }else if (hour>=12 && hour<=14){
        bg="s-2.JPG";
    }else if (hour>=14 && hour<=16){
        bg="s-2.JPG";
    }else if (hour>=16 && hour<=18){
        bg="s-3.JPG";
    }else if (hour>=18 && hour<=20){
        bg="s-6.JPG";
    }else if (hour>=20 && hour<=22){
        bg="s-5.JPG";
    }else if (hour>=22 && hour<=23){
        bg="s-4.JPG";
    }

   

    

    

    backgroundImg=loadImage(bg);
    console.log(backgroundImg);

}

function getDate(){
    var cDate=new Date();
    document.getElementById("Date").innerHTML = cDate.toString();
  }
