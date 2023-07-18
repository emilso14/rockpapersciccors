const options = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
    const optionsIndex = Math.floor(Math.random() * options.length);
    return options[optionsIndex];
}

console.log(getComputerChoice());



