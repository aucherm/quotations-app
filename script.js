let quoteCount = 0;

const form = document.getElementById('quote-form');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const text = document.getElementById('quote-text').value;
    const author = document.getElementById('quote-author').value;

    addQuote(text, author);

});

function addQuote(quote, author) {

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

    quoteCount += 1;
    document.getElementById('count').innerHTML = quoteCount + " citation.s";
}

