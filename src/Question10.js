import React from "react";
import "./Question10.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Question10 = () => {
  return (
    <div className="mainWrap">
      <div className="mainNav">
        <FontAwesomeIcon className="backIcon" icon={faChevronLeft} />
        <FontAwesomeIcon className="searchIcon" icon={faBars} />
        <FontAwesomeIcon className="searchIcon" icon={faMagnifyingGlass} />
      </div>
      <div className="contentsWrap">
        <div className="contents">
          <h1>Q10</h1>
          <p>
            막판 스퍼트를 내 팀플 과제를 끝냈다. 근데... 팀원의 자료조사 부분이
            부족한 것 같다.
            <br></br>
            <span>이 때 내 생각은?</span>
          </p>
          <div className="buttonWrap">
            <button>
              "너무 부족하게 해오신 것 같아요"
              <br></br>
              <span>바로 다시 해오라 한다</span>
            </button>
            <button>
              "이 부분만 조금 수정해주실 수 있나요?" <br></br>
              <span>최대한 돌려서 말한다</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question10;
