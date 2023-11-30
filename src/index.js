import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./Router";

import "./page/reset.scss";
import "./page/common.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Router />);
