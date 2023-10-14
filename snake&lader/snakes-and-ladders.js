const snakesAndLadder = (playerone, playertwo) => {
  // players
  const players = {
    red: playerone,
    green: playertwo,
  };

  const nextPlayer = {
    red: green,
    green: red,
  };

  const firstPlayer = Math.random() < 0.5 ? playerone : playertwo;

  const currentPlayer = firstPlayer;

  // Game Board
  const board = [];
  for (let cell = 0; cell <= 100; cell++) {
    board.push("");
  }

  // roll the dice
  const rollTheDice = () => {
    return Math.floor(Math.random() * 6) + 1;
  };

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

  const isValidated = (position) => {
    return 1 <= position && position <= 100 && board[move] === "";
  };

  const gamePlay = (position, currentPlayer, board) => {
    // check for ladder
    const dice = rollTheDice();
    let isLadder = false;
    for (const key in ladders) {
      if (position === Number(key)) {
        isLadder = true;
        position = ladders[key];
        break;
      }
    }

    // check for snacks
    let isSnake = false;
    for (const key in snake) {
      if (position === Number(key)) {
        isSnake = true;
        position = snake[key];
        break;
      }
    }

    //update the board;
    if (isLadder || isSnake) {
      board[position] = currentPlayer;
    } else {
      position = +dice;
      board[position] = currentPlayer;
    }

    return 1 <= position && position < 100
      ? `ongoing`
      : `${currentPlayer} win the Game`;
  };

  return (player, position) => {
    // validate right player,
    if (player !== firstPlayer) {
      board[0] = `Not Your turn, It's ${firstPlayer}'s turn`;
      return [false, board[0]];
    }
    // validate right move,
    if (!isValidated(position)) {
      board[0] = `Invalid move, try again!`;
      return [false, board[0]];
    }
    // Start Game Logic
    const gameStart = (currentPlayer, position = 0) => {
      let dice = rollTheDice();
      if (dice === 1) {
        board = 1;
        console.log(`${currentPlayer} can start the play`);
        board[position] = currentPlayer;
        board[0] = gamePlay(position, currentPlayer, board);
      }
      currentPlayer = nextPlayer[currentPlayer];
    };
    return [gameStart, board];
  };
};

module.export = snakesAndLadder;