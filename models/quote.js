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
                <span class="w3-large" id="speech-text${this.id}">"${this.text}"</span><br>
                <span>-${this.author}</span>, <span style="font-size:10px">${this.year}</span><br><br>
                <form>
                  <textarea placeholder='Add Your Comment'></textarea><br>
                  <div class="btn">
                    <input class="fa fa-arrow-right" type="submit" value='Comment'>
                    <button id='clear' class="fa fa-ban"> Cancel</button>
                  </div>
                </form><br>
                <button class="fa fa-thumbs-o-up"> Like</button>
                <button class="fa fa-volume-up" id="play-me-${this.id}"> Listen to Me</button>
                <button class="fa fa-trash delete">Delete</button>
                <p>${this.likes} like(s)</p>  
                <p style="text-align:center" id="comment-spot">Comments</p>
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
          if (e.target.className.includes('delete')) this.deleteQuote()
          if (e.target.className === 'fa fa-volume-up')  this.textToSpeech();
          if (e.target.className === 'fa fa-arrow-right')  e.preventDefault(); console.log('commented');
          if (e.target.className === 'fa fa-thumbs-o-up') console.log('you liked me');
        })
    }

    
    
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
          const utterance = new SpeechSynthesisUtterance(document.querySelector(`#speech-text${this.id}`).textContent);
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

  
  
  //   trackScroll() {
  //     let scrolled = window.pageYOffset;
  //     let coords = document.documentElement.clientHeight;
  //     const goTopBtn = document.querySelector('.back-to-top');
  
  //     if (scrolled > coords) {
  //       goTopBtn.classList.add('back_to_top-show');
  //     }
  //     if (scrolled < coords) {
  //       goTopBtn.classList.remove('back_to_top-show');
  //     }
  //   }
  
  //   backToTop() {
  //     if (window.pageYOffset > 0) {
  //       window.scrollBy(0, -80);
  //       setTimeout(backToTop, 0);
  //     }
  
  //   this.scrollMe();
  //   }

  // scrollMe() {
  //   window.addEventListener('scroll', trackScroll()); 
  //   goTopBtn.addEventListener('click', backToTop())
  // }
}





