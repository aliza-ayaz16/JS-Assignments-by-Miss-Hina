// ======================================= Question 01 =======================================
// let theTimeRightNow = new Date();
// document.write(timeRightNow);

// ======================================= Question 02 =======================================
// let dateToday = new Date();
// let theMonth = dateToday.getMonth();

// let nameOfMonths = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// let currentMonth = nameOfMonths[theMonth];

// document.write("Current Month: " + currentMonth);

// ======================================= Question 03 =======================================
// let dateToday = new Date();
// let dayToday = dateToday.getDay();

// let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// let theDay = days[dayToday]
// let shortFormOfDay;

// if (theDay === "Thursday") {
//     shortFormOfDay = theDay.slice(0, 5);
// }
// else {
//     shortFormOfDay = theDay.slice(0, 3)
// }

// document.write("Today is " + shortFormOfDay);

// ======================================= Question 04 =======================================
// let theDateToday = new Date();
// let theDayToday = theDateToday.getDay();

// let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// let theDay = days[theDayToday]

// if (theDay === "Sunday" || theDay === "Saturday") {
//     alert("It's Funday!!! Enjoy!")
//     document.write("<h1>" + "It's Funday!!! Enjoy!" + "</h1>");
// }
// else {
//     alert("Happy Work!")
//     document.write("<h1>" + "Happy Work!" + "</h1>");
// }

// ======================================= Question 05 =======================================
// let theDate = new Date();
// let extractedDate = theDate.getDate();

// if (extractedDate < 16){
//     alert("First fifteen days of month!");
//     document.write("First fifteen days of month!");
// }

// else {
//     alert("Last days of month!");
//     document.write("Last days of month!");
// }

// ======================================= Question 06 =======================================
// let theTime = new Date();
// document.write("Current date: " + theTime + "<br>");

// let milliSecs = theTime.getTime();
// document.write("Elapsed milliseconds since January 1, 1970: " + milliSecs + "<br>");

// let timeInMins = milliSecs / (1000 * 60);
// document.write("Elapsed minutes since January 1, 1970: " + timeInMins);

// ======================================= Question 07 =======================================
// let timeToday = new Date();
// let gettingHr = timeToday.getHours();

// if (gettingHr <= 12) {
//     alert("It's AM!");
//     document.write("It's AM!");
// }

// else if (gettingHr <= 23) {
//     alert("It's PM!");
//     document.write("It's PM!");
// }

// ======================================= Question 08 =======================================
// let laterDate = new Date(2020, 11, 31);
// document.write("<b>Later Date:</b> " + laterDate);

// ======================================= Question 09 =======================================
// let timeRightNow = new Date();

// let dateOf18Jun = new Date(2015, 5, 18);

// let theDiffernece = timeRightNow.getTime() - dateOf18Jun.getTime();

// let daysDifference = Math.floor(theDiffernece / 86400000);
// alert(daysDifference + " days have passed since 1st Ramadan, 2015.");

// ======================================= Question 10 =======================================
// let takingTodaysTime = new Date();
// let takingTimeSince5Dec = new Date(2015, 11, 5);

// let takingDifference = takingTodaysTime.getTime() - takingTimeSince5Dec.getTime();

// let secsDifference = Math.floor(takingDifference / 1000);

// alert("On reference date " + takingTimeSince5Dec + ", " + secsDifference + " seconds have passed since beginning of 2015.");
// document.write("On reference date " + takingTimeSince5Dec + ", " + secsDifference + " seconds have passed since beginning of 2015.");

// ======================================= Question 11 =======================================
// let currentDate = new Date();
// document.write("Current Date: " + currentDate + "<br>");

// let currentHr = currentDate.getHours();

// currentDate.setHours(currentHr - 1);

// let oneHrAgo = new Date(currentDate);

// document.write("1 hour ago, it was " + oneHrAgo);

// ======================================= Question 12 =======================================
// let currentDateOfDay = new Date();
// document.write("Current Date: " + currentDateOfDay + "<br>");

// let currentMon = currentDateOfDay.getFullYear();

// currentDateOfDay.setFullYear(currentMon - 100);

// let hundredYearsAgo = new Date(currentDateOfDay);

// document.write("100 years back, it was " + hundredYearsAgo);

// ======================================= Question 13 =======================================
// let userAge = +prompt("Enter your age:");
// document.write("Your age is: " + userAge + "<br>");

// let todaysDate = new Date();
// let gettingCurrentYear = todaysDate.getFullYear();

// todaysDate.setFullYear(gettingCurrentYear - userAge);

// let userBirthYear = new Date(todaysDate).getFullYear();

// document.write("Your birth year is: " + userBirthYear);

// // ======================================= Question 14 =======================================
// document.write("<h1>K-electric Bill</h1><br><br>");

// let userName = prompt("Enter your name:");
// document.write("Customer Name: " +"<b>" + userName + "</b><br>");

// let theCurrentDate = new Date();
// let extractTheMonth = theCurrentDate.getMonth();
// let nameOfAllMonths = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// let extractedMonth = nameOfAllMonths[extractTheMonth];
// document.write("Month: " +"<b>" + extractedMonth + "</b><br>");

// let numOfUnits = +prompt("Enter the amount of units consumed:");
// document.write("Number of Units: " +"<b>" + numOfUnits + "</b><br>");

// let chargePerUnit = 16;
// document.write("Charges per unit: " +"<b>" + chargePerUnit + "</b><br><br>");

// let netAmountInDueDate = numOfUnits * chargePerUnit;
// document.write("Net Amount Payable (within Due Date): " +"<b>" + netAmountInDueDate + "</b><br>");

// let latePaymentTax = 350;
// document.write("Late Payment Surcharge: " +"<b>" + latePaymentTax + "</b><br>");

// let netAmountAfterDueDate = netAmountInDueDate + latePaymentTax;
// document.write("Gross Amount Payable (after Due Date): " +"<b>" + netAmountAfterDueDate + "</b>");

// ======================================= END =======================================
