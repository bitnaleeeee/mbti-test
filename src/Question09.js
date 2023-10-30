import React from "react";
import "./Question09.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Question09 = () => {
  return (
    <div className="mainWrap">
      <div className="mainNav">
        <FontAwesomeIcon className="backIcon" icon={faChevronLeft} />
        <FontAwesomeIcon className="searchIcon" icon={faBars} />
        <FontAwesomeIcon className="searchIcon" icon={faMagnifyingGlass} />
      </div>
      <div className="contentsWrap">
        <div className="contents">
          <h1>Q9</h1>
          <p>
            팀플 과제 마감날, 어쩌다보니 나에게 분담된 과제를 제대로 하지
            못했다!
            <br></br>
            <span>이 때 내 생각은?</span>
          </p>
          <div className="buttonWrap">
            <button>
              '내가 이걸 못해서 팀플이 망하면 학점이 망하겠지... 어떡하냐?'
              <br></br>
              <span>미래에 대해 걱정한다</span>
            </button>
            <button>
              '왜 과제를 제대로 못했지?'
              <br></br>
              <span>원인에 대해 생각한다</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question09;
