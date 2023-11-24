import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getUser, login } from "../../redux/reducers/asyncThunk";
import { isEmpty } from "../../components/UTILS/isEmpty";

function Login() {
  const dispatch = useDispatch();
  const loginForm = useRef();
  const navigate = useNavigate();

  const handleForm = async (e) => {
    e.preventDefault();
    const data = {
      email: loginForm.current[0].value,
      password: loginForm.current[1].value,
    };

    await dispatch(login(data)).then((response) => {
      const token = response.payload?.body.token;
      if (!isEmpty(token)) {
        navigate("/profile");
      }
    });
    loginForm.current.reset();
  };

  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form ref={loginForm} onSubmit={(e) => handleForm(e)}>
          <div className="input-wrapper ">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <button className="sign-in-button">Sign In</button>
        </form>
      </section>
    </main>
  );
}

export default Login;
