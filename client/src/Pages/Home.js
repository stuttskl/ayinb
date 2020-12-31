import React, { useState, useEffect } from 'react';
import CurrentBook from '../Components/CurrentBook';

function Home() {
  const [currentBook, setCurrentBook] = useState([]);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch("http://localhost:8080/api/books/current")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setCurrentBook(result);
      },
      (error) => {
        setIsLoaded(true);
        setError(error);
      }
    )
  }, [])
  
  return (
    <div>
      <h2>Currently Reading</h2>
      {currentBook.map((field) => (
        <CurrentBook 
          key={field._id}
          title={field.title}
          img={field.img}
          author={field.author}
          desc={field.desc === undefined ? "No book description" : "No book description"}
        />
      ))}
      
    </div>
  );
}

export default Home;