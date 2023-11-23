import { Link } from "react-router-dom";
import Logo from "../../img/argentBankLogo.png";
import { isEmpty } from "../../utils/isEmpty";
import { useDispatch, useSelector } from "react-redux";
import { tokenUser } from "../../actions/token.action";

function Header() {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.tokenReducer);
  const userInfo = useSelector((state) => state.userReducer.body);

  function logout() {
    dispatch(tokenUser(null));
    localStorage.removeItem("token");
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
        {isEmpty(token) ? (
          <Link to="/login" className="main-nav-item">
            <i className="fa fa-user-circle"></i>
            Sign In
          </Link>
        ) : (
          <>
            <Link to="/profile" className="main-nav-item">
              <i className="fa fa-user-circle"></i>
              {userInfo?.firstName} {userInfo?.lastName}
            </Link>
            <Link to="/" className="main-nav-item" onClick={logout}>
              <i className="fa fa-user-circle"></i> logout
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Header;
