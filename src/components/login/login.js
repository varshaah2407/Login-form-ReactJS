import React from "react";
import {
  Avatar,
  Button,
  Grid,
  Paper,
  TextField,
  FormControlLabel,
  Checkbox,
  Link,
  Typography,
} from "@mui/material";

import { Formik, Form, Field, ErrorMessage } from "formik";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import * as Yup from 'yup';

import classes from "./login.module.css";

function Login({handleChange}) {
  const avatarStyle = { backgroundColor: "#2bca2b" };

  const btnstyle = { margin: "8px 0" };

  const marginTop = { marginTop: 15};

  const initialValues = {
    username: "",
    password: "",
    remember: false
  }

  const validationSchema = Yup.object().shape({
    username: Yup.string().email('Please enter valid email').required("Required"),
    password: Yup.string().required("Required"),
  })

  const onSubmit = (values,props) => {
    console.log(values);
    setTimeout(()=>{
      props.resetForm()
      props.setSubmitting(false)
    },2000)
  }

  return (
    <Grid>
      <Paper elevation={10} className={classes.paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <LockOutlinedIcon />
          </Avatar>
          <h2>Log In</h2>
        </Grid>
        
        <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
          {(props) => (
            <Form>
            
            <Field as={TextField}
            name="username"
        style={marginTop}
          label="Username"
          placeholder="Enter Username"
          fullWidth
          required
          helperText={<ErrorMessage name="username" />}
        />
        <Field as={TextField}
        name="password"
        style={marginTop}
          label="Password"
          type="password"
          placeholder="Enter Password"
          fullWidth
          required
          helperText={<ErrorMessage name="password" />}
        />
        <Field as={FormControlLabel} name="remember" style={marginTop} label="Remember me" control={<Checkbox />} />
        <Button
          type="submit"
          variant="contained"
          style={btnstyle}
          fullWidth
          color="primary"
          disabled={props.isSubmitting}
        >{props.isSubmitting?"Loading":"Log In"}
          
        </Button>
        {console.log(props)}
            </Form>
          )}
        </Formik>
        <Typography style={marginTop}>
          <Link href="#">Forgot Password?</Link>
        </Typography>
        <Typography >
          {" "}
          Do you have an account?
          <Link href="#" onClick={() => handleChange("event",1)}>Sign Up</Link>
        </Typography>
        
      </Paper>
    </Grid>
  );
}

export default Login;
