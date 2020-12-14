import React, { useEffect, useState } from 'react';
import cx from 'clsx';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';
import { Column, Row, Item } from '@mui-treasury/components/flex';
import BookItem from '../Components/BookItem';
import { useDynamicAvatarStyles } from '@mui-treasury/styles/avatar/dynamic';
import TextField from '@material-ui/core/TextField';
require('dotenv').config();

const useStyles = makeStyles(() => ({
  card: {
    width: '100%',
    borderRadius: 6,
    boxShadow: '0 4px 8px 0 #BDC9D7',
    overflow: 'hidden',
  },
  header: {
    backgroundColor: '#fff',
  },
  headline: {
    color: '#122740',
    fontSize: '1.25rem',
    fontWeight: 600,
  },
  link: {
    color: '#2281bb',
    padding: '0 0.25rem',
    fontSize: '0.875rem',
  },
  actions: {
    color: '#BDC9D7'
  },
  divider: {
    backgroundColor: '#d9e2ee',
    margin: '0 20px',
  }
}));

function Search() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const styles = useStyles();
  useEffect(() => {
    // fetch("http://localhost:9000/search")
    fetch(`https://www.googleapis.com/books/v1/volumes?q=harry+potter&maxResults=40`)
    .then(res => res.json())
    .then(
      (result) => {
        // console.log(result.items[0].volumeInfo["title"])
        setIsLoaded(true);
        setData(result.items);
        // console.log(result.items)
      },
      (error) => {
        setIsLoaded(true);
        setError(error);
      }
    )
  }, [])

  if (error) {
    return <div>Error: {error.message} </div>;
  } else if(!isLoaded) {
    return <div>Loading....</div>;
  } else {
    return (
      <>
      <Column p={0} gap={0} className={styles.card}>
        <Row wrap p={2} alignItems={'baseline'} className={styles.header}>
          <Item stretched className={styles.headline}>Search Results</Item>
          <Item className={styles.actions}>
            <Link className={styles.link}>Add Book</Link> •{' '}
            <Link className={styles.link}>See all</Link>
          </Item>
        </Row>
        {data.map(item => (
          <BookItem 
            title={item.volumeInfo.title} 
            author={item.volumeInfo.authors} 
            src={item.volumeInfo.imageLinks.smallThumbnail} 
            desc={item.volumeInfo.description}
          />
        ))}
      </Column>
      <form>
      <TextField 
        id="search" 
        label="" 
        placeholder="Search for a book"
      />
      {/* <button onClick={}>Search</button> */}
      </form>
      </>
    )
  }
}

export default Search;