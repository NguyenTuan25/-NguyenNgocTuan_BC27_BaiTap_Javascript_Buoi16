function baitap2() {
    var x = +document.getElementById("x").value
    var n = +document.getElementById("n").value
    var ketQua = document.getElementById("ketQuaTong")
    ketQua.style.display = "block"
    // var x = 1
    // var n = 1
    var i = 1
    var sum = 0
    while (i <= n) {
        sum += x ** i
        i++;
    }
    ketQua.innerHTML = "Tổng: " + sum
}