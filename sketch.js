/* eslint-disable no-undef, no-unused-vars */

let current = "A";
let next = "";
const len = 600;
let yPos = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  // Put setup code here
  translate((width - len) / 2, height / 3);
  lChange(current);
  console.log(next);
}

function draw() {
  // Put drawings here
}

// This Redraws the Canvas when resized
windowResized = function () {
  resizeCanvas(windowWidth, windowHeight);
};

function lChange(_current) {
  yPos++;
  let dHead = 0;

  for (let i = 0; i < _current.length; i++) {
    let c = _current.charAt(i);
    if (c === "A") {
      next += "AB";
      drawLine(dHead, yPos * 20, len / _current.length);
      dHead = dHead + len / _current.length;
    } else if (c === "B") {
      next += "A";
      dHead = dHead + len / _current.length;
    }
  }
  current = next;
  if (current.length < 800) {
    lChange(current);
  }
}

function drawLine(x, y, len) {
  line(x, y, x + len, y);
}

function lindenDraw(_input) {
  const lenght = 200;
  let headX = 0;
  let headY = 0;

  for (let i = 0; i < _input.lenght; i++) {
    let c = _input.charAt(i);
    if (c === "A") {
      line(headX);
    } else if (c === "B") {
    }
  }
}
