function setup(){
    createCanvas(innerWidth, innerHeight);
    background(238,104,88);
}

const size = 50;
const gridSizeX = 9; //Size of the grid in X
const gridSizeY = 13; //Size of the grid in Y

function randomPointOnCircle(cx,cy,r){ //Took help from ChatGPT to create this function
    
    let angle = random(TWO_PI); //Select random angle in radians
    let x = cx + cos(angle++) * r; //Calculate the x position on the circle of this angle
    let y = cy + sin(angle++) * r;
    
    return createVector(x,y); //Return a vector of the x and y position
}

function drawCircles(x,y,numlines){
    
    let lineEdge; //Create a variable to save the position where the line hit the wall
    let p1 = randomPointOnCircle(x,y,size/2); 
    let p2 = randomPointOnCircle(x,y,size/2); //Pick two starter points

    for(let i = 0; i<numlines; i++){
            lineEdge = p2; //Make the lineEdge the current endpoint
            p1 = p2; 
            p2 = randomPointOnCircle(x,y,size/2);
            line(p1.x,p1.y,p2.x,p2.y);
            noLoop();
    }

}





function draw(){
    let numlines = 5; //Number of lines to be drawn in the first circle
    let firstCircle = true; //Boolean that determines if the current circle is the first one
    translate(width/2 - (50*9)/2,height/2 - (50*14)/2); // Center the artpiece
    for (let y = 0; y<gridSizeY; y++){
        for (let x = 0; x<gridSizeX; x++){
            if(x>0 || y>0){ //Make sure first grid position is not drawn.
                firstCircle = false;
                numlines++;
                drawCircles(size / 2 + x * size, size / 2 + y * size, numlines);
                
            }
           
        }
    }
    
    

}