const head = document.createElement("div");
head.setAttribute("id", "head");
document.body.append(head);

const heading = document.createElement("h1");
heading.setAttribute("id", "title");
heading.innerText = "CALCULATOR";
head.append(heading);

const description = document.createElement("p");
description.setAttribute("id", "description");
description.innerHTML = ` Note: In keyboard other than numeric keys are pressed  Alert message will pop up`;
head.append(description);

const divContainer = document.createElement("div");
divContainer.classList.add("container");
document.body.append(divContainer);

const divCalculator = document.createElement("div");
divCalculator.classList.add("calculator");
divContainer.append(divCalculator);
const inputElement = document.createElement("input");
inputElement.setAttribute("type", "text");
inputElement.setAttribute("placeholder", "0");
inputElement.setAttribute("id", "result");
divCalculator.appendChild(inputElement);

// const attrValues = {
//   display: "display()",
//   delete: "del()",
//   percentage: "dispaly('%')",
//   division: "dispaly('/')",
//   7: "dispaly('7')",
//   8: "dispaly('8')",
//   9: "dispaly('9')",
//   multiply: "dispaly('*')",
//   4: "dispaly('4')",
//   5: "dispaly('5')",
//   6: "dispaly('6')",
//   subtract: "dispaly('-')",
//   1: "dispaly('1')",
//   2: "dispaly('2')",
//   3: "dispaly('3)",
//   add: "dispaly('+')",
//   dot: "dispaly('.')",
//   0: "dispaly('0')",
// };

// Object.keys(attrValues).forEach((key) => {
//   // console.log(key);
//   const btn = document.createElement("button");
//   btn.setAttribute("onclick", attrValues[key]);
//   btn.setAttribute("id", key);
//   divCalculator.append(btn);
// });
// document.getElementById("display").innerText = "AC";
// document.getElementById("delete").innerText = "DEL";
// document.getElementById("percentage").innerText = "%";
// document.getElementById("division").innerText = "/";
// document.getElementById("add").innerText = "+";
// document.getElementById("multiply").innerText = "*";
// document.getElementById("subtract").innerText = "-";
// document.getElementById("dot").innerText = ".";
// document.getElementById("0").innerText = "0";
// document.getElementById("1").innerText = "1";
// document.getElementById("2").innerText = "2";
// document.getElementById("3").innerText = "3";
// document.getElementById("4").innerText = "4";
// document.getElementById("5").innerText = "5";
// document.getElementById("6").innerText = "6";
// document.getElementById("7").innerText = "7";
// document.getElementById("8").innerText = "8";
// document.getElementById("9").innerText = "9";

////////Creating BUTTON element with ID and TEXT using function
function create(fn, id, text) {
  const btn = document.createElement("button");
  btn.setAttribute("onclick", fn);
  btn.setAttribute("id", id);
  btn.innerText = text;
  divCalculator.append(btn);
}

create("Clear()", "clear", "AC");
create("del()", "delete", "DEL");
create("display('%')", "percentage", "%");
create("display('/')", "division", "/");
create("display('7')", "7", "7");
create("display('8')", "8", "8");
create("display('9')", "9", "9");
create("display('*')", "multiply", "*");
create("display('4')", "4", "4");
create("display('5')", "5", "5");
create("display('6')", "6", "6");
create("display('-')", "subtract", "-");
create("display('1')", "1", "1");
create("display('2')", "2", "2");
create("display('3')", "3", "3");
create("display('+')", "add", "+");
create("display('.')", "dot", ".");
create("display(')')", "0", "0");
create("calculate()", "equal", "=");

let output = document.getElementById("result");

function display(num) {
  output.value += num;
}
function calculate() {
  try {
    output.value = eval(output.value);
  } catch (err) {
    alert("Invalid");
  }
}

function del() {
  output.value = output.value.slice(0, -1);
}
function Clear() {
  output.value = "";
}

const regex = /[0-9\/]+/;
document.getElementById("result").addEventListener("keypress", (event) => {
  if (!regex.test(event.key)) {
    event.preventDefault();
    alert("Enter only Numbers betwwen 0 to 9 ");
  }
});
