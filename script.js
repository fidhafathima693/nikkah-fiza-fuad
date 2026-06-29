window.onload = () => {

    document.body.style.opacity = "1";

};
const envelope = document.getElementById("envelope");
const opening = document.getElementById("opening");
const mainContent = document.getElementById("mainContent");
const music = document.getElementById("bgMusic");

mainContent.style.display = "none";

envelope.addEventListener("click", () => {

    envelope.classList.add("open");

    music.play().catch(() => {});

    setTimeout(() => {

        opening.style.opacity = "0";
        opening.style.transition = "1s";

    },1200);

    setTimeout(() => {

        opening.style.display = "none";
        mainContent.style.display = "block";

        document.body.style.overflowY = "auto";

    },2200);

});
/* ===========================
   COUNTDOWN
=========================== */

const weddingDate = new Date("August 9, 2026 16:00:00").getTime();

setInterval(() => {

    const now = new Date().getTime();

    const distance = weddingDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));

    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

},1000);
