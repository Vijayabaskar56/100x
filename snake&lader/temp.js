const ladders = {
  4: 56,
  12: 50,
  14: 55,
  22: 58,
  41: 79,
  54: 88,
};

let position = 4;

let result = Object.keys(ladders).forEach((key) =>
  position === key ? (position = ladders[position]) : position
);

let laderkey = Object.keys(ladders);
let value = Object.values(ladders);
console.log(laderkey, value);
let isLadder;

if (isLadder) {
  position = ladders[position];
}
console.log(ladders[position]);
console.log(position, isLadder);
