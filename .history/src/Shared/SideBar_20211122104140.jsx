import React from "react";

export default function SideBar() {
  return (
    <div class="card">
      <img src="..." class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">Workshop Registration</h5>
        <p class="card-text">Get Registered for one day MERN stack Workshop</p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">React JS</li>
        <li class="list-group-item">Mongo DB</li>
        <li class="list-group-item">Node JS</li>
        <li class="list-group-item">Express JS</li>
      </ul>
      <div class="card-body">
        <a href="#" class="card-link">
          Card link
        </a>
        <a href="#" class="card-link">
          Another link
        </a>
      </div>
    </div>
  );
}
