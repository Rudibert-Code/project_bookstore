function bookDetails(name, price, likes, author, releaseDate, genre, i){
document.getElementById('main-container').innerHTML += `
            <section class="book-base" id="book-${i}">

                <h2 id="book-title-">${name}</h2>

                <div class="separator"></div>

                <img class="icon-book" src="./assets/img/icon-book.png" alt="">

                <div class="separator"></div>

                <section class="price-n-likes">
                    <p id="book-price-${i}"></p>
                    <div class="book-likes">
                        <p id="book-likes-${i}">${likes}</p>
                        <a href="#" onclick="toggleLikes(${i})"><img id="book-likes-icon-${i}" class="icon-like" src="./assets/img/icon-like-off.png" alt=""></a>
                    </div>
                </section>

                <section class="book-info">
                    <table class="book-info-table">
                        <tr>
                            <th>Author</th>
                            <td>: ${author}</td>
                        </tr>
                        <tr>
                            <th>Release Date</th>
                            <td>: ${releaseDate}</td>
                        </tr>
                        <tr>
                            <th>Genre</th>
                            <td>: ${genre}</td>
                        </tr>
                    </table>
                </section>

                <div class="separator"></div>

                <section class="book-comments" id="book-comments-${i}">
                </section>

                <section class="book-footer">
                    <input class="book-comment-input" id="comment-input-${i}" type="text" value="enter your comment...">
                    <a href="#" onclick="addComment(${i})"><img class="icon-submit" src="./assets/img/ivon-submit.png" alt=""></a>
                </section>

            </section>
           `;
           renderFirstLicke(i);
           renderPrice(i);
           loadComments(i);
}