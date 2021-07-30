import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./Header/Header";
import Footer from "./Footer/Footer";

import Routes from "../routes/Routes";

const Layout = () => {
  return (
    <Router>
      <Route
        render={(props) => (
          <>
            <Header />
            <div className="container">
              <div className="main">
                <Routes />
              </div>
            </div>
            <Footer />
          </>
        )}
      />
    </Router>
  );
};

export default Layout;
