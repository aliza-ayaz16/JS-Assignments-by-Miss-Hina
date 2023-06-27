//============================= Question 01 ============================= 
// let userPositiveNum = +prompt("Enter a positive integer(number):");

// if (userPositiveNum <= 0){
//     alert("Kindly only insert a positive integer!")
// };

// document.write("Number: " + userPositiveNum + "<br>");
// document.write("Rounded off value: " + Math.round(userPositiveNum) + "<br>");
// document.write("Floor value: " + Math.floor(userPositiveNum) + "<br>");
// document.write("Ceil value: " + Math.ceil(userPositiveNum));

//============================= Question 02 ============================= 
// let userNegativeNum = +prompt("Enter a negative integer(number):");

// if (userNegativeNum >= 0){
//     alert("Kindly only insert a negative integer!")
// };

// document.write("Number: " + userNegativeNum + "<br>");
// document.write("Rounded off value: " + Math.round(userNegativeNum) + "<br>");
// document.write("Floor value: " + Math.floor(userNegativeNum) + "<br>");
// document.write("Ceil value: " + Math.ceil(userNegativeNum));

//============================= Question 03 ============================= 
// let userNum = +prompt("Enter a number, either positive or negative:");

// if (userNum < 0) {
//     var numConverted = (userNum * userNum) / (-userNum);
//     document.write("The absolute value of " + userNum + " is " + numConverted);
// }

// else {
//     document.write("The absolute value of " + userNum + " is " + userNum);
// }

//============================= Question 04 =============================
// let randomDiceNum =  Math.floor((Math.random() * 6) + 1);

// document.write("Random dice value: " + randomDiceNum);

//============================= Question 05 =============================
// let randomNum = Math.floor((Math.random() * 2) +1);
// document.write(randomNum + "<br>");
// let coinValue = "";
// if (randomNum === 1){
//     coinValue = "Heads";
//     document.write("Random coin value: " + coinValue);
// }

// else if (randomNum === 2) {
//     coinValue = "Tails";
//     document.write("Random coin value: " + coinValue);
// }

//============================= Question 06 =============================
// let anyRandomNum =  Math.floor((Math.random() * 100) + 1);

// let text = "Random Number between 1 and 100: ";

// document.write(text + anyRandomNum);

//============================= Question 07 =============================
// let userWeight = prompt("Enter your weight:");
// let convertedWeight = parseFloat(userWeight);

// if (!isNaN(userWeight)) {
//     document.write("The weight of user is " + convertedWeight + " kg.");
// }
// else  {
//     alert("Invalid Input!!!");
// }

//============================= Question 08 ============================= 
// let randomQuizNum = Math.floor((Math.random() * 10) + 1);
// let userGuessNum = prompt("Enter a number between 1 to 10:");

// let convertedRandomQuizNum = parseFloat(randomQuizNum);
// let convertedUserGuessNum = parseFloat(userGuessNum)

// if (convertedRandomQuizNum === convertedUserGuessNum){
//     alert("Congratulations! You won!");
// }
// else {
//     alert("Oops! Better luck next time!");
// }
// let extraLargeNum = "<h1>" + convertedRandomQuizNum + "</h1>"
// document.write(extraLargeNum);

//============================= END ============================= 
