let input = document.getElementById("input");
let button = document.getElementById("button");
let qrImg = document.getElementById("qr-img");

// Function
function qrGenerate() {
  qrImg.src =
    "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
    input.value;
}
button.onclick = function () {
  qrGenerate();
};
