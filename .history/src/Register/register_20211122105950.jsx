import React from "react";

export default function register() {
  return (
    <div>
      <h3>One Day MERN Stack Workshop</h3>
      <form>
        <div class="row g-3 align-items-center">
          <div class="col-auto">
            <label for="inputPassword6" class="col-form-label">
              Registration
            </label>
          </div>
          <div class="col-auto">
            <input
              type="password"
              id="inputPassword6"
              class="form-control"
              aria-describedby="passwordHelpInline"
            />
          </div>
          <div class="col-auto">
            <span id="passwordHelpInline" class="form-text">
              Must be 8-20 characters long.
            </span>
          </div>
        </div>
        <div class="row g-3 align-items-center">
          <div class="col-auto">
            <label for="inputPassword6" class="col-form-label">
              Password
            </label>
          </div>
          <div class="col-auto">
            <input
              type="password"
              id="inputPassword6"
              class="form-control"
              aria-describedby="passwordHelpInline"
            />
          </div>
          <div class="col-auto">
            <span id="passwordHelpInline" class="form-text">
              Must be 8-20 characters long.
            </span>
          </div>
        </div>
      </form>
    </div>
  );
}
