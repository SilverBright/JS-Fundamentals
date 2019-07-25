/*****************************
* CODING CHALLENGE 1

Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: 
BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs
3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
4. Print a string to the console containing the variable from step 3. (Something like "Is Mark's BMI higher than John's? true"). 
GOOD LUCK 😀
*/

const massMark = 30;
const massJohn = 40;

const heightMark = 172;
const heightJohn = 185;

const BMIMark = massMark / (heightMark * heightMark)
const BMIJohn = massJohn / (heightJohn * heightJohn)
console.log(BMIMark, BMIJohn)

const higherBMI = BMIJohn > BMIMark
console.log(higherBMI)
console.log("Is Mark's BMI higher than John's BMI?", + higherBMI)
