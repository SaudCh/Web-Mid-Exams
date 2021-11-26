import React from "react";
import { useParams } from "react-router";

export default function student() {
  const reg = useParams().register;
  const pro = useParams().program;
  const gender = useParams().gender;
  const date = useParams().date;
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
            <th>{}</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
