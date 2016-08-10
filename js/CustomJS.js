function move(temp) {
  var vtemp = temp
  var elem = document.getElementById("myBar");
  var width = 0;
  var id = setInterval(frame, 25);
  function frame() {
    if (width >= vtemp) {
      clearInterval(id);
    } else {
      width++;
      elem.style.width = width + '%';
      document.getElementById("label").innerHTML = width * 1  + '%';
    }
  }
}