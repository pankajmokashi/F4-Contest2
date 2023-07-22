
const Current = ({book, books}) => {
    return(
        <div className="current-book">
            {
                book ?
                <div className="book-details">
                    <div className="book-img">
                        <img src={book.volumeInfo.imageLinks.thumbnail} alt=""></img>
                    </div>
                    <div className="details">
                        <div className="title">
                            {book.volumeInfo.title}
                        </div>
                        <div className="authors">
                            {book.volumeInfo.authors.join(" , ")}
                        </div>
                        <div className="book-ratings">
                            <div className="avg">Avg rating : {book.volumeInfo.averageRating}</div>
                            <div>Rating Count : {book.volumeInfo.ratingsCount}</div>
                            <div>Publisher : {book.volumeInfo.publisher}</div>
                            <div>Language : {book.volumeInfo.language}</div>
                        </div>
                    </div>
                    <div className="published">
                        <div className="date">Published On : {book.volumeInfo.publishedDate}</div>
                        <div>
                            <a href={book.volumeInfo.previewLink}><button>Now read!</button></a>
                            <a href={book.volumeInfo.infoLink}><button>More Info!</button></a>
                        </div>
                    </div>
                </div> :
                <div className="show-books">
                    {
                        books.sort(() => Math.random() - Math.random()).slice(0, 2).map((item) =>
                            <div className="show-details">
                                <div className="show-img">
                                    <img src={item.volumeInfo.imageLinks.thumbnail} alt=""></img>
                                </div>
                                <div className="show-desc">
                                    <div className="show-title">
                                        {item.volumeInfo.title}
                                    </div>
                                    <div className="description">
                                        {/* {item.volumeInfo.description} */}
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                                        nisi ut aliquip ex ea commodo consequat.
                                    </div>
                                    <div className="nowread-button">
                                    <a href={item.volumeInfo.previewLink}><button>Now read!</button></a>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                    
                </div>
            }
        </div>
    )
}

export default Current;