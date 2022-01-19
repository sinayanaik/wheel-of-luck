const option = document.getElementsByClassName("option");
const start = document.getElementById("start");
let colors = [];
let options_list = [];

// options list
function option_list(x, y, text) {
  this.start_theta = x;
  this.end_theta = y;
  this.text = text;
}

//class arrow
class Arrow {
  constructor(theta, r) {
    this.theta = theta;
    this.r = r;
  }
  rotate() {
    this.theta += Math.floor(Math.random() * (9890 - 2312 + 1)) + 2312;
  }
}

arrow = new Arrow(0, 250);

// attractive colors
for (let i = 0; i < 15; i++) {
  colors.push(
    randomColor({
      format: "rgb",
    })
  );
}

//setup function
function setup() {
  createCanvas(windowWidth, windowHeight);
  translate(width / 2, height / 2);
  background(69, 66, 66);
  angleMode(DEGREES);
  background(255, 255, 255);
  //
  Draw_circle_Update_list();
}
//rotate the wheel
start.addEventListener("click", RotateTheWheel);
start.addEventListener("click", Add_To_Options_list);
//draw function
function draw() {
  angleMode(DEGREES);
  translate(width / 2, height / 2);
  add.addEventListener("click", Draw_circle_Update_list);
  remove.addEventListener("click", Draw_circle_Update_list);
  Draw_circle_Update_list();
  strokeWeight(7);
  line(0, 0, arrow.r * sin(arrow.theta), arrow.r * cos(arrow.theta));
  circle(arrow.r * sin(arrow.theta), arrow.r * cos(arrow.theta), 20);
  let text_angle = 360 / (option_no * 2);
}

function Draw_circle_Update_list() {
  background(255, 255, 255);
  //
  let theta = 360 / option_no;
  let start = 0;
  let end = theta;

  for (i = 1; i <= option_no; i++) {
    fill(colors[i]);
    arc(0, 0, 600, 600, start, end); // arc(center_x,centre_y,r_x,r_y,start_angle,end_angle)
    start += theta;
    end += theta;
  }
}

function RotateTheWheel() {
  empty(options_list);
  for (let i = 0; i <= 100; i++) {
    arrow.rotate(Math.floor(Math.random() * (9890 - 2312 + 1)) + 2312);
  }
}

// add to options list
function Add_To_Options_list() {
  let theta = 360 / option_no;
  let start = 0;
  let end = theta;

  for (let i = 0; i < option_no; i++) {
    var text = document.getElementById(`option-${i + 1}`).value;
    options_list.push(new option_list(start, end, text));
    start += theta;
    end += theta;
  }
}

// calling repeatedly
setInterval(() => {
  empty(options_list);
  Add_To_Options_list();
}, 4000);
