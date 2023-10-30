import React from "react";
import "./Question06.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Question06 = () => {
  return (
    <div className="mainWrap">
      <div className="mainNav">
        <FontAwesomeIcon className="backIcon" icon={faChevronLeft} />
        <FontAwesomeIcon className="searchIcon" icon={faBars} />
        <FontAwesomeIcon className="searchIcon" icon={faMagnifyingGlass} />
      </div>
      <div className="contentsWrap">
        <div className="contents">
          <h1>Q6</h1>
          <p>
            주제가 정해진 뒤 역할을 분담하는 시간, 역할 분담이 제대로 안되는 것
            같은데...
            <br></br>
            <span>이 때 나의 행동은?</span>
          </p>
          <div className="buttonWrap">
            <button>
              '너무 답답해!'
              <br></br>
              <span>나서서 역할분담을 한다</span>
            </button>
            <button>
              '이러다가 정해지겠지'
              <br></br>
              <span>굳이 나서지 않는다</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question06;
