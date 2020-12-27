import React, { useState } from 'react';
import AddForm from '../Components/AddForm';


function Search() {
  // const [data, setData] = useState([]);
  const [error] = useState(null);
  const [isLoaded] = useState(true);  

  if (error) {
    return <div>Error: {error.message} </div>;
  } else if(!isLoaded) {
    return <div>Loading....</div>;
  } else {
    return (
      <>
        <h1>Add A Book to Your Shelf</h1>
        <AddForm />
      </>
    )
  }
}

export default Search;