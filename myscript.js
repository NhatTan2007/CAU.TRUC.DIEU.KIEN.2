//[Bài tập] Tính chỉ số cân nặng của cơ thể
document.getElementById("calBMI").addEventListener("click",bmi);

function bmi() {
      let yourWeight = document.getElementById("yourWeight").value;
      let yourHeight = document.getElementById("yourHeight").value;
      let scoreBmi = parseFloat((yourWeight / Math.pow(yourHeight,2)).toFixed(2));
      if (scoreBmi < 18) {
            document.getElementById("resultBMI").innerHTML = `${scoreBmi}: You are Underweight`;
      } else if (scoreBmi < 25) {
            document.getElementById("resultBMI").innerHTML = `${scoreBmi}: You are Normal`;
      } else if (scoreBmi < 30) {
            document.getElementById("resultBMI").innerHTML = `${scoreBmi}: You are Overweight`;
      } else {
            document.getElementById("resultBMI").innerHTML = `${scoreBmi}: You are Obese`;
      }
}