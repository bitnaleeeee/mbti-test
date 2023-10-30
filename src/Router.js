import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./Main";
import Question from "./Question";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="test" element={<Question />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
