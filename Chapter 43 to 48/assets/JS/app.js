// ======================================= Question 01 =======================================
// let parentSelection = document.querySelector("body");
// let linkedPara = document.createElement("a");
// linkedPara.innerHTML = "Click Me to see a message!";
// parentSelection.appendChild(linkedPara);

// linkedPara.addEventListener("click", ()=>{
//     alert("An apple a day keeps the doctor away.")
// })

// ======================================= Question 02 =======================================

// // UNCOMMENT CODE FROM HTML AND CSS FIRST



// function enableOnClick (){
//     alert("Thank You for purchasing this mobile from us.")
// }

// ======================================= Question 03 =======================================

// // UNCOMMENT CODE FROM HTML AND CSS FIRST

// let btn1 = document.querySelector("#btn1");
// let row1 = document.querySelector(".row1");

// btn1.addEventListener("click", () => {
//     row1.style.display = "none";
// })
// let btn2 = document.querySelector("#btn2");
// let row2 = document.querySelector(".row2");

// btn2.addEventListener("click", () => {
//     row2.style.display = "none";
// })
// let btn3 = document.querySelector("#btn3");
// let row3 = document.querySelector(".row3");

// btn3.addEventListener("click", () => {
//     row3.style.display = "none";
// })
// let btn4 = document.querySelector("#btn4");
// let row4 = document.querySelector(".row4");

// btn4.addEventListener("click", () => {
//     row4.style.display = "none";
// })
// let btn5 = document.querySelector("#btn5");
// let row5 = document.querySelector(".row5");

// btn5.addEventListener("click", () => {
//     row5.style.display = "none";
// })
// let btn6 = document.querySelector("#btn6");
// let row6 = document.querySelector(".row6");

// btn6.addEventListener("click", () => {
//     row6.style.display = "none";
// })
// let btn7 = document.querySelector("#btn7");
// let row7 = document.querySelector(".row7");

// btn7.addEventListener("click", () => {
//     row7.style.display = "none";
// })
// let btn8 = document.querySelector("#btn8");
// let row8 = document.querySelector(".row8");

// btn8.addEventListener("click", () => {
//     row8.style.display = "none";
// })
// let btn9 = document.querySelector("#btn9");
// let row9 = document.querySelector(".row9");

// btn9.addEventListener("click", () => {
//     row9.style.display = "none";
// })
// let btn10 = document.querySelector("#btn10");
// let row10 = document.querySelector(".row10");

// btn10.addEventListener("click", () => {
//     row10.style.display = "none";
// })

// ======================================= Question 04 =======================================

// // UNCOMMENT THE CODE IN HTML

// ======================================= Question 05 =======================================

// // UNCOMMENT THE CODE IN HTML


// let numberChange = document.querySelector(".numbers");
// let buttonSection = document.querySelector(".buttonss");
// let changeInNumber = 0;

// let incrementBtn = document.createElement("button");
// let decrementBtn = document.createElement("button");
// let resetBtn = document.createElement("button");
// let numbers = document.createElement("h1");

// // CSS for the buttonss div
// buttonSection.style.width = "100%";
// buttonSection.style.height = "100vh";
// buttonSection.style.display = "flex";
// buttonSection.style.justifyContent = "space-evenly";
// buttonSection.style.alignItems = "center";

// // Text in the buttons and styling
// incrementBtn.innerHTML = "Increase";
// decrementBtn.innerHTML = "Decrease";
// resetBtn.innerHTML = "Reset";

// function stylingButtons(btns) {
//     btns.style.width = "200px";
//     btns.style.height = "100px";
//     btns.style.marginLeft = "30px";
//     btns.style.fontSize = "40px";
//     btns.style.borderRadius = "30px";
//     btns.style.backgroundColor = "wheat";
// }

// stylingButtons(incrementBtn);
// stylingButtons(decrementBtn);
// stylingButtons(resetBtn);

// buttonSection.appendChild(decrementBtn);
// buttonSection.appendChild(resetBtn);
// buttonSection.appendChild(incrementBtn);

// // Numbers
// numbers.innerHTML = "Start";
// numberChange.appendChild(numbers);
// // // CSS
// numbers.style.width = "250px";
// numbers.style.height = "150px";
// numbers.style.marginTop = "20px";
// numbers.style.marginLeft = "650px";
// numbers.style.marginBottom = "0";
// numbers.style.fontSize = "90px";

// //Increment
// incrementBtn.addEventListener("click", () => {
//     changeInNumber = ++changeInNumber;
//     numbers.innerHTML = changeInNumber;
//     numbers.style.marginLeft = "750px";
// })

// //Decrement
// decrementBtn.addEventListener("click", () => {
//     changeInNumber = --changeInNumber;
//     numbers.innerHTML = changeInNumber;
//     numbers.style.marginLeft = "750px";
// })

// //Reset
// resetBtn.addEventListener("click", () => {
//     changeInNumber = 0;
//     numbers.innerHTML = changeInNumber;
//     numbers.style.marginLeft = "750px";
// })

// ======================================= END =======================================
