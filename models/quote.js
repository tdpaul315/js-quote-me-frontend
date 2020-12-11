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
                <span class="w3-large" id="speech-text">"${this.text}"</span><br>
                <span>-${this.author}</span>
                <p style="font-size:10px">${this.year}</p>
                <button class="fa fa-thumbs-o-up"> Like</button>
                <button class="fa fa-arrow-right"> Comment</button>
                <button class="fa fa-volume-up" id="play-me-${this.id}"> Listen to Me</button>
                <button class="fa fa-volume-off" id="stop-me-${this.id}"> Turn Me Off</button>
                <button class="fa fa-trash delete">Delete</button>
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
        quoteCard.addEventListener('click', e => {
          if (e.target.className.includes('delete')) this.deleteQuote(e)
        })

        //this.textToSpeech()
    }

    

    //quoteComments(){
     // fetch("http://localhost:3000//quotes/id/comments/id")
     //   .then(response => response.json())
     //   .then(comments => {
     //       comments.forEach(comment => {
     //           const{id, commenter, content, quote_id} = comment
     //           new Comment(id, commenter, content, quote_id)
     //       })
  //   })

  deleteQuote(e){
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
        let stopEle = document.querySelector(`#stop-me-${this.id}`)


        playEle.addEventListener('click', this.onClickPlay(synth,flag));

      }  
      
    }
    
   onClickPlay(synth, flag) {
      if(!flag){
          flag = true;
          const utterance = new SpeechSynthesisUtterance(document.querySelector('#speech-text').textContent);
          utterance.voice = synth.getVoices()[0];
          utterance.onend = function(){
              flag = false;
          };
          synth.speak(utterance);
      }
      if(synth.paused) { /* unpause/resume narration */
        synth.resume();
    }

  }

  onClickStop() {
    if(synth.speaking){ 
        flag = false;
        synth.cancel();
    }
}

  }




