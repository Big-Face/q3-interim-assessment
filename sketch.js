var x = 200;
var y = 200;
var letters = [a, b, c, d];

function setup(){
    createCanvas(600,400);
}

function draw(){
    background(0);
    paint(100,200);
    
    if(mouseIsPressed){
    background(255,0,0);
    }
    
    var i = 50;
    while(i <= 300){
        ellipse(i,200,50,50);
        i+=50;
    }
    ellipse(100,200,letters[0],letters[0]);
}

function paint(x,y){
    ellipse(x, y, 100, 100);
    rect(300, 100, 100, 100);
    
    stroke(255);
    line(100, 50, 500, 50);
}