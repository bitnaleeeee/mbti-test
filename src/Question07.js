import React from "react";
import "./Question07.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Question07 = () => {
  return (
    <div className="mainWrap">
      <div className="mainNav">
        <FontAwesomeIcon className="backIcon" icon={faChevronLeft} />
        <FontAwesomeIcon className="searchIcon" icon={faBars} />
        <FontAwesomeIcon className="searchIcon" icon={faMagnifyingGlass} />
      </div>
      <div className="contentsWrap">
        <div className="contents">
          <h1>Q7</h1>
          <p>
            발표자를 정하는 시간,
            <br></br>
            <span>이 때 나의 행동은?</span>
          </p>
          <div className="buttonWrap">
            <button>
              '발표가 뭐 어렵다고'
              <br></br>
              <span>내가 발표하겠다고 한다</span>
            </button>
            <button>
              '발표 싫어. 다른 역할 할래'
              <br></br>
              <span>다른 사람이 발표한다고 하길 기다린다</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question07;
