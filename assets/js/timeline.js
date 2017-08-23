function renderTimeline() {

  var d = new Date();
  var d2 = new Date(2017, 9, 20);
  var diff = 0;
  var position = 0;

  if(d.getDate() > 20 && d.getDate() <= 26 && d.getMonth() == 9) {
    diff = d.getDate() - d2.getDate();
    position = -((1250 - 1167)/diff * d.getDate())+"px";
    document.getElementById("circle").style.left = position;
  }
  else if((d.getDate() > 26 && d.getDate() <= 4) && (d.getMonth() == 9 || d.getMonth() == 10)) {
    d2 = new Date(2017, 9, 26);
    diff = d.getDate() - d2.getDate();
    position = -((1167-1002)/diff * d.getDate())+"px";
    document.getElementById("circle").style.left = position;
  }
  else if(d.getDate() > 4 && d.getDate() <= 8 && d.getMonth() == 10) {
    d2 = new Date(2017, 10, 4);
    diff = d.getDate() - d2.getDate();
    position = -((1002-827)/diff * d.getDate())+"px";
    document.getElementById("circle").style.left = position;
  }
  else if(d.getDate() > 8 && d.getDate() <= 10 && d.getMonth() == 10) {
    d2 = new Date(2017, 10, 8);
    diff = d.getDate() - d2.getDate();
    position = -((827-628)/diff * d.getDate())+"px";
    document.getElementById("circle").style.left = position;
  }
  else if(d.getDate() > 10 && d.getDate() <= 13 && d.getMonth() == 10) {
    d2 = new Date(2017, 10, 10);
    diff = d.getDate() - d2.getDate();
    position = -((628-436)/diff * d.getDate())+"px";
    document.getElementById("circle").style.left = position;
  }
  else if(d.getDate() > 13 && d.getDate() <= 15 && d.getMonth() == 10) {
    d2 = new Date(2017, 10, 13);
    diff = d.getDate() - d2.getDate();
    position = -((436-264)/diff * d.getDate())+"px";
    document.getElementById("circle").style.left = position;
  }
  else if(d.getDate() > 15 && d.getDate() <= 18 && d.getMonth() == 10) {
    d2 = new Date(2017, 10, 15);
    diff = d.getDate() - d2.getDate();
    position = -((264-96)/diff * d.getDate())+"px";
    document.getElementById("circle").style.left = position;
  }
  else if(d.getDate() > 18 && d.getDate() <= 20 && d.getMonth() == 10) {
    d2 = new Date(2017, 10, 18);
    diff = d.getDate() - d2.getDate();
    position = -((96-5)/diff * d.getDate())+"px";
    document.getElementById("circle").style.left = position;
  }
  else {
    document.getElementById("circle").style.left = "-1250px";
  }
}


// Line 1: -1250px Start
// Line 2: -1167px
// Line 3: -1002px
// Line 4: -827px
// Line 5: -628px
// Line 6: -436px
// Line 7: -264px
// Line 8: -96px
// Line 9: 0px End
window.onload = renderTimeline
