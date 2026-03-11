function loadComments(index){
    for (let i = 0; i < books[index].comments.length; i++) {
        let newCommentName = books[index].comments[i].name;
        let newComment = books[index].comments[i].comment;
        let locationID = "book-comments-" + index;
        let commentLocation = document.getElementById(locationID);
        commentLocation.innerHTML += `
        <div>
            <h3>${newCommentName}</h3>
            <p>${newComment}</p>
            <br>
        </div>
        `;
    }
}

function addComment(indexComment){
    let newCommentID = "comment-input-" + indexComment;
    let newComment = document.getElementById(newCommentID).value;
    let savedComment = {
    "name" : "You",
    };
    savedComment.push("comment" + ":" + newComment);

    books[indexComment].comments.comment.push(savedComment);
    console.log(books[indexComment].comments);
}