import React from "react";
import Question from "./question";
import "./mbtiTest.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const mbtiTest = () => {
  return (
    <div className="mainWrap">
      <div className="mainNav">
        <FontAwesomeIcon className="backIcon" icon={faChevronLeft} />
        <FontAwesomeIcon className="searchIcon" icon={faBars} />
        <FontAwesomeIcon className="searchIcon" icon={faMagnifyingGlass} />
      </div>
      <div className="contentsWrap">
        <div className="contents">
          <h1>Q1</h1>
          <p>
            새 학년 새 학기 수업 시간. 이 수업에 팀플이 있다는 걸 알게 되었다.
            <br></br>
            <span>이 때 내가 든 생각은?</span>
          </p>
          <div className="buttonWrap">
            <button>
              '새로운 사람 만나는 건 좋지'
              <br></br>
              <span>괜찮다고 생각한다</span>
            </button>
            <button>
              '팀플 너무 싫어 드랍할 걸...'
              <br></br>
              <span>벌써부터 힘들다고 생각한다</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default mbtiTest;
