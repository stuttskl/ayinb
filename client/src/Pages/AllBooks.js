import React, { useState } from 'react';
import './AllBooks.css';

import BookCard from '../Components/BookCard';

function AllBooks(props) {
  const books = [
    {
      id: 0,
      title: "Harry Potter and the Sorcers Stone",
      author: "JK Rowling",
      img: "https://images-na.ssl-images-amazon.com/images/I/71-%2B%2BhbbERL._AC_SL1000_.jpg",
      rating: 4,
      startDate: "MM/DD/YYYY",
      endDate: "MM/DD/YYY"
    }, 
    {
      id: 1,
      title: "Harry Potter and the Chamber of Secrets",
      author: "JK Rowling",
      img: "https://imagesvc.meredithcorp.io/v3/mm/image?q=85&c=sc&poi=face&w=405&h=540&url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2016%2F09%2Fhpchamber.jpg",
      rating: 2,
      startDate: "MM/DD/YYYY",
      endDate: "MM/DD/YYY"
    }, 
    {
      id: 2,
      title: "Harry Potter and the Prisoner of Azkaban",
      author: "JK Rowling",
      img: "https://images-na.ssl-images-amazon.com/images/I/71s7RjLd3fL._AC_SY741_.jpg",
      rating: 5,
      startDate: "MM/DD/YYYY",
      endDate: "MM/DD/YYY"
    }, 
    {
      id: 3,
      title: "Harry Potter and the Goblet of Fire",
      author: "JK Rowling",
      img: "https://images-na.ssl-images-amazon.com/images/I/71ykU-RQ0nL._AC_SY741_.jpg",
      rating: 4,
      startDate: "MM/DD/YYYY",
      endDate: "MM/DD/YYY"
    }, 
    {
      id: 4,
      title: "Harry Potter and the Order of the Phoenix",
      author: "JK Rowling",
      img: "https://images-na.ssl-images-amazon.com/images/I/71xcuT33RpL._AC_SY879_.jpg",
      rating: 4,
      startDate: "MM/DD/YYYY",
      endDate: "MM/DD/YYY"
    }, 
    {
      id: 5,
      title: "Becoming",
      author: "Michelle Obama",
      img: "https://images-na.ssl-images-amazon.com/images/I/81h2gWPTYJL.jpg",
      rating: 5,
      startDate: "MM/DD/YYYY",
      endDate: "MM/DD/YYY"
    },
    {
      id: 6,
      title: "A Warning",
      author: "Anonymous",
      img: "https://images-na.ssl-images-amazon.com/images/I/31g5kQFQJoL._SX329_BO1,204,203,200_.jpg",
      rating: 2,
      startDate: "MM/DD/YYYY",
      endDate: "MM/DD/YYY"
    },
  ];

  return (
    <>
      <h2>Your 2020 Shelf</h2>
      <div className="bookList">
        {books.map((book, index) => (
          <BookCard 
            title={book.title}
            img={book.img}
            author={book.author}
            rating={book.rating}
          />
        ))}
      </div>
    </>
  );
}

export default AllBooks;