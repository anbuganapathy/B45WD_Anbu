let div1 = document.createElement("div");
div1.setAttribute("class", "header");
document.body.append(div1);

let h1 = document.createElement("h1");
h1.setAttribute("id", "title");
h1.innerText = "Calculator Task";
div1.append(h1);

let p = document.createElement("p");
p.setAttribute("id", "description");
p.innerHTML =
  "<ul><li>Create a Calculator using DOM. Use Keyboard events only for numbers.</li><li>When any keys pressed other than number keys show an alert warning 'Only numbers are allowed'.</li><li>Add functions to perform addition, subtraction, multiplication, division and modulus. The calculator must handle infix expressions.</li><li>Use DOM to create HTML elements. For styles you can use CSS and Bootstrap. UI should be responsive for all media screens.</li></ul>";
div1.append(p);

let div2 = document.createElement("div");
div2.setAttribute("class", "card");
div2.setAttribute("style", "width: 25rem;");
document.body.append(div2);

let div3 = document.createElement("div");
div3.setAttribute("class", "card-body");
div2.append(div3);

let arr = [];
let exp = "";
let result = 0;
function calculate(n) {
  if (n == "clear") {
    arr = [];
    exp="";
    let divElem = document.getElementById("output");
    let elem = document.getElementById("result");
    elem.value = arr;
    divElem.append(elem);
  }

  if (n == "back") {
    arr.pop();
    exp=exp.substring(0,exp.length-1);
    if(exp.length<=0 || arr.length<=0)
      exp="";
      arr=[];
    console.log("EXP value AFTER BACKSPACE:", exp);
    let divElem = document.getElementById("output");
    let elem = document.getElementById("result");
    elem.value = arr.join("");
    divElem.append(elem);
    console.log("AFTER BACKSPACE:", arr.join(""));
  }
  if (
    n == 1 ||
    n == 2 ||
    n == 3 ||
    n == 4 ||
    n == 5 ||
    n == 6 ||
    n == 7 ||
    n == 8 ||
    n == 9 ||
    n == 0 ||
    n == "00" ||
    n == "+" ||
    n == "-" ||
    n == "*" ||
    n == "/" ||
    n == "."
  ) {
    console.log("ARRAY VALUE BEFORE PUSH:", arr);
    arr.push(n);
    exp += n;
    console.log("ARRAY VALUE AFTER PUSH:", arr);
    let divElem = document.getElementById("output");
    let elem = document.getElementById("result");
    elem.value = arr.join("");
    divElem.append(elem);
    console.log("EXP:", exp);
  }
  if (n == "equal" && exp != "" && arr != []) {
    result = eval(exp);
    let divElem = document.getElementById("output");
    let elem = document.getElementById("result");
    elem.value = result;
    divElem.append(elem);
    console.log("RESULT:", result);
    exp = "";
    arr = [];
    result = 0;
  }
}

function validateTextBox(event) {
  console.log("VALIDATE TEXT BOX:", event.key);
  if (
    event.key == "1" ||
    event.key == "2" ||
    event.key == "3" ||
    event.key == "4" ||
    event.key == "5" ||
    event.key == "6" ||
    event.key == "7" ||
    event.key == "8" ||
    event.key == "9" ||
    event.key == "0"
  ) {
    arr.push(event.key);
    exp += event.key;
    console.log("ARR in VALIDATE TEXT BOX:", arr);
    console.log("EXP in VALIDATE TEXT BOX:", exp);
  } else {
    arr=[];
    exp='';
    let divElem = document.getElementById("output");
    let elem = document.getElementById("result");
    elem.value = "";
    divElem.append(elem);
  }
}

let div = document.createElement("div");
div.setAttribute("id", "output");
div3.append(div);

let txtBox = document.createElement("input");
txtBox.setAttribute("type", "text");
txtBox.setAttribute("class", "form-control form-control-lg");
txtBox.setAttribute("id", "result");
txtBox.setAttribute("onkeypress", "validateTextBox(event)");
txtBox.setAttribute("placeholder", "0");
div.append(txtBox);

let div4 = document.createElement("div");
div3.append(div4);

let clearBtn = document.createElement("button");
clearBtn.setAttribute("type", "button");
clearBtn.setAttribute("class", "btn btn-light");
clearBtn.setAttribute("id", "clear");
clearBtn.setAttribute("onclick", "calculate('clear')");
clearBtn.innerText = "C";
div4.append(clearBtn);

let backSpaceBtn = document.createElement("button");
backSpaceBtn.setAttribute("type", "button");
backSpaceBtn.setAttribute("class", "btn btn-light");
backSpaceBtn.setAttribute("id", "back");
backSpaceBtn.setAttribute("onclick", "calculate('back')");
backSpaceBtn.innerHTML = "&#8592;";
div4.append(backSpaceBtn);

let fullStopBtn = document.createElement("button");
fullStopBtn.setAttribute("type", "button");
fullStopBtn.setAttribute("class", "btn btn-light");
fullStopBtn.setAttribute("id", ".");
fullStopBtn.setAttribute("onclick", "calculate('.')");
fullStopBtn.innerText = ".";
div4.append(fullStopBtn);

let multiplicationBtn = document.createElement("button");
multiplicationBtn.setAttribute("type", "button");
multiplicationBtn.setAttribute("class", "btn btn-light");
multiplicationBtn.setAttribute("id", "multiply");
multiplicationBtn.setAttribute("onclick", "calculate('*')");
multiplicationBtn.innerHTML = "x";
div4.append(multiplicationBtn);

let div5 = document.createElement("div");
div3.append(div5);

let sevenBtn = document.createElement("button");
sevenBtn.setAttribute("type", "button");
sevenBtn.setAttribute("class", "btn btn-light");
sevenBtn.setAttribute("id", "7");
sevenBtn.setAttribute("onclick", "calculate(7)");
sevenBtn.innerText = "7";
div5.append(sevenBtn);

let eightBtn = document.createElement("button");
eightBtn.setAttribute("type", "button");
eightBtn.setAttribute("class", "btn btn-light");
eightBtn.setAttribute("id", "8");
eightBtn.setAttribute("onclick", "calculate(8)");
eightBtn.innerText = "8";
div5.append(eightBtn);

let nineBtn = document.createElement("button");
nineBtn.setAttribute("type", "button");
nineBtn.setAttribute("class", "btn btn-light");
nineBtn.setAttribute("id", "9");
nineBtn.setAttribute("onclick", "calculate(9)");
nineBtn.innerText = "9";
div5.append(nineBtn);

let divisionBtn = document.createElement("button");
divisionBtn.setAttribute("type", "button");
divisionBtn.setAttribute("class", "btn btn-light");
divisionBtn.setAttribute("id", "divide");
divisionBtn.setAttribute("onclick", "calculate('/')");
divisionBtn.innerHTML = "/";
div5.append(divisionBtn);

let div6 = document.createElement("div");
div3.append(div6);

let fourBtn = document.createElement("button");
fourBtn.setAttribute("type", "button");
fourBtn.setAttribute("class", "btn btn-light");
fourBtn.setAttribute("id", "4");
fourBtn.setAttribute("onclick", "calculate(4)");
fourBtn.innerText = "4";
div6.append(fourBtn);

let fiveBtn = document.createElement("button");
fiveBtn.setAttribute("type", "button");
fiveBtn.setAttribute("class", "btn btn-light");
fiveBtn.setAttribute("id", "5");
fiveBtn.setAttribute("onclick", "calculate(5)");
fiveBtn.innerText = "5";
div6.append(fiveBtn);

let sixBtn = document.createElement("button");
sixBtn.setAttribute("type", "button");
sixBtn.setAttribute("class", "btn btn-light");
sixBtn.setAttribute("id", "6");
sixBtn.setAttribute("onclick", "calculate(6)");
sixBtn.innerText = "6";
div6.append(sixBtn);

let subtractionBtn = document.createElement("button");
subtractionBtn.setAttribute("type", "button");
subtractionBtn.setAttribute("class", "btn btn-light");
subtractionBtn.setAttribute("id", "subtract");
subtractionBtn.setAttribute("onclick", "calculate('-')");
subtractionBtn.innerHTML = "-";
div6.append(subtractionBtn);

let div7 = document.createElement("div");
div3.append(div7);

let oneBtn = document.createElement("button");
oneBtn.setAttribute("type", "button");
oneBtn.setAttribute("class", "btn btn-light");
oneBtn.setAttribute("id", "1");
oneBtn.setAttribute("onclick", "calculate(1)");
oneBtn.innerText = "1";
div7.append(oneBtn);

let twoBtn = document.createElement("button");
twoBtn.setAttribute("type", "button");
twoBtn.setAttribute("class", "btn btn-light");
twoBtn.setAttribute("id", "2");
twoBtn.setAttribute("onclick", "calculate(2)");
twoBtn.innerText = "2";
div7.append(twoBtn);

let threeBtn = document.createElement("button");
threeBtn.setAttribute("type", "button");
threeBtn.setAttribute("class", "btn btn-light");
threeBtn.setAttribute("id", "3");
threeBtn.setAttribute("onclick", "calculate(3)");
threeBtn.innerText = "3";
div7.append(threeBtn);

let additionBtn = document.createElement("button");
additionBtn.setAttribute("type", "button");
additionBtn.setAttribute("class", "btn btn-light");
additionBtn.setAttribute("id", "add");
additionBtn.setAttribute("onclick", "calculate('+')");
additionBtn.innerHTML = "+";
div7.append(additionBtn);

let div8 = document.createElement("div");
div3.append(div8);

let zeroBtn = document.createElement("button");
zeroBtn.setAttribute("type", "button");
zeroBtn.setAttribute("class", "btn btn-light");
zeroBtn.setAttribute("id", "0");
zeroBtn.setAttribute("onclick", "calculate(0)");
zeroBtn.innerText = "0";
div8.append(zeroBtn);

let zeroZeroBtn = document.createElement("button");
zeroZeroBtn.setAttribute("type", "button");
zeroZeroBtn.setAttribute("class", "btn btn-light");
zeroZeroBtn.setAttribute("id", "00");
zeroZeroBtn.setAttribute("onclick", "calculate('00')");
zeroZeroBtn.innerText = "00";
div8.append(zeroZeroBtn);

let equalBtn = document.createElement("button");
equalBtn.setAttribute("type", "button");
equalBtn.setAttribute("class", "btn btn-light");
equalBtn.setAttribute("style", "background-color:blue;");
equalBtn.setAttribute("id", "equal");
equalBtn.setAttribute("onclick", "calculate('equal')");
equalBtn.innerHTML = "=";
div8.append(equalBtn);

document.addEventListener("keypress", (event) => {
  if (
    event.key == "1" ||
    event.key == "2" ||
    event.key == "3" ||
    event.key == "4" ||
    event.key == "5" ||
    event.key == "6" ||
    event.key == "7" ||
    event.key == "8" ||
    event.key == "9" ||
    event.key == "0"
  ) {
    console.log("NUMBER KEY:", event.key);
  } else {
    alert("Only numbers are allowed.");
    console.log("KEY:", event.key);
  }
});
