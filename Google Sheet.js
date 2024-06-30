const scriptURL = 'https://script.google.com/macros/s/AKfycbzALqbG4rQtLd4JhL2KUkVPuFVAGK_kKnD4Q8D2mCnr5t5mr7J6oCfmsS8HZkPKdFo1/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})