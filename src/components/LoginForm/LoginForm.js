import { useState } from "react";
import { useNavigate } from "react-router-dom";
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
      className="form"
    >
      <div className="field">
        <label htmlFor="email" className="">
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
      <div className="field">
        <label htmlFor="password" className="">
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
        <button className="b1 submit">Log In</button>
      </div>
    </form>
  );
};

export default LoginForm;
