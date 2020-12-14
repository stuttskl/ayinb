import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import './BookCard.css';

const useStyles = makeStyles({
  root: {
    borderRadius: 12,
    maxWidth: 300,
    padding: 12,
    margin: 'auto',
  },
  media: {
    borderRadius: 6,
    height: 375,
    width: 300,
    margin: 12
  },
});

export default function BookCard(props) {
  const classes = useStyles();

  return (
    <Card id="book" borderTop={10}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.img}
          title=""
        />
        <CardContent className={classes.root}>
          <Typography gutterBottom variant="h5" component="h2">
            {props.title}
          </Typography>
          <Typography gutterBottom variant="overline" component="overline">
            {props.author}
          </Typography>
          <Box>
            <Rating name="read-only" value={props.rating} readOnly />
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
