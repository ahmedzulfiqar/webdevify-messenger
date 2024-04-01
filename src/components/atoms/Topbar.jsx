import React from "react";
import Togglesqitch from "../atoms/Togglesqitch";
function Topbar() {
  return (
    <div className="col-12 bg-primarys  py-3  px-md-5 px-3 border-secondary border-opacity-25 border-bottom">
      <div className="row m-0 ">
        <div className="col-10 d-flex p-0    ">
          <img
            src="https://images.freeimages.com/images/large-previews/7e8/man-avatar-1632965.jpg?fmt=webp&w=350"
            alt=""
            className="rounded-circle mynavbarimg "
          />
          <div className="d-block ps-3 text-color ">
            <p className="text-color p-0 m-0">Ahmed Zulfiqar</p>
            <p className="fw-lightd fw-bolder small text-success m-0">
            ⬤ Active
            </p>
          </div>
        </div>
        <div className="col-2 text-end  align-self-center">
          <i class="fa-solid fa-ellipsis fs-3 text-color"></i>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
