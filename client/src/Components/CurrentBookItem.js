import React from 'react';
import cx from 'clsx';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { Row, Item } from '@mui-treasury/components/flex';
import { useDynamicAvatarStyles } from '@mui-treasury/styles/avatar/dynamic';
import { useFormik } from 'formik';

const useBookStyles = makeStyles(() => ({
  text: {
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
  },
  name: {
    fontWeight: 600,
    fontSize: '1rem',
    color: '#122740',
  },
  caption: {
    fontSize: '0.875rem',
    color: '#758392',
    marginTop: -4,
    maxWidth: 1000
  },
  btn: {
    borderRadius: 20,
    padding: '0.125rem 0.75rem',
    borderColor: '#becddc',
    fontSize: '0.75rem',
  },
}));

const CurrentBookItem = ({ id, src, title, author, desc, pageCount }) => {
  const avatarStyles = useDynamicAvatarStyles({ size: 70 });
  const styles = useBookStyles();
  
  function confirmAdd() {
    alert("Added book to your shelf!");
  }

  const formik = useFormik({
    initialValues: {
      title: title,
      author: author,
      desc: desc,
      img: src,
      current: "yes",
      pageCount: pageCount
    },
    onSubmit: (values) => {
      // alert('Currently Reading?');
      // setCurrent();
      fetch('http://localhost:8080/api/books/', {
        method: 'post',
        headers: new Headers({
          'Content-Type': 'application/json',
        }),
        body: JSON.stringify(values)
      })
      // .then(() => {
      //   console.log(values)
      // })
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <Row gap={2} p={2.5}>
        <Item>
          <Avatar classes={avatarStyles} src={src} id="img" name="img" value={src}/>
        </Item>
        <Row wrap grow gap={0.5} minWidth={0}>
          <Item grow minWidth={0}>
            <div className={cx(styles.name, styles.text)} style={{"display": "none"}} id="id" name="id" value={id}>{id}</div>
            <div className={cx(styles.name, styles.text)} id="title" name="title" value={title}>{title}</div>
            <div className={cx(styles.caption, styles.text)} id="author" name="author" value={author}>{author}</div>
            <div className={cx(styles.caption, styles.text)} id="desc" name="desc" value={desc}>{desc}</div>
          </Item>
          <Item position={'middle'}>
            <Button className={styles.btn} onClick={confirmAdd} variant={'outlined'} type="submit">
              Add to Shelf
            </Button>
          </Item>
        </Row>
      </Row>
    </form>
  );
};

export default CurrentBookItem;