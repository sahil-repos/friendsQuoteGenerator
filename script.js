const qBtn = document.getElementById('qBtn')

const quoteEl = document.getElementById('quote')
const charachterEl = document.getElementById('character')

qBtn.addEventListener('click', generateQuote)

generateQuote()

function generateQuote() {
  const config = {
    headers: {
      Accept: 'application/json',
    },
  }

  fetch('https://friends-quotes-api.herokuapp.com/quotes/random', config)
    .then((res) => res.json())
    .then((data) => {
      quoteEl.innerHTML = data.quote
      charachterEl.innerHTML = data.character
    })
}
