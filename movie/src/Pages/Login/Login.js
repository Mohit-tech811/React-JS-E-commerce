import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styles from "./Login.module.css";
import { onLogin, onRegister } from "../../Service/authneticationService";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
const Login = () => {

  const { register, handleSubmit, errors } = useForm();
  const [message, setMessage] = useState();
  const history = useHistory();
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  // const database = [
  //   {
  //     email: "Admin1",
  //     password: "pass1"
  //   },
  //   {
  //     email: "user2",
  //     password: "pass2"
  //   }
  // ];
  // const errorss = {
  //   uname: "invalid username",
  //   pass: "invalid password"
  // };
  const onSubmit = async (data, e) => {

    //  {
    //   var { uname, pass } = document.forms[0];


    //   const userData = database.find((user) => user.username === uname.value);

    //   if (userData) {
    //     if (userData.password !== pass.value) {

    //       setErrorMessages({ name: "pass", message: errors.pass });
    //     } else {
    //       setIsSubmitted(true);
    //     }
    //   } else {

    //     setErrorMessages({ name: "uname", message: errors.uname });
    //   }
    // };
    setMessage({
      data: "Login is in progress...",
      type: "alert-warning",
    });
    data = {
      userName: data.email,
      password: data.password
    }

    let response = await onLogin(data)
    history.push("/apps")
    // response = await response.json();
    console.log(response)
  };


  const adminLogin = async () => {
    try {
      let data = await onLogin('admin@example.com', 'password1');
    } catch (error) {

    }
  }
  const userLogin = async () => {
    try {
      let data = await onLogin('user@example.com', 'password2');
    } catch (error) {

    }
  }
  const [name, setName] = useState('');
  const [pwd, setPwd] = useState('');

  const handle = () => {
    localStorage.setItem('Name', name);
    localStorage.setItem('Password', pwd);
  };

  return (
    <div
      className={`${styles.container} container-fluid d-flex align-items-center justify-content-center`}
    >
      <div className={styles.loginFormContainer}>
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
            className={`${styles.loginFormLegend} border rounded p-1 text-center`}
          >
            Login Form
          </legend>
          <form onSubmit={handleSubmit(onSubmit)} noValidate autoComplete="off">
            <div className="form-group">
              <label htmlFor="inputForEmail">Email address</label>
              <span className="mandatory">*</span>
              <input
                id="inputForEmail"
             
                type="email"
                className="form-control"
                aria-describedby="Enter email address"
                placeholder="Enter email address"
                value={name}
                onChange={(e) => setName(e.target.value)}
                // ref={register({
                //   required: {
                //     value: true,
                //     message: "Please enter your email address",
                //   },
                // })}

              />
              {localStorage.getItem('name')}
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
              <label htmlFor="inputForPassword">Password</label>
              <span className="mandatory">*</span>
              <input
                type="password"
                name="password"
                className="form-control"
                id="inputForPassword"
                placeholder="Enter password"
                value={pwd}
                onChange={(e) => setPwd(e.target.value)}
                // ref={register({
                //   required: {
                //     value: true,
                //     message: "Please enter password",
                //   },
                // })}
              />
              {errors?.password && (
                <span className={`${styles.errorMessage} mandatory`}>
                  {errors.password.message}
                </span>
              )}
              {localStorage.getItem('Pwd')}
            </div>
            <br />
            <div className="d-flex align-items-center">
              <button type="submit" className="btn btn-outline-primary" onClick={handle}>
                Login
              </button>&nbsp;&nbsp;

              <button type="submit" onClick={adminLogin} className="btn btn-outline-primary">
                Admin 
              </button>&nbsp;&nbsp;
              <button type="submit" onClick={userLogin} className="btn btn-outline-primary">
                User 
              </button>
              <button className="btn btn-link ml-auto">
                <Link to="/register">New User</Link>
              </button>
            </div>
          </form>
        </fieldset>
      </div>
    </div>
  );
};

export default Login;
