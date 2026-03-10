let likedByU;

function toggleLikes(index){
    likedByU = books[index].liked;
    let bookID = "book-likes-" + index;
    let bookLikes = document.getElementById(bookID).innerHTML;
    if (likedByU == false) {
        bookLikes++;
        document.getElementById(bookID).innerHTML = bookLikes;
    } else{
        bookLikes--;
        document.getElementById(bookID).innerHTML = bookLikes;
    }
    switchLikedIcon(index);
}

function switchLikedIcon(index){
    let iconID = "book-likes-icon-" + index;
    if (likedByU == false) {
        document.getElementById(iconID).src="./assets/img/icon-like-on.png";
        books[index].liked = true;
    } else{
        document.getElementById(iconID).src="./assets/img/icon-like-off.png";
        books[index].liked = false;
    }
}