import React from 'react';
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
      fetch('http://localhost:8080/api/books/', {
        method: 'post',
        headers: new Headers({
          'Content-Type': 'application/json',
        }),
        body: JSON.stringify(values)
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