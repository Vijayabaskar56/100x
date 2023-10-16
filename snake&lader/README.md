## Include the data structure for keeping track of the game
    array of 0 to 100
    [0 ..
    .....
    ..100]
    
    - dice that generate a random number from 1-to-6

    index 0 hold's the game state and current Player
    gamestate = [start, ongoing, win]
    start : if dice is 0 (condition)
    ongoing: until player reacher 100,
    win: if player reach 100,


## Demonstrate the following operations: 
1.moving along the board
- player position
- to move playerPosition + diceValue
2.reaching a ladder and going up
- create a look up table for ladder
- map the positions from one point to another
- for each move check the lookuptable
3.reaching a snake and going down
- create a look up table for ladder
- reverse look up table
4.winning the game
- win: if player reach 100,


## Explain your choices and reasoning.

- choose array cause that what I am famielr with
- made bunch of changes through trial and error.
- follow similar approach from tictactoe but need to updated the position in both game engin and orcastation layer.
- use look up table's for snaks and ladder to swich the position
