import React, { useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

export default function Register() {
  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   history.push(
  //     `/list/${Registration.current.value}/${Program.current.value}/male/22-11-2021`
  //   );
  // };

  const SignupSchema = Yup.object().shape({
    registration: Yup.string().required("Registration Required"),
    program: Yup.string().required("Program Required"),
    gender: Yup.string().required("Gender Required"),
  });

  return (
    <div className="my-5">
      <h3>One Day MERN Stack Workshop</h3>
      <Formik
        initialValues={{
          registration: "",
          program: "",
          gender: "",
          date: [],
        }}
        validationSchema={SignupSchema}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            console.log(values);
            setSubmitting(false);
          }, 2000);
        }}
        validate={(values) => {
          let error = {};

          // if (!values.registration) {
          //   error.registration = "Registration Number Required";
          // }

          if (!values.program || values.program === "0") {
            error.program = "Program Required";
          }

          // if (!values.gender) {
          //   error.gender = "Gender Required";
          // }

          // if (!values.date) {
          //   error.date = "Date Required";
          // }

          return error;
        }}
      >
        {({
          handleSubmit,
          handleChange,
          values,
          errors,
          handleBlur,
          isSubmitting,
        }) => (
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
                  onBlur={handleBlur}
                />
              </div>

              {errors.registration && (
                <div class="alert alert-danger col-7" role="alert">
                  {errors.registration}
                </div>
              )}
            </div>
            {/*********Program****** */}
            <div class="row g-3 align-items-center my-3">
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
                  onChange={handleChange}
                  onBlur={handleBlur}
                >
                  <option value="0">Select Program</option>
                  <option value="BsCS">BsCS</option>
                  <option value="BsCE">BsSE</option>
                </Field>
              </div>
              {errors.program && (
                <div class="alert alert-danger col-7" role="alert">
                  {errors.program}
                </div>
              )}
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
              {errors.gender && (
                <div class="alert alert-danger col-7" role="alert">
                  {errors.gender}
                </div>
              )}
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
                  <Field
                    class="form-check-input"
                    type="checkbox"
                    value="22-11-2021"
                    id="flexCheckDefault"
                    name="date"
                  />
                  <label class="form-check-label" for="flexCheckDefault">
                    22-11-2021
                  </label>
                </div>
                <div class="form-check">
                  <Field
                    class="form-check-input"
                    type="checkbox"
                    value="25-11-2021"
                    id="flexCheckChecked"
                    name="date"
                  />
                  <label class="form-check-label" for="flexCheckChecked">
                    25-11-2021
                  </label>
                </div>
              </div>
              {errors.date && (
                <div class="alert alert-danger col-7" role="alert">
                  {errors.date}
                </div>
              )}
            </div>
            {/*********Button********* */}
            <div>
              <button
                disabled={isSubmitting}
                type="submit"
                className="btn btn-success"
              >
                Register
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
