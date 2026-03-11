let currentPrice;

// pull book-price-number from object, then depict number up to 2 decimals.
function  renderPrice(index){
    currentPrice = books[index].price; 
    let fixedPrice = currentPrice.toFixed(2);
    let fixedfixedPrice = fixedPrice.replace(".", ",");
    let bookPriceID = "book-price-" + index;
    document.getElementById(bookPriceID).innerHTML = fixedfixedPrice +"€";
}