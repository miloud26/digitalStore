import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Singin from "./components/global/SingIn";
import Dashboard from "./components/sidebarLink/Dashboard";
import { Box } from "@mui/material";
import GeneralHome from "./components/single/GeneralHome";
import PageServices from "./components/sidebarLink/PageServices";

import Sidebar from "./components/global/Sidebar";
import SingleProduct from "./components/single/SingleProduct";

import Orders from "./components/sidebarLink/Orders";

import PrivacyPolicy from "./components/global/Privacy";
import ReturnPolicy from "./components/global/Return";

const App = () => {
  const token = localStorage.getItem("token");
  if (
    !["/", "/user", "/privacy", "/return"].includes(window.location.pathname) &&
    token === null
  ) {
    window.location.pathname = "/";
    return;
  }

  return (
    <Box>
      <Router>
        {!(
          window.location.pathname === "/" ||
          window.location.pathname === "/privacy" ||
          window.location.pathname === "/return" ||
          window.location.pathname === "/user"
        ) && <Sidebar />}

        <Box
          id="container"
          sx={{
            padding: "0px 80px 80px 120px",
            width: "100%",
            overflowY: "auto",
            height: "100vh",
            "@media(max-width:900px)": {
              paddingLeft: "40px",
            },
            "@media(max-width:600px)": {
              padding: "60px 6px",
            },
          }}
        >
          <Routes>
            <Route path="/" element={<GeneralHome />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/return" element={<ReturnPolicy />} />
            <Route path="/user" element={<Singin />} />
            {token && <Route path="/dashboard" element={<Dashboard />} />}
            {token && <Route path="/:service" element={<PageServices />} />}
            {token && (
              <Route path="/:service/:id" element={<SingleProduct />} />
            )}
            {token && <Route path="/orders" element={<Orders />} />}

            {/* {token && <Route path="/tiktok" element={<Tiktok />} />}
            {token && (
              <Route path="/facebook/:id" element={<SingleProduct />} />
            )}
            {token && <Route path="/tiktok/:id" element={<SingleProduct />} />}
            {token && <Route path="/services" element={<Services />} />}
            {token && <Route path="/courses" element={<Courses />} />}
            {token && <Route path="/accounts" element={<Accounts />} />}
            {token && (
              <Route path="/subscriptions" element={<Subscriptions />} />
            )}
            {token && <Route path="/package" element={<Package />} />}
            {token && <Route path="/other" element={<Other />} />} */}
          </Routes>
        </Box>
      </Router>
    </Box>
  );
};

export default App;
