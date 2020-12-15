import React, { useState } from 'react';
import SearchForm from '../Components/SearchForm'


function Search() {
  const [error] = useState(null);
  const [isLoaded] = useState(true);

  if (error) {
    return <div>Error: {error.message} </div>;
  } else if(!isLoaded) {
    return <div>Loading....</div>;
  } else {
    return (
      <>
      <SearchForm />
      </>
    )
  }
}

export default Search;