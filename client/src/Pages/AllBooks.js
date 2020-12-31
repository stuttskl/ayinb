import React, { useState, useEffect } from 'react';
import './AllBooks.css';
import BookCard from '../Components/BookCard';

function AllBooks(props) {
  const [books, setBooks] = useState([]);  
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [rating, setRating] = useState();

  let baseURL = "https://ayib-api.herokuapp.com/api/books/";
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
    fetch(localURL + `${id}`, 
    {
      method: 'delete'
    });
    const newbooks = books.filter(book => book._id !== id);
    setBooks([...newbooks])
  }

  function updateRating(e) {
    var newRating = e.target.value; 
    var bookIdToUpdate = e.target.parentElement.id
    console.log(e.target.parentElement.id)
    fetch(localURL + `${bookIdToUpdate}`,
    {
      method: 'put',
      headers: new Headers({
       'Content-Type': 'application/json',
      }),
     body: JSON.stringify( {rating: newRating} )
    });
    const newbooks = books.map(book =>
      (book._id === bookIdToUpdate) // if the id of the book matches the id of the book to update
      ? {...book, rating: newRating} // using spread operator, set rating to new rating
      : book // or just use all object data and vals
      )
    setBooks([...newbooks]) // lastly update and set new state
  }

  return ( 
    <>
      <h2>Your 2020 Shelf</h2>
      <div className="bookList">
        {books.map((book, id) => (
          <>
            <BookCard 
              key={book._id}
              id={book._id}
              title={book.title}
              img={book.img}
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
