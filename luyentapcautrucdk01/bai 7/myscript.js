document.getElementById("btnCalPhoneCharge").addEventListener("click",calPhoneCharge);

function calPhoneCharge() {
      let offNetMinutes = parseInt(document.getElementById("offNetMinutes").value);
      let onNetMinutes = parseInt(document.getElementById("onNetMinutes").value);
      let offNetPricing = parseInt(document.getElementById("offNetPricing").innerHTML.replace(".",""));
      let onNetPricing = parseInt(document.getElementById("onNetPricing").innerHTML.replace(".",""));

      let totalPhoneCharge = offNetMinutes * offNetPricing + onNetMinutes * onNetPricing;
      if (offNetMinutes < 0 || onNetMinutes <0) {
            document.getElementById("totalPhoneCharge").innerHTML = "Kiểm tra lại dữ liệu tính toán";
      } else {
            document.getElementById("totalPhoneCharge").innerHTML = totalPhoneCharge;
      }
      
}