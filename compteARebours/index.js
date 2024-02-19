let totalSecond;
let interval;

function countDown () {
    const minutes = Math.floor(totalSecond / 60);
    const seconds = totalSecond % 60;

    const sec = seconds < 10 ? "0" + seconds : seconds;

    countdownDisplay.textContent = minutes + " : " + sec;

    if (totalSecond > 0 ) {
        totalSecond--;
    } else {
        countdownDisplay.textContent = "Finito"
        clearInterval(interval);
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (isNaN(choice.value)) {
        alert("Entrez un chiffre")
    } else {
        totalSecond = choice.value * 60;
        choice.value = "";
        clearInterval(interval);
        interval = setInterval(countDown, 1000)
    }
})