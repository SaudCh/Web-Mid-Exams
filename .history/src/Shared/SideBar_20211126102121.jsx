import React from "react";
import logo from "../public/comsats-logo.png";

export default function SideBar() {
  return (
    <div class="card">
      <img
        src={process.env.PUBLIC_URL + "/comsats-logo.png"}
        class="card-img-top"
        style={{ width: "90%", alignSelf: "center" }}
        alt="..."
      />
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
    </div>
  );
}
