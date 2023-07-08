noseX = 0;
noseY = 0;

function preload(){
    clown_nose = loadImage('https://t4.ftcdn.net/jpg/05/30/20/27/360_F_530202726_UzdVE1t3PJhqp3KopWGsMobSG2Nhv7Yw.jpg');
}

function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded(){
    console.log("poseNet is initialized");
}

function gotPoses(results){
    if(results.length>0){
    console.log(results);
    noseX = results[0].pose.nose.x;
    noseY = results[0].pose.nose.y;
    console.log("noseX = "+results[0].pose.nose.x);
    console.log("noseY = "+results[0].pose.nose.y);
    }
}

function draw(){
    image(video,0,0,300,300);
    image(clown_nose,noseX-15,noseY+10,25,25);
}

function take_snapshot(){
    save("photo.png")
}

