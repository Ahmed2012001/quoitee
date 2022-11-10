
const quoteContainer = document.getElementById('quote-container')
const quotetext = document.getElementById('quote')
const quoteAuthor = document.getElementById('author')
const twitterBtn = document.getElementById('twitter-button')
const newBtn = document.getElementById('new-quote')
let apiQuotes=[];


newBtn.addEventListener("click",()=>{
    newQuote();
})






// show new Quote
function newQuote(){
    const Quote=apiQuotes[Math.floor(Math.random()*apiQuotes.length)]
  quotetext.textContent=Quote.text
  quoteAuthor.textContent=Quote.author
    console.log(Quote)

}

// get quotes from api
async function getQuotes(){
    const apiUrl ='https://type.fit/api/quotes'
try {
    const responce =await fetch(apiUrl)
    apiQuotes =await responce.json();
    newQuote();
} catch (error) {
    //catch error here
}

}

// on load
getQuotes();