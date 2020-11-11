document.getElementById("btnYes").addEventListener("click",btnYes);
document.getElementById("btnNo").addEventListener("mouseover",btnNo);

function btnYes() {
      alert("<3");
};

function btnNo() {
      let btnNo = document.getElementById("btnNo");
      btnNo.style.position = "absolute";
      btnNo.style.top = Math.floor(Math.random()*(innerHeight-30)) + "px";
      btnNo.style.left = Math.floor(Math.random()*(innerWidth-60)) + "px";
};