import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation,
} from "react-router-dom";

function Login(props) {
  const [userInfo, setUserInfo] = useState({
    username: "",
    password: "",
  });

  let history = useHistory();
  let location = useLocation();

  let { from } = location.state || { from: { pathname: "/" } };

  let handleLogin = async () => {
    await localStorage.setItem("userName", JSON.stringify(userInfo.username)); // lưu dưới dang JSON
    history.replace(from);
  };

  return (
    <div className="w-25 mx-auto mt-5">
      <h1 className="text-blue-500 font-bold text-2xl">Welcome back!</h1>
      <div>
        <input
          className="p-1 my-2"
          name="username"
          placeholder="Username"
          onChange={(e) =>
            setUserInfo({ ...userInfo, username: e.target.value })
          }
        />
      </div>
      <div>
        <input
          className="p-1 my-2 "
          name="password"
          placeholder="Password"
          onChange={(e) =>
            setUserInfo({ ...userInfo, password: e.target.value })
          }
        />
      </div>

      <div>
        <button
          onClick={() => handleLogin()}
          type="button"
          className="btn btn-primary rounded "
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;
