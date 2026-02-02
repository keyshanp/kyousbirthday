/* FLOWER GAME */
const flowerMessages = [
  "you are precious ♡",
  "you are deeply loved ✧",
  "you deserve gentle days",
  "you are enough ꕥ",
  "you are special 𓆸"
];

function flowerClick() {
  flowerText.innerText =
    flowerMessages[Math.floor(Math.random() * flowerMessages.length)];
}

/* CAKE */
let blown = false;
function blowCandle() {
  if (blown) return;
  flame.style.display = "none";
  cakeText.innerText = "your wish is safe with me ♡";
  blown = true;
}

/* CARD */
const wishes = [
  "may happiness stay ♡",
  "may love surround you",
  "may peace find you",
  "may your dreams grow",
  "may you smile often"
];

function shuffleCard() {
  cardText.innerText =
    wishes[Math.floor(Math.random() * wishes.length)];
}

/* CONFETTI PHOTO */
const confettiIcons = ["♡","✧","✿","❀","❁","ꕥ","𓆸"];

document.querySelectorAll(".confetti-trigger").forEach(photo => {
  photo.addEventListener("click", () => {
    for (let i = 0; i < 18; i++) {
      const c = document.createElement("div");
      c.className = "confetti";
      c.innerText = confettiIcons[Math.floor(Math.random()*confettiIcons.length)];
      c.style.left = Math.random() * window.innerWidth + "px";
      c.style.top = Math.random() * window.innerHeight + "px";
      document.body.appendChild(c);
      setTimeout(() => c.remove(), 1800);
    }
  });
});

/* CURSOR STAR TRAIL */
const stars = ["✦","✧","✨","⋆"];

document.addEventListener("mousemove", e => {
  const star = document.createElement("div");
  star.className = "star";
  star.innerText = stars[Math.floor(Math.random()*stars.length)];
  star.style.left = e.clientX + "px";
  star.style.top = e.clientY + "px";
  star.style.color = `hsl(${Math.random()*360},80%,75%)`;

  document.body.appendChild(star);
  setTimeout(() => star.remove(), 800);
});

/* MUSIC CONTROL */
const bgm = document.getElementById("bgm");
const record = document.getElementById("record");
const musicBtn = document.getElementById("musicBtn");

let playing = true;

// unmute after first interaction
document.addEventListener("click", () => {
  if (bgm.muted) {
    bgm.muted = false;
    bgm.play();
  }
}, { once: true });

function toggleMusic() {
  if (bgm.paused) {
    bgm.play();
    record.classList.remove("paused");
    musicBtn.innerText = "⏸";
  } else {
    bgm.pause();
    record.classList.add("paused");
    musicBtn.innerText = "▶";
  }
}
