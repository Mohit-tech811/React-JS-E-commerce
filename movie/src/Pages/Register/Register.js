import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styles from "./Register.module.css";
import { useForm } from "react-hook-form";
import { Link, Redirect } from "react-router-dom";
import { onRegister } from "../../Service/authneticationService";
const Register = () => {
  const { register, handleSubmit, errors } = useForm();
  const [message, setMessage] = useState();
  const history = useHistory();
  const onSubmit = async (data, e) => {
    setMessage({

      data: "Registration is in progress...",
      type: "alert-warning",

    });
    data = {
      userName: data.name,
      email: data.email,
      password: data.password
    }
    let response = await onRegister(data)
    history.push("/login");
    // response = await response.json();
  };
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [pwd, setPwd] = useState('');
  const handle = () => {
    localStorage.setItem('Email', email);
    localStorage.setItem('Name', name);
    localStorage.setItem('Password', pwd);
  };


  return (
    <div
      className={`${styles.container} container-fluid d-flex align-items-center justify-content-center`}
    >
      <div className={styles.registrationFormContainer}>
        {/* {message && (
          <div
            className={`alert fade show d-flex ${message.type}`}
            role="alert"
          >
            {message.data}
            <span
              aria-hidden="true"
              className="ml-auto cursor-pointer"
              onClick={() => setMessage(null)}
            >
              &times;
            </span>
          </div>
        )} */}
        <fieldset className="border p-3 rounded">
          <legend
            className={`${styles.registrationFormLegend} border rounded p-1 text-center`}
          >
            Registration Form
          </legend>
          <form onSubmit={handleSubmit(onSubmit)} noValidate autoComplete="off">
            <div className="form-group">
              <label htmlFor="inputForEmail">Email address</label>
              <span className="mandatory">*</span>
              <input
                id="inputForEmail"

                type="text"
                className="form-control"
                aria-describedby="Enter email address"
                placeholder="Enter email address"
              // ref={register({
              //   required: {
              //     value: true,
              //     message: "Please enter your email address",
              //   },
              //   pattern: {
              //     value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              //     message: "Enter a valid email address",
              //   },
              //   minLength: {
              //     value: 6,
              //     message: "Minimum 6 characters are allowed",
              //   },
              //   maxLength: {
              //     value: 255,
              //     message: "Maximum 255 characters are allowed",
              //   },
              // })}
              />
              {localStorage.getItem('email')}
              {/**
               * we provide validation configuration for email field above
               * error message are displayed with code below
               */}
              {errors?.email && (
                <span className={`${styles.errorMessage} mandatory`}>
                  {errors.email.message}
                </span>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="inputForName">Your Name</label>
              <span className="mandatory">*</span>
              <input
                id="inputForName"
                name="name"
                type="text"
                className="form-control"
                aria-describedby="Enter your name"
                placeholder="Enter your name"
              // ref={register({
              //   required: {
              //     value: true,
              //     message: "Please enter your name",
              //   },
              //   minLength: {
              //     value: 6,
              //     message: "Minimum 6 characters are allowed",
              //   },
              //   maxLength: {
              //     value: 255,
              //     message: "Maximum 255 characters are allowed",
              //   },
              // })}
              />
              {errors?.name && (
                <span className={`${styles.errorMessage} mandatory`}>
                  {errors.name.message}
                </span>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="inputForPassword">Password</label>
              <span className="mandatory">*</span>
              <input
                type="password"
                name="password"
                className="form-control"
                id="inputForPassword"
                placeholder="Enter password"
              // ref={register({
              //   required: {
              //     value: true,
              //     message: "Please enter password",
              //   },
              //   minLength: {
              //     value: 6,
              //     message: "Minimum 6 characters are allowed",
              //   },
              //   maxLength: {
              //     value: 255,
              //     message: "Maximum 255 characters are allowed",
              //   },
              // })}
              />
              {errors?.password && (
                <span className={`${styles.errorMessage} mandatory`}>
                  {errors.password.message}
                </span>
              )}
            </div>
            <br />
            <div className="d-flex align-items-center justify-content-center">

              <button type="submit" className="btn btn-outline-primary">
                Submit
              </button>

              <button className="btn btn-link">
                <Link to="/login">Cancel</Link>
              </button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <button className="btn btn-link">
                <Link to="/login">Admin??</Link>
              </button>
            </div>
          </form>
        </fieldset>
      </div>
    </div>
  );
};

export default Register;
