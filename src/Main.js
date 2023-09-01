import React from "react";
import "./Main.scss";

const Main = () => {
  return (
    <div className="mainWrap">
      <div className="mainNav">돋보기</div>
      <div className="mainContent">
        <div className="title">조별 과제 속 나의 모습은?</div>;
        <div className="subTitle">
          총 16개의 유형의 MBTI 성향을 기반으로 조별과제 속 나의 모습을
          알아보아요
        </div>
        <div mainArticel>
          <form>
            <input id="name" type="text" placeholder="이름을 입력해주세요" />
            <button type="submit">테스트하기</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Main;
