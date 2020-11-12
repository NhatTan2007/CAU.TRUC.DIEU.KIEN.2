let inputNumber =  parseInt(prompt("Nhập số ngẫu nhiên"));
      if (inputNumber > 0) {
            alert(`Số ${inputNumber} là số lớn hơn 0`);
      } else if (inputNumber == 0) {
            alert("Bạn đã nhập số 0");
      } else {
            alert(`Số ${inputNumber} là số nhỏ hơn 0`);
      }