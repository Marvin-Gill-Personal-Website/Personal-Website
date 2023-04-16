const form = document.querySelector("#form")
const submitButton = document.querySelector("#submit")
const scriptURL = 'https://script.google.com/macros/s/1XTaVdkdAnzhAHoLOA-x0K4svtJOB9RUnp2OgudFCNoEE4Lo8muDKOgSO/exec'

form.addEventListener('submit', e => {
  submitButton.disabled = true
  e.preventDefault()
  let requestBody = new FormData(form)
  fetch(scriptURL, { method: 'POST', body: requestBody})
    .then(response => response.json())
    .then(data => {
      console.log(data)
      alert('Success!')
      submitButton.disabled = false
    })
    .catch(error => {
      console.error(error)
      alert('Error!')
      submitButton.disabled = false
    })
})
