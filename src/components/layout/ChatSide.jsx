import React from "react";
import Sidebar from "../ui-elements/Sidebar";
import Chatselector from "../ui-elements/Chatselector";

function ChatSide() {
  return (
    <div className="col-3  h-100 p-0 d-md-block d-none">
      <div className="row m-0  h-100">
        <Sidebar />
        <Chatselector />
      </div>
    </div>
  );
}

export default ChatSide;
