let currentPrice;

function  renderPrice(index){
    currentPrice = books[index].price;
    let extendedNumber = currentPrice + 0.0001; 
    let fixedPrice = extendedNumber.toFixed(2);
    let bookPriceID = "book-price-" + index;
    document.getElementById(bookPriceID).innerHTML = fixedPrice +"€";
}