import React from 'react';
import CurrentBook from '../Components/CurrentBook';

function Home() {
  return (
    <div>
      <h2>Currently Reading</h2>
      <CurrentBook />
    </div>
  );
}

export default Home;