let quotes = [];

const savedQuotes = JSON.parse(localStorage.getItem('quotes'));
if (savedQuotes) {
    quotes = savedQuotes;
    quotes.forEach(q => addQuote(q.text, q.author, false));
}

document.getElementById('count').innerText = quotes.length + ' citation.s';

const form = document.getElementById('quote-form');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const text = document.getElementById('quote-text').value;
    const author = document.getElementById('quote-author').value;

    const citation = { author: author, text: text };
    quotes.push(citation);

    localStorage.setItem('quotes', JSON.stringify(quotes));

    addQuote(text, author, true);

    form.reset();
});

function addQuote(quote, author, updateCount = true) {

    const pText = document.createElement('p');
    pText.classList.add('text');
    pText.innerText = '"' + quote + '"';

    const pAuthor = document.createElement('p');
    pAuthor.classList.add('author');
    pAuthor.innerText = author;

    const divQuote = document.createElement('div');
    divQuote.classList.add('quote');
    divQuote.appendChild(pText);
    divQuote.appendChild(pAuthor);

    const quoteList = document.getElementById('quote-list');
    quoteList.appendChild(divQuote);

    if (updateCount) {
        document.getElementById('count').innerText = quotes.length + " citation.s";
    }
}
