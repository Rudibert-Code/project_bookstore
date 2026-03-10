function toggleLikes(index){
    let bookID = "book-likes-" + index;
    let bookLikes = document.getElementById(bookID).innerHTML;
    bookLikes++;
    document.getElementById(bookID).innerHTML = bookLikes;
}