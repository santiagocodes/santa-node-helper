<h1 align='center'>Santa's Node Helper</h1>
<p align='center'>
Day 1 Challenge from the Advent of Code website from 2015. <br>
<a href="https://adventofcode.com/2015/day/1"><img src="https://img.shields.io/badge/CHALLENGE-Santa's Helper-9cf.svg?style=flat"></a>
</p>

<img height="75px" align='left' src="https://santiagocodes.github.io/santiagocodes/images/octocat-santiagocodes.png" alt="santiagocodes octocat" />

## Initial Setup

[Clone](https://docs.github.com/en/enterprise/2.13/user/articles/cloning-a-repository) the repository.

-  On Git Bash navigate to the folder you want your cloned directory to be made.
-  Type `git clone https://github.com/santiagocodes/santa-node-helper.git`.
-  Press `enter`

## Scripts you can run in your terminal within this app...

`node script.js`

## The Challenge

### Part 1

Santa was hoping for a white Christmas, but his weather machine's "snow" function is powered by stars, and he's fresh out! To save Christmas, he needs you to collect fifty stars by December 25th.

Collect stars by helping Santa solve puzzles. Two puzzles will be made available on each day in the Advent calendar; the second puzzle is unlocked when you complete the first. Each puzzle grants one star. Good luck!

Here's an easy puzzle to warm you up.

Santa is trying to deliver presents in a large apartment building, but he can't find the right floor - the directions he got are a little confusing. He starts on the ground floor (floor 0) and then follows the instructions one character at a time.

An opening parenthesis, (, means he should go up one floor, and a closing parenthesis, ), means he should go down one floor.

The apartment building is very tall, and the basement is very deep; he will never find the top or bottom floors.

> For example:
>
> `(())` and `()()` both result in floor 0.
> `(((` and `(()(()(` both result in floor 3.
> `))(((((` also results in floor 3.
> `())` and `))(` both result in floor -1 (the first basement level).
> `)))` and `)())())` both result in floor -3.

To what floor do the instructions take Santa?

Puzzle Input: [https://adventofcode.com/2015/day/1/input](https://adventofcode.com/2015/day/1/input)

### Part Two

Now, given the same instructions, find the position of the first character that causes him to enter the basement (floor -1). The first character in the instructions has position 1, the second character has position 2, and so on.

> For example:
>
> `)` causes him to enter the basement at character position 1.
> `()())` causes him to enter the basement at character position 5.

What is the position of the character that causes Santa to first enter the basement using the same puzzle input from part 1?

<h2 align='center'>Support</h2>
<br/>
<p align='center'>
    <a href="https://twitter.com/maricstgo"><img src="https://img.shields.io/badge/twitter.com-@maricstgo-blue?style=flat&logo=twitter"></a>&nbsp;
    <a href="https://dev.to/santiagocodes"><img src="https://img.shields.io/badge/dev.to-@santiagocodes-black?style=flat&logo=dev.to"></a>&nbsp;
    <a href="https://santiagocodes.com"><img src="https://img.shields.io/badge/website-santiagocodes.com-blueviolet?style=flat"></a>&nbsp;
</p>
