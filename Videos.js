// ==========================
// VIDEOS
// ==========================

const videos = [

    "videos/video1.mp4",
    "videos/video2.mp4",
    "videos/video3.mp4",
    "videos/video4.mp4",
    "videos/video5.mp4",
    "videos/video6.mp4",
"videos/video7.mp4"

];

// ==========================
// ELEMENTS
// ==========================

const intro = document.getElementById("intro");
const playBtn = document.getElementById("playBtn");

const container = document.getElementById("videoContainer");

const player = document.getElementById("videoPlayer");

const music = document.getElementById("videoMusic");

let current = 0;

// ==========================
// PLAY FIRST VIDEO
// ==========================

function playVideo(){

    player.classList.add("fade");

    setTimeout(()=>{

        player.src = videos[current];

        player.load();

        player.play();

        player.classList.remove("fade");

    },500);

}

// ==========================
// PLAY BUTTON
// ==========================

playBtn.addEventListener("click",()=>{

    music.volume = 0.45;

    music.play();

    intro.classList.add("hide");

    setTimeout(()=>{

        container.classList.add("show");

        playVideo();

    },900);

});

// ==========================
// WHEN VIDEO ENDS
// ==========================

player.addEventListener("ended",()=>{

    current++;

    if(current < videos.length){

        setTimeout(()=>{

            playVideo();

        },800);

    }

  else{

    document.getElementById("finalBtn").style.display="inline-block";

}
}); 