import React from "react";
import "./Question08.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Question08 = () => {
  return (
    <div className="mainWrap">
      <div className="mainNav">
        <FontAwesomeIcon className="backIcon" icon={faChevronLeft} />
        <FontAwesomeIcon className="searchIcon" icon={faBars} />
        <FontAwesomeIcon className="searchIcon" icon={faMagnifyingGlass} />
      </div>
      <div className="contentsWrap">
        <div className="contents">
          <h1>Q8</h1>
          <p>
            우여곡절 끝에 역할이 모두 분담되었다. 난 발표와 자료조사를 분담하게
            되었다.
            <br></br>
            <span>나에게 주어진 파트는 언제까지 마칠까?</span>
          </p>
          <div className="buttonWrap">
            <button>
              '얼른 끝내야지'
              <br></br>
              <span>최대한 빨리 끝내려고 노력한다</span>
            </button>
            <button>
              '좀 남았으니까...'
              <br></br>
              <span>나중으로 미룬다</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question08;
