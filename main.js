function preload(){

}

function setup(){
    canvas = createCanvas(300, 300)
    canvas.center()
    video = createCapture(VIDEO)
    video.size(300, 300)
    video.hide()

    PoseNet = ml5.poseNet(video, modelLoaded)
    PoseNet.on('pose', gotResults)
}

function modelLoaded(){
    console.log("Model Loaded!")
}

function gotResults(results){
    if(results.length > 0){
        console.log("the x is " + results[0].pose.nose.x)
        console.log("the y is " + results[0].pose.nose.y)
    }
}

function draw(){
image(video, 0, 0, 300, 300)

}

function takeSnapshot(){
    save("myfilterimage.png")
}