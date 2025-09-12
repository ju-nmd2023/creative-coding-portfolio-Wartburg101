let size=50;
function setup() {
    createCanvas(innerWidth, innerHeight, WEBGL);
    angleMode(DEGREES);
}
function draw() {
    background(200);
    //let x = map(mouseX, 0, width, 0, 360);
    //let y = map(mouseY, 0, height, 0, 360);
    rotateX(-45);
    rotateY(45);
    
    for(let i = 0; i<2;i++){
        for(let j = 0; j<2;j++){
            push();
            translate(i*size, 0, j*size);
            box(size);
            pop();
        }
    }
    
    
}