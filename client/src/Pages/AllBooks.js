import React, { useState, useEffect } from 'react';
import './AllBooks.css';
import Button from '@material-ui/core/Button';

import BookCard from '../Components/BookCard';

function AllBooks(props) {
  const [books, setBooks] = useState([]);  
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [rating, setRating] = useState();

  useEffect(() => {
    fetch(`http://localhost:8080/api/books/`)
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
    fetch(`http://localhost:8080/api/books/${id}`, 
    {
      method: 'delete'
    });
    const newbooks = books.filter(book => book._id !== id);
    setBooks([...newbooks])
  }

  function updateRating(newRating) {
    // console.log(e.target.value)
    // setRating(newRating);
    console.log("inside of updating rating in AllBooks")
    console.log("passed in rating is: ")
    console.log(newRating)
    console.log(props.id)
    fetch(`http://localhost:8080/api/books/${props.id}`, 
    {
      method: 'put',
      headers: new Headers({
       'Content-Type': 'application/json',
      }),
     body: JSON.stringify( {rating: newRating} )
    });
    // const newbooks = books.filter(book => book._id !== newRating.id);
    // setBooks([...newbooks])
  }

  return (
    <>
      <h2>Your 2020 Shelf</h2>
      <div className="bookList">
        {books.map((book, idx) => (
          <>
          <BookCard 
            key={book._id}
            id={book._id}
            title={book.title}
            img={book.img}
            author={book.author}
            // rating={book.rating}
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
