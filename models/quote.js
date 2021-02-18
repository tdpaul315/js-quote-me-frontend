

class Quote {
    constructor(id, text, author, year, likes) {
        this.id = id;
        this.text = text; 
        this.author = author; 
        this.year = year; 
        this.likes = likes; 
        this.displayQuote()
        this.loadComments()
        
    }

  
    quoteHtml(){
    return `
        <div class="w3-card w3-margin">
            <ul class="w3-ul w3-white">
              <li>
                <span class="w3-large" id="speech-text-${this.id}">"${this.text}"</span><br>
                <span>-${this.author}</span>, <span style="font-size:10px;color:MediumSeaGreen">${this.year}</span><br>
                <p>${this.likes} like(s)</p>
                <h6>Comments</h6>  
                <div id="comment-container-${this.id}"></div>
                <form id="comment-form-${this.id}">
                 <textarea id="comment-box" placeholder="Leave Comment" /></textarea><br>
                 <button>Comment</button>
                </form><br />
                 <button class="fa fa-thumbs-o-up"> Like</button>
                 <button class="fa fa-volume-up" id="play-me-${this.id}"> Listen to Me</button>
                 <button class="fa fa-trash delete" id="delete-me-${this.id}">Delete</button>
                </div>
              </li>
            </ul>
          </div>
          <hr> 
        `
    }
    
    displayQuote(){
        const quoteContainer =  document.querySelector('#quote-spot')
        const quoteCard = document.createElement('div')
        quoteCard.dataset.id = this.id 
        quoteCard.id = this.id
        quoteCard.classList.add = "quote-card"
        quoteCard.innerHTML += this.quoteHtml()
        quoteContainer.appendChild(quoteCard)
        quoteCard.addEventListener('click', e => {
          if (e.target.className.includes('delete')) this.deleteQuote()
          if (e.target.className === 'fa fa-volume-up')  this.textToSpeech();
          if (e.target.className === 'fa fa-thumbs-o-up') ;
          // if (e.target.className === 'fa fa-arrow-right') this.addComment(); 
        })
        
    }


    loadComments(){
      fetch(`http://localhost:3000/quotes/${this.id}/comments`)
      .then(response => response.json())
      .then(comments => {
              comments.forEach(comment => {
                  const{id, commenter, content, quote_id} = comment 
                  new Comment(id, commenter, content, quote_id)
          })
      })
    }

    // addComment(){
    //   const commentForm = document.querySelector(`#comment-form-${this.id}`)
      
      
    //       commentForm.addEventListener("submit", function(e) {
    //          e.preventDefault()
    //           const commentData = commentInfo(e)
    //           debugger
    //           fetch(`http://localhost:3000/quotes/${this.id}/comments`, {
    //               method: 'POST', 
    //               headers: {
    //                   'Content-Type': 'application/json'
    //               },
    //               body: JSON.stringify(commentData) 
                
    //           }) 
    //           .then(resp => resp.json())
    //           .then(data => {
    //               const{id, commenter, content, quote_id} = data
    //               new Comment(id, commenter, content, quote_id)
    //               clearComment() 
    //           })
              
    //       })
 
    //      function commentInfo() {
    //          return{
    //              commenter: document.querySelector('#commenter-box').value,
    //              content: document.querySelector('#comment-box').value,  
    //       }
    //      } 
 
    //      function clearComment(){
    //          document.querySelector('#commenter-box').value = "" 
    //          document.querySelector('#comment-box').value = ""
    //      }
    // }
 
        
    deleteQuote(){
     const id = document.getElementById(`${this.id}`)
      fetch(`http://localhost:3000/quotes/${this.id}`,{
       method: 'DELETE'
    })
     .then(() => {
      document.getElementById('quote-spot').removeChild(id) 
     })
    }


   textToSpeech() {
    if ('speechSynthesis' in window) {

        let synth = speechSynthesis;
        let flag = false;
        let playEle = document.querySelector(`#play-me-${this.id}`)
        

        playEle.addEventListener('click', this.onClickPlay(synth,flag));
      }  
    }
    
   onClickPlay(synth, flag) {
      if(!flag){
          flag = true;
          const utterance = new SpeechSynthesisUtterance(document.querySelector(`#speech-text-${this.id}`).textContent);
          utterance.voice = synth.getVoices()[0];
          utterance.onend = function(){
              flag = false;
          };
          synth.speak(utterance);
      }
      if(synth.paused) { 
        synth.resume();
    }

  }
}





