import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./Main";
import Question01 from "./Question01";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="test" element={<Question01 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
