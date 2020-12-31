import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';
import CircularProgress from './CircularProgress';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';
import { useFormik } from 'formik';


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '130%',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}


export default function CurrentBookCard(props) {
  
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [modalStyle] = React.useState(getModalStyle);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentPage, setCurrentPage] = React.useState(0);

  const formik = useFormik({
    initialValues: {
      currentPage: ''
    },
    onSubmit: (currentPage) => {
      fetch(``)
        .then(res => res.json())
        .then(
          (currentPage) => {
            setIsLoaded(true);
            setCurrentPage(currentPage);
          },
          (error) => {
            setIsLoaded(false);
            setError(error);
          }
        )
    },
  });
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title">Update Your Progress</h2>
      <p id="simple-modal-description">
        <TextField 
          id="currentPage"
          name="currentPage"
          value={formik.values.currentPage}
          onChange={formik.handleChange}
        />
      </p>
      <Modal />
    </div>
  );

  
  return (
    <>
    <Card className={classes.root}>
      <CardHeader
        title={props.title}
        subheader={props.author}
      />
      <CardMedia
        className={classes.media}
        image={props.img}
        title="Book Cover"
      />
      <CircularProgress />
      <Button onClick={handleOpen}>Update Progress</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
      <CardActions disableSpacing>
        Book Description
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.desc}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
    </>
  );
}
