function setup() {
    canvas = createCanvas(640, 480);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();
  
  }

  function draw() {
    image(video, 230, 150, 220, 200);
   
    fill(244, 0, 0);
    stroke(255, 0, 0);
    circle(50,50 ,80);
    circle(50,430 ,80);
    circle(587,50 ,80);
    circle(587,430 ,80);

    fill(0, 128, 0);
    stroke(255, 0 , 0);
    rect(90, 40, 460, 20);

    rect(90, 420 , 460 ,20);

    rect(43, 85, 20, 310);

    rect(580, 85, 20, 310);

  }

  
  
  