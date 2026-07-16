const cake = document.getElementById("cake");

const button = document.getElementById("continueBtn");

let clicked = false;

cake.addEventListener("click",()=>{

if(clicked) return;

clicked=true;

/* حركة صغيرة */

cake.style.transform="scale(.96)";

setTimeout(()=>{

cake.src="images/cake-off.png";

cake.style.transform="scale(1)";

},250);


/* يظهر الزر */

setTimeout(()=>{

button.style.display="inline-block";

},700);

});