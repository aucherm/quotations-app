let quoteCount = 1;

const form = document.getElementById('quote-form');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const text = document.getElementById('quote-text').value;
    const author = document.getElementById('quote-author').value;


    console.log("Citation:", text);
    console.log("Auteur.ice:", text);
});


