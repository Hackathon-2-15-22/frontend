import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as authService from "../utility/auth";

const SignupForm = (props) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    passwordConf: "",
  });

  const handleChange = (e) => {
    props.updateMessage("");
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await authService.signup(formData);
      props.handleSignupOrLogin();
    } catch (err) {
      props.updateMessage(err.message);
    }
    navigate("/onboarding");
  };

  const { name, email, password, passwordConf } = formData;

  const isFormInvalid = () => {
    return !(name && email && password && password === passwordConf);
  };

  return (
    <form
      autoComplete="off"
      onSubmit={handleSubmit}
      className="form"
    >
      <div className="field">
        <input
          placeholder="name"
          type="text"
          autoComplete="off"
          id="name"
          value={name}
          name="name"
          onChange={handleChange}
        />
      </div>
      <div className="field">
        <input
          placeholder="your@email.com"
          type="email"
          autoComplete="off"
          id="email"
          value={email}
          name="email"
          onChange={handleChange}
        />
      </div>
      <div className="field">
        <input
          placeholder="password"
          type="password"
          autoComplete="off"
          id="password"
          value={password}
          name="password"
          onChange={handleChange}
        />
      </div>
      <div className="field">
        <input
          placeholder="confirm password"
          type="password"
          autoComplete="off"
          id="confirm"
          value={passwordConf}
          name="passwordConf"
          onChange={handleChange}
        />
      </div>
      <div className="field">
        <button disabled={isFormInvalid()} className="b1 submit">
          Sign Up
        </button>
        <p className="text-center">
          <a className="linked" href="/login">
            Already have an account? Login.
          </a>
        </p>
      </div>
    </form>
  );
};

export default SignupForm;
