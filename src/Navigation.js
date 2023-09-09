import React from "react";
import "./Navigation.css";

export default function Navigation() {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link ">Lisbon</a>
            </li>
            <li class="nav-item">
              <a class="nav-link">Paris</a>
            </li>
            <li class="nav-item">
              <a class="nav-link">Sydney</a>
            </li>
            <li class="nav-item">
              <a class="nav-link">San Francisco</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
