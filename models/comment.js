class Comment {

    constructor(id, commenter, content, quote_id){
        this.id = id 
        this.commenter = commenter 
        this.content = content 
        this.quote_id = quote_id
        
    }

    static loadComments(){
        fetch(`http://localhost:3000/quotes/${this.quote_id}/comments`)
        .then(response => response.json())
        .then(comments => {
            for (const comment of comments) {
                const{id, commenter, content, quote_id} = comment 
                let c = new Comment(id, commenter, content, quote_id )
                c.displayComment()
            }
        })
       
    }

    commentHtml() {
       return ` 
        <div class="w3-card w3-margin">
            <ul class="w3-ul w3-white">
            <span class="w3-large" id="comment-text${this.quote_id}">"${this.content}"</span><br>
                <span>-${this.commenter}</span>
            `
    }

    displayComment() {
        const commentContainer = document.getElementById("comment-spot")
        const commentCard = document.createElement('li')
        commentCard.id = this.quote_id
        commentCard.innerHTML += this.commentHtml()
        commentContainer.appendChild(commentCard)
    }

}   
