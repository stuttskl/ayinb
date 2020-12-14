import React, { useEffect, useState } from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import { Column, Row, Item } from '@mui-treasury/components/flex';
import BookItem from '../Components/BookItem';
import TextField from '@material-ui/core/TextField';
import { useFormik } from 'formik';
import SearchForm from '../Components/SearchForm'
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
  const [isLoaded, setIsLoaded] = useState(true);
  const styles = useStyles();
  

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