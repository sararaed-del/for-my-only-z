const record = document.getElementById("record");

const song = new Audio("music/yellow.mp3");

let clicked = false;

record.addEventListener("click", () => {

    if(clicked) return;

    clicked = true;

    record.style.opacity = "0";

    setTimeout(() => {

        record.src = "images/vinyl.png";

        record.style.opacity = "1";

        record.classList.add("spin");

        song.play();

        setTimeout(()=>{

document.getElementById("continueBtn").style.display="inline-block";

},2000); 

    },500);

});