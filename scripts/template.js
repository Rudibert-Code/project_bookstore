function bookDetails(){
document.getElementById('main-container').innerHTML += `
            <section class="book-base" id="book-">
                <h2 id="book-title-">Placeholder Title</h2>
                <div class="separator"></div>
                <img class="icon-book" src="./assets/img/icon-book.png" alt="">
                <div class="separator"></div>
                <section class="price-n-likes">
                    <p id="book-price">100,50€</p>
                    <div class="book-likes">
                        <p id="book-likes">1234</p>
                        <a href="#" onclick="toggleLikes()"><img class="icon-like" src="./assets/img/icon-like-on.png" alt=""></a>
                    </div>
                </section>
                <section class="book-info">
                    <table>
                        <th>Author :</th>
                        <td>Name</td>
                    </table>
                </section>
                <div class="separator"></div>
                <section class="book-comments" id="book-comments">
                    <h3>Comments</h3>
                    <p id="my-comment">It is a book of all time 100%.</p>
                </section>
                <section class="book-footer">
                    <input class="book-comment-input" type="text" value="enter your comment...">
                    <a href="#" onclick="addComment()"><img class="icon-submit" src="./assets/img/ivon-submit.png" alt=""></a>
                </section>
            </section>
           `;
}