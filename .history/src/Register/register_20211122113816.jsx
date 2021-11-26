import React, { useRef } from "react";

export default function Register() {
  const Registration = useRef();
  const Program = useRef();
  const male = useRef();
  const female = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(Registration.current.value);
    console.log(Program.current.value);
    console.log(male.current.value);
    console.log(female.current.value);
  };
  return (
    <div className="my-5">
      <h3>One Day MERN Stack Workshop</h3>
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
            />
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
              <option value="">Select Program</option>
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
                name="flexRadioDefault"
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
                name="flexRadioDefault"
                id="gender"
                ref={female}
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
                value=""
                id="flexCheckDefault"
              />
              <label class="form-check-label" for="flexCheckDefault">
                Default checkbox
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
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
          <button className="btn btn-success">Register</button>
        </div>
      </form>
    </div>
  );
}
