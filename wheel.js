class Option {
  constructor(text, start, end) {
    this.text = text;
    this.start = start;
    this.end = end;
  }
}

let arcs = [];
let options = [];
let circ_radius;
let inputs_list = document.getElementById("inputs_list");
let option_count;
let add = document.getElementById("add_option");
let remove = document.getElementById("remove_option");
let turn = document.getElementById("turn");
let option_div = document.getElementsByClassName("option");
const empty = (arr) => (arr.length = 0);
let arrow;
let rotateCondition = false;
let x_axis;
let dimention;

let colors = [
  "#FF0000",
  "#FF7F00",
  "#FFFF00",
  "#00FF00",
  "#00FFFF",
  "#0000FF",
  "#8B00FF",
  "#FF0000",
  "#FF7F00",
  "#FFFF00",
  "#00FF00",
];

function setup() {
  dimention = min(windowWidth,windowHeight)
  const screen = createCanvas(dimention, dimention);
  screen.parent("wheel");
  background(240);
  circ_radius = min(width, height) - 100;
  arrow = createVector(
    (circ_radius / 2 - 100) * sin(0),
    (circ_radius / 2 - 100) * cos(0)
  );
  x_axis = createVector(circ_radius/2, 0)
}
function draw() {
  angleMode(DEGREES);
  translate(width / 2, height / 2);
  background(240);
  stroke(7);
  let theta = 360 / option_count;
  let start = 0;
  let end = theta;
  option_count = document.getElementById("inputs_list").childElementCount / 2;
  angle_divs = 360 / option_count;
  strokeWeight(2);
  circle(0, 0, circ_radius);
  rectMode(CENTER);
  noFill();

  //display arc
  for (let i = 0; i < option_count; i++) {
    fill(colors[i]);
    arc(0, 0, circ_radius, circ_radius, start, end); // arc(center_x,centre_y,r_x,r_y,start_angle,end_angle)
    start += theta;
    end += theta;
  }

  // display text
  for (let i = 0; i < options.length; i++) {
    ang = options[i].start + theta / 2;
    let x = (circ_radius / 4) * cos(ang);
    let y = (circ_radius / 4) * sin(ang);
    fill(5, 3, 0);
    noStroke();
    textSize(32);
    textAlign(CENTER, CENTER);
    text(options[i].text, x, y);
  }
  // display arrow
  stroke(10);
  strokeWeight(10);
  line(0, 0, arrow.x, arrow.y);
  circle(arrow.x, arrow.y, 20);
  if(rotateCondition){
    RotateArrow()
  }
}

//---------

function add_option() {
  let input = document.createElement("input");
  input.type = "text";
  input.name = `option-${option_count + 1}`;
  input.id = `option-${option_count + 1}`;
  input.placeholder = `option-${option_count + 1}`;
  input.className = "option";
  inputs_list.appendChild(input);
  inputs_list.appendChild(document.createElement("br"));
  Mod_options();
}

add.addEventListener("click", add_option);

function remove_option() {
  inputs_list.removeChild(inputs_list.lastChild);
  inputs_list.removeChild(inputs_list.lastChild);
  Mod_options();
}

remove.addEventListener("click", remove_option);

function Mod_options() {
  empty(options);
  let theta = 360 / option_count;
  let start = 0;
  let end = theta;
  for (i = 0; i < option_count; i++) {
    options.push(new Option(option_div[i].value, start, end));
    start += theta;
    end += theta;
  }
}
turn.addEventListener("click", Mod_options);

function RotateArrow() {
  arrow.rotate(random(-5, 50));
}

turn.addEventListener("click", ChangeCondition);

function ChangeCondition() {
  if (rotateCondition == true) {
    rotateCondition = false;
  } else {
    rotateCondition = true;
  }
}

function StopCondition(){
  setTimeout(() => {
   rotateCondition = false 
  }, 1000);
}

turn.addEventListener("click",StopCondition)