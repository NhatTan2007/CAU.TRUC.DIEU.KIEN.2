var scoreArray = [
      [document.getElementById("scoreExam1"),document.getElementById("scoreMidTerm1"),document.getElementById("scoreFinalTerm1")],
      [document.getElementById("scoreExam2"),document.getElementById("scoreMidTerm2"),document.getElementById("scoreFinalTerm2")],
      [document.getElementById("scoreExam3"),document.getElementById("scoreMidTerm3"),document.getElementById("scoreFinalTerm3")]
];

var idAverageScoreOnTable = ["averageScore1","averageScore2","averageScore3"];
var idclassificationOnTable = ["classification1","classification2","classification3"];

document.getElementById("scoreFinalTerm1").addEventListener("change",calAverageScore);
document.getElementById("scoreFinalTerm2").addEventListener("change",calAverageScore);
document.getElementById("scoreFinalTerm3").addEventListener("change",calAverageScore);

function calAverageScore() {
      for (let count1 = 0; count1 < 3; count1++) {
            let sumScore = 0;
            for (let count = 0; count < 3; count++) {
                  sumScore += parseFloat(scoreArray[count1][count].value); 
            }
            let averageScore = parseFloat((sumScore/3).toFixed(1));
            document.getElementById(idAverageScoreOnTable[count1]).innerHTML = averageScore;
            if (averageScore >= 9 && averageScore <= 10){
                  document.getElementById(idclassificationOnTable[count1]).innerHTML = "Xuất sắc";
            } else if (averageScore >= 8) {
                  document.getElementById(idclassificationOnTable[count1]).innerHTML = "Giỏi";
            } else if (averageScore >= 7) {
                  document.getElementById(idclassificationOnTable[count1]).innerHTML = "Khá";
            } else if (averageScore >= 5) {
                  document.getElementById(idclassificationOnTable[count1]).innerHTML = "Trung bình";
            } else if (averageScore >=0 ) {
                  document.getElementById(idclassificationOnTable[count1]).innerHTML = "Yếu";
            } else {document.getElementById(idclassificationOnTable[count1]).innerHTML = "Kiểm tra lại điểm số đã nhập"}
      }
}