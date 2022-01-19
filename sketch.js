const option = document.getElementsByClassName("option");
let colors = [];
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

}

function draw() {
  angleMode(DEGREES);
  translate(width / 2, height / 2);
  background(0, 0,0)
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
  rotate(20)
}
