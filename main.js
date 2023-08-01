var video="";
var status="";
function preload(){
 video=createVideo("video.mp4");
 video.hide();
}
function setup(){
    canvas=createCanvas(480,380);
    canvas.center();
}
function draw(){
    image (video,0,0,480,380);
}
function start(){
    objectDetector=ml5.objectDetector("cocossd",model);
    document.getElementById("status").innerHTML="status:Detectando Objetos";
}
function model(){
    console.log("Deu certo");
    status=true;
    video.loop();
    video.speed(1);
    video.volume(0);
}