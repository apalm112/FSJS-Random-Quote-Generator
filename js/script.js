// Random Quote Generator for Treehouse Project #1
var getQuote;
var quotesArray = [];  // array for Stretch Goal of not repeating quotes until all have been displayed


function getRandomQuote() {
    // selects random quote from quotes array
    //for (var idx=0;idx<quotes.length;idx++) {}
        var rando = Math.floor(Math.random() * quotes.length);
        console.log(rando);
        quotesArray.push( quotes[rando].quote );
        console.log(quotes[rando].quote);

    return getQuote;

}
getRandomQuote();

function printQuote() {
    var getRQ = getRandomQuote();
    // constructs a string using this template:
    //     <p class="quote">quote here</p>
    //     <p class="source">source here
    //         <span class="citation">citation here</span>
    //         <span class="year">year here</span>
    //     </p>
    // printQuote does not add for a missing citation or year property
    // printQuote puts final HTML string to the page using:
    //     document.getElementById('quote-box').innerHTML
}


// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
