function baitap3() {
    var n = +document.getElementById("giaiThua").value
    var ketQua = document.getElementById("ketQuaGiaiThua")
    ketQua.style.display = "block"
    if (n < 0) {
        ketQua.innerHTML = "vui lòng nhập n lớn hơn 0"
    } else {
        var giaiThua = 1
        for (i = 1; i <= n; i++) {
            giaiThua *= i
        }
        ketQua.innerHTML = "Tính Giai thừa: " + giaiThua
    }

}