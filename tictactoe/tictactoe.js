const tictactoe = (xName, oName) => {
  const players = {
    X: xName,
    O: oName,
  };

  let currentPlayer = "X";

  // lookuptable
  const nextPlayer = {
    X: "O",
    O: "X",
  };

  const board = ["ongoing", "", "", "", "", "", "", "", "", ""];

  const isValidated = (move) => {
    // move should be right index and not already taken
    return 1 <= move && move <= 9 && board[move] === "";
  };

  const computeStatus = () => {
    const winningcompons = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
      [1, 4, 7],
      [2, 5, 8],
      [3, 6, 9],
      [1, 5, 9],
      [3, 5, 7],
    ];
    // check win X
    // check for win Y
    winningcompons.forEach(({ i1, i2, i3 }) => {
      if (
        board[i1] === board[i2] &&
        board[i2] === board[i3] &&
        board[i3] === currentPlayer
      ) {
        return `${currentPlayer} win the Game`;
      }
    });
    let isDraw = board.reduce(
      (acc, cell) => (cell !== "" ? true : false),
      false
    );
    // check draw
    // for (let cell = 1; cell <= board.length; cell++) {
    //   if (board[cell] !== "") isDraw = true;
    // }
    if (isDraw) return "The Match is Draw";

    return "ongoing";
  };

  return (player, move) => {
    // validate right player,
    if (player !== currentPlayer) {
      board[0] = `Not Your turn, It's ${currentPlayer}'s turn`;
      return [false, 0];
    }
    // validate right move,
    if (!isValidated(move)) {
      board[0] = `Invalid move, try again!`;
      return [false, board];
    }
    board[move] = currentPlayer;
    board[0] = computeStatus();
    // advance the game,
    currentPlayer = nextPlayer[currentPlayer];
    // 1. update the game,
    // 2. compute the game status,
    // 3. next player turn.
    console.log(board);
    return [true, board];
  };
};

module.exports = tictactoe;
