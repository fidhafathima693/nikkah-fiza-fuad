window.onload = () => {

    document.body.style.opacity = "1";

    document.body.style.overflow = "hidden";

};

const envelope = document.getElementById("envelope");
const seal = document.getElementById("seal");
const opening = document.getElementById("opening");
const mainContent = document.getElementById("mainContent");
const music = document.getElementById("bgMusic");

mainContent.style.display = "none";

seal.addEventListener("click", () => {

    envelope.classList.add("open");

    music.play().catch(() => {});

    setTimeout(() => {

        opening.style.opacity = "0";

    }, 1200);

    setTimeout(() => {

        opening.style.display = "none";

        mainContent.style.display = "block";

        document.body.style.overflowY = "auto";

    }, 2200);

});

/* ===========================
   COUNTDOWN
=========================== */

const weddingDate = new Date("August 9, 2026 16:00:00").getTime();

setInterval(() => {

    const now = new Date().getTime();

    const distance = weddingDate - now;

    if (distance <= 0) return;

    document.getElementById("days").textContent =
        Math.floor(distance / (1000 * 60 * 60 * 24));

    document.getElementById("hours").textContent =
        Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    document.getElementById("minutes").textContent =
        Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    document.getElementById("seconds").textContent =
        Math.floor((distance % (1000 * 60)) / 1000);

}, 1000);
