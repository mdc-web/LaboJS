let playOnce = true;

window.addEventListener('scroll', () => {
   // --------------- NAVBAR 
    if (window.scrollY > 50) {
        navbar.style.height = "50px"
    } else {
        navbar.style.height = "90px"
    }
    // --------------- IMG TRANSLATE
    let scrollValue = (window.scrollY + window.innerHeight) / document.body.offsetHeight;

    if (scrollValue > 0.45) {
        imgImprovise.style.opacity = 1;
        imgImprovise.style.transform = "none";
    }

    // ---------------- POPUP
    if (scrollValue > 0.85 && playOnce) {
        popup.style.opacity = 1;
        popup.style.transform = "none";
        playOnce = false;
    }
});

// ------------------- delete popup
closeBtn.addEventListener ('click', () => {
    popup.style.opacity = 0;
    popup.style.transform = "translate(500px)";
})

