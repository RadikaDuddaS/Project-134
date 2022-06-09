sound = "";
Status = "";

function preload(){
    sound = createVideo('my_best_friend.mp3');
}

function setup(){
    canvas = createCanvas(480,380);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video, 0,0,480,380);

    for (let index = 0; index < objects.length; index++) {

        if(objects[index].label  == "person")
        {
            document.getElementById("baby_status").innerHTML = "Status : Baby Detected";
       
            sound.stop()
        }

        else(objects[index].label != "person")
        {
            document.getElementById("baby_status").innerHTML = "Status : Baby Not Detected";
        
            sound.play()
        }

        }

        if(objects.length < 0)
        {
            document.getElementById("baby_status").innerHTML = "Status : Baby Not Detected";
        
            sound.play()
        }

}

function start(){
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    //document.getElementById("Status").innerHTML = "Status : Baby Detected";//
}

function modelLoaded(){
    console.log("Model Loaded!");
    Status = true;
    video.loop();
    video.speed(1);
    video.volume(0);
}

objects = [];

function gotPoses(error,results){
    objects = results;
}
