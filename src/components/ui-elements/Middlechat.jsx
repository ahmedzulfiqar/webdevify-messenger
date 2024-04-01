import React from "react";
import Chatfromme from "../atoms/Chatfromme";
import Chatfromyou from "../atoms/Chatfromyou";

function Middlechat() {
  return (
    <div className="col-12 bg-primarys ds overflow-scroll py-3 padder">
      <div className="row m-0 align-content-start">
        <div className="col-12 text-center  heightset1 my-md-3 pb-4   pt-3">
          <img
            src="https://images.freeimages.com/images/large-previews/962/avatar-man-with-mustages-1632966.jpg?fmt=webp&w=350"
            alt=""
            className="img-fluid rounded-circle mynavbarimg2"
          />
          <div className="display-6 text-color text-uppercase  pt-3">
            Ertugil Ghazi
          </div>
          <div className="fs-3 text-color fw-lightd fw-light py-0">
            250 Friends
          </div>
        </div>
        <Chatfromyou />
        <Chatfromme />
        <Chatfromme />
        <Chatfromyou />
        <Chatfromme />
        <Chatfromyou />
        <Chatfromme />
        <Chatfromyou />
        <Chatfromme />
        <Chatfromyou />
        <Chatfromyou />
        <Chatfromyou />
      </div>
    </div>
  );
}

export default Middlechat;
