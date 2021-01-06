import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import * as Yup from 'yup';
import { useFormik } from 'formik';
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

let localURL = "http://localhost:8080/api/books/";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 280,
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

const validationSchema = Yup.object().shape({
  currentPage: Yup.number()
  .required('Current page required!'),
});

export default function CurrentBookCard(props) {
  
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [modalStyle] = React.useState(getModalStyle);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentPage, setCurrentPage] = React.useState();


  // useEffect(() => {
  //   console.log('mounted')
  // }, [props.currentPage]);

  const formik = useFormik({
    initialValues: {
      currentPage: ''
    },
    validationSchema: validationSchema,
    // handleChange: (e) => {
    //   console.log("inside of handle change current page")
    //   const target = e.target;
    //   setCurrentPage(target);
    // },
    onSubmit: (e) => {
      handleClose();
      let currentPage = e.currentPage;
      let bookIdToUpdate = props.id;
      
      fetch(localURL + `${bookIdToUpdate}`, 
      {
        method: 'put',
        headers: new Headers({
          'Content-Type': 'application/json',
        }),
        body: JSON.stringify( {currentPage: currentPage} )
      })
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

  const handleOpen = () => { setOpen(true); };

  const handleClose = () => { setOpen(false); };

  const handleExpandClick = () => { setExpanded(!expanded); };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title">Update Your Progress</h2>
      <p id="simple-modal-description">
        Currently on
        <TextField 
          id="currentPage"
          name="currentPage"
          value={currentPage} 
          onChange={formik.handleChange}
          enableReinitialize={true}
        />
        of {props.pageCount}
      </p>
      <Button color="primary" onClick={formik.handleSubmit}>Ok</Button>
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
      <CircularProgress
        value={props.currentPage}
        totalPages={props.pageCount}
      />
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
        <Button color="primary" variant="contained" onClick={props.onCompleted}>I'm finished!</Button>
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

// TODO:
// [] resize/fix image on highlight book
// [] style UPDATE PROGRESS button