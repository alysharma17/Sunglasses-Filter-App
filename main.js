eyes_x=0;
eyes_y=0;

function preload() {
    sunglasses=loadImage("https://lh3.googleusercontent.com/proxy/eLeDTip_hiSnpDOv-glHQOdasqeJAQdfZlxV6OtmmitlmYIP_b8PWJozB353ILGkOWnAw56A9b0tPu4hHLfMoJ0tYkJCfEaUHC9mrvDh1qAEF_XMlG-2jPXWnz1Y3aRJVsf9grJmr0OmLZn3Xir4HE3p7aycxT-8bi0");
}

function setup() {
    Canvas=createCanvas(450, 450);
    Canvas.center();
    video=createCapture(VIDEO);
    video.size(450,450);
    video.hide();
    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotposes);
}

function draw() {
    image(video, 0,0, 450,450);
    image(sunglasses, eyes_x, eyes_y, 200, 70);

}

function snap() {
    save('image.png')
}

function modelLoaded() {

    console.log("PoseNet has loaded!");
}

function gotposes(results) {
        eyes_x = results[0].pose.nose.x-100;
        eyes_y = results[0].pose.nose.y-110;
    }
