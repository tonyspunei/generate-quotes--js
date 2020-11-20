(function () {
  let button = document.querySelector(".btn");
  let quoteText = document.getElementById("quote-text");
  let authorName = document.getElementById("author-of-quote");
  let quotes = [
    "Be yourself; everyone else is already taken.",
    "So many books, so little time.",
    "God save me from my friends. I can protect myself from my enemies.",
    "A critic is someone who never actually goes to the battle, yet who afterwards comes out shooting the wounded.",
    "Life is like a landscape. You live in the midst of it but can describe it only from the vantage point of distance.",
  ];
  let authors = [
    "Oscar Wilde ",
    "Frank Zappa",
    "Claude Louis Hector de Villars ",
    "Tyne Daly",
    "Charles Lindbergh",
  ];

  button.addEventListener("click", generateQuote);

  function generateQuote() {
    for (let i = 0; i < quotes.length; i++) {
      let index = Math.floor(Math.random() * quotes.length);

      quoteText.textContent = quotes[index];
      authorName.textContent = authors[index];
    }
  }
})();
