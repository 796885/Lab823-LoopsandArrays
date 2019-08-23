//  Your Name
// 	Date or version number
//  This is a comment
//  The setup function function is called once when your program begins

var balls=[]
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
  x = 200;
  y = 200;

loadBalls(20);

}

//  The draw function is called @ 30 fps
function draw() {
runBalls();
for(var i=0; i<5; i++){
  balls[i]=new Ball (100,200,50,50)
}

function loadBalls(n){
  for(var i=0; i<balls.length;i++){
    balls[i]=newBall(random(width),random(height),random(-2,2),random(-2,2));
  }


}
function runBalls(){
  for(var i=0; i=balls.length;i++){
    balls[i].run();
  }
}

}
