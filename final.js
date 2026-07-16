const pages = [

`
<div class="big">

For My Only Z

<br><br>

🤍

</div>
`,

`
<div class="big">

Dear My Only Z,

<br><br>

Happy 21st Birthday. 🤍

</div>
`,

`
I've been thinking about how to write this for so long, because no matter how many words I write, they will never be enough.

<br><br>

Four years ago, we met on a day that seemed completely ordinary.

<br><br>

If someone had told me that the girl I had just met would become one of the most important people in my life, I probably wouldn't have believed them.

<br><br>

But somehow...

<br><br>

<b>Life knew before we did.</b>
`,

`
Thank you for every morning voice note.

<br><br>

Thank you for every random conversation that somehow lasted for hours.

<br><br>

Thank you for every failed investigation that made us laugh even harder than if we had actually succeeded.

<br><br>

Thank you for surviving Biochemistry with me.

<br><br>

Thank you for surviving Physiology with me.
`,

`
Thank you for getting lost with me.

<br><br>

Thank you for every breakfast, every coffee, every photo, every walk, and every little ordinary moment that became unforgettable simply because you were there.
`,

`
You taught me something I never expected to learn.

<br><br>

That home isn't always a place.

<br><br>

Sometimes...

<br><br>

<div class="big">

it's a person.

</div>

<br>

Before I met you, university was just something I had to get through.

<br><br>

Then you came into my life, and suddenly it became a place full of memories I never want to lose.
`,
`
When I think about these four years,

I don't think about lectures first.

<br><br>

I don't think about exams.

<br>

I don't think about grades.

<br><br>

I think about your smile.

<br>

I think about our photos.

<br>

I think about our voice notes.

<br><br>

I think about all the little moments that seemed ordinary back then but somehow became some of the happiest memories of my life.
`,

`
I hope twenty-one is gentle with you.

<br><br>

I hope it gives you peace.

<br><br>

I hope it brings you closer to every dream you've ever whispered.

<br><br>

I hope one day I'll walk into your little coffee shop.

<br><br>

I hope I'll see your camera hanging around your neck after another beautiful photoshoot.
`,

`
I hope you'll always keep that beautiful smile that makes everyone around you feel a little lighter.

<br><br>

And if life ever becomes difficult...

<br><br>

If one day you forget how wonderful you are...

<br><br>

Come back and read this again.
`,

`
Because somewhere in this world,

there is someone

who truly believes that you are one of the kindest,

warmest,

most beautiful souls she has ever known.

<br><br>

Thank you...
`,

`
For being my comfort.

<br><br>

For being my favorite notification.

<br><br>

For making me laugh until my stomach hurt.

<br><br>

For caring when I needed someone.

<br><br>

For simply existing.
`,
`
If I could go back to the very first day we met...

<br><br>

I wouldn't change a single thing.

<br><br>

I'd still walk into that laboratory.

<br><br>

I'd still choose to sit beside you.
`,

`
I'd still choose every conversation,

every memory,

every adventure,

every photograph...

<br><br>

<div class="big">

I'd still choose you.

<br><br>

Every single time.

🤍

</div>
`,

`
<div class="big">

Happy 21st Birthday,

my only Z.

</div>

<br><br>

Thank you for turning four ordinary years into the most beautiful chapter of my life.

<br><br>

No matter where life takes us...

<br><br>

Thank you for being my favorite chapter.
`,

`
<div class="big">

Here's to every chapter

we haven't written yet. 🤍

</div>

<br><br>

<div class="signature">

Forever your S. 🤍

</div>
`

];
let current = 0;

const page = document.getElementById("page");
const nextBtn = document.getElementById("nextBtn");
const music = document.getElementById("finalMusic");

let musicStarted = false;

// أول صفحة
page.innerHTML = pages[current];

// الزر
nextBtn.addEventListener("click", () => {

    if(!musicStarted){

        musicStarted = true;

        music.volume = 0;

        music.play().catch(()=>{});

        let volume = 0;

        const fade = setInterval(()=>{

            volume += 0.02;

            if(volume >= 0.45){

                volume = 0.45;

                clearInterval(fade);

            }

            music.volume = volume;

        },120);

    }

    page.classList.add("fade");

    setTimeout(()=>{

        current++;

        page.innerHTML = pages[current];

        page.classList.remove("fade");

        if(current === pages.length - 1){

            nextBtn.style.display = "none";

        }

    },500);

});