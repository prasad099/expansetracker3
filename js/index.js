let bal = 0;
let exp = 0;
let inc = 0;
let title;
let amount;
let flag = true;

let histTable = document.querySelector(".history-table");
document.querySelector(".expense").style ="background-color: #93b5f3;color: #fff;";

function expense() {      //to change expense button color
  flag = true;
  document.querySelector(".expense").style ="background-color: #93b5f3;color: #fff";
  document.querySelector(".income").style ="background-color: rgb(255,255,255);color: black";
}

function income() {       //tbutton change income button color
  flag = false;
  console.log(flag);
  document.querySelector(".income").style ="background-color: #93b5f3;color: #fff";
  document.querySelector(".expense").style ="background-color: rgb(255,255,255);color: black";
}

function addData() {
  title = document.querySelector("#myText");          //to access title 
  amount = document.querySelector("#number");         //to access amount

  if (flag) {
    // alert("exp");
    if (title.value != "" && amount.value != "") {
      histTable.innerHTML += `<tr><td>${title.value}</td><td>${amount.value}</td></tr>`;    //add table row and column
      exp += parseInt(amount.value);        //convert string into integer
      bal = inc - exp;
      title.value = "";
      amount.value = "";
      document.querySelector("#balance").value = bal;
      document.querySelector("#expense").value = exp;
      document.querySelector("#income").value = inc;
    }
  } else {
    if (title.value != "" && amount.value != "") {
      histTable.innerHTML += `<tr><td>${title.value}</td><td>${amount.value}</td></tr>`;
      inc += parseInt(amount.value);         //convert string into integer
      bal = inc - exp;
      title.value = "";
      amount.value = "";
      document.querySelector("#balance").value = bal;
      document.querySelector("#expense").value = exp;
      document.querySelector("#income").value = inc;
    }
  }
}
