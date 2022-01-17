import React, { useEffect, useState } from "react";
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
import "./css/HomePage.css";
import BlogThumb from "../components/BlogThumb";
import AddNewPage from "./AddNewPage";
import { useSelector } from "react-redux";
import { homeBlogSelector } from "../redux/selector";

function Home(props) {
  const [userName, setUserName] = useState("");

  const data = useSelector(homeBlogSelector);
  console.log(data);
  useEffect(() => {
    const getUserName = async () => {
      try {
        const data = await localStorage.getItem("userName");
        await setUserName(JSON.parse(data));
      } catch (error) {
        console.log(error);
      }
    };
    getUserName();
  }, []);

  let history = useHistory();
  let location = useLocation();

  let { from } = location.state || { from: { pathname: "/" } };

  let handleLogout = async () => {
    try {
      await localStorage.removeItem("userName");
      await history.replace("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <header className="d-flex justify-content-between">
        <h1>Welcome back , {userName}</h1>
        <div>
          <button
            onClick={() => handleLogout()}
            type="button"
            className="btn btn-primary rounded mr-5 mt-2"
          >
            Logout
          </button>
        </div>
      </header>

      <div>
        <p className="Hp-text ">Wanna add some things new, {userName} ?</p>

        <AddNewPage userName={userName} />
      </div>

      <div className="w-100 mx-auto mt-5">
        <div className="row ">
          {data.map((item, index) => {
            return (
              <div key={index} className="col-3 d-flex justify-content-center">
                <BlogThumb dataBlogThumb={item} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Home;
