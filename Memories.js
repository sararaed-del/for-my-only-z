const memories = [

{
    image:"images/memory1.jpg",
    text:"The beginning of countless<br>beautiful memories. 🤍"
},

{
    image:"images/memory2.jpg",
    text:"One pose. A thousand memories."
},

{
    image:"images/memory3.jpg",
    text:"Excuse me... I'm your favorite. 😌"
},

{
    image:"images/memory4.jpg",
    text:"The engagement photos no one<br>asked for. 💍"
},

{
    image:"images/memory5.jpg",
    text:"Still one of my favorite days ✨"
},

{
    image:"images/memory6.jpg",
    text:"The movie? I barely remember it.<br>The memory? I'll never forget it. 🍿"
},

{
    image:"images/memory7.jpg",
    text:"It was our Third of December. 🩶"
},

{
    image:"images/memory8.jpg",
    text:"The last day of third year. But<br>never the end of us. 🎓"
},

{
    image:"images/memory9.jpg",
    text:"Good food. Beautiful view.<br>Better company. 🤍"
},

{
    image:"images/memory10.jpg",
    text:"Always. ❤️"
}

];

let current = 0;

// Memories
const image = document.getElementById("memoryImage");
const caption = document.getElementById("caption");
const counter = document.getElementById("counter");

// Buttons
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

// Intro
const intro = document.getElementById("intro");
const playBtn = document.getElementById("playBtn");
const container = document.getElementById("memoriesContainer");

// Music
const music = document.getElementById("photoMusic");

// ==========================
// SHOW MEMORY
// ==========================

function showMemory(){

    image.style.opacity = "0";
    caption.style.opacity = "0";

    setTimeout(()=>{

        image.src = memories[current].image;
        caption.innerHTML = memories[current].text;
        counter.innerHTML = `${current + 1} / ${memories.length}`;

        image.style.opacity = "1";
        caption.style.opacity = "1";

    },250);

}

// ==========================
// PLAY BUTTON
// ==========================

playBtn.addEventListener("click",()=>{

    music.volume = 0.4;

    music.play();

    intro.classList.add("hide");

    setTimeout(()=>{

        container.classList.add("show");

    },700);

});

// ==========================
// NEXT
// ==========================

nextBtn.addEventListener("click",()=>{

    if(current < memories.length-1){

        current++;

        showMemory();

    }

    else{

        window.location.href = "Videos.html";

    }

});

// ==========================
// PREVIOUS
// ==========================

prevBtn.addEventListener("click",()=>{

    if(current > 0){

        current--;

        showMemory();

    }

});

// ==========================

showMemory();