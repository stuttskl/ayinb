import React, { useState } from 'react';
import CurrentBook from '../Components/CurrentBook';

function Home() {
  const [title] = useState("Harry Potter and the Order of the Phoenix")
  const [author] = useState("JK Rowling")
  const [img] = useState("https://images-na.ssl-images-amazon.com/images/I/71xcuT33RpL._AC_SY879_.jpg")
  const [desc] = useState("'You are sharing the Dark Lord's thoughts and emotions. The Headmaster thinks it inadvisable for this to continue. He wishes me to teach you how to close your mind to the Dark Lord.' Dark times have come to Hogwarts. After the Dementors' attack on his cousin Dudley, Harry Potter knows that Voldemort will stop at nothing to find him. There are many who deny the Dark Lord's return, but Harry is not alone: a secret order gathers at Grimmauld Place to fight against the Dark forces. Harry must allow Professor Snape to teach him how to protect himself from Voldemort's savage assaults on his mind. But they are growing stronger by the day and Harry is running out of time...")

  // get all current book information from db here 
  return (
    <div>
      <h2>Currently Reading</h2>
      <CurrentBook 
        title={title}
        author={author}
        img={img}
        desc={desc}
      />
    </div>
  );
}

export default Home;