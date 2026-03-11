
// pull comments from object, then add them to 1st render.
function loadComments(index){
    let locationID = "book-comments-" + index;
    let commentLocation = document.getElementById(locationID);
    commentLocation.innerHTML = "";
    for (let i = 0; i < books[index].comments.length; i++) {
        let newCommentName = books[index].comments[i].name;
        let newComment = books[index].comments[i].comment;
        commentLocation.innerHTML += `
        <div>
            <h3>${newCommentName}</h3>
            <p>${newComment}</p>
            <br>
        </div>
        `;
    }
    saveData();
}


function addComment(indexComment){
    let inputID = "comment-input-" + indexComment;
    let newComment = document.getElementById(inputID).value;
    let savedComment = {"name": "You", "comment": newComment}
    books[indexComment].comments.push(savedComment);
    loadComments(indexComment);
}