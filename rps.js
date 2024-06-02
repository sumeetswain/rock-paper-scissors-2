let a, b
let scoreboard = {
    player1: 0,
    player2: 0
}
const images = document.querySelectorAll('img');
let p1 = document.querySelector("#p1")
let p2 = document.querySelector("#p2")

function updateScoreboard() {
    p1.innerHTML = scoreboard.player1;
    p2.innerHTML = scoreboard.player2;
}
document.addEventListener('DOMContentLoaded', () => {
    images.forEach(image => {
        image.addEventListener('click', () => {
            image.classList.toggle('highlight')
        });
    });
});
const player1 = (value) => {
    a = value

}
const player2 = (value) => {
    b = value
}
function winner() {
    if (!b) makeToast("Please select something!")
    else {
        if (a == "Rock") {
            if (b == "Rock") {
                makeToast("TIE")
            }
            else if (b == "Paper") {
                makeToast("Player 2 Wins")
                scoreboard.player2 += 1
            }
            else if (b == "Scissors") {
                makeToast("Player 1 Wins")
                scoreboard.player1 += 1

            }
        }
        if (a == "Scissors") {
            if (b == "Rock") {
                makeToast("Player 2 Wins")
                scoreboard.player2 += 1

            }
            else if (b == "Paper") {
                makeToast("Player 1 Wins")

                scoreboard.player1 += 1

            }
            else if (b == "Scissors") {
                makeToast("TIE")

            }
        }
        if (a == "Paper") {
            if (b == "Rock") {
                makeToast("Player 1 Wins")
                scoreboard.player1 += 1

            }
            else if (b == "Paper") {
                makeToast("TIE")
            }
            else if (b == "Scissors") {
                makeToast("Player 2 Wins")
                scoreboard.player2 += 1

            }
        }
        a = ""
        b = ""
        form1.style.display = 'block';
        form2.style.display = 'none';
        updateScoreboard();
        images.forEach(image => image.classList.remove("highlight"))
    }
}


function hide() {
    if (!a) makeToast("Please select something!")
    else {
        if (form1.style.display != 'none') {
            form1.style.display = 'none';
            form2.style.display = 'block';
        }
        else {
            form1.style.display = 'block';
            form2.style.display = 'none';
        }
    }
}

function makeToast(text) {
    return Toastify({
        text: text,
        className: "info",
        style: {
            background: "linear-gradient(to right, #00b09b, #96c93d)",
        }
    }).showToast();
}