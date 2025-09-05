// Based on tutorial found here: https://www.gorillasun.de/blog/smooth-curves-with-perlin-noise-and-recreating-the-unknown-pleasures-album-cover-in-p5/ 

function setup() {
    background(0);
  w = min(windowWidth,windowHeight)
  createCanvas(w-150, w-150);
  frameRate(10);
}

function draw() {
    clear();
    background(0);
    fill(0);
    stroke(255);
    strokeWeight(2);

    //Draws lines across the canvas, makes sure we get 30 evenly spaced lines.
  for(n = 0; n<height; n+=height/40){
  beginShape();
  curveVertex(0,n)
// Loops horizontally across the canvas, stepping by width/20 each time giving each row 20 control points
    for (i = 0; i < width; i+=width/10) {

      //Calculated distance from center of canvas using two points (x1, y1, x2, y2))
      var d = dist(i,n,width/2,n)
      //Draws the curve vertex, determining the y position of the vertex.
      curveVertex(i,n-noise(n+i*0.001)*(width/2-d))
      
    }

    //Adds the last two control points to close the shape
  curveVertex(width,n)
  curveVertex(width,n)
  endShape();
  }
  noiseSeed(frameCount);

}