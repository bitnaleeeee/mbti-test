import React from "react";
import "./Question02.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Question02 = () => {
  return (
    <div className="mainWrap">
      <div className="mainNav">
        <FontAwesomeIcon className="backIcon" icon={faChevronLeft} />
        <FontAwesomeIcon className="searchIcon" icon={faBars} />
        <FontAwesomeIcon className="searchIcon" icon={faMagnifyingGlass} />
      </div>
      <div className="contentsWrap">
        <div className="contents">
          <h1>Q2</h1>
          <p>
            교수님이 짜신 팀플 조가 공지에 올라왔다. 그러나 아무도 단톡방을
            만들지 않는데...
            <br></br>
            <span>내가 나설까??</span>
          </p>
          <div className="buttonWrap">
            <button>
              '딘톡방 만드는게 뭐가 어렵다고'
              <br></br>
              <span>바로 만든다</span>
            </button>
            <button>
              '다른 사람이 만들겠지'
              <br></br>
              <span>만들지 않고 기다린다</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question02;
