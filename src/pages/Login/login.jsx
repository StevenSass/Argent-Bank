import { useRef } from "react";
import { useDispatch } from "react-redux";
import { getUser } from "../../actions/login.action";

import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const loginForm = useRef();
  const dispatch = useDispatch();

  const handleForm = async (e) => {
    e.preventDefault();
    const data = {
      email: loginForm.current[0].value,
      password: loginForm.current[1].value,
    };

    try {
      await dispatch(getUser(data));
      loginForm.current.reset();
      navigate("/profile");
    } catch (error) {
      if (error.response && error.response.status === 400) {
        alert("Identifiant ou mot de passe incorrect");
      } else {
        console.error("Erreur non traitée:", error);
        alert("Une erreur s'est produite lors de la connexion");
      }
    }
  };

  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form ref={loginForm} onSubmit={(e) => handleForm(e)}>
          <div className="input-wrapper">
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
