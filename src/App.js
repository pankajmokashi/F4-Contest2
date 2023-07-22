import React, { useState, useEffect } from 'react';
import Navbar from './Components/Navbar';
import Current from './Components/Current';
import DisplayBooks from './Components/DisplayBooks';

const App = () => {
  
  const [bookData, setBookData] = useState([]);
  let [searchString, setSearchString] = useState("");
  let [selectedBook, setSelectedBook] = useState("")

  useEffect(() => {

    fetch('https://www.googleapis.com/books/v1/volumes?q=harry+potter')
      .then((response) => response.json())
      .then((data) => {
        setBookData((prevData) => [...prevData, ...data.items]);
      })
      .catch((error) => console.error('Error fetching Harry Potter data:', error));


    fetch('https://www.googleapis.com/books/v1/volumes?q=Sherlock+Holmes')
      .then((response) => response.json())
      .then((data) => {
        setBookData((prevData) => [...prevData, ...data.items]);
      })
      .catch((error) => console.error('Error fetching Sherlock Holmes data:', error));
  }, []);

  useEffect(() => {
    if(searchString){
      fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchString}`)
      .then((response) => response.json())
      .then((data) => {
        setBookData(data.items);
      })
      .catch((error) => console.error('Error fetching Sherlock Holmes data:', error));
    }
  }, [searchString])

  return (
    <div className='container'>
      <Navbar changeState={setSearchString} />
      <Current books={bookData} book={selectedBook} />
      {
        bookData.length > 0 &&
        <DisplayBooks books={bookData} clickedBook={setSelectedBook} />
      }
    </div>
  );
};

export default App;
