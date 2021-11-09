document.querySelector('#add-experience').addEventListener('click', cloneField)

function cloneField() {
  console.log('heloooo ')
  fields = document.querySelector('.habilidades-grid').cloneNode(true)

  document.querySelector('#habilidades-itemns').appendChild(fields)
}
