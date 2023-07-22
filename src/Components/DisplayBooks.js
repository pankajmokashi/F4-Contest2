const DisplayBooks = (props) => {
    console.log("books:", props.books)
    return(
        <div className="books-container">
            <h1>Books</h1>
            <div className="books">
            {
                props.books.map((book) => (
                    <div className="book">
                        {
                            book.volumeInfo.imageLinks ?
                            <div className="img-div"  onClick={() => props.clickedBook(book)}>
                            <img src={book.volumeInfo.imageLinks.thumbnail} alt="img"></img>
                            </div>:
                            <div className="unavailable">Unavailable</div>
                        }
                    </div>
                ))
            }
            </div>
        </div>
        
    )
}

export default DisplayBooks