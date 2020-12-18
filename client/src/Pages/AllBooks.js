import React, { useState, useEffect } from 'react';
import './AllBooks.css';
import Button from '@material-ui/core/Button';

import BookCard from '../Components/BookCard';

function AllBooks(props) {
  const [books, setBooks] = useState([]);  
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

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
    books.splice(id, 1); 
    setBooks([...books]);
    
  }
  return (
    <>
      <h2>Your 2020 Shelf</h2>
      <div className="bookList">
        {books.map((book, idx) => (
          <>
          <BookCard 
            key={idx}
            id={book._id}
            title={book.title}
            img={book.img}
            author={book.author}
            rating={book.rating}
            onDelete={deleteBook.bind(this, book._id)}
          />
          </>
        ))}
      </div>
    </>
  );
}

export default AllBooks;

// TODO: add loading and error rendering