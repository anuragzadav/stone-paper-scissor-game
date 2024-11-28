let userScore = 0;
let compScore = 0;

let choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");
let userScorePara = document.querySelector("#user-score");
let compScorePara = document.querySelector("#comp-score");

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win! Your ${userChoice} Beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You Lost! ${compChoice} Beats Your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const genCompChoice = () => {
    let compOptions = ["rock", "paper", "scissor"];
    let randomChoice = Math.floor(Math.random() * 3);
    return compOptions[randomChoice];
}

const drawGame = () => {
    msg.innerText = "it's a draw!";
    msg.style.backgroundColor = "#0D1321";
}

const playGame = (userChoice) => {
    let compChoice = genCompChoice();

    if (userChoice === compChoice) {
        // draw
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            // scissor, paper
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            // rock, scissor
            userWin = compChoice === "scissor" ? false : true;
        } else { userChoice === "scissor";
            // paper, rock
            userWin = compChoice === "rock" ? false : true;
        }

        showWinner(userWin, userChoice, compChoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        let userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});
