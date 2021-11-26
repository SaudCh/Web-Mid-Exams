import React from "react";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          COMSATS University Islamabad
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <Link to="/" class="nav-link active" aria-current="page" href="#">
                Departments
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/" class="nav-link" href="#">
                Faculty
              </Link>
            </li>

            <li class="nav-item">
              <Link
                to="/"
                class="nav-link"
                href="#"
                tabindex="-1"
                aria-disabled="true"
              >
                Students
              </Link>
            </li>
            <li class="nav-item">
              <Link
                to="/"
                class="nav-link"
                href="#"
                tabindex="-1"
                aria-disabled="true"
              >
                Department
              </Link>
            </li>
          </ul>
          <form class="d-flex">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}
