function renderTimeline() {
  // Write all javascript in this part.
  var d = new Date();
  var eventNum = document.getElementById('event1')
  if(d.Day() == 26 && d.Month() == 8) {
    eventNum.className="li complete"
  }
  var eventNum2 == document.getElementById('event2')
  if(d.Day() == 4 && d.Month() == 9) {
    eventNum2.className="li complete"
    eventNum.className="li complete"
  }
  var eventNum3 == document.getElementById('event3')
  if(d.Day() == 8 && d.Month() == 9) {
    eventNum.className="li complete"
    eventNum2.className="li complete"
    eventNum3.className="li complete"
  }
  var eventNum4 == document.getElementById('event4')
  if(d.Day() == 10 && d.Month() == 9) {
    eventNum.className="li complete"
    eventNum2.className="li complete"
    eventNum3.className="li complete"
    eventNum4.className="li complete"
  }
  var eventNum5 == document.getElementById('event5')
  if(d.Day() == 13 && d.Month() == 9) {
    eventNum.className="li complete"
    eventNum2.className="li complete"
    eventNum3.className="li complete"
    eventNum4.className="li complete"
    eventNum5.className="li complete"
  }
  var eventNum6 == document.getElementById('event6')
  if(d.Day() == 15 && d.Month() == 9) {
    eventNum.className="li complete"
    eventNum2.className="li complete"
    eventNum3.className="li complete"
    eventNum4.className="li complete"
    eventNum5.className="li complete"
    eventNum6.className="li complete"
  }
  var eventNum7 == document.getElementById('event7')
  if(d.Day() == 18 && d.Month() == 9) {
    eventNum.className="li complete"
    eventNum2.className="li complete"
    eventNum3.className="li complete"
    eventNum4.className="li complete"
    eventNum5.className="li complete"
    eventNum6.className="li complete"
    eventNum7.className="li complete"
  }
}

window.onload = renderTimeline
