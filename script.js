const fs = require('fs');

// Part 1: To what floor do the instructions take Santa?

function part1() {
   fs.readFile('./puzzle.txt', (err, data) => {
      console.time('santa-time');
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
      console.timeEnd('santa-time');
      console.log(`Santa should go to floor ${answer}.`);
   });
}

part1();

// Part 2: What is the position of the character that causes Santa to first enter the basement?

function part2() {
   fs.readFile('./puzzle.txt', (err, data) => {
      console.time('santa-time-basement');
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
      let acc = 0;
      let position = 0;
      const search = directionsArray.some((cur) => {
         if (cur === '(') {
            acc += 1;
         } else if (cur === ')') {
            acc -= 1;
         }
         position++;
         return acc < 0;
      });
      console.timeEnd('santa-time-basement');
      console.log(`Santa entered the basement on ${position} position.`);
   });
}

part2();
