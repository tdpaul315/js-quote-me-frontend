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
                fetch("http://localhost:3000/quotes", {
                    method: 'POST', 
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(quoteData) 
                }) 
                .then(resp => resp.json())
                .then(data => {
                    const{id, text, author, year, likes} = data
                    new Quote(id, text, author, year, likes)
                    clearForm() 
                })
            })


    
    
        
    function formInfo(e){
        return {
            text: e.target.querySelector('#text-box').value, 
            author: e.target.querySelector('#author').value,
            year: e.target.querySelector('#year').value, 
        }
    }
     
    
    function clearForm(){
        document.querySelector('#text-box').value = "" 
        document.querySelector('#author').value = ""
        document.querySelector('#year').value = ""
    }
  }

}

    
    
    


    
 
