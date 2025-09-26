//Sizes stores information about the boxes
let sizes = [];
let cols = 40;
let rows = 40;
let size = 10;
let xOff = 0;
let yOff = 0;
let zOff = 0;

let oscillator;
let freqSlider, volumeSlider;

window.addEventListener("load", function () {
  oscillator = new Tone.Oscillator().toDestination();
  oscillator.frequency.value = 200;
  oscillator.type = "sawtooth";
  oscillator.volume.value = -30;
});

window.addEventListener("click", function () {
  Tone.start();
});

function setup() {
  createCanvas(innerWidth, innerHeight, WEBGL);
  rectMode(CENTER);
  angleMode(DEGREES);

  oscillator = new Tone.Oscillator(200, "sine").toDestination();
  oscillator.volume.value = -30;

  let startbutton = createButton("Start Audio");
  let stopbutton = createButton("Stop Audio");
  startbutton.mousePressed(() => {
    Tone.start(); // required once to unlock audio
    oscillator.start(); // actually start oscillator
  });
  stopbutton.mousePressed(() => {
    Tone.start(); // required once to unlock audio
    oscillator.stop(); // actually start oscillator
  });
  freqSlider = createSlider(50, 1000, 200, 1); // min=50Hz, max=1000Hz
  freqSlider.position(innerWidth / 2 - 500, innerHeight / 2 + 50);
  freqSlider.style("width", "200px");

  volumeSlider = createSlider(-60, 0, -30, 1); // min=-60dB, max=0dB
  volumeSlider.position(innerWidth / 2 - 500, innerHeight / 2 + 100);
  volumeSlider.style("width", "200px");

  startbutton.position(innerWidth / 2 - 500, innerHeight / 2);
  stopbutton.position(innerWidth / 2 - 400, innerHeight / 2);
}

function draw() {
  background(0);
  fill(0);
  //noStroke();

  rotateX(-45);
  rotateY(45);
  xOff = 0;
  let freq = freqSlider.value();
  let vol = volumeSlider.value();

  let noiseStep = map(freq, 50, 1000, 0.02, 0.3);
  let heightScale = map(vol, -60, 0, 0.2, 2);

  oscillator.frequency.value = freq;
  oscillator.volume.value = vol;

  for (let i = 0; i < cols; i++) {
    sizes[i] = [];
    yOff = 0;
    for (let j = 0; j < rows; j++) {
      let baseHeight = map(noise(xOff, yOff, zOff), 0, 1, 0, 400);
      sizes[i][j] = baseHeight * heightScale;

      push();
      fill(sizes[i][j]);
      translate(i * size - 200, 0, j * size - 200);
      box(size, sizes[i][j], size);
      pop();

      yOff += noiseStep;
    }
    xOff += noiseStep;
    zOff += 0.002; // animation speed
  }
}
