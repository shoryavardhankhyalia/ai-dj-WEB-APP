song="";
song2 ="";
leftWristX = 0;
rightWristX = 0;
rightWristY = 0;
leftWristY = 0;
function preload()
{
    song = loadSound("music.mp3");
    song2 = loadSound("music2.mp3");
}
function setup()
{
    canvas = createCanvas(600,500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video , modelLoaded);
    poseNet.on('pose' , gotPoses);
}
function gotPoses(results)
{
   if(results.length > 0 )
   {
      console.log(results);
      leftWristX = results[0].pose .leftWrist.y;
      leftWristX = results[0].pose .leftWrist.x;
      console.log("leftWristX = "+leftWristX+"leftWristY"+leftWristY);
      rightWristX = results[0].pose .rightWrist.y;
      rightWristX = results[0].pose .rightWrist.x;
      console.log("rightWristX = "+rightWristX+"rightWristY"+rightWristY);
   }
}
function modelLoaded()
{
    console.log("PoseNet Is Initialized");
}
function draw()
{
    image(video,0,0,600,500);
}