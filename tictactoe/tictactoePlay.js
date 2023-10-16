const { start } = require("repl");
const tictactoe = require("./tictactoe.js");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let playerOne, playerTwo;

rl.question("Player One Name :", (firstPlayer) => {
  playerOne = firstPlayer;
  rl.question("Player Two Name :", (secondPlayer) => {
    playerTwo = secondPlayer;
    startGame();
    // rl.close();
  });
});

let result = true,
  board;

const printBoard = (board) => {
  let boardlist = [];
  for (let i = 1; i <= 9; i += 3) {
    let listrow = [];
    for (let j = i; j < i + 3; j++) {
      if (board[j]) {
        listrow.push(board[j]);
      } else {
        listrow.push("_");
      }
    }
    boardlist.push(listrow.join(" "));
  }
  console.log(`Board \n ${boardlist.join("\n")}`);
};

const startGame = () => {
  console.log("Let the Game Begin \n");
  const play = tictactoe(playerOne, playerTwo);
  let currentPlayer = "X"; // Start with "X"
  //   let moves = 0;

  const playTurn = () => {
    rl.question(`Enter your position ${currentPlayer}\n`, (move) => {
      [result, board] = play(currentPlayer, move);
      console.log(`Game Status : ${board[0]}`);
      printBoard(board);
      //   moves++;
      if (result[0] === false) {
        // rl.close();
        console.log(result[1])
      } else {
        currentPlayer = currentPlayer === "X" ? "O" : "X";
        console.log(result[1]);
        playTurn();
      }
    });
  };
  playTurn();
};
