let button = document.querySelector('#button')
let name = document.querySelector('#name')
let height = document.querySelector('#height')
let mass = document.querySelector('#mass')
let birthYear = document.querySelector('#birth-year')

function getInfo() {
  let randomNumber = Math.floor((Math.random() * 82) + 1)
  let apiUrl = 'https://swapi.dev/api/people/' + randomNumber

  axios.get(apiUrl).then(function (response) {
    updateInfo(response.data)
  }).catch(e => {
    updateInfoWitherror()
    console.log('Ouve um erro!')
  })
}
function updateInfo(data) {
  name.innerText = `Nome: ${data.name}`
  height.innerText = `Altura: ${data.height}`
  mass.innerText = `Peso: ${data.mass}`
  birthYear.innerText = `Nascimento: ${data.birth_year}`
}
function updateInfoWitherror() {
  name.innerText = `Oh No! Não encontramos esse personagem`
  height.innerText = ``
  mass.innerText = ``
  birthYear.innerText = ``
  film.innerText = ``
}

button.addEventListener('click', getInfo)