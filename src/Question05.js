import React from "react";
import "./Question05.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Question05 = () => {
  return (
    <div className="mainWrap">
      <div className="mainNav">
        <FontAwesomeIcon className="backIcon" icon={faChevronLeft} />
        <FontAwesomeIcon className="searchIcon" icon={faBars} />
        <FontAwesomeIcon className="searchIcon" icon={faMagnifyingGlass} />
      </div>
      <div className="contentsWrap">
        <div className="contents">
          <h1>Q4</h1>
          <p>
            다른 팀원 낸 주제가 우리 발표랑 별로 안 맞는 것 같아
            <br></br>
            <span>이 때 나의 행동은?</span>
          </p>
          <div className="buttonWrap">
            <button>
              "이런 주제는 이 부분에서 안 맞는 것 같아요! 다른 주제로 하죠"
              <br></br>
              <span>별로 안맞는다고 바로 말한다</span>
            </button>
            <button>
              "좋은 주제인데... 이 부분에서 조금 안맞을수도 있을 것 같아요"
              <br></br>
              <span>돌려서 말한다</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question05;
