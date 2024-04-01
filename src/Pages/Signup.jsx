import React, { useState } from "react";
import { Link } from "react-router-dom";

function Signup() {
  const [formvalue, setformvalue] = useState({
    username: "",
    email: "",
    password: "",
  });
  return (
    <div className="container-fluid vh-100 d-flex justify-content-center align-items-center">
      <div className="col-3">
        <div className="card bg-black border-0 pt-5 pb-2 px-3 shadow">
          <div className="card-body">
            <h3 className="card-title text-gradient mb-5 fw-bolder fs-2 text-uppercase text-center">
              Signup
            </h3>
            <div className="fs-6 pb-2 text-light fw-normal pt-1 ps-1">
              Username
            </div>
            <input
              type="text"
              className="w-100 py-2 px-3 border-lessmain text-light mb-4 bg-transparent rounded-2"
              name="username"
            />{" "}
            <div className="fs-6 pb-2 text-light fw-normal pt-1 ps-1">
              Email
            </div>
            <input
              type="text"
              name="email"
              className="w-100 py-2 px-3 border-lessmain text-light mb-4 bg-transparent rounded-2"
            />
            <div className="fs-6 pb-2 text-light ps-1">Password</div>
            <input
              type="password"
              name="password"
              className="w-100 py-2 px-3 border-lessmain text-light mb-4 bg-transparent rounded-2"
            />
            <label
              className="fs-6 pb-4 text-light ps-1"
              for="pfp"
              accept="image/*"
            >
              <i class="fa fa-plus-circle text-main" aria-hidden="true"></i>{" "}
              Chose image
            </label>
            <input type="file" name="password" className="d-none" id="pfp" />
            <div className="btn w-100 btn-primary bg-gradient2 mb-4">
              Sign In
            </div>
            <p className="text-muted text-start small pt-2">
              Already have an account{" "}
              <Link className="text-main" to="/login">
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
