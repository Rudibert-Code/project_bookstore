let currentPrice;

function  renderPrice(index){
    currentPrice = books[index].price;
    currentPrice.toFixed(2);
    let bookPriceID = "book-price-" + index;
    document.getElementById(bookPriceID).innerHTML = currentPrice +"€";
}