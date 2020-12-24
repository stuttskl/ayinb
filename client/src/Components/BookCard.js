import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Rating from '@material-ui/lab/Rating';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import DeleteIcon from '@material-ui/icons/Delete';
import './BookCard.css';
import EditIcon from '@material-ui/icons/Edit';

const useStyles = makeStyles({
  root: {
    borderRadius: 12,
    maxWidth: 154,
    padding: 12,
    margin: 'auto',
  },
  media: {
    borderRadius: 6,
    height: 200,
    width: 150,
    margin: 12
  },
});

export default function BookCard(props) {
  const classes = useStyles();
    return (
    <Card className="book" id={props.id} borderTop={10}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.img}
          title=""
        />
        <CardContent className={classes.root}>
          {/* <p>{props.id}</p> */}
          <Typography gutterBottom variant="p" component="h3">
            {props.title}
          </Typography>
          <Typography gutterBottom variant="overline" component="overline">
            {props.author}
          </Typography>
          <Box>
            <Rating 
              name="controlled" 
              value={props.rating}
              onChange={props.updateRating}
              // onUpdate={(event, newRating) => {updateRating(newRating)}}
            />
          </Box>
        </CardContent>
        <Button onClick={props.onDelete}><DeleteIcon /></Button>
        {/* <Button onClick={props.onUpdate}><EditIcon /></Button> */}
      </CardActionArea>
    </Card>
  );
}
