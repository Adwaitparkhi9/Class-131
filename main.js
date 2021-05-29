function preload(){
img= loadImage("dog_cat.jpg");
}
function setup(){
    canvas=createCanvas(640,420);
    canvas.center();
}
function draw(){
    image(img,0,0,640,420);
    fill("red");
    noFill();   
    stroke("red");
    rect(200,60,100,250);
    text("Dog",200,70);
}