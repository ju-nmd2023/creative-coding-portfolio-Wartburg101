//Sizes stores information about the boxes
let sizes = [];
let cols = 40; let rows = 40; let size = 10;
let xOff = 0; let yOff = 0; let zOff = 0;




function setup(){
    createCanvas(innerWidth, innerHeight, WEBGL);
    rectMode(CENTER);
    angleMode(DEGREES);
    //Divide canvas into a grid 
    //based on the size of the rectangles and width / height of screen
    

}

function draw(){
    background(0);
    fill(0);
    //noStroke();
   
    rotateX(-45);
    rotateY(45);
    xOff = 0;

    for(let i=0; i<cols;i++){
        sizes[i] = []; 
        yOff = 0;

        for(let j=0; j<rows;j++){

            let r = noise(zOff)*255;
            let g = noise(zOff+10)*255;
            let b = noise(zOff+15)*255;
            noStroke();
            
            //The noise function returns a value between 0 and 1, i remap it to a size between 0 and the size of the rectangle
            sizes[i][j] = map(noise(xOff,yOff, zOff), 0, 1, 0, 400); 
            yOff += 0.1;
            push();
            fill(sizes[i][j]);
            translate(i*size-200, 0, j*size-200);
            box(size,sizes[i][j],size);
            pop();
                
            
        }
        xOff += 0.1;
        zOff += 0.0003; //zOff decides the speed at which the noise changes over time
    }

}