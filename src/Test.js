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
  // ToDo
  // 1. 결과물 str에 맞게 라우팅 주소가 바뀌고, 그 주소로 이동되어야 함
  //2. ex. str> istj 일때 주소 link to /istj
  //3. test화면에서 11이 넘어갈떄, lik to 해당 /str으로 주소가 넘어감
  //4.해당 파라미터 str 주소에서, 해당 str 데이터 값이 보여짐

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
      navigate("/result/");
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
