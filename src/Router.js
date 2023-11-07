import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./Main";
import MbtiTest from "./MbtiTest";
import MbtiResult from "./MbtiResult";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/test" element={<MbtiTest />} />
        <Route path="/result" element={<MbtiResult />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
