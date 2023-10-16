const snakesAndLadder = (playerone, playertwo, position) => {
  // players
  const players = {
    "❤️": playerone,
    "💚": playertwo,
  };

  const nextPlayer = {
    "💚": "❤️",
    "❤️": "💚",
  };

  const firstPlayer = Math.random() < 0.5 ? playerone : playertwo;

  // ladder look up table
  const ladders = {
    4: 56,
    12: 50,
    14: 55,
    22: 58,
    41: 79,
    54: 88,
  };

  // snake lookup table
  const snake = {
    96: 42,
    94: 71,
    75: 32,
    48: 16,
    37: 3,
    28: 10,
  };

  // Game Board
  const board = [];
  for (let cell = 0; cell <= 100; cell++) {
    let emoji = "";
    // lader indicator
    for (key in ladders) {
      if (cell == key) {
        emoji = "🪜";
      }
    }

    // snake indicator
    for (key in snake) {
      if (cell == key) {
        emoji = "🐍";
      }
    }
    board.push(emoji || `${cell}`);
  }

  const gamePlay = (currentPlayer, move) => {
    //update the board;
    updatedPosition = position + move;
    board[updatedPosition] = currentPlayer;

    // check for ladder
    let isLadder = false;
    for (const key in ladders) {
      if (position === Number(key)) {
        isLadder = true;
        position = ladders[key];
        board[position] = currentPlayer;
        updatedPosition = position;
        break;
      }
    }

    // check for snacks
    let isSnake = false;
    for (const key in snake) {
      if (position === Number(key)) {
        isSnake = true;
        position = snake[key];
        board[position] = currentPlayer;
        updatedPosition = position;
        break;
      }
    }

    return [
      1 <= position && position < 100
        ? `ongoing ${currentPlayer}`
        : `${currentPlayer} win the Game`,
      updatedPosition,
    ];
  };

  return (currentPlayer, move) => {
    currentPlayer = currentPlayer == playerone ? "❤️" : "💚";
    console.log(`Dice value is ${move}`);
    console.log(`CurrentPlayer ${currentPlayer}`);
    let status;
    board[0] =`Game Started: CurrentPlayer ${players[currentPlayer]}`;
    [status, updatedPosition] = gamePlay(currentPlayer, move);
    board[0] = status;
    currentPlayer = nextPlayer[currentPlayer];
    return [board, updatedPosition];
  };
};

module.exports = snakesAndLadder;
