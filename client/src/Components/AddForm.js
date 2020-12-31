import React from 'react';
import { useFormik, Field, FormikProvider } from 'formik';
import * as yup from 'yup';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import './AddForm.css';

const validationSchema = yup.object({
  title: yup
    .string()
    .required('Book title is required'),
  author: yup
    .string()
    .required('Book author is required'),
  rating: yup
    .number()
    .min(0)
    .max(5)
});

export default function FormPropsTextFields() {
  const formik = useFormik({
    initialValues: {
      title: '',
      author: '',
      desc: '',
      img: '',
      rating: 0,
      startDate: '',
      endDate: '',
      current: ''
    },
    validationSchema: validationSchema,

    onSubmit: (values) => {
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
    <div className="container">
      <FormikProvider value={formik}>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          id="title"
          name="title"
          label="Book Title"
          value={formik.values.title}
          onChange={formik.handleChange}
        />
        <TextField
          fullWidth
          id="author"
          name="author"
          label="Author"
          value={formik.values.author}
          onChange={formik.handleChange}
        />
        <TextField
          fullWidth
          id="desc"
          name="desc"
          label="Description"
          value={formik.values.desc}
          onChange={formik.handleChange}
        />
        <TextField
          fullWidth
          id="img"
          name="img"
          label="Image Link"
          value={formik.values.img}
          onChange={formik.handleChange}
        />
        <TextField
          fullWidth
          id="rating"
          name="rating"
          label="Rating"
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
        <div id="currently-reading">Currently Reading?</div>
        <div role="group" aria-labelledby="currently-reading">
          <label>
            <Field type="radio" name="current" value="yes" />
            Yes
          </label>
          <label>
            <Field type="radio" name="current" value="no" />
            No
          </label>
        </div>
        <Button color="primary" variant="contained" type="submit">
          Submit
        </Button>
      </form>
      </FormikProvider>
    </div>
  );
};