
//this is homebase - extract as much as you can here and place code in proper files (API.js, quote.js). Add the function you need to kick off everything else in the event DOMContentLoaded

document.addEventListener("DOMContentLoaded", function(){
loadFormListener()
textToSpeech()
})

function loadFormListener(){
    const quoteForm = document.getElementById("quote-form")

    quoteForm.addEventListener("submit", function(e) {
        e.preventDefault()
        const quoteData = formInfo(e)
        const htmlQuote = quoteHtml(quoteData)
        attachQuote(htmlQuote)
        clearForm()
    })
}

function formInfo(e){
    return {
        text: e.target.querySelector('#text').value, 
        author: e.target.querySelector('#author').value,
        year: e.target.querySelector('#year').value, 
    }
}

function quoteHtml(quote){
    return `
        <div class="w3-card w3-margin">
            <ul class="w3-ul w3-white">
              <li>
                <span class="w3-large" id="speech-text">${quote.text}</span><br>
                <span>-${quote.author}</span>
                <p style="font-size:10px">${quote.year}</p>
                <button class="fa fa-thumbs-o-up"> Like</button>
                <button class="fa fa-arrow-right"> Comment</button>
                <p>${quote.likes} like(s)</p>    
              </li>
            </ul>
          </div>
          <hr> 
        `
    }

function attachQuote(quote){
    document.querySelector('#quote-spot').innerHTML += quote
}

function clearForm(){
    document.querySelector('#text').value = "" 
    document.querySelector('#author').value = ""
    document.querySelector('#year').value = ""
}

