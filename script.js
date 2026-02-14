const faders = document.querySelectorAll('.fade-in');

const appearOnScroll = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      } else {
        entry.target.classList.remove('show'); // 👈 KEY LINE
      }
    });
  },
  {
    threshold: 0.2
  }
);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});
const heartsContainer = document.querySelector(".hearts-container");

function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (Math.random() * 20 + 15) + "px";
    heart.style.animationDuration = (Math.random() * 5 + 5) + "s";

    heartsContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 8000);
}

setInterval(createHeart, 500);
// HERO PARALLAX EFFECT
const heroCard = document.querySelector(".hero .container");

document.addEventListener("mousemove", (e) => {
    const x = (window.innerWidth / 2 - e.pageX) / 40;
    const y = (window.innerHeight / 2 - e.pageY) / 40;

    heroCard.style.transform = `
        rotateY(${x}deg)
        rotateX(${-y}deg)
    `;
});
// HEART BURST ON CLICK
document.addEventListener("click", function(e) {

    for (let i = 0; i < 8; i++) {

        const heart = document.createElement("div");
        heart.classList.add("burst-heart");
        heart.innerHTML = "❤";

        heart.style.left = e.clientX + "px";
        heart.style.top = e.clientY + "px";

        const x = (Math.random() - 0.5) * 200 + "px";
        const y = (Math.random() - 0.5) * 200 + "px";

        heart.style.setProperty("--x", x);
        heart.style.setProperty("--y", y);

        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 1000);
    }
});
// IMPROVED HEART TRAIL

let lastHeartTime = 0;

document.addEventListener("mousemove", function(e) {

    const now = Date.now();

    // limit heart creation (every 80ms)
    if (now - lastHeartTime < 80) return;

    lastHeartTime = now;

    const heart = document.createElement("div");
    heart.classList.add("trail-heart");
    heart.innerHTML = "❤";

    heart.style.left = e.clientX + "px";
    heart.style.top = e.clientY + "px";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 1200);
});
// TIMELINE DATE TOGGLE

const timelineBtn = document.getElementById("timelineBtn");
const timelineDate = document.getElementById("timelineDate");
const timelineText = document.getElementById("timelineText");
const timelineCard = document.getElementById("timelineCard");

let changed = false;

timelineBtn.addEventListener("click", function() {

    if (!changed) {

        timelineCard.style.transform = "scale(0.95)";
        timelineCard.style.opacity = "0.7";

        setTimeout(() => {
            timelineDate.innerText = "02 August 2016";
            timelineText.innerText = "The first time our paths crossed — the real beginning of us.";

            timelineCard.style.transform = "scale(1)";
            timelineCard.style.opacity = "1";

            timelineBtn.innerText = "That’s where our story truly began 💖";

        }, 400);

        changed = true;
    }
});
