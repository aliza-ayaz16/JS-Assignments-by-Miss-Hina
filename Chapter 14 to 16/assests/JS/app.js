// ************************************* Question 01 ************************************
// let studentName = [];

// ************************************* Question 02 ************************************
// let student_Name = Array();
// // console.log(student_Name)

// ************************************* Question 03 ************************************
// let stringArr = ["Syeda", "Aliza", "Ayaz"];
// // console.log(stringArr);

// ************************************* Question 04 ************************************
// let numArr = [1, 2, 3, 4, 5];
// // console.log(numArr);

// ************************************* Question 05 ************************************
// let booleanArr = [true, false];

// ************************************* Question 06 ************************************
// let mixedArr = ["Syeda", 1, 2, "Aliza", true, 8, "Ayaz", false];

// ************************************* Question 07 ************************************
// let degrees = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil", "PhD"];
// document.write("Qualifications:" + "<br> <br>")

// for (var i = 0; i <= degrees.length - 1; i++) {
//     document.write(i + 1 + ") " + degrees[i] + "<br>");
// };

// ************************************* Question 08 ************************************
// let studentsName = ["Michael", "John", "Tony"];
// let studentsScore = [320, 230, 480];
// const totalScore = 500;

// for (var i = 0; i < studentsScore.length; i++) {
//     const studentPercentage = (studentsScore[i] / totalScore) * 100 + "%";
//     document.write("Score of " + studentsName[i] + " is " + studentsScore[i] + "." + " Percentage is: " + studentPercentage + "<br>")
// }

// ************************************* Question 09 ************************************
// let colors = ["red", "blue", "yellow", "purple", "pink", "black", "white"];
// document.write("Array: " + colors + "<br> <br>");

// let userAdd = prompt("Which color do you want to add at the beginning?", "green");
// colors.unshift(userAdd);
// document.write("Array after addition of a value at the beginning: " + colors + "<br> <br>");

// let userAddAtEnd = prompt("Which color do you want to add at the end?", "violet");
// colors.push(userAddAtEnd);
// document.write("Array after addition of a value at the end: " + colors + "<br> <br>");

// let userAddAgain = prompt("Which color do you want to add at the begininng?", "cyan");
// let userAddAgainAgain = prompt("Which color do you want to add at the begininng?", "grey");
// colors.unshift(userAddAgain, userAddAgainAgain);
// document.write("Array after addition of two values at the beginning: " + colors + "<br> <br>");

// colors.shift();
// document.write("Array after deletion of a value from the beginning: " + colors + "<br> <br>");

// colors.pop();
// document.write("Array after deletion of a value from the end: " + colors + "<br> <br>");

// let userChoice = prompt("Which color do you want to add?", "Silver")
// let userIndex = +prompt("At which index?", 2);

// if (userIndex <= colors.length) {
//     colors.splice(userIndex, 0, userChoice)
// };
// document.write("Array after addition of a value at the index " + userIndex + ": " + colors + "<br> <br>");

// let userChoiceAgain = prompt("Which color do you want to add?", "brown")
// let userIndexAgain = +prompt("At which index?", 5);
// let userDeleteChoice = +prompt("How many values do you want to delete?", 3)

// if (userIndexAgain <= colors.length) {
//     colors.splice(userIndexAgain, userDeleteChoice, userChoiceAgain)
// };
// document.write("Array after addition of a value at the index " + userIndex + " with " + userDeleteChoice +" deleted values: " + colors + "<br> <br>");


// ************************************* Question 10 ************************************
// let scoreOfStudents = [320, 230, 480, 120];
// let orderedArr = scoreOfStudents.sort();

// document.write("Scores of Students: " + scoreOfStudents + "<br> <br>")
// document.write("Ordered Scores of Students: " + orderedArr);

// ************************************* Question 11 ************************************
// let cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
// let selectedCities = cities.slice(2, 4);

// document.write("Cities List: " + cities + "<br> <br>");
// document.write("Selected Cities List: " + selectedCities);

// ************************************* Question 12 ************************************
// let arr = ["This", " is", " my ", " cat"];
// let joinedString = arr.join(" ");

// document.write("Array:" + "<br>" + arr + "<br> <br>");
// document.write("String: " + "<br>" + joinedString)

// ************************************* Question 13 ************************************
// let devices = [];

// devices.push("Keyboard");

// devices.push("Mouse");

// devices.push("Printer");

// devices.push("Monitor");

// document.write("Devices:" + "<br>" + devices + "<br> <br>");
// document.write("Out:" + devices[0] + "<br> <br>");
// document.write("Out:" + devices[1] + "<br> <br>");
// document.write("Out:" + devices[2] + "<br> <br>");
// document.write("Out:" + devices[3] + "<br> <br>");

// ************************************* Question 14 ************************************
// let device = [];

// device.push("Keyboard");

// device.push("Mouse");

// device.push("Printer");

// device.push("Monitor");

// document.write("Devices:" + "<br>" + device + "<br> <br>");
// document.write("Out:" + device[3] + "<br> <br>");
// document.write("Out:" + device[2] + "<br> <br>");
// document.write("Out:" + device[1] + "<br> <br>");
// document.write("Out:" + device[0] + "<br> <br>");

// ************************************* Question 15 ************************************
let phoneManufacturers = ["Apple", "Samsung", "Motorola", "Huawei", "Nokia", "Sony"];
document.write('<select>');
document.write("<option>" + "Select One" + "</option>");
document.write("<option>" + phoneManufacturers[0] + "</option>");
document.write("<option>" + phoneManufacturers[1] + "</option>");
document.write("<option>" + phoneManufacturers[2] + "</option>");
document.write("<option>" + phoneManufacturers[3] + "</option>");
document.write("<option>" + phoneManufacturers[4] + "</option>");
document.write("<option>" + phoneManufacturers[5] + "</option>");
document.write('</select>');

//**********************END************************//