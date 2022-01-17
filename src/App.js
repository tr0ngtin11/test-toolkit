import Login from "./pages/Login";
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home";
import DetailPage from "./pages/DetailPage";

function App() {
  const [data, setData] = useState([
    {
      id: "1",
      title: "title 1",
      desc: "desc 01",
      author: "duy tung",
    },
    {
      id: "2",
      title: "title 2",
      desc: "desc 01",
      author: "duy tung",
    },
    {
      id: "3",
      title: "title 3",
      desc: "desc 01",
      author: "duy tung",
    },
    {
      id: "4",
      title: "title 4",
      desc: "desc 01",
      author: "duy tung",
    },
    {
      id: "5",
      title: "title 5",
      desc: "desc 01",
      author: "duy tung",
    },
  ]);
  const [idSelected, setIdSelected] = useState("");
  const GetId = (id) => {
    setIdSelected(id);
  };
  const BlogWithId = () => {
    return <DetailPage id={idSelected} data={data} />;
  };
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home GetId={GetId} />
        </Route>
        <Route path="/login">
          <Login />
        </Route>

        <Route path="/detail/:detailId">
          <BlogWithId />
        </Route>
      </Switch>
    </Router>
  );
}
export default App;
