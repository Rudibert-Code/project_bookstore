let likedByU;

// check object if book is liked and turn Like-Icon on/off after 1st render. 
function renderFirstLicke(index){
    likedByU = books[index].liked;
    let iconID = "book-likes-icon-" + index;
    if (likedByU == false) {
        document.getElementById(iconID).src="./assets/img/icon-like-off.png";
    } else{
        document.getElementById(iconID).src="./assets/img/icon-like-on.png";
    }
}

// on click check object if book is liked, then increase or decrease likes-number... 
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

// ...and turn Like-Icon on/off.
function switchLikedIcon(index){
    let iconID = "book-likes-icon-" + index;
    if (likedByU == false) {
        document.getElementById(iconID).src="./assets/img/icon-like-on.png";
        books[index].liked = true;
    } else{
        document.getElementById(iconID).src="./assets/img/icon-like-off.png";
        books[index].liked = false;
    }
    saveData();
}