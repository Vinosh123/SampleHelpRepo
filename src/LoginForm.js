import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useState } from "react";

const LoginForm = (props) => {
  let history = useHistory();
  const [data, setData] = useState();
  const [previous, setNew] = useState({
    Username: undefined,
    Password: undefined,
  });
  const [error, setError] = useState(false);
  const handleChange = (e) => {
    console.log(e.target.name, e.target.value);
    const { name, value } = e.target;
    setNew((prevstate) => {
      return {
        ...prevstate,
        [name]: value,
      };
    });
  };
  const handleClick = (value) => {
    data &&
      data.users &&
      data.users.map((item) => {
        if (
          previous.Username === item.username &&
          previous.Password === item.password
        ) {
          setError(false);
          return history.push("/Dashboard");
        } else {
          setError(true);
        }
      });
  };
  // history.push("/Dashboard")};
  const signUpClick = () => {
    history.push("/registration");
  };
  useEffect(() => {
    fetch("./users.json", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((pick) => setData(pick));
  }, []);

  return (
    <div className="centerDiv">
      <div className="formCenter">
        <img
          src="https://www.w3schools.com/howto/img_avatar2.png"
          alt="avatar"
        />
        <label className="labelAlign">Username</label>
        <input
          className="inputAlign"
          onChange={handleChange}
          type="text"
          name="Username"
          placeholder="username"
          required
        />
        <label className="labelAlign">Password</label>
        <input
          className="inputAlign"
          type="text"
          name="Password"
          placeholder="password"
          required
          onChange={handleChange}
        />
        <button id="click" onClick={handleClick}>
          Login
        </button>
        {error && <p style={{ color: "red" }}>Invalid Credentials</p>}
        <div className="footer">
          <button id="newUser" onClick={signUpClick}>
            SignUp
          </button>
          <p id="settingpw">forgot password</p>
        </div>
      </div>
      {/* {data &&
        data.users &&
        data.users.map((item) => (
          <>
            <p>{item.username}</p>
          </>
        ))} */}
    </div>
  );
};
export default LoginForm;
