import React from "react";
import ChatSide from "../components/layout/ChatSide";
import Selectedchat from "../components/layout/Selectedchat";

function Home() {
  return (
    <div className="col-12 p-0 heightset ">
      <div className="row m-0 h-100 ">
        <ChatSide />
        <Selectedchat />
      </div>
    </div>
  );
}

export default Home;
