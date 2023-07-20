// ======================================= Question 01 =======================================
// let total = 1;
// let a=parseFloat(prompt("Enter a number:"));
// let b=parseFloat(prompt("Enter the number which you want to be exponent:"));

// function powerRaised(a, b) {
//     for (let i = 0; i < b; i++) {
//         total *= a;
//     }
//     return total
// };

// alert(powerRaised(a, b));

// ======================================= Question 02 =======================================
// let year = 2023;

// function findLeapYear() {
//     year = prompt("Enter the year:");

//     if (year % 4 === 0) {
//         if (year % 100 === 0) {
//             if (year % 400 === 0) {
//                 return true;
//             } else {
//                 return false;
//             }
//         } else {
//             return true;
//         }
//     } 
//     else {
//         return false;
//     }
// }
// if(findLeapYear()===true){
//     alert("This is a leap year");
// }
// else{
//     alert("This is not a leap year");
// }

// ======================================= Question 03 =======================================
// let a = parseFloat(prompt("Enter the first value:"));
// let b = parseFloat(prompt("Enter the second value:"));
// let c = parseFloat(prompt("Enter the third value:"));

// function findS(a, b, c) {
//     return (a + b + c) / 2;
// }
// function findArea(a, b, c) {
//     let valueOfS = findS(a, b, c);

//     let area = valueOfS * (valueOfS - a) * (valueOfS - b) * (valueOfS - c);
//     area = Math.sqrt(area);
//     return area;
// }

// document.write(findArea(a, b, c));

// ======================================= Question 04 =======================================
// let totalMarks = 300;

// let userMarks1 = parseFloat(prompt("Enter your marks in first subject (out of 100):"));
// let userMarks2 = parseFloat(prompt("Enter your marks in second subject (out of 100):"));
// let userMarks3 = parseFloat(prompt("Enter your marks in third subject (out of 100):"));

// if (userMarks1 > 100 || userMarks2 > 100 || userMarks3 > 100) {
//     alert("Make sure you have entered marks less than hundred!");
// }

// else {

//     function mainFunction() {
//         document.write("<h1>Subjects:</h1><br><br>" + "<b>Subject 1: </b>" + userMarks1 + "<br><b>Subject 2: </b>" + userMarks2 + "<br><b>Subject 3: </b>" + userMarks3);

//         function averageMarks() {
//             let averageUserMarks = (userMarks1 + userMarks2 + userMarks3) / 3

//             document.write("<br><br><b>Average: </b>" + averageUserMarks);
//         }
//         averageMarks();

//         function percentageOfMarks() {
//             let percentageOfUser = ((userMarks1 + userMarks2 + userMarks3) / totalMarks) * 100;

//             document.write("<br><br><b>Percentage: </b>" + percentageOfUser + "%");
//         }

//         percentageOfMarks();
//     };

//     mainFunction();
// }

// ======================================= Question 05 =======================================

// function findingIndexOf() {
//     // let text = "He heard the crack echo in the late afternoon about a mile away. His heart started racing and he bolted into a full sprint. 'It wasn't a gunshot, it wasn't a gunshot,' he repeated under his breathlessness as he continued to sprint.";
//     // let userText = prompt("Enter the letter or word you want to find in the given paragraph: \n\nHe heard the crack echo in the late afternoon about a mile away. His heart started racing and he bolted into a full sprint. 'It wasn't a gunshot, it wasn't a gunshot,' he repeated under his breathlessness as he continued to sprint.");
//     let text = prompt("Enter a paragraph or string:");
//     let userText = prompt("Enter the word or letter you want to find: \n\n" + text);


//     for (let i = 0; i < text.length; i++) {
//         if (text[i] === userText) {
//             document.write("Index of " + userText + " is " + i);
//             break;
//         }

//         else if (text.split(" ")[i] === userText) {
//             document.write("Index of " + userText + " is " + i);
//         }

//         if (text[i] !== userText || text.split(" ") !== userText) {
//             alert("Make sure you've entered the word or letter present in the given string!")
//             break;
//         }
//     };
// };

// findingIndexOf();

// ======================================= Question 06 =======================================
// function deletingVowel() {
//     let userString = prompt("Enter the string containing vowels:");
//     document.write("<b>Entered string:</b> " + userString);
//     userString = userString.toLowerCase();

//     for (let i = 0; i < userString.length; i++) {
//         if (userString[i] === "a" || userString[i] === "e" || userString[i] === "i" || userString[i] === "o" || userString[i] === "u") {
//             userString = userString.replace(userString[i], "");
//         }
//     }
//     document.write("<br><br><b>The new string is:</b> " + userString);
// }

// deletingVowel();

// ======================================= Question 07 =======================================
// function checkConsecutiveVowels() {
//     // let string = "Please read this application and give me gratuity";
//     let string = prompt("Enter a string:").toLowerCase();
//     let counter = 0;
//     for (let i = 0; i < string.length; i++) {
//         switch (string.slice(i, i+2)) {
//             case "aa":
//                 counter++;
//                 break;
//             case "ae":
//                 counter++;
//                 break;
//             case "ai":
//                 counter++;
//                 break;
//             case "ao":
//                 counter++;
//                 break;
//             case "au":
//                 counter++;
//                 break;
//             case "ea":
//                 counter++;
//                 break;
//             case "ee":
//                 counter++;
//                 break;
//             case "ei":
//                 counter++;
//                 break;
//             case "eo":
//                 counter++;
//                 break;
//             case "eu":
//                 counter++;
//                 break;
//             case "ia":
//                 counter++;
//                 break;
//             case "ie":
//                 counter++;
//                 break;
//             case "ii":
//                 counter++;
//                 break;
//             case "io":
//                 counter++;
//                 break;
//             case "iu":
//                 counter++;
//                 break;
//             case "oa":
//                 counter++;
//                 break;
//             case "oe":
//                 counter++;
//                 break;
//             case "oi":
//                 counter++;
//                 break;
//             case "oo":
//                 counter++;
//                 break;
//             case "ou":
//                 counter++;
//                 break;
//             case "ua":
//                 counter++;
//                 break;
//             case "ue":
//                 counter++;
//                 break;
//             case "ui":
//                 counter++;
//                 break;
//             case "uo":
//                 counter++;
//                 break;
//             case "uu":
//                 counter++;
//                 break;
//         }
//     }

//     document.write("The consecutive vowels in the string <b>" + string + "</b> has occured " + counter + " times.");
// }

// checkConsecutiveVowels();

// ======================================= Question 08 =======================================
// let inputInKm = parseFloat(prompt("Enter the value in km:"));
// document.write("<h1>Input by User:</h1><h2>" + inputInKm + "km</h2><br>")

// function convertingToMetre() {
//     let convertedToM = inputInKm * 1000;
//     document.write("<b>In Metres:</b> " + convertedToM + "m<br>")
// }

// function convertingToFeet() {
//     let convertedToFt = inputInKm * 3280.8399;
//     document.write("<b>In Feet:</b> " + convertedToFt + "ft<br>")
// }

// function convertingToInches() {
//     let convertedToIn = inputInKm * 39370.0787;
//     document.write("<b>In Inches:</b> " + convertedToIn + "in<br>")
// }

// function convertingToCentimetres() {
//     let convertedToCm = inputInKm * 100000;
//     document.write("<b>In Centimetres:</b> " + convertedToCm + "cm<br>")
// }

// convertingToMetre();
// convertingToFeet();
// convertingToInches();
// convertingToCentimetres();

// ======================================= Question 09 =======================================
// let overtimeHr = parseFloat(prompt("Enter the duration of your work in hours:"));
// let overtimePay = 1;

// function calculatingOvertimeHr() {
//     overtimeHr = overtimeHr - 40;
//     overtimePay = overtimeHr * 12.00;
//     document.write("Your overtime is hour(s) is(are) <b>" + overtimeHr + "hr(s)</b> and your payment for overtime is <b>" + overtimePay + "Rs</b>");
// }

// if (overtimeHr > 40) {
//     calculatingOvertimeHr();
// }
// else {
//     alert("You haven't worked above 40 hr!");
// }

// ======================================= Question 10 =======================================
// let amountByUser = prompt("Enter the amount you want to withdraw in hundreds only!");
// let hundreds = 1;
// let fifties = 1;
// let tens = 1;
// let coins = 1;

// while (amountByUser.length >= 4 || amountByUser.length <= 2) {
//     alert("Amount can be withdrawn in hundreds only!");
//     amountByUser = prompt("Enter the amount you want to withdraw in hundreds only!");
// }

// function withdrawal() {
//     hundreds = amountByUser.slice(0, 1);
//     fifties = amountByUser.slice(1, 3);
//     if (fifties >= 50) {
//         fifties = fifties - 50;
//         tens = fifties.toString();
//         tens = tens.slice(0, 1);
//         fifties = 1;
//     }

//     else if (fifties < 50) {
//         tens = fifties.slice(0, 1);
//         fifties = 0;
//     }
//     coins = amountByUser.slice(2, 3);

//     document.write("<h1> You entered " + amountByUser + "Rs</h1>");
//     document.write("You can have <b>" + hundreds + " hundred note(s), " + fifties + " fifty note(s), " + tens + " tens note(s) and " + coins + " coins</b>.");
// };

// withdrawal();

// ======================================= END =======================================
