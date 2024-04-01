import React from "react";

function Bottombar() {
  return (
    <div className="col-12 bg-primarys    py-md-3 py-3  px-md-3 px-2 border-secondary border-opacity-25 border-top">
      <div className="row mx-md-3 mx-1 bg-new ">
        <div className="col-md-11 col-10 bg- px-md-3 px-2 py-md-2 py-2 rounded-3 align-self-center d-flex">
          <div className=" text-center align-self-center pe-md-3 pe-1">
            <i class="fa-solid fa-image text-main fs-5 "></i>
          </div>
          <input
            type="text"
            className="w-100  text-color border-0 bg-transparent  fw-lightd fw-lighta small "
          />
        </div>
        <div className="col-md-1 col-2 align-self-center px-0">
          <div className="pe-md-4 pe-2 text-main w-100 text-end">
            <i class="fa fa-paper-plane" aria-hidden="true"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bottombar;
