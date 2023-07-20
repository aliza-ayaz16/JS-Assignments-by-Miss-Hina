//========================== Question 01 ========================== 
// function time(){
//     alert(new Date());
// }
// time();

//========================== Question 02 ========================== 
// function greet(){
//     let userFirst = prompt("Enter your first name:");
//     let userLast = prompt("Enter your last name:")
//     alert("Hello " + userFirst + " " + userLast)
// }

// greet();

//========================== Question 03 ========================== 
// function sum() {
//     let firstNum = parseFloat(prompt("Enter the first number:"));
//     let secondNum = parseFloat(prompt("Enter the second number:"));
//     alert(firstNum + secondNum);
// }

// sum();

//========================== Question 04 ==========================
// let sum;

// function calculator(num1, num2, operator) {
//     num1 = parseFloat(prompt("Enter the first number:"));
//     num2 = parseFloat(prompt("Enter the second number:"));
//     operator = prompt("Enter the operator:");

//     if (operator === "+") {
//         sum = num1 + num2;
//     }
//     else if (operator === "-") {
//         sum = num1 - num2;
//     }
//     else if (operator === "*") {
//         sum = num1 * num2;
//     }
//     else if (operator === "/") {
//         sum = num1 / num2;
//     }
//     else if (operator === "%") {
//         sum = num1 % num2;
//     }
//     else {
//         alert("Make sure your entered the correct operator!");
//     }

//     alert(sum);
// }

// calculator();

//========================== Question 05 ==========================
// let aNum;

// function squaring(){
//     let askUser = parseFloat(prompt("Enter a number and we'll square it for you!"));
//     aNum = askUser * askUser;

//     alert(aNum);
// }

// squaring(aNum);

//========================== Question 06 ==========================
// let factorial = 1;

// function findFactorial() {
//     let userNum = parseFloat(prompt("Enter a number of which you want the factorial!"));
//     for (i = 1; i <= userNum; i++) {
//         factorial *= i;
//     }
//     alert(factorial);
//     return 1;
// }

// findFactorial();

//========================== Question 07 ==========================
// function counting(){
//     let firstNumber = parseFloat(prompt("Enter the first number:"));
//     let lastNumber = parseFloat(prompt("Enter the last number:"));

//     for (i=1; i<=firstNumber; i++){
//         for(j=1; j<=lastNumber; j++){
//             document.write(j + "<br>");
//         }
//     }
// }

// counting();

//========================== Question 08 ==========================
// let total;
// function calculateHypotenuse() {
//     function calculateSquare() {
//         let askBase = parseFloat(prompt("Enter the value of base:"));
//         let askPerp = parseFloat(prompt("Enter the value of perpendicular:"));

//         total = (askBase * askBase) + (askPerp * askBase)
//         total = Math.sqrt(total);
//     }
//     calculateSquare();
//     alert(total);
// }

// calculateHypotenuse();
//========================== Question 09 ==========================
// let area;

// let width = parseFloat(prompt("Enter the value of width:"));
// let height = parseFloat(prompt("Enter the value of height:"));

// function areaRectangle(width, height) {
//     area = width * height;
//     alert(area);
// }

// // areaRectangle(2, 3);
// areaRectangle(width, height);

//========================== Question 10 ==========================
// let userInput = prompt("Enter one word:");
// function checkingPalindrome(userInput) {
//     let len = userInput.length;
//     for (let i = 0; i < len / 2; i++) {
//         if (userInput[i] !== userInput[len - 1 - i]) {
//             return false;
//         }
//     }
//     return true;
// }

// if(checkingPalindrome(userInput)){
//     alert(userInput + " is a palindrome");
// }

// else {
//     alert(userInput + " is not a palindrome.");
// }

//========================== Question 11 ==========================
// let stringOfUser = prompt("Enter a string:");
// let firstWord;

// function uppercaseFirstLetter() {
//     let firstWord = stringOfUser.split(" ");

//     for (let i = 0; i < firstWord.length; i++) {
//         firstLetter = firstWord[i].charAt(0);
//         firstWord[i] = firstLetter.toUpperCase() + firstWord[i].slice(1);
//     }

//     return firstWord.join(" ");
// }
// document.write("Example string: " + stringOfUser);
// document.write("<br>Expected Output: " + uppercaseFirstLetter(stringOfUser));

//========================== Question 12 ==========================
// let userString = prompt("Enter a string:");
// let longestWord = " ";

// function findLongestWord() {
//     let splitWords = userString.split(" ");
//     // console.log(splitWords)

//     for (let i = 0; i < splitWords.length; i++) {
//        let currentWord = splitWords[i];
//         if (currentWord.length > longestWord.length) {
//             longestWord = currentWord;
//         }
//     }
//     alert("The longest word in the given statement\n\n " + userString + " is \n\n\n" + longestWord);
// }

// findLongestWord();

//========================== Question 13 ==========================
// let userTextInput = prompt("Enter the string:").toLowerCase();
// let userLetterInput = prompt("Enter the letter you want to find in the text.\n\n" + userTextInput).toLowerCase();
// let count = 0;

// function countingLetter(userTextInput, userLetterInput) {
//     for (let i = 0; i < userTextInput.length; i++) {
//         if (userTextInput[i] === userLetterInput) {
//             count++;
//         }
//     }
//     return count;
// }

// document.write("The text entered is: <b>" + userTextInput + "</b><br>The Occurence of the word <b>" + userLetterInput + "</b> is <b>" + countingLetter(userTextInput, userLetterInput) + "</b> times.");

//========================== Question 14 ==========================
// let radius = parseFloat(prompt("Enter the value of radius:"));

// function calcCircumference(radius) {
//     let circumference = 2 * 3.142 * radius;
//     document.write("The circumference is: " + circumference);
// }

// function calcArea(radius) {
//     let areaCircle = 3.142 * (radius * radius);
//     document.write("<br> The area is: " + areaCircle);
// }

// calcCircumference(radius);
// calcArea(radius);

//========================== END ==========================
