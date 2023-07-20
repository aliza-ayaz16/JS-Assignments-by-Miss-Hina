// ======================================= Question 01 =======================================

// // UNCOMMENT THE CODE FROM HTML AND CSS FIRST

// let gettingForm = document.querySelector(".question-1");
// let formValue1 = document.querySelector(".submission_input1");
// let formValue2 = document.querySelector(".submission_input2");
// let formValue3 = document.querySelector(".submission_input3");
// let formValue4 = document.querySelector(".submission_input4");
// let formValue5 = document.querySelector(".submission_input5");


// gettingForm.addEventListener("submit", ()=>{
//     document.write("<h1>Submission form Details:</h1>")
//     document.write("<h3>First Name:</h3>" + formValue1.value);
//     document.write("<h3>Last Name:</h3>" + formValue2.value);
//     document.write("<h3>Date of Birth:</h3>" + formValue3.value);
//     document.write("<h3>Email Address:</h3>" + formValue4.value);
//     document.write("<h3>ZIP Code:</h3>" + formValue5.value);
// });

// ======================================= Question 02 =======================================

// // UCOMMENT THE CODE FROM HTML FIRST

// let getBtn = document.querySelector(".q2_btn");

// getBtn.addEventListener("click", () => {
//     let shortPara = document.querySelector("p");
//     let detailedPara = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque deleniti tempore ducimus laudantium laborum adipisci eaque temporibus nesciunt dolores in architecto, atque rem impedit reprehenderit aliquid magnam? Odit eius molestiae placeat quidem maiores recusandae quibusdam sunt autem quam provident magnam sed quod accusantium explicabo voluptatibus, eligendi quisquam, fugiat sequi non.";
//     shortPara.innerHTML = detailedPara;
//     getBtn.innerHTML = "Read Less";
//     getBtn.addEventListener("click", () => {
//         shortPara.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, amet.";
//         getBtn.innerHTML = "Read More";
//     });
// });

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

// let editInput;
// let submit1 = document.querySelector(".submit_edit1");

// let edit1 = document.querySelector("#edit1");
// let gettingIndex0 = document.querySelector("#index0");
// let gettingName1 = document.querySelector("#name1");
// let gettingClass1 = document.querySelector("#class1");
// row1 = document.querySelector(".row1");

// edit1.addEventListener("click", () => {
//     console.log("Hi");
//     editInput = document.querySelector("#editValue1");
//     editInput.style.display = "flex";
//     editInput.style.marginLeft = "10vw";

// })

// let row1td1 = document.querySelector(".indexReal1");
// let row1td2 = document.querySelector(".nameReal1");
// let row1td3 = document.querySelector(".classReal1");

// submit1.addEventListener("click", () => {
//     console.log(gettingIndex0.value);
//     console.log(gettingName1.value);
//     console.log(gettingClass1.value);
//     row1td1.innerHTML = gettingIndex0.value;
//     row1td2.innerHTML = gettingName1.value;
//     row1td3.innerHTML = gettingClass1.value;
//     editInput.style.display = "none";
// })

// let submit2 = document.querySelector(".submit_edit2");

// let edit2 = document.querySelector("#edit2");
// let gettingIndex1 = document.querySelector("#index1");
// let gettingName2 = document.querySelector("#name2");
// let gettingClass2 = document.querySelector("#class2");
// row2 = document.querySelector(".row2");

// edit2.addEventListener("click", () => {
//     console.log("Hi");
//     editInput = document.querySelector("#editValue2");
//     editInput.style.display = "flex";
//     editInput.style.marginLeft = "10vw";
// })

// let row2td1 = document.querySelector(".indexReal2");
// let row2td2 = document.querySelector(".nameReal2");
// let row2td3 = document.querySelector(".classReal2");

// submit2.addEventListener("click", () => {
//     console.log(gettingIndex1.value);
//     console.log(gettingName2.value);
//     console.log(gettingClass2.value);
//     row2td1.innerHTML = gettingIndex1.value;
//     row2td2.innerHTML = gettingName2.value;
//     row2td3.innerHTML = gettingClass2.value;
//     editInput.style.display = "none";
// })

// let submit3 = document.querySelector(".submit_edit3");

// let edit3 = document.querySelector("#edit3");
// let gettingIndex2 = document.querySelector("#index2");
// let gettingName3 = document.querySelector("#name3");
// let gettingClass3 = document.querySelector("#class3");
// row3 = document.querySelector(".row3");

// edit3.addEventListener("click", () => {
//     console.log("Hi");
//     editInput = document.querySelector("#editValue3");
//     editInput.style.display = "flex";
//     editInput.style.marginLeft = "10vw";
// })

// let row3td1 = document.querySelector(".indexReal3");
// let row3td2 = document.querySelector(".nameReal3");
// let row3td3 = document.querySelector(".classReal3");

// submit3.addEventListener("click", () => {
//     console.log(gettingIndex2.value);
//     console.log(gettingName3.value);
//     console.log(gettingClass3.value);
//     row3td1.innerHTML = gettingIndex2.value;
//     row3td2.innerHTML = gettingName3.value;
//     row3td3.innerHTML = gettingClass3.value;
//     editInput.style.display = "none";
// })

// let submit4 = document.querySelector(".submit_edit4");

// let edit4 = document.querySelector("#edit4");
// let gettingIndex3 = document.querySelector("#index3");
// let gettingName4 = document.querySelector("#name4");
// let gettingClass4 = document.querySelector("#class4");
// row4 = document.querySelector(".row4");

// edit4.addEventListener("click", () => {
//     console.log("Hi");
//     editInput = document.querySelector("#editValue4");
//     editInput.style.display = "flex";
//     editInput.style.marginLeft = "10vw";
// })

// let row4td1 = document.querySelector(".indexReal4");
// let row4td2 = document.querySelector(".nameReal4");
// let row4td3 = document.querySelector(".classReal4");

// submit4.addEventListener("click", () => {
//     console.log(gettingIndex3.value);
//     console.log(gettingName4.value);
//     console.log(gettingClass4.value);
//     row4td1.innerHTML = gettingIndex3.value;
//     row4td2.innerHTML = gettingName4.value;
//     row4td3.innerHTML = gettingClass4.value;
//     editInput.style.display = "none";
// })

// let submit5 = document.querySelector(".submit_edit5");

// let edit5 = document.querySelector("#edit5");
// let gettingIndex4 = document.querySelector("#index4");
// let gettingName5 = document.querySelector("#name5");
// let gettingClass5 = document.querySelector("#class5");
// row5 = document.querySelector(".row5");

// edit5.addEventListener("click", () => {
//     console.log("Hi");
//     editInput = document.querySelector("#editValue5");
//     editInput.style.display = "flex";
//     editInput.style.marginLeft = "10vw";
// })

// let row5td1 = document.querySelector(".indexReal5");
// let row5td2 = document.querySelector(".nameReal5");
// let row5td3 = document.querySelector(".classReal5");

// submit5.addEventListener("click", () => {
//     console.log(gettingIndex4.value);
//     console.log(gettingName5.value);
//     console.log(gettingClass5.value);
//     row5td1.innerHTML = gettingIndex4.value;
//     row5td2.innerHTML = gettingName5.value;
//     row5td3.innerHTML = gettingClass5.value;
//     editInput.style.display = "none";
// })

// let submit6 = document.querySelector(".submit_edit6");

// let edit6 = document.querySelector("#edit6");
// let gettingIndex5 = document.querySelector("#index5");
// let gettingName6 = document.querySelector("#name6");
// let gettingClass6 = document.querySelector("#class6");
// row6 = document.querySelector(".row6");

// edit6.addEventListener("click", () => {
//     console.log("Hi");
//     editInput = document.querySelector("#editValue6");
//     editInput.style.display = "flex";
//     editInput.style.marginLeft = "10vw";
// })

// let row6td1 = document.querySelector(".indexReal6");
// let row6td2 = document.querySelector(".nameReal6");
// let row6td3 = document.querySelector(".classReal6");

// submit6.addEventListener("click", () => {
//     console.log(gettingIndex5.value);
//     console.log(gettingName6.value);
//     console.log(gettingClass6.value);
//     row6td1.innerHTML = gettingIndex5.value;
//     row6td2.innerHTML = gettingName6.value;
//     row6td3.innerHTML = gettingClass6.value;
//     editInput.style.display = "none";
// })

// let submit7 = document.querySelector(".submit_edit7");

// let edit7 = document.querySelector("#edit7");
// let gettingIndex6 = document.querySelector("#index6");
// let gettingName7 = document.querySelector("#name7");
// let gettingClass7 = document.querySelector("#class7");
// row7 = document.querySelector(".row7");

// edit7.addEventListener("click", () => {
//     console.log("Hi");
//     editInput = document.querySelector("#editValue7");
//     editInput.style.display = "flex";
//     editInput.style.marginLeft = "10vw";
// })
// let row7td1 = document.querySelector(".indexReal7");
// let row7td2 = document.querySelector(".nameReal7");
// let row7td3 = document.querySelector(".classReal7");

// submit7.addEventListener("click", () => {
//     console.log(gettingIndex6.value);
//     console.log(gettingName7.value);
//     console.log(gettingClass7.value);
//     row7td1.innerHTML = gettingIndex6.value;
//     row7td2.innerHTML = gettingName7.value;
//     row7td3.innerHTML = gettingClass7.value;
//     editInput.style.display = "none";
// })

// let submit8 = document.querySelector(".submit_edit8");

// let edit8 = document.querySelector("#edit8");
// let gettingIndex7 = document.querySelector("#index7");
// let gettingName8 = document.querySelector("#name8");
// let gettingClass8 = document.querySelector("#class8");
// row8 = document.querySelector(".row8");

// edit8.addEventListener("click", () => {
//     console.log("Hi");
//     editInput = document.querySelector("#editValue8");
//     editInput.style.display = "flex";
//     editInput.style.marginLeft = "10vw";
// })

// let row8td1 = document.querySelector(".indexReal8");
// let row8td2 = document.querySelector(".nameReal8");
// let row8td3 = document.querySelector(".classReal8");

// submit8.addEventListener("click", () => {
//     console.log(gettingIndex7.value);
//     console.log(gettingName8.value);
//     console.log(gettingClass8.value);
//     row8td1.innerHTML = gettingIndex7.value;
//     row8td2.innerHTML = gettingName8.value;
//     row8td3.innerHTML = gettingClass8.value;
//     editInput.style.display = "none";
// })

// let submit9 = document.querySelector(".submit_edit9");

// let edit9 = document.querySelector("#edit9");
// let gettingIndex8 = document.querySelector("#index8");
// let gettingName9 = document.querySelector("#name9");
// let gettingClass9 = document.querySelector("#class9");
// row9 = document.querySelector(".row9");

// edit9.addEventListener("click", () => {
//     console.log("Hi");
//     editInput = document.querySelector("#editValue9");
//     editInput.style.display = "flex";
//     editInput.style.marginLeft = "10vw";
// })

// let row9td1 = document.querySelector(".indexReal9");
// let row9td2 = document.querySelector(".nameReal9");
// let row9td3 = document.querySelector(".classReal9");

// submit9.addEventListener("click", () => {
//     console.log(gettingIndex8.value);
//     console.log(gettingName9.value);
//     console.log(gettingClass9.value);
//     row9td1.innerHTML = gettingIndex8.value;
//     row9td2.innerHTML = gettingName9.value;
//     row9td3.innerHTML = gettingClass9.value;
//     editInput.style.display = "none";
// })

// let submit10 = document.querySelector(".submit_edit10");

// let edit10 = document.querySelector("#edit10");
// let gettingIndex9 = document.querySelector("#index9");
// let gettingName10 = document.querySelector("#name10");
// let gettingClass10 = document.querySelector("#class10");
// row10 = document.querySelector(".row10");

// edit10.addEventListener("click", () => {
//     console.log("Hi");
//     editInput = document.querySelector("#editValue10");
//     editInput.style.display = "flex";
//     editInput.style.marginLeft = "10vw";

//     console.log()
// })


// let row10td1 = document.querySelector(".indexReal10");
// let row10td2 = document.querySelector(".nameReal10");
// let row10td3 = document.querySelector(".classReal10");

// submit10.addEventListener("click", () => {
//     console.log(gettingIndex9.value);
//     console.log(gettingName10.value);
//     console.log(gettingClass10.value);
//     row10td1.innerHTML = gettingIndex9.value;
//     row10td2.innerHTML = gettingName10.value;
//     row10td3.innerHTML = gettingClass10.value;
//     editInput.style.display = "none";
// })





// ======================================= END =======================================
