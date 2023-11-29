import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./Login";
import Test from "./Test";
import Result from "./Result";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/test" element={<Test />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
