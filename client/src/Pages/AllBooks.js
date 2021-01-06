import React, { useState, useEffect } from 'react';
import BookCard from '../Components/BookCard';

import './AllBooks.css';

function AllBooks(props) {
  const [books, setBooks] = useState([]);  
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [rating, setRating] = useState();

  // let baseURL = "https://ayib-api.herokuapp.com/api/books/";
  let localURL = "http://localhost:8080/api/books/";

  useEffect(() => {
    fetch(localURL)
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setBooks(result);
      },
      (error) => {
        setIsLoaded(true);
        setError(error);
      }
    )
  }, [])

  function deleteBook(id) {
    console.log("inside of delete book")
    fetch(localURL + `${id}`, 
    {
      method: 'delete'
    });
    const newbooks = books.filter(book => book._id !== id);
    setBooks([...newbooks])
  }

  function updateRating(e) {
    console.log("inside of update rating")
    var newRating = e.target.value; 
    var bookIdToUpdate = e.target.parentElement.id;
    fetch(localURL + `${bookIdToUpdate}`,
    {
      method: 'put',
      headers: new Headers({
       'Content-Type': 'application/json',
      }),
     body: JSON.stringify( {rating: newRating} )
    });
    const newbooks = books.map(book =>
      (book._id === bookIdToUpdate) ? {...book, rating: newRating} : book)
      setBooks([...newbooks]) 
  }

  return ( 
    <>
      <h2>Your Shelf</h2>
      <div className="bookList">
        {books.map((book, id) => (
          <>
            <BookCard 
              key={book._id}
              id={book._id}
              title={book.title}
              img={book.img}
              pageCount={book.pageCount}
              author={book.author}
              rating={book.rating}
              onDelete={deleteBook.bind(this, book._id)}
              onUpdate={updateRating.bind(this)}
            />
          </>
        ))}
      </div>
    </>
  );
}

export default AllBooks;
