import React from "react";
import "./Question03.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Question03 = () => {
  return (
    <div className="mainWrap">
      <div className="mainNav">
        <FontAwesomeIcon className="backIcon" icon={faChevronLeft} />
        <FontAwesomeIcon className="searchIcon" icon={faBars} />
        <FontAwesomeIcon className="searchIcon" icon={faMagnifyingGlass} />
      </div>
      <div className="contentsWrap">
        <div className="contents">
          <h1>Q3</h1>
          <p>
            팀플 단톡방이 만들어졌지만, 아무도 인사하지 않는데...
            <br></br>
            <span>내가 먼저 말을 꺼낼까?</span>
          </p>
          <div className="buttonWrap">
            <button>
              '팀플할려면 어차피 친해져야 하잖아'
              <br></br>
              <span>먼저 나서서 분위기를 푼다</span>
            </button>
            <button>
              '아무도 인사 안하는데 내가 굳이 ...?'
              <br></br>
              <span>인사 안하고 다른 사람이 인사하면 인사한다</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question03;
