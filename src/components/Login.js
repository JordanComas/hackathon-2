import React from "react";

const Login = () => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const newPassword = (e) => {
    e.preventDefault();
    setPassword(password);
    if (password.length < 20) {
      // return "Password too short";
      console.log("passowrd 2 short");
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
        <label>I accept Terms &amp; Conditions</label>
        <div>
          <button onClick={newPassword}>LogIn</button>
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
