function baitap4() {
  var bg = document.getElementById("bg-color");
  var result = document.getElementById("result");
  bg.style.display = "block";
  var a = "";
  for (i = 1; i <= 10; i++) {
    // result = document.write(i + " <br> ");
    // document.getElementById("result").outerHTML = i;
    // console.log(i);
    // a.push(i);
    // if (i % 2 === 0) {
    //   document.getElementById("result").innerHTML = i;
    //   console.log("số chẵn:" + i);
    // } else {
    //   document.getElementById("result").innerHTML = i;
    //   console.log("số lẻ:" + i);
    // }
    if (i % 2 === 0) {
      a +=
        "<label style='background-color: #db1414; color:white; padding-left:10px; width:100%'>" +
        "div chẵn: " +
        i +
        "</label>" +
        "<br>";
    } else {
      a +=
        "<label style='background-color:#1978bf; color:white;padding-left:10px; width:100% '>" +
        "div lẻ:" +
        i +
        "</label>" +
        "<br>";
    }
  }
  console.log(a);
  document.getElementById("result").innerHTML = a;
}
