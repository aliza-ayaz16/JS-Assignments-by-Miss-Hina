//====================================== Question 01 =============================================
// let multiDimensionalArray = [[], []];

//====================================== Question 02 =============================================
// let multiDimensionalArrayMatrix = [[0, 1, 2, 3], [1, 0, 1, 2], [2, 1, 0, 1]];

// for (let i = 0; i < multiDimensionalArrayMatrix.length; i++) {
//     for (var j = 0; j < multiDimensionalArrayMatrix[i].length; j++) {
//         document.write(multiDimensionalArrayMatrix[i][j] + " ");
//         if (j>2) {
//             document.write("<br>")
//         }
//     }
// }

// document.write(multiDimensionalArrayMatrix.toString() + "<br>");

//====================================== Question 03 =============================================
// for (let i = 0; i <= 10; i++) {
//     document.write(i + "<br>");
// }

//====================================== Question 04 =============================================
// let numberByUser = Number(prompt("Enter the number of which you want to generate a multiplication table:"));
// let lengthByUser = Number(prompt("Enter the length of Multiplication table:"));

// document.write("<h1>Multiplication table of</h1> " + numberByUser + "<br>");
// document.write("<h1>Length:</h1> " + lengthByUser + "<br> <br>");

// for (var i = numberByUser; i <= numberByUser; i++) {
//     for (var j = 1; j <= lengthByUser; j++) {
//         document.write(i + " x " + j + " = " + (i * j));
//         document.write("<br>");
//     }
// };

//====================================== Question 05 =============================================
// let fruits = ["Apple", "Banana", "Mango", "Orange", "Strawberry"];

// for (var i = 0; i <= fruits.length - 1; i++) {
//     document.write(fruits[i] + "<br>")
// };

// document.write("<br> <br>");

// for (var i = 0; i <= fruits.length - 1; i++) {
//     document.write("Element at Index " + i + " is " + fruits[i] + "<br>");
// };

//====================================== Question 06 =============================================
// document.write("<h1>Counting:</h1>" + "<br>");
// for (var i = 0; i <= 15; i++) {
//     document.write(i + ", ");
// };

// document.write("<h1>Reverse Counting:</h1>" + "<br>");
// for (var i = 10; i >= 1; i--) {
//     document.write(i + ", ");
// };

// document.write("<h1>Even:</h1>" + "<br> <br>");
// for (var i = 0; i <= 20; i++) {
//     if (i % 2 === 0) {
//         document.write(i + ", ");
//     }
// };

// document.write("<h1>Odd:</h1>" + "<br> <br>");
// for (var i = 0; i <= 20; i++) {
//     if (i % 2 !== 0) {
//         document.write(i + ", ");
//     }
// };

// document.write("<h1>Series:</h1>" + "<br> <br>");
// for (var i = 1; i <= 20; i++) {
//     if (i % 2 === 0) {
//         document.write(i + "k, ");
//     }
// };

//====================================== Question 07 =============================================
// let a = ["cake", "apple pie", "cookie", "chips", "patties"];
// // let flag = "<b>not available</b>";

// let userChoice = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?");
// userChoice.toLowerCase();


// for (var i = 0; i < a.length; i++) {
//     if (userChoice === a[i]) {
//         flag = "<b>available</b>";
//     }
// };

// if (flag === "<b>available</b>") {
//     document.write(userChoice + " is " + flag + " at index " + a.indexOf(userChoice) + " in our bakery.");
// }

// else {
//     document.write("We are sorry. " + userChoice + " is <b>not available.</b>");
// }

//====================================== Question 08 =============================================
// let a = [24, 53, 78, 91, 12];
// let forLargestNum = a[0];

// for (var i = 0; i < a.length; i++) {
//     if (a[i] > forLargestNum) {
//         forLargestNum = a[i];
//     }
// }
// document.write("<b>Array items:</b> " + a + "<br>");
// document.write("The largest number is: " + forLargestNum);

//====================================== Question 09 =============================================
// let a = [24, 53, 78, 91, 12];
// let forSmallestNum = a[0];

// for (var i = 0; i < a.length; i++) {
//     if (a[i] < forSmallestNum) {
//         forSmallestNum = a[i];
//     }
// }
// document.write("<b>Array items:</b> " + a + "<br>");
// document.write("The smallest number is: " + forSmallestNum);

//====================================== Question 10 =============================================
// for (var i=5; i<=5; i++){
//     for(var j=1; j<=20; j++){
//         document.write(i*j + ", ")
//     }
// };


//====================================== END =============================================