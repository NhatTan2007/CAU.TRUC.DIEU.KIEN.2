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
document.getElementById("calDayOfMonth").addEventListener("click",numberDayOfMonth);

function numberDayOfMonth() {
      let nameOfMonth = document.getElementById("nameOfMonth").value;
      switch (nameOfMonth) {
            case "Tháng 1":
            case "Tháng 3":
            case "Tháng 5":
            case "Tháng 7":
            case "Tháng 8":
            case "Tháng 10":
            case "Tháng 12":
                  document.getElementById("numberDayOfMonth").innerHTML = `${nameOfMonth} có 31 ngày`;
                  break;
            case "Tháng 4":
            case "Tháng 6":
            case "Tháng 9":
            case "Tháng 11":
                  document.getElementById("numberDayOfMonth").innerHTML = `${nameOfMonth} có 30 ngày`;
                  break;
            case "Tháng 2":
                  document.getElementById("numberDayOfMonth").innerHTML = `${nameOfMonth} có 28 hoặc 29 ngày`;
                  break;
      }
}