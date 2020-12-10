//Responsible for initial fetch for data and interaction with the backend 

class API {

    static loadQuotes(){
        fetch("http://localhost:3000/quotes")
        .then(response => response.json())
        .then(quotes => {
            quotes.forEach(quote => {
                const{id, text, author, year, likes} = quote 
                new Quote(id, text, author, year, likes)
            })
        })
    }
        
    

    static loadFormListener(){
        const quoteForm = document.getElementById("quote-form")
    
        quoteForm.addEventListener("submit", function(e) {
            e.preventDefault()
            const quoteData = formInfo(e)
            const htmlQuote = quoteHtml(quoteData)
            attachQuote(htmlQuote)
            clearForm()
        })
    }
    
     formInfo(e){
        return {
            text: e.target.querySelector('#text-box').value, 
            author: e.target.querySelector('#author').value,
            year: e.target.querySelector('#year').value, 
        }
     }
    
    
     attachQuote(quote){
        document.querySelector('#quote-spot').innerHTML += quote
     }
    
     clearForm(){
        document.querySelector('#text-box').value = "" 
        document.querySelector('#author').value = ""
        document.querySelector('#year').value = ""
     }
}
    
 
