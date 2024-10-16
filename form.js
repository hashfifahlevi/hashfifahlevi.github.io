const scriptURL = 'https://script.google.com/macros/s/AKfycbzbvn5VyKhHTr5ySwD0AJ1GmKEir3IzmcXYlRdF13c6ohdvCQmi-yZDvX8FE_LoRJc7Fg/exec'
const form = document.forms['submit-to-google-sheet']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message))
  })