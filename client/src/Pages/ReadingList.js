import React from 'react';
import Link from '@material-ui/core/Link';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';
import { Column, Row, Item } from '@mui-treasury/components/flex';
import BookItem from '../Components/BookItem';

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
    color: '#d50000',
    padding: '0 0.25rem',
    fontSize: '0.875rem',
    textDecoration: 'none'
  },
  actions: {
    color: '#BDC9D7'
  },
  divider: {
    backgroundColor: '#d9e2ee',
    margin: '0 20px',
  }
}));

export const ReadingList = React.memo(function BookCard() {
  const styles = useStyles();
  return (
    <>
      <Column p={0} gap={0} className={styles.card}>
        <Row wrap p={2} alignItems={'baseline'} className={styles.header}>
          <Item stretched className={styles.headline}>Your Reading List</Item>
          <Item className={styles.actions}>
            <Link><a href="/search" className={styles.link}>Add Book</a></Link> •{' '}
            <Link className={styles.link}>See all</Link>
          </Item>
        </Row>
        <BookItem title={'Harry Potter and the Order of the Phoenix'} author={"JK Rowling"} src={'https://images-na.ssl-images-amazon.com/images/I/71xcuT33RpL._AC_SY879_.jpg'} />
        <Divider variant={'middle'} className={styles.divider} />
        <BookItem title={'Harry Potter and the Half Blood Prince'} author={"JK Rowling"} src={'https://images-na.ssl-images-amazon.com/images/I/71EwgGuAS9L._AC_SL1000_.jpg'} />
        <Divider variant={'middle'} className={styles.divider} />
        <BookItem title={'Harry Potter and the Deathly Hallows'} author={"JK Rowling"} src={'https://media.harrypotterfanzone.com/deathly-hallows-us-childrens-edition.jpg'} />
      </Column>
    </>
  );
});