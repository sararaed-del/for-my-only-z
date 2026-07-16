const envelope=document.getElementById("envelopeImage");

const tap=document.querySelector(".tap");

const button=document.getElementById("continueBtn");

let opened=false;

envelope.onclick=function(){

    if(opened) return;

    opened=true;

    envelope.src="images/envelope-open.png";

    tap.style.display="none";

    button.style.display="inline-block";

}

