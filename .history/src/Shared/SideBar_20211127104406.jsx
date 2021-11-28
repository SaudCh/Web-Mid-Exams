import React from "react";

export default function SideBar() {
  return (
    <div className="card">
      <img
        src={process.env.PUBLIC_URL + "/comsats-logo.png"}
        className="card-img-top"
        style={{ width: "90%", alignSelf: "center" }}
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">Workshop Registration</h5>
        <p className="card-text">
          Get Registered for one day MERN stack Workshop
        </p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">React JS</li>
        <li className="list-group-item">Mongo DB</li>
        <li className="list-group-item">Node JS</li>
        <li className="list-group-item">Express JS</li>
      </ul>
    </div>
  );
}
