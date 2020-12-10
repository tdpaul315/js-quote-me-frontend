//Think OOJS - how do you create objects (initialization, classes, instances....SOUNDS LIKE RUBBBBBY)

class Quote {
    constructor(id, text, author, year, likes) {
        this.id = id;
        this.text = text; 
        this.author = author; 
        this.year = year; 
        this.likes = likes; 
        this.displayQuote()
        
    }


 quoteHtml(){
    return `
        <div class="w3-card w3-margin">
            <ul class="w3-ul w3-white">
              <li>
                <span class="w3-large" id="speech-text">${this.text}</span><br>
                <span>-${this.author}</span>
                <p style="font-size:10px">${this.year}</p>
                <button class="fa fa-thumbs-o-up"> Like</button>
               <button class="fa fa-arrow-right"> Comment</button>
                <p>${this.likes} like(s)</p>    
              </li>
            </ul>
          </div>
          <hr> 
        `
    }

    displayQuote(){
        const quoteContainer =  document.querySelector('#quote-spot');
        const quoteCard = document.createElement('div')
        quoteCard.dataset.id = this.id 
        quoteCard.id = this.id 
        quoteCard.classList.add = "quote-card"
        quoteCard.innerHTML += this.quoteHtml()
        quoteContainer.appendChild(quoteCard)
    }

}


//^^^^^^^^ CONSTRUCTOR METHOD INITIALIZES AND CREATES NEW INSTANCES OF THE QUOTE OBJECT ^^^^^^^^ 
// Now I need a way to see the object I created (when the user hits submit, the new quote should append to the page) -- Do I do that in this file?   

