function init(){
    renderBookList();
}

function renderBookList(){
    for (let i = 0; i < books.length; i++) {
        let name = books[i].name;
        let price = books[i].price;
        let likes = books[i].likes;
        let isLiked = books[i].liked;
        let author = books[i].author;
        let releaseDate = books[i].publishedYear;
        let genre = books[i].genre;
        bookDetails(name, price, likes, author, releaseDate, genre, i);
        //loadComments(i);
    }
}


