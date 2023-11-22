import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Question from "./Question";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./Test.scss";

const Test = () => {
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);
  const navigate = useNavigate();

  function prevPage() {
    setData(data);

    if (count === 0) {
      navigate(-1);
    } else setCount(count - 1);
  }

  function nextPage() {
    setData(data);

    if (count === 11) {
      localStorage.setItem("MBTI", JSON.stringify(data));
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
      <Question nextPage={nextPage} count={count} data={data} />
    </div>
  );
};

export default Test;
