/*****************************
* CODING CHALLENGE 2
*/

/*
John and Mike both play basketball in different teams. In the latest 3 games, John's team scored 89, 120 and 103 points, while Mike's team scored 116, 94 and 123 points.

1. Calculate the average score for each team

2. Decide which teams wins in average (highest average score), and print the winner to the console. Also include the average score in the output.

3. Then change the scores to show different winners. Don't forget to take into account there might be a draw (the same average score)

4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before, log the average winner to the console. HINT: you will need the && operator to take the decision. If you can't solve this one, just watch the solution, it's no problem :)

5. Like before, change the scores to generate different winners, keeping in mind there might be draws.

GOOD LUCK 😀
*/

// 1
let teamJohn = (89 + 120 + 103) / 3; // 104
let teamMike = (116 + 94 + 123) / 3; // 111
let teamMary = (97 + 134 + 105) / 3; // 112

// 2

if (teamJohn > teamMike && teamJohn > teamMary) {
  console.log("Team John wins!");
} else if (teamMike > teamJohn && teamMike > teamMary ) {
  console.log("Team Mike wins");
} else {
  console.log("Team Mary wins");
}

// teamJohn > teamMike ? console.log("Team John wins with a higher score of", teamJohn) : console.log("Team Mike wins with a higher score of", teamMike);

// 3
teamJohn = 100;
teamMike = 100;
teamMary = 100;

if (teamJohn > teamMike && teamJohn > teamMary) {
  console.log("Team John wins!");
} else if (teamMike > teamJohn && teamMike > teamMary ) {
  console.log("Team Mike wins");
} else if (teamMary > teamJohn && teamMary > teamMike){
  console.log("Team Mary wins");
} else {
  console.log("It's a three-way tie");
}

