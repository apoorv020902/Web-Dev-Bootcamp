// Generate random numbers for both images
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

// Set the src for both img1 and img2
document.querySelector(".img1").src = `./images/dice${randomNumber1}.png`;
document.querySelector(".img2").src = `./images/dice${randomNumber2}.png`;

// Determine the winner
var winner;
if (randomNumber1 > randomNumber2) {
    winner = "Winner: Player 1";
} else if (randomNumber1 < randomNumber2) {
    winner = "Winner: Player 2";
} else {
    winner = "Draw";
}

document.querySelector("h1").innerHTML = winner;

//test comment