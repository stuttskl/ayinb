import React, { useEffect } from 'react';
import { useFormik } from 'formik';
// import * as yup from 'yup';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

// const validationSchema = yup.object({
//   email: yup
//     .string('Enter your email')
//     .email('Enter a valid email')
//     .required('Email is required'),
//   password: yup
//     .string('Enter your password')
//     .min(8, 'Password should be of minimum 8 characters length')
//     .required('Password is required'),
// });

export default function FormPropsTextFields() {
  const formik = useFormik({
    initialValues: {
      title: '',
      author: '',
      desc: '',
      img: '',
      rating: 0,
      startDate: '',
      endDate: ''
    },
    // validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log('inside of onsubmit')
      console.log(values)
      // alert(JSON.stringify(values, null, 2));
      fetch('http://localhost:8080/api/books/', {
        method: 'post',
        headers: new Headers({
          'Content-Type': 'application/json',
        }),
        body: JSON.stringify({name:values})
      })

    },
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          id="title"
          name="title"
          label="title"
          value={formik.values.title}
          onChange={formik.handleChange}
        />
        <TextField
          fullWidth
          id="author"
          name="author"
          label="author"
          value={formik.values.author}
          onChange={formik.handleChange}
        />
        <TextField
          fullWidth
          id="desc"
          name="desc"
          label="desc"
          value={formik.values.desc}
          onChange={formik.handleChange}
        />
        <TextField
          fullWidth
          id="img"
          name="img"
          label="img"
          value={formik.values.img}
          onChange={formik.handleChange}
        />
        <TextField
          fullWidth
          id="rating"
          name="rating"
          label="rating"
          type="number"
          value={formik.values.rating}
          onChange={formik.handleChange}
        />
        <TextField
          id="startDate"
          name="startDate"
          label="Start Date"
          type="date"
          value={formik.values.startDate}
          onChange={formik.handleChange}
          // className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          id="endDate"
          name="endDate"
          label="End Date"
          type="date"
          value={formik.values.endDate}
          onChange={formik.handleChange}
          // className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <Button color="primary" variant="contained" fullWidth type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
};

// import React, { useState } from 'react';
// import TextField from '@material-ui/core/TextField';
// import { makeStyles } from '@material-ui/core/styles';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     '& .MuiTextField-root': {
//       margin: theme.spacing(1),
//       width: '25ch',
//     },
//   },
//   textField: {
//     marginLeft: theme.spacing(1),
//     marginRight: theme.spacing(1),
//     width: 200,
//   },
// }));

// export default function FormPropsTextFields() {
//   const classes = useStyles();
//   const [title, setTitle] = useState('')

//   return (
//     <form className={classes.root} noValidate autoComplete="off">
//       <div>
//         <TextField 
//           required id="title" 
//           label="Required" 
//           value={title}
//           onChange={e => setTitle(e.target.value)}
//           defaultValue="Title"
//         />
//         <TextField 
//           required id="author" 
//           label="Required" 
//           defaultValue="Author" 
//         />
//         <TextField
//           id="desc"
//           label=""
//           defaultValue="Book Description"
//         />
//         <TextField
//           id="img"
//           label=""
//           defaultValue="Image Link"
//         />
//         <TextField
//           id="startDate"
//           label="Start Date"
//           type="date"
//           defaultValue="2017-05-24"
//           // className={classes.textField}
//           InputLabelProps={{
//             shrink: true,
//           }}
//         />
//       </div>
//     </form>
//   );
// }