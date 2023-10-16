const { platform } = require("os");
const snakesAndLadder = require("./snakes-and-ladders.js");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});


rl.question("Player One Name :", (firstPlayer) => {
  playerOne = firstPlayer;
  rl.question("Player Two Name :", (secondPlayer) => {
    playerTwo = secondPlayer;
    startGame(playerOne);
  });
});


const rollTheDice = () => {
  return Math.floor(Math.random() * 6) + 1;
};

let position = 0;


const startGame = (currentPlayer) => {
  rl.question("Press enter to roll the dice", () => {
    const play = snakesAndLadder(playerOne, playerTwo, position);
      const move = rollTheDice();
      const [board, updatedPosition] = play(currentPlayer, move);
      currentPlayer = currentPlayer == playerOne ? playerTwo : playerOne;
      console.log(`Player: ${currentPlayer}, Move: ${move}`);
      console.log(board);
      position = updatedPosition;
      if (position >= 100) {
        rl.close();
      }
      console.log(position);
    startGame(currentPlayer);
  });
};
