//[Bài tập] Tính chỉ số cân nặng của cơ thể
// document.getElementById("calBMI").addEventListener("click",bmi);

// function bmi() {
//       let yourWeight = document.getElementById("yourWeight").value;
//       let yourHeight = document.getElementById("yourHeight").value;
//       let scoreBmi = parseFloat((yourWeight / Math.pow(yourHeight,2)).toFixed(2));
//       if (scoreBmi < 18) {
//             document.getElementById("resultBMI").innerHTML = `${scoreBmi}: You are Underweight`;
//       } else if (scoreBmi < 25) {
//             document.getElementById("resultBMI").innerHTML = `${scoreBmi}: You are Normal`;
//       } else if (scoreBmi < 30) {
//             document.getElementById("resultBMI").innerHTML = `${scoreBmi}: You are Overweight`;
//       } else {
//             document.getElementById("resultBMI").innerHTML = `${scoreBmi}: You are Obese`;
//       }
// }

//[Bài tập] Câu lệnh switch-case
// document.getElementById("calDayOfMonth").addEventListener("click",numberDayOfMonth);

// function numberDayOfMonth() {
//       let nameOfMonth = document.getElementById("nameOfMonth").value;
//       switch (nameOfMonth) {
//             case "Tháng 1":
//             case "Tháng 3":
//             case "Tháng 5":
//             case "Tháng 7":
//             case "Tháng 8":
//             case "Tháng 10":
//             case "Tháng 12":
//                   document.getElementById("numberDayOfMonth").innerHTML = `${nameOfMonth} có 31 ngày`;
//                   break;
//             case "Tháng 4":
//             case "Tháng 6":
//             case "Tháng 9":
//             case "Tháng 11":
//                   document.getElementById("numberDayOfMonth").innerHTML = `${nameOfMonth} có 30 ngày`;
//                   break;
//             case "Tháng 2":
//                   document.getElementById("numberDayOfMonth").innerHTML = `${nameOfMonth} có 28 hoặc 29 ngày`;
//                   break;
//       }
// }

//[Bài tập] Máy tính đơn giản

var count = 0;

//Thiết lập event khi click cho các phím
document.getElementById("0").addEventListener("click",function addNumber() {writeDisplayNumber(document.getElementById("0").value)});
document.getElementById("1").addEventListener("click",function addNumber() {writeDisplayNumber(document.getElementById("1").value)});
document.getElementById("2").addEventListener("click",function addNumber() {writeDisplayNumber(document.getElementById("2").value)});
document.getElementById("3").addEventListener("click",function addNumber() {writeDisplayNumber(document.getElementById("3").value)});
document.getElementById("4").addEventListener("click",function addNumber() {writeDisplayNumber(document.getElementById("4").value)});
document.getElementById("5").addEventListener("click",function addNumber() {writeDisplayNumber(document.getElementById("5").value)});
document.getElementById("6").addEventListener("click",function addNumber() {writeDisplayNumber(document.getElementById("6").value)});
document.getElementById("7").addEventListener("click",function addNumber() {writeDisplayNumber(document.getElementById("7").value)});
document.getElementById("8").addEventListener("click",function addNumber() {writeDisplayNumber(document.getElementById("8").value)});
document.getElementById("9").addEventListener("click",function addNumber() {writeDisplayNumber(document.getElementById("9").value)});
document.getElementById("reset").addEventListener("click",resetDisplayNumber);
document.getElementById("plus").addEventListener("click",function addId() {btnMath("plus")});
document.getElementById("minus").addEventListener("click",function addId() {btnMath("minus")});
document.getElementById("multiply").addEventListener("click",function addId() {btnMath("multiply")});
document.getElementById("divide").addEventListener("click",function addId() {btnMath("divide")});
document.getElementById("equals").addEventListener("click",result);

function writeDisplayNumber(valueBtn) {
      document.getElementById("displayNumber").value += valueBtn;
}

function btnMath(bntId) {
      if (count == 0) {
            document.getElementById("displayNumber").value += document.getElementById(bntId).value;
            count++;
      }
}

function resetDisplayNumber() {
      document.getElementById("displayNumber").value= "";
      count = 0;
}

function result() {
      let resultString = document.getElementById("displayNumber").value;
      resultString = resultString.replace("x","*");
      resultString = resultString.replace("÷","/");
      document.getElementById("displayNumber").value = eval(resultString);
      count = 0;
}