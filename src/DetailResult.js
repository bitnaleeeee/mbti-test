import React from "react";
import { useSearchParams } from "react-router-dom";
import "./Result.scss";

let valData = [];

const DetailResult = (props) => {
  const { data } = props;
  let { str } = props;
  let valName = JSON.parse(localStorage.getItem("NAME"));
  let [searchParams, setSearchParams] = useSearchParams();

  let queryValue = searchParams.get("mbti");
  // console.log(queryValue);
  // console.log(str);

  // function queryTest() {
  //   if (queryValue) {
  //     console.log("있다");
  //   } else {
  //     console.log("없다");
  //   }
  // }

  function dataMapArr(data) {
    console.log(data);
    // queryTest();
    for (let i = 0; i < data.length; i++) {
      let sameData = data[i].mbti;

      if (str === sameData) {
        valData = data[i];

        debugger;
      } else {
        if (queryValue === sameData) {
          valData = data[i];
        }
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
