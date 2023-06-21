//gives buttons hover and click css effects.
const btns = document.querySelectorAll("BUTTON");
for (const btn of btns) {
  btn.addEventListener('mouseover', function() {
    btn.classList.add("hover");
  });
  btn.addEventListener('mouseout', function() {
    btn.classList.remove("hover","clicked");
  });
  btn.addEventListener('click', function() {
    btn.classList.add("clicked");
  });
}

//function variables to add to the event listeners.
let printOp = function() {
  let screen = document.getElementById("display");
  let op = screen.innerText.slice(-1);
  let btnVal = this.value;
  if (op !== ("+" || "-" || "/" || "*")) {
    screen.innerText += btnVal;
  }
}
let printNum = function() {
  let screen = document.getElementById("display");
  let btnVal = this.value;
  screen.innerText += btnVal;
}
let evaluate = function() {

  let screen = document.getElementById("display");
  let texty = screen.innerHTML;
  let arr = texty.split(/\s*(<?->|[-&|()]|\w+)\s*/).filter(Boolean);

while (arr.length >= 3){
	let d = 0;
  let a = Number(arr[0]);
  let b = arr[1];
  let c = Number(arr[2]);
  
  if (b == "+") {
    d = (a + c);
  } else if (b == "-") {
    d = a - c;
  } else if (b == "*") {
    d = a * c;
  } else if (b == "/") {
    d = a / c;
  }
  arr.shift();
  arr.shift();
  arr.shift();
  arr.unshift(d);
  screen.innerText = arr[0];
  }
  
}
let clear = function(){
	let screen = document.getElementById("display");
  screen.innerText = "";
}

//button event listeners.
const numBtns = document.getElementsByClassName("number");
for (const numBtn of numBtns){
  numBtn.addEventListener('click', printNum);
}

const opBtns = document.getElementsByClassName("operator");
for (const opBtn of opBtns){
  opBtn.addEventListener("click", printOp);
}

const ansrBtn = document.getElementById("equals"); 
ansrBtn.addEventListener('click', evaluate);

const resetBtn = document.getElementById("clear");
resetBtn.addEventListener('click', clear);