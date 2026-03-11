let currentPrice;

// pull book-price-number from object, extend number by .0001, then depict number up to 2 decimals.
function  renderPrice(index){
    currentPrice = books[index].price;
    let extendedNumber = currentPrice + 0.0001; 
    let fixedPrice = extendedNumber.toFixed(2);
    let bookPriceID = "book-price-" + index;
    document.getElementById(bookPriceID).innerHTML = fixedPrice +"€";
}