import React from "react";

import Login from "./Login";
import Test from "./Test";
import Result from "./Result";

const Main = () => {
  const aa = () => {
    console.log(2);
  };
  console.log(2);
  return (
    <div>
      {console.log(aa)}
      <Login aa={aa} />
      <Test />
      <Result />
    </div>
  );
};

export default Main;
