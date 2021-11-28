import React from "react";
import { useHistory } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

export default function Register() {
  let history = useHistory();
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
    date: Yup.array().min(1, "Date Required").max(1, "Max 1 Date"),
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

            history.push(
              `/list/${values.registration}/${values.program}/${values.gender}/${values.date}`
            );
          }, 2000);
        }}
        validate={(values) => {
          let error = {};

          // if (!values.registration) {
          //   error.registration = "Registration Number Required";
          // }

          if (values.program === "0") {
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
            <div className="row g-3 align-items-center my-3">
              <div className="col-4 col-sm-3 ">
                <label htmlFor="registration" className="col-form-label">
                  Registration
                </label>
              </div>
              <div className="col-8 col-sm-7 col-md-5">
                <Field
                  onChange={handleChange}
                  type="text"
                  id="registration"
                  className="form-control"
                  name="registration"
                  value={values.registration}
                  onBlur={handleBlur}
                />
              </div>

              {errors.registration && (
                <div className="alert alert-danger col-7" role="alert">
                  {errors.registration}
                </div>
              )}
            </div>
            {/*********Program****** */}
            <div className="row g-3 align-items-center my-3">
              <div className="col-4 col-md-1">
                <label htmlFor="program" className="col-form-label">
                  Program
                </label>
              </div>
              <div className="col-8 col-md-5">
                <Field
                  name="program"
                  as="select"
                  id="program"
                  className="form-select"
                  onChange={handleChange}
                  onBlur={handleBlur}
                >
                  <option value="0">Select Program</option>
                  <option value="BsCS">BsCS</option>
                  <option value="BsCE">BsSE</option>
                </Field>
              </div>
              {errors.program && (
                <div className="alert alert-danger col-7" role="alert">
                  {errors.program}
                </div>
              )}
            </div>
            {/*********Gender****** */}
            <div className="row g-3 align-items-center my-3">
              <div className="col-4 col-md-1">
                <label htmlFor="gender" className="col-form-label">
                  Gender
                </label>
              </div>
              <div className="col-8 col-md-5">
                <div className="form-check">
                  <Field
                    className="form-check-input"
                    type="radio"
                    name="gender"
                    value="male"
                    id="gender"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexRadioDefault1"
                  >
                    Male
                  </label>
                </div>
                <div className="form-check">
                  <Field
                    className="form-check-input"
                    type="radio"
                    name="gender"
                    value="female"
                    id="gender"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexRadioDefault2"
                  >
                    Female
                  </label>
                </div>
              </div>
              {errors.gender && (
                <div className="alert alert-danger col-7" role="alert">
                  {errors.gender}
                </div>
              )}
            </div>
            {/*********Date****** */}
            <div className="row g-3 align-items-center my-3">
              <div className="col-4 col-md-1">
                <label htmlFor="date" className="col-form-label">
                  Preferred date
                </label>
              </div>
              <div className="col-8 col-md-5">
                <div className="form-check">
                  <Field
                    className="form-check-input"
                    type="checkbox"
                    value="22-11-2021"
                    id="flexCheckDefault"
                    name="date"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault"
                  >
                    22-11-2021
                  </label>
                </div>
                <div className="form-check">
                  <Field
                    className="form-check-input"
                    type="checkbox"
                    value="25-11-2021"
                    id="flexCheckChecked"
                    name="date"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckChecked"
                  >
                    25-11-2021
                  </label>
                </div>
              </div>
              {errors.date && (
                <div className="alert alert-danger col-7" role="alert">
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
