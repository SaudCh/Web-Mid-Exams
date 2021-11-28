import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand logo" href="#">
          COMSATS University Islamabad
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item mx-md-4">
              <Link
                to="/"
                className="nav-link active"
                aria-current="page"
                href="#"
              >
                Departments
              </Link>
            </li>
            <li className="nav-item mx-md-4">
              <Link to="/" className="nav-link" href="#">
                Faculty
              </Link>
            </li>

            <li className="nav-item mx-md-4">
              <Link
                to="/list/sp19-bcs-078/BCS/Male/22-11-201"
                className="nav-link"
                href="#"
                tabindex="-1"
                aria-disabled="true"
              >
                Students
              </Link>
            </li>
            <li className="nav-item mx-md-4">
              <Link
                to="/register/"
                className="nav-link"
                href="#"
                tabindex="-1"
                aria-disabled="true"
              >
                Registration
              </Link>
            </li>
          </ul>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="btn btn-outline-success btn-success text-white"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}
