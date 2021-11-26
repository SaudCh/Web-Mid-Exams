import React from "react";

export default function register() {
  return (
    <div>
      <h3>One Day MERN Stack Workshop</h3>
      <form>
        {/*********Registration********** */}
        <div class="row g-3 align-items-center">
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
            />
          </div>
        </div>
        {/*********Program****** */}
        <div class="row g-3 align-items-center">
          <div class="col-1">
            <label for="program" class="col-form-label">
              Program
            </label>
          </div>
          <div class="col-5">
            <select id="program" class="form-select">
              <option>Select Program</option>
            </select>
          </div>
        </div>
        {/*********Gender****** */}
        <div class="row g-3 align-items-center">
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
                id="flexRadioDefault1"
              />
              <label class="form-check-label" for="flexRadioDefault1">
                Default radio
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
                checked
              />
              <label class="form-check-label" for="flexRadioDefault2">
                Default checked radio
              </label>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
