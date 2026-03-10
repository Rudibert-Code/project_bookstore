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
    switchLikedIcon(index);
}

function switchLikedIcon(index){
    let iconID = "book-likes-icon-" + index;
    if (likedByU == true) {
        document.getElementById(iconID).src="./assets/img/icon-like-on.png";
    } else{
        document.getElementById(iconID).src="./assets/img/icon-like-off.png";
    }
}