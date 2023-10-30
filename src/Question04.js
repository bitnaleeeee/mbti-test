import React from "react";
import "./Question04.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Question04 = () => {
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
            발표 주제를 정하는 시간
            <br></br>
            <span>이 때 나의 행동은?</span>
          </p>
          <div className="buttonWrap">
            <button>
              '이것도 괜찮고 이것도 괜찮지 않을까?'
              <br></br>
              <span>이것저것 아이디어를 낸다</span>
            </button>
            <button>
              '음 저 주제는 이런 부분이 부족한데...'
              <br></br>
              <span>다른 사람이 낸 주제를 피드백 해준다</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question04;
