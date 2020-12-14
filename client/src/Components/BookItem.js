import React from 'react';
import cx from 'clsx';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';
import { Column, Row, Item } from '@mui-treasury/components/flex';
import { useDynamicAvatarStyles } from '@mui-treasury/styles/avatar/dynamic';

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

const BookItem = ({ src, title, author, desc }) => {
  const avatarStyles = useDynamicAvatarStyles({ size: 70 });
  const styles = useBookStyles();
  return (
    <Row gap={2} p={2.5}>
      <Item>
        <Avatar classes={avatarStyles} src={src} />
      </Item>
      <Row wrap grow gap={0.5} minWidth={0}>
        <Item grow minWidth={0}>
          <div className={cx(styles.name, styles.text)}>{title}</div>
          <div className={cx(styles.caption, styles.text)}>{author}</div>
          <div className={cx(styles.caption, styles.text)}>{desc}</div>
        </Item>
        <Item position={'middle'}>
          <Button className={styles.btn} variant={'outlined'}>
            Add to Shelf
          </Button>
        </Item>
      </Row>
    </Row>
  );
};

export default BookItem;