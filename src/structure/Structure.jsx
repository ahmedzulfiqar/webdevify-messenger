import React from "react";

function Structure({ children }) {
  return (
    <div className="row m-0 vh-100 p-0 bg-primarys overflow-hidden align-content-start">
      {children}
    </div>
  );
}

export default Structure;
