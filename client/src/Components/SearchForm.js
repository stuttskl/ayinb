import React, { useState } from 'react';
import { useFormik } from 'formik';
// import * as yup from 'yup';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import BookItem from '../Components/BookItem';
import { Column, Row, Item } from '@mui-treasury/components/flex';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';

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

export default function SearchForm() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(true);
  const styles = useStyles();

  const formik = useFormik({
    initialValues: {
      query: ''
    },
    // validationSchema: validationSchema,
    onSubmit: (query) => {
      query = query["query"]
      fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=20`)
        .then(res => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            setData(result.items);
          },
          (error) => {
            setIsLoaded(false);
            setError(error);
          }
        )
    },
  });
  // TODO: fix this block so that the loading and error are based on the api call, not the page loading
  // if (error) {
  //   return <div>Error: {error.message} </div>;
  // } else if(!isLoaded) {
  //   return <div>Loading....</div>;
  // } else {
  return (
    <div>
      <h1>Search for a Book</h1>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          id="query"
          name="query"
          label="query"
          value={formik.values.query}
          onChange={formik.handleChange}
        />
        <Button color="primary" variant="contained" fullWidth type="submit">
          Submit
        </Button>
      </form>
      <Column p={0} gap={0} className={styles.card}>
        {data.map(item => (
          <BookItem 
            // id={item.id}
            title={item.volumeInfo.title} 
            author={item.volumeInfo.authors} 
            src={item.volumeInfo.imageLinks.thumbnail} 
            desc={item.volumeInfo.description} // TODO: fix desc so that it wraps
          />
        ))}
      </Column>
    </div>
    );
};