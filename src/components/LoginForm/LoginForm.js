import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./LoginForm.module.css";
import * as authService from "../../utility/auth";

const LoginForm = (props) => {
  const [formData, setFormData] = useState({
    email: "",
    pw: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    props.updateMessage("");
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      await authService.login(formData);
      props.handleSignupOrLogin();
      navigate("/home");
    } catch (err) {
      props.updateMessage(err.message);
    }
  };

  return (
    <form
      autoComplete="off"
      onSubmit={handleSubmit}
      className={styles.container}
    >
      <div className={styles.inputContainer}>
        <label htmlFor="email" className={styles.label}>
          Email
        </label>
        <input
          type="text"
          autoComplete="off"
          placeholder="your@email.here"
          id="email"
          value={formData.email}
          name="email"
          onChange={handleChange}
        />
      </div>
      <div className={styles.inputContainer}>
        <label htmlFor="password" className={styles.label}>
          Password
        </label>
        <input
          type="password"
          autoComplete="off"
          id="password"
          placeholder="password"
          value={formData.pw}
          name="pw"
          onChange={handleChange}
        />
      </div>
      <div>
        <button className={styles.signinButton}>Log In</button>
      </div>
    </form>
  );
};

export default LoginForm;
