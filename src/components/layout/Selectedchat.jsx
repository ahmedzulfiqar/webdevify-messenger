import React from "react";
import Topbar from "../atoms/Topbar";
import Bottombar from "../atoms/Bottombar";
import Middlechat from "../ui-elements/Middlechat";
function Selectedchat() {
  return (
    <div className="col-md-9 col-12 bg-primarys p-0 h-100  border-start border-secondary border-opacity-25">
      <div className="row m-0 align-content-start vh-100">
        <Topbar />
        <Middlechat />
        <Bottombar />
      </div>
    </div>
  );
}

export default Selectedchat;
