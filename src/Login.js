import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "./Login.scss";

const Login = (props) => {
  const { getUserName } = props;
  const [name, setName] = useState("");
  const navigate = useNavigate();

  function loginCheck(e) {
    setName(e.target.value);
    getUserName(e.target.value);
  }

  const goToTest = () => {
    name.length > 0 ? navigate("/test") : alert("이름을 입력해주세요");
  };

  return (
    <div className="mainWrap">
      <div className="mainNav">
        <FontAwesomeIcon className="mainbackIcon" icon={faChevronLeft} />
        <FontAwesomeIcon className="searchIcon" icon={faBars} />
        <FontAwesomeIcon className="searchIcon" icon={faMagnifyingGlass} />
      </div>

      <div className="mainContent">
        <h2 className="title">조별 과제 속 나의 모습은?</h2>
        <p className="subTitle">
          총 16개의 유형의 MBTI 성향을 기반으로 조별과제 속 나의 모습을
          알아보아요
        </p>
      </div>

      <form className="submitButton">
        <input
          className="nameSubmit"
          id="name"
          type="text"
          placeholder="이름을 입력해주세요"
          onChange={loginCheck}
        />
        <button className="testButton" type="submit" onClick={goToTest}>
          테스트하기
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </form>
    </div>
  );
};

export default Login;
