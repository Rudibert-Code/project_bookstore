let likedByU = false;

function toggleLikes(index){
    if (likedByU == false) {
        likedByU = true;
        let bookID = "book-likes-" + index;
        let bookLikes = document.getElementById(bookID).innerHTML;
        bookLikes++;
        document.getElementById(bookID).innerHTML = bookLikes;
    } else{
        likedByU = false;
        let bookID = "book-likes-" + index;
        let bookLikes = document.getElementById(bookID).innerHTML;
        bookLikes--;
        document.getElementById(bookID).innerHTML = bookLikes;
    }
}