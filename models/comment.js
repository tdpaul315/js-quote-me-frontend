class Comment {

    constructor(id, commenter, content, quote_id){
        this.id = id 
        this.commenter = commenter 
        this.content = content 
        this.quote_id = quote_id
        this.displayComment()
        
    }
       
    

    commentHtml() {
       return ` 
        <div class="w3-card w3-margin">
            <ul class="w3-ul w3-teal">
            <span class="w3-large">"${this.content}"</span><br>
                <span>-${this.commenter}</span>
            `
    }

    displayComment() {
        let commentContainer = document.getElementById(`comment-container-${this.quote_id}`)
        let commentCard = document.createElement('li')
        commentCard.id = this.id
        commentCard.innerHTML += this.commentHtml()
        commentContainer.appendChild(commentCard)
    }

       

    

    

}   
