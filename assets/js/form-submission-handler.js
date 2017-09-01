
function validEmail (email) {
  var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i
  return re.test(email)
}

function validateHuman (honeypot) {
  if (honeypot) return true
}

// get all data in form and return object
function getFormData () {
  var elements = document.getElementById('application_form').elements // all form elements
  var fields = Object.keys(elements).map(function (k) {
    if (elements[k].name !== undefined) {
      return elements[k].name
    } else if (elements[k].length > 0) {
      return elements[k].item(0).name
    }
  }).filter((item, pos, self) => {
    return self.indexOf(item) === pos && item
  })

  var data = {}
  fields.forEach((k) => {
    data[k] = elements[k].value
    var str = ''
    if (elements[k].type === 'checkbox') {
      str = str + elements[k].checked + ', '
      data[k] = str.slice(0, -2)
    } else if (elements[k].length) {
      for (var i = 0; i < elements[k].length; i++) {
        if (elements[k].item(i).checked) {
          str = str + elements[k].item(i).value + ', '
          data[k] = str.slice(0, -2)
        }
      }
    }
  })

  return data
}

function handleFormSubmit (event) {
  event.preventDefault()
  var data = getFormData()

  if (validateHuman(data.honeypot)) {
    return false
  }

  var url = event.target.action
  var xhr = new XMLHttpRequest()
  xhr.open('POST', url)

  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
  xhr.onreadystatechange = () => {
    // document.getElementById('application_form').style.display = 'none'
    // set a success message
    return
  }

  var encoded = Object.keys(data).map((k) => {
    return encodeURIComponent(k) + '=' + encodeURIComponent(data[k])
  }).join('&')

  xhr.send(encoded)
}

function loaded () {
  var form = document.getElementById('application_form')
  form.addEventListener('submit', handleFormSubmit, false)
}

document.addEventListener('DOMContentLoaded', loaded, false)
