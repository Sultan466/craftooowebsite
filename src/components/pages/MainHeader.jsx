import React from 'react'
import "../pages/MainHeader.css";
import logo from "../../assets/craftoooimg.png"
const MainHeader = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-transparent fixed-top">
      <div className="container">
        <img
          className="navbar-brand"
          src={logo}
          style={{ maxWidth: "600px", height: "70px" }}
          alt="Logo"
        />
       <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown" // Use "#" instead of "/"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul
            className="navbar-nav ms-auto"
            style={{
              backdropFilter: "blur(10px)",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
            }}
          >
            <li className="nav-item dropdown">
              <a
                className="nav-link active dropdown-toggle"
                href="/"
                role="button"
                data-bs-toggle="dropdown"
              >
                About
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="/">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    Another action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link active dropdown-toggle"
                href="/"
                data-bs-toggle="dropdown"
              >
                Services
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="/">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    Another action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link active dropdown-toggle"
                href="/"
                data-bs-toggle="dropdown"
              >
                Solutions
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="/">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    Another action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link active dropdown-toggle"
                href="/"
                data-bs-toggle="dropdown"
              >
                Technologies
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="/">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    Another action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="/">
                Portfolio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="/">
                Pricing
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="/">
                Blog
              </a>
            </li>
            <li className="nav-item">
              <i className="nav-link bi bi-search"></i>
            </li>
            <li className="nav-item">
              <div>
                <button className="btn">
                  <i className="animation"></i>Contact us
                  <i className="animation"></i>
                </button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
export default MainHeader