import React from "react";

function Userslist() {
  return (
    <li className=" col-12 py-3 userlist rounded-2">
      <div className="row m-0">
        <div className="col-2  p-0">
          <img
            src="https://images.freeimages.com/images/large-previews/fdd/man-avatar-1632964.jpg?fmt=webp&w=350"
            alt=""
            className="rounded-circle img-fluid "
          />
        </div>
        <div className="col-10 align-self-center">
          <div className="text-color d-flex">
            <p className="p-0 m-0">Mark</p>
            <div className="ms-auto align-self-center text-color fw-lightd text-muted fw-light small">
              11:20
            </div>
          </div>{" "}
          <p className="text-secondary text-truncater text-truncate m-0 p-0 fw-lightd">
            lorem ispum doldsdsor sitdsdsdsdsdss
          </p>
        </div>
      </div>
    </li>
  );
}

export default Userslist;
