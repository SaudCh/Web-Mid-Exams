import React from "react";

export default function register() {
  return (
    <div>
      <h3>One Day MERN Stack Workshop</h3>
      <form>
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
        <div class="row g-3 align-items-center">
          <div class="col-1">
            <label for="program" class="col-form-label">
              Program
            </label>
          </div>
          <div class="col-5">
            <select id="program" class="form-select">
              <option>Disabled select</option>
            </select>
          </div>
        </div>
      </form>
    </div>
  );
}
