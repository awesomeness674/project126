Swag_se_swagat_song = "";
lamborghini_song = "";
rightWrist_x = 0;
rightWrist_y = 0;
leftWrist_x = 0;
leftWrist_y = 0;
scoreleftWrist = 0;
song_name = "";

function setup() {
    canvas = createCanvas(600, 530);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotposes);
}

function preload() {
    Swag_se_swagat_song = loadSound("swagseswagat.mp3");
    lamborghini_song = loadSound("lamborghini.mp3");
}

function draw() {
    image(video, 0, 0, 600, 530);

    fill("#00ff00");
    stroke("#ff0000");

    song_name = Swag_se_swagat_song.isPlaying();
    console.log(song_name);

    if (scoreleftWrist > 0.2) {
        circle(leftWrist_x, leftWrist_y, 20);
        lamborghini_song.stop();
        if (song_name == false) {
            Swag_se_swagat_song.play();
        } else {
            console.log("Song Name: Swag se swagat");
            document.getElementById("song_id").innerHTML = "Song Name: Swag se swagat";
        }
    }
}

function modelLoaded() {
    console.log("poseNet Is Initialized");
}