const countdown = document.getElementById("countdown");

// تاريخ عيد الميلاد
const birthday = new Date("September 8, 2026 00:00:00").getTime();

function updateCountdown() {

    const now = new Date().getTime();

    const distance = birthday - now;

    // إذا وصل يوم عيد الميلاد
 if(distance <= 0){

    clearInterval(timer);

    launchFireworks();

    setTimeout(()=>{

        window.location.href="Envelope.html";

    },4000);

    return;
}

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));

    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (distance % (1000 * 60 * 60)) /
        (1000 * 60)
    );

    const seconds = Math.floor(
        (distance % (1000 * 60)) /
        1000
    );

    countdown.innerHTML =
        `${days}d : ${hours}h : ${minutes}m : ${seconds}s`;

}

updateCountdown();

const timer = setInterval(updateCountdown,1000);
const canvas = document.getElementById("fireworks");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function startFireworks(){

    canvas.style.display="block";

    setInterval(()=>{

        const x=Math.random()*canvas.width;
        const y=Math.random()*canvas.height*0.6;

        for(let i=0;i<40;i++){

            const angle=Math.random()*Math.PI*2;
            const speed=Math.random()*6+2;

            const dx=Math.cos(angle)*speed;
            const dy=Math.sin(angle)*speed;

            animateParticle(x,y,dx,dy);

        }

    },350);

}

function animateParticle(x,y,dx,dy){

    let alpha=1;

    function draw(){

        ctx.fillStyle=`rgba(255,215,0,${alpha})`;

        ctx.beginPath();

        ctx.arc(x,y,3,0,Math.PI*2);

        ctx.fill();

        x+=dx;

        y+=dy;

        alpha-=0.02;

        if(alpha>0){

            requestAnimationFrame(draw);

        }

    }

    draw();

}
function launchFireworks(){

    const duration = 4000;

    const end = Date.now() + duration;

    (function frame(){

        confetti({

            particleCount:5,

            angle:60,

            spread:80,

            origin:{x:0},

            colors:["#FFD700","#FFF8DC","#FFFFFF"]

        });

        confetti({

            particleCount:5,

            angle:120,

            spread:80,

            origin:{x:1},

             colors:["#FFD700","#FFF8DC","#FFFFFF"]

        });

        if(Date.now() < end){

            requestAnimationFrame(frame);

        }

    })();

}