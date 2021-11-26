import React, { useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Formik, Form, Field } from "formik";

export default function Register() {
  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   history.push(
  //     `/list/${Registration.current.value}/${Program.current.value}/male/22-11-2021`
  //   );
  // };
  return (
    <div className="my-5">
      <h3>One Day MERN Stack Workshop</h3>
      <Formik
        initialValues={{ registration: "", program: "", gender: "" }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validate={(values) => {
          let error = {};

          if (!values.registration) {
            error.registration = "Please Enter Registration Number";
          }

          return error;
        }}
      >
        {({ handleSubmit, handleChange, values, errors }) => (
          <Form onSubmit={handleSubmit}>
            {/*********Registration********** */}
            <div class="row g-3 align-items-center my-3">
              <div class="col-1">
                <label for="registration" class="col-form-label">
                  Registration
                </label>
              </div>
              <div class="col-5">
                <Field
                  onChange={handleChange}
                  type="text"
                  id="registration"
                  class="form-control"
                  name="registration"
                  value={values.registration}
                />
              </div>

              {errors.registration && (
                <div class="alert alert-danger col-7" role="alert">
                  {errors.name}
                </div>
              )}
            </div>
            {/*********Program****** */}
            {/* <div class="row g-3 align-items-center my-3">
              <div class="col-1">
                <label for="program" class="col-form-label">
                  Program
                </label>
              </div>
              <div class="col-5">
                <Field
                  name="program"
                  as="select"
                  id="program"
                  class="form-select"
                >
                  <option value="0">Select Program</option>
                  <option value="BsCS">BsCS</option>
                  <option value="BsCE">BsSE</option>
                </Field>
              </div>
            </div> */}
            {/*********Gender****** */}
            {/* <div class="row g-3 align-items-center my-3">
              <div class="col-1">
                <label for="gender" class="col-form-label">
                  Gender
                </label>
              </div>
              <div class="col-5">
                <div class="form-check">
                  <Field
                    class="form-check-input"
                    type="radio"
                    name="gender"
                    value="male"
                    id="gender"
                  />
                  <label class="form-check-label" for="flexRadioDefault1">
                    Male
                  </label>
                </div>
                <div class="form-check">
                  <Field
                    class="form-check-input"
                    type="radio"
                    name="gender"
                    value="female"
                    id="gender"
                  />
                  <label class="form-check-label" for="flexRadioDefault2">
                    Female
                  </label>
                </div>
              </div>
            </div> */}
            {/*********Date****** */}
            {/* <div class="row g-3 align-items-center my-3">
              <div class="col-1 ">
                <label for="date" class="col-form-label">
                  Preferred date
                </label>
              </div>
              <div class="col-5">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value="22-11-2021"
                    id="flexCheckDefault"
                  />
                  <label class="form-check-label" for="flexCheckDefault">
                    22-11-2021
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value="25-11-2021"
                    id="flexCheckChecked"
                  />
                  <label class="form-check-label" for="flexCheckChecked">
                    25-11-2021
                  </label>
                </div>
              </div>
            </div> */}
            {/*********Button********* */}
            <div>
              <button type="submit" className="btn btn-success">
                Register
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
