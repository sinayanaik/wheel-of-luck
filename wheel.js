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
  const screen = createCanvas(windowWidth, windowHeight);
  screen.parent("wheel");
  background(240);
  circ_radius = min(width, height) - 100;
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
    ang = (options[i].start + options[i].end) / 2;
    fill(5, 3, 0)
    noStroke()
    textSize(32);
    textAlign(CENTER, CENTER);
    text(options[i].text, 300 * sin(ang), 300 * cos(ang));
  }
}

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
