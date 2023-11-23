import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Test from "./Test";
import Result from "./Result";

const Router = () => {
  const [val, setVale] = useState("");

  function getUserName(val) {
    setVale(val);
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login getUserName={getUserName} />} />
        <Route path="/test" element={<Test />} />
        <Route path="/result" element={<Result val={val} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
