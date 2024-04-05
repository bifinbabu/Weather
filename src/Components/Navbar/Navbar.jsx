import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./Navbar.css";
import logo from "../../../public/Assets/logo.png";
import { pages } from "../../Pages/config";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const location = useLocation();
  console.log("location", location);

  return (
    <>
      <header>
        <nav className="navbar">
          <div className="nav-logo">
            <img src={logo} alt="" style={{ width: "50px", height: "50px" }} />
          </div>
          <ul className="nav-links">
            <li>
              <a
                href={pages.home}
                style={{
                  color: location.pathname === pages.home ? "black" : "",
                }}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href={pages.forecast}
                style={{
                  color: location.pathname === pages.forecast ? "black" : "",
                }}
              >
                Forecast
              </a>
            </li>
            <li>
              <a
                href={pages.about}
                style={{
                  color: location.pathname === pages.about ? "black" : "",
                }}
              >
                About
              </a>
            </li>
          </ul>
          <div className="hamburger" onClick={toggleSidebar}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </nav>
      </header>
      <div className={`sidebar ${isSidebarOpen ? "active" : ""}`}>
        <ul className="sidebar-links">
          <li>
            <a
              href={pages.home}
              style={{ color: location.pathname === pages.home ? "black" : "" }}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href={pages.forecast}
              style={{
                color: location.pathname === pages.forecast ? "black" : "",
              }}
            >
              Forecast
            </a>
          </li>
          <li>
            <a
              href={pages.about}
              style={{
                color: location.pathname === pages.about ? "black" : "",
              }}
            >
              About
            </a>
          </li>
        </ul>
        <div className="close-btn" onClick={toggleSidebar}>
          &times;
        </div>
      </div>
    </>
  );
};

export default Navbar;
