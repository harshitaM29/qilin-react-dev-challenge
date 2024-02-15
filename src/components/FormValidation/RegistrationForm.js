import React, { useState } from "react";
import classes from "./RegistrationForm.module.css";

const RegistrationForm = () => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [enteredConfirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const updateEmail = (e) => {
    setErrors({
      ...errors,
      email: "",
    });
    setEnteredEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setErrors({
      ...errors,
      password: "",
    });
    setEnteredPassword(e.target.value);
  };

  const updateConfirmPassword = (e) => {
    setErrors({
      ...errors,
      confirmPassword: "",
    });
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      email: enteredEmail,
      password: enteredPassword,
      confirmPassword: enteredConfirmPassword,
    };

    const validatingForm = validationErrors(formData);
    if (Object.keys(validatingForm).length === 0) {
      alert("Form submitted successfully!");
      setEnteredEmail("");
      setEnteredPassword("");
      setConfirmPassword("");
    } else {
      setErrors(validatingForm);
    }
  };

  //function for checking errors and creating customize error messages
  const validationErrors = (enteredData) => {
    let errors = {};

    if (!enteredData.email.trim()) {
      errors.email = "Please enter Email";
    }
    if (!enteredData.email.includes("@")) {
      errors.email = "Please enter valid Email";
    }
    if (!enteredData.password.trim()) {
      errors.password = "Please enter Password";
    }
    if (enteredData.password.length < 8) {
      errors.password = "Password must be 8 character long";
    }
    if (!enteredData.confirmPassword.trim()) {
      errors.confirmPassword = "Please enter confirm Password";
    }
    if (enteredData.password !== enteredData.confirmPassword) {
      errors.confirmPassword = "Password do not match";
    }

    return errors;
  };
  return (
    <div className={classes.registrationForm}>
      <form onSubmit={handleSubmit}>
        <div className={classes.registrationForm__controls}>
          <div className={classes.registrationForm__controls}>
            <label>Email</label>
            <br />
            <input
              type="text"
              id="email"
              value={enteredEmail}
              onChange={updateEmail}
            />
            {errors.email && <span>{errors.email}</span>}
          </div>
          <div className={classes.registrationForm__controls}>
            <label>Password</label>
            <br />
            <input
              type="password"
              id="password"
              value={enteredPassword}
              onChange={updatePassword}
              required
            />
            {errors.password && <span>{errors.password}</span>}
          </div>
          <div className={classes.registrationForm__controls}>
            <label>Confirm Password</label>
            <br />
            <input
              type="password"
              id="confirmpassword"
              value={enteredConfirmPassword}
              onChange={updateConfirmPassword}
            />
            <span>{errors.confirmPassword ? errors.confirmPassword : ""}</span>
          </div>
        </div>
        <div className={classes.registrationForm__actions}>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm;
