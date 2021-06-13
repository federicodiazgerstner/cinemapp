import "./style.css";

function Navbar() {
  return (
    <div className="navbar">
      <a href="/">
        <h1 className="title">CinemAPP</h1>
      </a>
      <div className="registration">
        <a href="/">
          <p className="login">Log In</p>
        </a>
        <a href="/">
          <p className="signup">Sign Up</p>
        </a>
      </div>
    </div>
  );
}

export default Navbar;
