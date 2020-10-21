const fs = require('fs');

// Part 1: To what floor do the instructions take Santa?

function part1() {
   fs.readFile('./puzzle.txt', (err, data) => {
      if (err) {
         console.log(`Error! ${err}`);
      }
      // read directions
      const directions = data.toString();
      // split each direction
      const directionsArray = directions.split('');
      // assign what to do with each direction
      // ( -> UP 1 floor
      // ) -> DOWN 1 floor
      const answer = directionsArray.reduce((acc, cur) => {
         if (cur === '(') {
            return (acc += 1);
         } else if (cur === ')') {
            return (acc -= 1);
         }
      }, 0);
      console.log(`Santa should go to floor ${answer}.);
   });
}

part1();
