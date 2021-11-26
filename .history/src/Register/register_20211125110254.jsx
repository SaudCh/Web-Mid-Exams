import React, { useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Formik } from "formik";

export default function Register() {
  const Registration = useRef();
  const Program = useRef();
  const male = useRef();
  const history = useHistory();

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
        initialValues={{ registration: "", password: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.registration) {
            errors.registration = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
              values.registration
            )
          ) {
            errors.registration = "Invalid Registration address";
          }
          return errors;
        }}
        onSubmit={(values) => {
          // same shape as initial values
          console.log(values);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <form onSubmit={handleSubmit}>
            {/*********Registration********** */}
            <div class="row g-3 align-items-center my-3">
              <div class="col-1">
                <label for="registration" class="col-form-label">
                  Registration
                </label>
              </div>
              <div class="col-5">
                <input
                  type="text"
                  id="registration"
                  class="form-control"
                  aria-describedby="passwordHelpInline"
                  ref={Registration}
                  name="registration"
                />
              </div>
              <div class="alert alert-danger col-7" role="alert">
                {errors.registration &&
                  touched.registration &&
                  errors.registration}
              </div>
            </div>
            {/*********Program****** */}
            <div class="row g-3 align-items-center my-3">
              <div class="col-1">
                <label for="program" class="col-form-label">
                  Program
                </label>
              </div>
              <div class="col-5">
                <select ref={Program} id="program" class="form-select">
                  <option value="0">Select Program</option>
                  <option value="BsCS">BsCS</option>
                  <option value="BsCE">BsSE</option>
                </select>
              </div>
            </div>
            {/*********Gender****** */}
            <div class="row g-3 align-items-center my-3">
              <div class="col-1">
                <label for="gender" class="col-form-label">
                  Gender
                </label>
              </div>
              <div class="col-5">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="gender"
                    value="male"
                    id="gender"
                    ref={male}
                  />
                  <label class="form-check-label" for="flexRadioDefault1">
                    Male
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="gender"
                    value="female"
                    id="gender"
                    ref={male}
                  />
                  <label class="form-check-label" for="flexRadioDefault2">
                    Female
                  </label>
                </div>
              </div>
            </div>
            {/*********Date****** */}
            <div class="row g-3 align-items-center my-3">
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
            </div>
            {/*********Button********* */}
            <div>
              <button type="button" className="btn btn-success">
                Register
              </button>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
}
