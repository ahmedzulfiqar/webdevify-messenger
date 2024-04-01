import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="container-fluid vh-100 d-flex justify-content-center align-items-center">
      <div className="col-3">
        <div className="card bg-black border-0 pt-5 pb-2 px-3 shadow">
          <div className="card-body">
            <h3 className="card-title text-gradient mb-5 fw-bolder fs-2 text-uppercase text-center">
              Login
            </h3>
            <div className="fs-6 pb-2 text-light fw-normal pt-1 ps-1">
              Username
            </div>
            <input
              type="text"
              className="w-100 py-2 px-3 border-lessmain text-light mb-4 bg-transparent rounded-2"
            />
            <div className="fs-6 pb-2 text-light ps-1">Password</div>
            <input
              type="password"
              className="w-100 py-2 px-3 border-lessmain text-light mb-5 bg-transparent rounded-2"
            />
            <div className="btn w-100 btn-primary mb-4 bg-gradient2">
              Sign In
            </div>
            <p className="text-muted text-start small pt-2">
              Dont have an account{" "}
              <Link className="text-main" to="/signup">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
