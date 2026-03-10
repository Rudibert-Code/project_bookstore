function addComment(indexComment){
    let newCommentID = "comment-input-" + indexComment;
    let newComment = document.getElementById(newCommentID).value;

    let commentContainer = document.getElementById('my-comment');
    commentContainer.innerHTML += newComment;
}