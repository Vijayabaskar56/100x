[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/mwP1qNXw)
# Javascript Assignment 1

Write a function that returns indexes for rows, column, and diagonals of a square grid. The grid is represented as a single dimension array, with indexes starting at 1. e.g. A grid size 3 is 3x3 and as follows:

```
1 2 3
4 5 6
7 8 9
```

And grid size 4 would 4x4 and represented as:

```
1 2 3 4
5 6 7 8
9 10 11 12
13 14 15 16
```

For a 3x3 grid, the rows, columns, and diagonals are as following:

```
1, 2, 3
4, 5, 6
7, 8, 9
1, 4, 7
2, 5, 8
3, 6, 9
1, 5, 9
3, 5, 7
```

> Task: Given a grid size N, write a function that returns a list of all winning combinations.

Input: N | Integer, 0 <= N <= 1000
Output: (2N + 2) rows with comma separated numbers.

e.g. For size 3:

```
1, 2, 3
4, 5, 6
7, 8, 9
1, 4, 7
2, 5, 8
3, 6, 9
1, 5, 9
3, 5, 7
```

Size 2:

```
1,2
3,4
1,3
2,4
1,4
2,3
```

## Getting Started

1. Clone the repository.
2. Install the required dependencies using `npm install`.
3. Implement your solution in the provided `rows-columns-diagonals.js` file.
