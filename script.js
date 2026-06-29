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
