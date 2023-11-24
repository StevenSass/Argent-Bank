import { Link } from "react-router-dom";
import Logo from "../../img/argentBankLogo.png";
import { isEmpty } from "../UTILS/isEmpty";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/reducers/authSlice";

function Header() {
  const dispatch = useDispatch();
  const token =
    useSelector((state) => state.auth.token) || localStorage.getItem("token");
  const userInfo = useSelector((state) => state.user.information);

  function handleLogout() {
    dispatch(logout(token));
  }

  return (
    <nav className="main-nav">
      <Link to="/" className="main-nav-logo">
        <img
          className="main-nav-logo-image"
          src={Logo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <div>
        {isEmpty(token) || token == "undefined" ? (
          <Link to="/login" className="main-nav-item">
            <i className="fa fa-user-circle"></i>
            Sign In
          </Link>
        ) : (
          <>
            <Link to="/profile" className="main-nav-item">
              <i className="fa fa-user-circle"></i> {userInfo?.userName}
            </Link>
            <Link to="/" className="main-nav-item" onClick={handleLogout}>
              <i className="fa fa-user-circle"></i> Logout
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Header;
