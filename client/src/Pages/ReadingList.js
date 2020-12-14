import React from 'react';
import cx from 'clsx';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';
import { Column, Row, Item } from '@mui-treasury/components/flex';
import { useDynamicAvatarStyles } from '@mui-treasury/styles/avatar/dynamic';
import BookItem from '../Components/BookItem';

// const useBookStyles = makeStyles(() => ({
//   text: {
//     whiteSpace: 'nowrap',
//     textOverflow: 'ellipsis',
//     overflow: 'hidden',
//   },
//   name: {
//     fontWeight: 600,
//     fontSize: '1rem',
//     color: '#122740',
//   },
//   caption: {
//     fontSize: '0.875rem',
//     color: '#758392',
//     marginTop: -4,
//   },
//   btn: {
//     borderRadius: 20,
//     padding: '0.125rem 0.75rem',
//     borderColor: '#becddc',
//     fontSize: '0.75rem',
//   },
// }));

// const BookItem = ({ src, title, author }) => {
//   const avatarStyles = useDynamicAvatarStyles({ size: 70 });
//   const styles = useBookStyles();
//   return (
//     <Row gap={2} p={2.5}>
//       <Item>
//         <Avatar classes={avatarStyles} src={src} />
//       </Item>
//       <Row wrap grow gap={0.5} minWidth={0}>
//         <Item grow minWidth={0}>
//           <div className={cx(styles.name, styles.text)}>{title}</div>
//           <div className={cx(styles.caption, styles.text)}>{author}</div>
//         </Item>
//         <Item position={'middle'}>
//           <Button className={styles.btn} variant={'outlined'}>
//             Add to Shelf
//           </Button>
//         </Item>
//       </Row>
//     </Row>
//   );
// };

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

export const ReadingList = React.memo(function BookCard() {
  const styles = useStyles();
  return (
    <>
      <Column p={0} gap={0} className={styles.card}>
        <Row wrap p={2} alignItems={'baseline'} className={styles.header}>
          <Item stretched className={styles.headline}>Your Reading List</Item>
          <Item className={styles.actions}>
            <Link className={styles.link}>Add Book</Link> •{' '}
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