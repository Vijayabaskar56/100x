const generateCombos = (n) => {
  //    Write your code here

  const gridSize = n * n;
  const grid = [];
  let gridInput = 1;
  const combos = [];

  // Create the grid
  for (let i = 0; i < gridSize; i++) {
    grid[i] = gridInput++;
  }

  // if size is equal to 1
  if (n == 1) {
    let emtarr = [1];
    combos.push(emtarr);
    return combos;
  }

  // if size is equal to 0
  if (n == 0) {
    combos.push();
  }

  // rows
  for (let i = 0; i < gridSize; i += n) {
    const rowSequence = grid.slice(i, i + n);
    combos.push(rowSequence);
  }

  // columns
  for (let i = 0; i < n; i++) {
    let colSequence = [];
    for (let j = i; j < gridSize; j += n) {
      colSequence.push(grid[j]);
    }
    combos.push(colSequence);
  }

  // diagonal one
  let diagonalright = [];
  for (let k = 0; k < gridSize; k += n + 1) {
    diagonalright.push(grid[k]);
  }
  combos.push(diagonalright);

  //diagonla two
  let diagonalleft = [];
  for (let k = n - 1; k < gridSize - 1; k += n - 1) {
    diagonalleft.push(grid[k]);
  }
  combos.push(diagonalleft);

  // let gridSize = n * n;
  // let grid = [];
  // let gridinput = 1;
  // let rows = [];
  // let columns = [];

  // for (let i = 0; i < gridSize; i++) {
  //   grid[i] = gridinput++;
  // }

  // function row() {
  //   let j = 0;
  //   let colcounter = 0;
  //   for (let row = 0; row < n * 2 + 2; row++) {
  //     let k = 0;
  //     let rowarr = [];
  //     let index = colcounter;
  //     let dig = 0;
  //     while (k < n) {
  //       if (row < (n * 2 + 2) / 3) {
  //         rowarr[k] = grid[j];
  //         j++;
  //         k++;
  //       } else if (
  //         row >= (n * 2 + 2) / 3 &&
  //         row < (n * 2 + 2) / 3 + (n * 2 + 2) / 3
  //       ) {
  //         rowarr[k] = grid[index];
  //         index = index + n;
  //         j++;
  //         k++;
  //       } else {
  //         rowarr[k] = grid[dig];
  //         dig = dig + (n + 1);
  //         k++;
  //       }
  //     }
  //     rows[row] = rowarr;
  //   }
  //   console.log(rows);
  //   return rows;
  // }
  console.log(combos);
  return combos;
};

const [_1, _2, sizeStr, ..._3] = process.argv;

let size = Number(sizeStr);
let combos = generateCombos(size);
// let combos = generateCombos(10);

combos.forEach((combo) => {
  console.log(combo.join(","));
});

module.exports = { generateCombos };
1;
