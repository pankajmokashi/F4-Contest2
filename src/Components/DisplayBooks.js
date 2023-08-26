const DisplayBooks = (props) => {
    return(
        <div className="books-container">
            <h1>Books</h1>
            {
                props.books ?
                <div className="books">
                {
                    props.books.map((book) => (
                        <div key={book.id} className="book">
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
                </div>  :
                <h2>Books Unavailable</h2>
            }  
        </div>
        
    )
}

export default DisplayBooks