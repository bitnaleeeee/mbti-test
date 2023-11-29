import React from "react";

import "./Result.scss";

let valData = [];

const DetailResult = (props) => {
  const { data } = props;
  let { str } = props;

  let valName = JSON.parse(localStorage.getItem("NAME"));

  function dataMapArr(data) {
    for (let i = 0; i < data.length; i++) {
      let sameData = data[i].mbti;

      // 유알엘 값 가져오기
      const urlParams = new URL(window.location.href).searchParams;
      const name = urlParams.get("mbti");

      if (name) {
        let val = name.toUpperCase();
        str = val;
      }

      if (str === sameData) {
        valData = data[i];
      }
    }
  }
  dataMapArr(data);
  // mbti 일치하는 설명 글 매칭 함수
  return (
    <div className="result">
      <h3>조별 과제 속 {valName} 님의 모습은?</h3>

      <h3>{valData && valData.title}</h3>
      <h2>{valData && valData.subTitle}</h2>
      <p>{valData && valData.mbti}</p>
      <img src={`./images/${str}.jpg`} alt="테스트결과이미지"></img>

      <div className="info">
        <span>{valData && valData.tag}</span>
        <ul>
          {valData.info &&
            valData.info.map((item, idx) => {
              return <li key={idx}>{item}</li>;
            })}
        </ul>
      </div>
    </div>
  );
};

export default DetailResult;
