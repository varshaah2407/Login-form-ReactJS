import React from "react";
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  Checkbox,
  FormHelperText,
} from "@mui/material";

import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from 'yup';

import "./signup.css";

function Signup() {
  const avatarStyle = { backgroundColor: "#2bca2b" };

  const btnstyle = { margin: "8px 0" };

  const marginTop = { marginTop: 15 };

  const initialValues = {
    name:'',
    email: '',
    gender:'',
    phoneNumber: '',
    password: '',
    confirmPassword: '',
    termsAndConditions: false
  }

  const validationSchema = Yup.object().shape({
    name: Yup.string().min(3, "Please enter minimum 3 characters").required("Required"),
    email: Yup.string().email("Enter valid email").required("Required"),
    gender: Yup.string().oneOf(['male', 'female'], "Required").required("Required"),
    phoneNumber: Yup.number().typeError("Enter valid phone number").required("Required"),
    password: Yup.string().min(8,"Minimum length must be 8").required("Required"),
    confirmPassword: Yup.string().oneOf([Yup.ref("password")], "Password does not match").required("Required"),
    termsAndConditions: Yup.string().oneOf(["true"],"Accept terms and conditions").required
  })

  const onSubmit = (values,props) => {
    console.log(values);
    console.log(props);
    setTimeout(() => {
      props.resetForm()
      props.setSubmitting(false)
    }, 2000)
  }

  return (
    <Grid>
      <Paper elevation={20} className="paperStyle">
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <LockOutlinedIcon />
          </Avatar>
          <h2 className="heading">Sign Up</h2>
        </Grid>
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
          {(props) => (
            <Form>
              
                <Field as={TextField}
                  style={marginTop}
                  fullWidth
                  required
                  name="name"
                  label="Name"
                  placeholder="Enter Name"
                  helperText={<ErrorMessage name="name"/>}
                />
                <Field as={TextField}
                  style={marginTop}
                  fullWidth
                  required
                  name="email"
                  label="Email"
                  type="email"
                  placeholder="Enter Email"
                  helperText={<ErrorMessage name="email"/>}
                />
                <FormControl style={marginTop}>
                  <FormLabel id="demo-row-radio-buttons-group-label">
                    Gender
                  </FormLabel>
                  <Field as={RadioGroup}
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                    name="gender"
                  >
                    <FormControlLabel
                      value="female"
                      control={<Radio />}
                      label="Female"
                    />
                    <FormControlLabel
                      value="male"
                      control={<Radio />}
                      label="Male"
                    />
                  </Field>
                </FormControl>
                <FormHelperText><ErrorMessage name="gender"/></FormHelperText>
                <Field as={TextField}
                  style={marginTop}
                  fullWidth
                  required
                  name="phoneNumber"
                  label="Contact Number"
                  placeholder="Enter Contact Number"
                  helperText={<ErrorMessage name="phoneNumber" />}
                />
                <Field as={TextField}
                  style={marginTop}
                  fullWidth
                  required
                  name="password"
                  label="Password"
                  type="password"
                  placeholder="Enter Password"
                  helperText={<ErrorMessage name="password" />}
                />
                <Field as={TextField}
                  style={marginTop}
                  fullWidth
                  required
                  name="confirmPassword"
                  label="Confirm Password"
                  type="password"
                  placeholder="Confirm your password"
                  helperText={<ErrorMessage name="confirmPassword"/>}
                />
                <FormControlLabel
                  label="I accept the terms and conditions"
                  control={<Field as={Checkbox} name="termsAndConditions" color="secondary" />}
                />
                 <FormHelperText><ErrorMessage name="termsAndConditions"/></FormHelperText>
                <Button
                  type="submit"
                  variant="contained"
                  style={(btnstyle, marginTop)}
                  fullWidth
                  color="primary"
                  disabled={props.isSubmitting}
                >{props.isSubmitting?"Loading":"Sign Up"}</Button>
              
            </Form>
          )}
        </Formik>
      </Paper>
    </Grid>
  );
}

export default Signup;
