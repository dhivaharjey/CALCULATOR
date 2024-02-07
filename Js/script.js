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
    // output.value = eval(output.value);
    output.value = Number.isInteger(eval(output.value))
      ? eval(output.value)
      : eval(output.value).toFixed(2);
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
