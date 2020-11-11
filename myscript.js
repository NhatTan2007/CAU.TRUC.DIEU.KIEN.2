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

// //[Bài tập] Máy tính đơn giản

// var count = 0;

// //Thiết lập event khi click cho các phím
// document.getElementById("0").addEventListener("click",function addNumber() {writeDisplayNumber(document.getElementById("0").value)});
// document.getElementById("1").addEventListener("click",function addNumber() {writeDisplayNumber(document.getElementById("1").value)});
// document.getElementById("2").addEventListener("click",function addNumber() {writeDisplayNumber(document.getElementById("2").value)});
// document.getElementById("3").addEventListener("click",function addNumber() {writeDisplayNumber(document.getElementById("3").value)});
// document.getElementById("4").addEventListener("click",function addNumber() {writeDisplayNumber(document.getElementById("4").value)});
// document.getElementById("5").addEventListener("click",function addNumber() {writeDisplayNumber(document.getElementById("5").value)});
// document.getElementById("6").addEventListener("click",function addNumber() {writeDisplayNumber(document.getElementById("6").value)});
// document.getElementById("7").addEventListener("click",function addNumber() {writeDisplayNumber(document.getElementById("7").value)});
// document.getElementById("8").addEventListener("click",function addNumber() {writeDisplayNumber(document.getElementById("8").value)});
// document.getElementById("9").addEventListener("click",function addNumber() {writeDisplayNumber(document.getElementById("9").value)});
// document.getElementById("reset").addEventListener("click",resetDisplayNumber);
// document.getElementById("plus").addEventListener("click",function addId() {btnMath("plus")});
// document.getElementById("minus").addEventListener("click",function addId() {btnMath("minus")});
// document.getElementById("multiply").addEventListener("click",function addId() {btnMath("multiply")});
// document.getElementById("divide").addEventListener("click",function addId() {btnMath("divide")});
// document.getElementById("equals").addEventListener("click",result);

// function writeDisplayNumber(valueBtn) {
//       document.getElementById("displayNumber").value += valueBtn;
// }

// function btnMath(bntId) {
//       if (count == 0) {
//             document.getElementById("displayNumber").value += document.getElementById(bntId).value;
//             count++;
//       }
// }

// function resetDisplayNumber() {
//       document.getElementById("displayNumber").value= "";
//       count = 0;
// }

// function result() {
//       let resultString = document.getElementById("displayNumber").value;
//       resultString = resultString.replace("x","*");
//       resultString = resultString.replace("÷","/");
//       document.getElementById("displayNumber").value = eval(resultString);
//       count = 0;
// }

//[Bài tập] Game puzzle
imagePartSrcArray = [
      ["image/picture1part1.jpg","image/picture1part2.jpg","image/picture1part3.jpg","image/picture1part4.jpg","image/picture1part5.jpg","image/picture1part6.jpg"],
      ["image/picture2part1.jpg","image/picture2part2.jpg","image/picture2part3.jpg","image/picture2part4.jpg","image/picture2part5.jpg","image/picture2part6.jpg"],
      ["image/picture3part1.jpg","image/picture3part2.jpg","image/picture3part3.jpg","image/picture3part4.jpg","image/picture3part5.jpg","image/picture3part6.jpg"],
      ["image/picture4part1.jpg","image/picture4part2.jpg","image/picture4part3.jpg","image/picture4part4.jpg","image/picture4part5.jpg","image/picture4part6.jpg"],
];

imageIdArray = ["imagePart1","imagePart2","imagePart3","imagePart4","imagePart5","imagePart6"];

document.getElementById(imageIdArray[0]).addEventListener("click",function addId() {changeImage(imageIdArray[0])});
document.getElementById(imageIdArray[1]).addEventListener("click",function addId() {changeImage(imageIdArray[1])});
document.getElementById(imageIdArray[2]).addEventListener("click",function addId() {changeImage(imageIdArray[2])});
document.getElementById(imageIdArray[3]).addEventListener("click",function addId() {changeImage(imageIdArray[3])});
document.getElementById(imageIdArray[4]).addEventListener("click",function addId() {changeImage(imageIdArray[4])});
document.getElementById(imageIdArray[5]).addEventListener("click",function addId() {changeImage(imageIdArray[5])});
document.getElementById("checkResult").addEventListener("click",checkResult);

function changeImage(idPartImage){
      let count = 0;
      switch (idPartImage) {
            case imageIdArray[0]: {
                  count = 0;
                  break;
            }
            case imageIdArray[1]: {
                  count = 1;
                  break;
            }
            case imageIdArray[2]: {
                  count = 2;
                  break;
            }
            case imageIdArray[3]: {
                  count = 3;
                  break;
            }
            case imageIdArray[4]: {
                  count = 4;
                  break;
            }
            case imageIdArray[5]: {
                  count = 5;
                  break;
            }
      };

      let randomImagePart;
      do{
            randomImagePart= Math.floor(Math.random()*4);
      }
      while(document.getElementById(idPartImage).src.match(imagePartSrcArray[randomImagePart][count]));
      document.getElementById(idPartImage).src = imagePartSrcArray[randomImagePart][count];
}

function loadPuzzle(){
      for (let count = 0; count < 6; count++) {
            document.getElementById(imageIdArray[count]).src = imagePartSrcArray[Math.floor(Math.random()*4)][count];
      }
}

function checkResult(){
      for (let count1 = 0; count1 < 4; count1++) {
            let checkRight = true;
            for (let count = 0; count < 6 && checkRight; count++) {
                  if (!document.getElementById(imageIdArray[count]).src.match(imagePartSrcArray[count1][count])) {
                        checkRight = false;
                        break;
                  }
            }
            if (checkRight) {
                  alert("Đúng rồi! Bạn làm tốt lắm");
                  break;
            } else {
                  alert("Chưa đúng nhé bạn! Cố gắng lên");
                  break;
            }
      }
}