let studentAge = parseInt(prompt("Nhập số tuổi học sinh"));
do {
      studentAge = parseInt(prompt("Nhập số tuổi học sinh"));
} while (studentAge <=0 || studentAge >=120); 

if (studentAge >= 16) {
      alert("Học sinh đủ tuổi nhập học lớp 10");
} else {
      alert("Học sinh không đủ tuổi học lớp 10");
};