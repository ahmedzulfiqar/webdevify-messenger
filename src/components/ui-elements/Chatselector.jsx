import React from "react";
import Userslist from "../atoms/Userslist";

function Chatselector() {
  return (
    <div className="col-10 h-100   bg-primarys border-start border-secondary border-opacity-25  py-4 px-3 ">
      <div className="row m-0 ">
        <div className="col-6 display-6 text-color">Messages</div>
        <div className="col-6 fs-3  align-self-center text-end ">
          <i
            className="fa-regular fa-circle-user text-color"
            aria-hidden="true"
          ></i>
        </div>
      </div>
      <div className="row pt-1 pb-5 mt-3    chatselector h-100  mx-0 text-color ">
        <Userslist />
        <Userslist />
        <Userslist />
        <Userslist />
        <Userslist />
        <Userslist />
        <Userslist />
        <Userslist />
        <Userslist /> <Userslist />
        <Userslist />
        <Userslist />
        <Userslist />
        <Userslist />
        <Userslist />
        <Userslist />
      </div>
    </div>
  );
}

export default Chatselector;

/*
English 
maths -----------------
urdu 
isl 
phy ----------------
comp  
*/
