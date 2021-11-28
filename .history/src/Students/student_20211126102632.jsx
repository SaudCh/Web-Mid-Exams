import React from "react";
import { useParams } from "react-router-dom";

export default function Student() {
  // const reg = useParams().register;
  // const pro = useParams().program;
  // const gender = useParams().gender;
  // const date = useParams().date;

  const { register, program, gender, date } = useParams();
  return (
    <div>
      <h1>Registred Student</h1>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Registration</th>
            <th scope="col">Program</th>
            <th scope="col">Gender</th>
            <th scope="col">Date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>{register}</th>
            <td>{program}</td>
            <td>{gender}</td>
            <td>{date}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
