
const fields = document.querySelectorAll('.field')
const total = document.querySelector('#total')

function multiply() {
  let product = 1

  fields.forEach((field) => {
    let num = parseInt(field.value, 10)
    product *= isNaN(num) ? 1 : num
  })

  total.textContent = product
}

fields.forEach((field) => field.addEventListener('input', multiply))
