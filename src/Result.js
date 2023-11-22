import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./Result.scss";

let str = "";
let sortData = {};
let mbtiData = {};
let sliceARR = [];

const Result = () => {
  let callbackData = JSON.parse(localStorage.getItem("MBTI"));

  dataFiltering(callbackData); //결과값 별로 몇점인지 체크하여 오름차순 정렬
  dataProcessing(sortData); //해당 key값(mbti) 오름차순 정렬 후 4개까지만 배열형태로 출력
  const arrmbti = [
    ["E", "N", "F", "J"],
    ["E", "N", "F", "P"],
    ["E", "N", "T", "J"],
    ["E", "N", "T", "P"],
    ["E", "S", "F", "J"],
    ["E", "S", "F", "P"],
    ["E", "S", "T", "J"],
    ["E", "S", "T", "P"],
    ["I", "N", "F", "J"],
    ["I", "N", "F", "P"],
    ["I", "N", "T", "J"],
    ["I", "N", "T", "P"],
    ["I", "S", "F", "J"],
    ["I", "S", "F", "P"],
    ["I", "S", "T", "J"],
    ["I", "S", "T", "P"],
  ];

  function dataFiltering(nums) {
    for (let i = 0; i < nums.length; i++) {
      nums[i] in mbtiData ? (mbtiData[nums[i]] += 1) : (mbtiData[nums[i]] = 1);
    }
    sortData = Object.fromEntries(
      Object.entries(mbtiData).sort((a, b) => b[1] - a[1])
    );
  }
  // 유저 선택지 오름차순 정렬

  function dataProcessing(data) {
    let arr = Object.keys(data);
    sliceARR = arr.slice(0, 4);
  }

  differance(arrmbti, sliceARR);

  function differance(a, b) {
    for (let i = 0; i < a.length; i++) {
      let differancearr = JSON.stringify(a[i].filter((x) => !b.includes(x)));
      if (differancearr.length === 2) {
        let txtarr = arrmbti[i];
        str = txtarr.join("");
      } else {
        console.log(false);
      }
    }
  }
  return (
    <div className="resultWrap">
      <div className="resultNav">
        <FontAwesomeIcon className="mainbackIcon" icon={faChevronLeft} />
        <FontAwesomeIcon className="searchIcon" icon={faBars} />
        <FontAwesomeIcon className="searchIcon" icon={faMagnifyingGlass} />
      </div>

      <div className="result">
        <h2>ㅇ</h2>
        <img src={`./images/${str}.jpg`} alt="테스트결과이미지"></img>
      </div>
    </div>
  );
};

export default Result;
