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
  //test 에서 navigate /id 로 설정해줘야함
  // result화면에서 id 값으로 뿌려줄때 그 값에 맞는 링크 id 주소가 있어야 함ㄴㄴ 라우터의 id에 맞게 result내에서 id로 뿌려주면 됨
  // router에서 result에 /id로 설정해줘야함

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
