var quotes = [
  "Doh!",
  "We have to fight our way out!"
];

nextQuote();

function nextQuote() {
  document.getElementById("quote").innerHTML = quotes[Math.floor(Math.random()*quotes.length)];
  setTimeout(nextQuote, 3000);
}
