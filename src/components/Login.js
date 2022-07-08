import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [status, setStatus] = React.useState("");

  const navigate = useNavigate();

  const navigateCreate = () => {
    navigate("/");
  };

  const check = (e) => {
    if (password.length < 20) {
      e.preventDefault();
      setStatus("Password 2 short");
    } else {
      navigateCreate();
    }
  };

  return (
    <div>
      <form>
        <div>
          <label>UserName</label>
          <input
            type="text"
            placeholder="UserName"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          ></input>
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>
        <input type="checkbox" />
        <label>
          I accept <Link to="/termsconditions">Terms &amp; Conditions</Link>
          (Please Read Carefully)
        </label>
        <div>
          <Link to="/">
            <button onClick={check}>LogIn</button>
          </Link>
          <p>{status}</p>
        </div>
        <p>
          *Password needs to be 20 characters long. <br />
          *Do not include your name or birth date on your password. <br />{" "}
          *Include a capitalize letter so I cant hack you later
        </p>
      </form>
    </div>
  );
};

export default Login;
