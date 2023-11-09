import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Question from "./Question";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./MbtiTest.scss";

const MbtiTest = () => {
  const [count, setCount] = useState(0);

  const navigate = useNavigate();

  function dataCheck(data) {
    console.log(data);
    localStorage.setItem(count, data);
  }
  function prevPage() {
    if (count === 0) {
      navigate(-1);
    } else setCount(count - 1);
  }

  function nextPage() {
    if (count === 11) {
      navigate("/result");
    }
    setCount(count + 1);
  }

  return (
    <div className="mainWrap">
      <div className="mainNav">
        <FontAwesomeIcon
          className="backIcon"
          icon={faChevronLeft}
          onClick={prevPage}
        />
        <FontAwesomeIcon className="searchIcon" icon={faBars} />
        <FontAwesomeIcon className="searchIcon" icon={faMagnifyingGlass} />
      </div>
      <Question nextPage={nextPage} count={count} dataCheck={dataCheck} />
    </div>
  );
};

export default MbtiTest;
