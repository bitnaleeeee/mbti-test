import React from "react";
import "./Main.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Main = () => {
  return (
    <div className="mainWrap">
      <div className="mainNav">
        <FontAwesomeIcon className="backIcon" icon={faChevronLeft} />
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
        />
        <button className="testButton" type="submit">
          테스트하기
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </form>
    </div>
  );
};

export default Main;
