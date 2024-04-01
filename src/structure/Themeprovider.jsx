import React, { useState } from "react";

function Themeprovider({ children, theme }) {
  return <div data-theme={theme}>{children}</div>;
}

export default Themeprovider;
