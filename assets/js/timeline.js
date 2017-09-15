function renderTimeline () {
  var d = new Date()
  if (d.getDate() < 29 && d.getMonth() === 9) { document.getElementById('1').style.borderColor = 'green' }
  if (d.getDate() === 6 && d.getMonth() === 10) { document.getElementById('2').style.borderColor = 'green' }
  if (d.getDate() === 7 && d.getMonth() === 10) { document.getElementById('3').style.borderColor = 'green' }
  if (d.getDate() === 11 && d.getMonth() === 10) { document.getElementById('4').style.borderColor = 'green' }
  if (d.getDate() === 14 && d.getMonth() === 10) { document.getElementById('5').style.borderColor = 'green' }
  if (d.getDate() === 17 && d.getMonth() === 10) { document.getElementById('6').style.borderColor = 'green' }
  if (d.getDate() === 19 && d.getMonth() === 10) { document.getElementById('7').style.borderColor = 'green' }
};

window.onload = renderTimeline()
