function baitap1() {
    var n = +document.getElementById("soNguyen").value;
    var ketQua = document.getElementById("ketQuaSoDuong");
    ketQua.style.display = "block";
    var sum = 0;
    var i = 0
    if (n < 0) {
        ketQua.innerHTML = "vui lòng nhập số nguyên dương"
    } else {
        while (true) {
            i++;
            sum += i
            if (sum > n) {
                break;
            }
        }
        ketQua.innerHTML = "Số nguyên dương nhỏ nhất: " + i
    }

}
