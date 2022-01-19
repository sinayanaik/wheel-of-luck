const option = document.getElementsByClassName("option");
const start = document.getElementById("start")
let colors = [];
let options_list = []

function option_list(x,y,text){
  this.start_theta = x
  this.end_theta = y
  this.text = text
}
class Arrow{
  constructor(theta,r){
    this.theta = theta
    this.r =r 
  }
  rotate(){
    this.theta += Math.floor(Math.random() * (9890 - 2312 + 1)) + 2312;

  }
}

arrow = new Arrow(0,570)

for(let i=0;i<15;i++){
  colors.push(randomColor({
    format: 'rgb'
  }))
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  translate(width / 2, height / 2);
  background(69, 66, 66);
  angleMode(DEGREES);
  background(0, 0, 0);
  //
  Draw_circle_Update_list()

  

}

function draw() {
  angleMode(DEGREES);
  translate(width / 2, height / 2);
  add.addEventListener("click", Draw_circle_Update_list);
  remove.addEventListener("click", Draw_circle_Update_list);
  
  line(0, 0, arrow.r * sin(arrow.theta), arrow.r * cos(arrow.theta))
  arrow.rotate(2)

}
function Draw_circle_Update_list(){
  background(0, 0,0)
  //
  let theta = 360 / option_no;
  let start = 0;
  let end = theta;

  for (i = 1; i <= option_no; i++) {
    fill(colors[i]);
    arc(0, 0, 600, 600, start, end); // arc(center_x,centre_y,r_x,r_y,start_angle,end_angle)
    var text= document.getElementById(`option-${i}`).value;
    options_list.push(new option_list(start,end,text))
    start += theta;
    end += theta;
  }
  
}