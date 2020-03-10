import React from "react";
import { Link, useLocation } from "react-router-dom";

function NavTabs() {
  // We'll go into the Hooks API later, for now, we are just using some code
  // from the react-router docs (https://reacttraining.com/react-router/web/api/Hooks/uselocation)
  // This allows the component to check the route any time the user uses a link to navigate.
  const location = useLocation();

  return (
    <></>
    // <ul className="nav nav-tabs">
    //   <li className="nav-item">
    //     <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
    //       Home
    //     </Link>
    //   </li>
    //   <li className="nav-item">
    //     <Link
    //       to="/account"
    //       className={location.pathname === "/account" ? "nav-link active" : "nav-link"}
    //     >
    //       Account
    //     </Link>
    //   </li>
    //   <li className="nav-item">
    //     <Link
    //       to="/create"
    //       className={location.pathname === "/create" ? "nav-link active" : "nav-link"}
    //     >
    //       Create
    //     </Link>
    //   </li>
    //   <li className="nav-item">
    //     <Link
    //       to="/loggedin"
    //       className={location.pathname === "/loggedin" ? "nav-link active" : "nav-link"}
    //     >
    //       Loggedin
    //     </Link>
    //   </li>
    //   <li className="nav-item">
    //     <Link
    //       to="results"
    //       className={location.pathname === "results" ? "nav-link active" : "nav-link"}
    //     >
    //       Results
    //     </Link>
    //   </li>
    //   <li className="nav-item">
    //     <Link
    //       to="survey"
    //       className={location.pathname === "survey" ? "nav-link active" : "nav-link"}
    //     >
    //       Survey
    //     </Link>
    //   </li>
    //   <li className="nav-item">
    //     <Link
    //       to="update"
    //       className={location.pathname === "update" ? "nav-link active" : "nav-link"}
    //     >
    //       Update
    //     </Link>
    //   </li>
    // </ul>
  );
}

export default NavTabs;
