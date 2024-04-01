import React from "react";
import Avatar from "../atoms/Avatar";
import { Link } from "react-router-dom";
function Sidebar() {
  return (
    <div className="col-2 bg-primarys ">
      <div className="row h-100 align-content-between">
        <div className="col-12">
          <div className="row m-0 py-3 actions ">
            <div className="col-12  p-0 py-1 text-center ">
              <div className="btn fs-5 py-3 w-100  text-secondary">
                <i className="fa-brands fa-facebook-messenger"></i>
              </div>
            </div>
            <div className="col-12  p-0 py-1 text-center">
              <div className="btn fs-5 py-3 w-100  text-secondary">
                <i className="fa-solid fa-user-group"></i>
              </div>
            </div>
            <Link className="col-12  p-0 py-1 w-100 text-center" to={'/login'}>
              <div className="btn fs-5 py-3 w-100  text-secondary">
                <i className="fa-solid fa-right-from-bracket"></i>
              </div>
            </Link>
          </div>
        </div>
        <div className="col-12 pb-4 px-3">
          <Avatar />

          <div
            class="modal fade"
            id="exampleModal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-dialog-centered bg-transparent  border-0">
              <div class="modal-content bg-primarys text-light  border-0">
                <div class="modal-header border-bottom border-secondary border-opacity-10">
                  <h1 class="modal-title fs-5" id="exampleModalLabel">
                    Profile
                  </h1>
                  <button
                    type="button"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                    className=" bg-transparent border-0 text-light"
                  >
                    <i class="fa-solid fa-xmark"></i>
                  </button>
                </div>
                <div class="modal-body ps-md-3">
                  <div class="mb-2">
                    <label class="col-form-label fw-lightd">Name</label>
                    <input
                      type="text"
                      class="w-100 rounded-1 bg-new text-light border-0 px-3 py-1 fw-lightd fw-light"
                    />
                  </div>
                  <div class="mb-3 p-0">
                    <label class="col-form-label fw-lightd">Photo</label>
                    <br />
                    <img
                      src="https://images.freeimages.com/images/large-previews/971/basic-shape-avatar-1632968.jpg?fmt=webp&w=350"
                      alt=""
                      className="img-fluid mynavbarimg rounded-circle pt-1 p-0 m-0"
                    />
                    <span className="align-self-center fw-lightd ps-md-3">
                      Change
                    </span>
                  </div>
                </div>
                <div class="modal-footer border-top border-secondary border-opacity-10">
                  <button
                    type="button"
                    class="btn bg-transparent text-color btn-sm"
                    data-bs-dismiss="modal"
                  >
                    Cancel
                  </button>
                  <button type="button" class="btn bg-main text-color btn-sm">
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
