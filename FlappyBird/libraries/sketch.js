var bird;
var pipes = [];
var mic;
var sliderTop;
var sliderBottom;
var clapping = false;

function setup(){
//  song = loadSound('beep.mp3');
///////// If You Want To Make Sound Beep When Bird Hit Pipes Clear This Between The Quotation " // " From Above The Line
///// And Go To  " Pipe.js " And Go To Line 26 " song.play() " And Clear This Between The Quotation.
    createCanvas(400, 600);
    mic = new p5.AudioIn();
    mic.start();
    bird = new Bird();
    pipes.push  (new Pipe());
    sliderTop = createSlider(0, 1, 0.3, 0.01);
    sliderBottom = createSlider(0, 1, 0.1, 0.01);

}
function draw() { // Background Color and Other
    background(0);

    var vol = mic.getLevel();




for (var i = pipes.length-1; i >= 0; i--) {
    pipes[i].show();
    pipes[i].update();
    if(pipes[i].hits(bird)){
        console.log("HIT");

    }

    if (pipes[i].offscreen()) {
        pipes.splice(i, 1);
    }
}

    bird.update();
    bird.show();

    if (frameCount %100 == 0 ) {
        pipes.push(new Pipe());
    }

    var thresholdTop = sliderTop.value();
    var thresholdBottom = sliderBottom.value();



if (vol > thresholdTop && !clapping) {
  bird.up();
  clapping = true;
}
  if (vol < thresholdBottom) {
    clapping = false;
  }

    fill(0, 255, 0);
    noStroke();
    var y = map(vol, 0, 1, height, 0);
    rect(width-50, y, 50, height-y);


    var ty = map(thresholdTop, 0, 1, height, 0);
    stroke(255, 0, 0);
    strokeWeight(4);
    line(width -50, ty, width, ty);

    var bottomy = map(thresholdBottom, 0, 1, height, 0);
    stroke(0, 0, 255);
    strokeWeight(4);
    line(width -50, bottomy, width, bottomy);
}
function mousePressed(){
bird.up();
}
    function keyPressed() {
        if (key ==  ' ' ) {
        bird.up();
        //    console.log("SPACE")
        }
    }
