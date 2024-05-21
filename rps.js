let a, b
let scoreboard = {
    player1: 0,
    player2: 0
}
let p1 = document.querySelector("#p1")
let p2 = document.querySelector("#p2")

function updateScoreboard() {
    p1.innerHTML = scoreboard.player1;
    p2.innerHTML = scoreboard.player2;
}

const player1 = (value) => {
    a = value
}
const player2 = (value) => {
    b = value
}
function winner() {
    if (!b) Toastify({
        text: "Please select something!",
        className: "info",
        style: {
            background: "linear-gradient(to right, #00b09b, #96c93d)",
        }
    }).showToast();
    else {
        if (a == "Rock") {
            if (b == "Rock") {
                Toastify({
                    text: "TIE",
                    className: "info",
                    style: {
                        background: "linear-gradient(to right, #00b09b, #96c93d)",
                    }
                }).showToast();
            }
            else if (b == "Paper") {
                Toastify({
                    text: "Player 2 Wins",
                    className: "info",
                    style: {
                        background: "linear-gradient(to right, #00b09b, #96c93d)",
                    }
                }).showToast();
                scoreboard.player2 += 1
            }
            else if (b == "Scissors") {
                Toastify({
                    text: "Player 1 Wins",
                    className: "info",
                    style: {
                        background: "linear-gradient(to right, #00b09b, #96c93d)",
                    }
                }).showToast();
                scoreboard.player1 += 1

            }
        }
        if (a == "Scissors") {
            if (b == "Rock") {
                Toastify({
                    text: "Player 2 Wins",
                    className: "info",
                    style: {
                        background: "linear-gradient(to right, #00b09b, #96c93d)",
                    }
                }).showToast();
                scoreboard.player2 += 1

            }
            else if (b == "Paper") {
                Toastify({
                    text: "Player 1 Wins",
                    className: "info",
                    style: {
                        background: "linear-gradient(to right, #00b09b, #96c93d)",
                    }
                }).showToast();
                scoreboard.player1 += 1

            }
            else if (b == "Scissors") {
                Toastify({
                    text: "TIE",
                    className: "info",
                    style: {
                        background: "linear-gradient(to right, #00b09b, #96c93d)",
                    }
                }).showToast();
            }
        }
        if (a == "Paper") {
            if (b == "Rock") {
                Toastify({
                    text: "Player 1 Wins",
                    className: "info",
                    style: {
                        background: "linear-gradient(to right, #00b09b, #96c93d)",
                    }
                }).showToast();
                scoreboard.player1 += 1

            }
            else if (b == "Paper") {
                Toastify({
                    text: "TIE",
                    className: "info",
                    style: {
                        background: "linear-gradient(to right, #00b09b, #96c93d)",
                    }
                }).showToast();
            }
            else if (b == "Scissors") {
                Toastify({
                    text: "Player 2 Wins",
                    className: "info",
                    style: {
                        background: "linear-gradient(to right, #00b09b, #96c93d)",
                    }
                }).showToast();
                scoreboard.player2 += 1

            }
        }
        a = ""
        b = ""
        form1.style.display = 'block';
        form2.style.display = 'none';
        console.log(`Player 1 = ${scoreboard.player1},Player 2 = ${scoreboard.player2}`)
        updateScoreboard();
    }
}


function hide() {
    if (!a) Toastify({
        text: "Please select something!",
        className: "info",
        style: {
            background: "linear-gradient(to right, #00b09b, #96c93d)",
        }
    }).showToast();
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
