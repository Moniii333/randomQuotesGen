let display = document.getElementsByClassName('output')[0];
let search = document.getElementsByClassName('search-btn')[0];

getQuote = () => {
  fetch("https://type.fit/api/quotes")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    const randomQuote = Math.floor(Math.random() * data.length);
    const quote = data[randomQuote].text;
    display.innerHTML = quote;
  })
}

search.addEventListener('click', function() {
  getQuote();
})