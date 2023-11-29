import React, { useState, useEffect } from "react";
// import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./Result.scss";
import DetailResult from "./DetailResult";

let str = "";
let sortData = {};
let mbtiData = {};
let sliceARR = [];

const Result = () => {
  const [data, setData] = useState([]);

  const navigate = useNavigate();
  // const location = useLocation();

  function goToMain() {
    navigate("/");
  }

  useEffect(() => {
    fetch("/data/data.json")
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        // TODO

        // const urlParams = new URL(window.location.href).searchParams;
        // const name = urlParams.get("mbti");
        // console.log(name);

        setData(result);
      });
  }, []);

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
      }
    }
  }

  function infoAlert() {
    var url = "";
    var textarea = document.createElement("textarea");
    document.body.appendChild(textarea);
    url = window.document.location.href;

    url = url + "?mbti=" + str;

    textarea.value = url;
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);

    debugger;
    alert("공유링크가 복사되었습니다!");
  }

  // mbti 일치하는 설명 글 매칭 함수
  return (
    <div className="resultWrap">
      <div className="resultNav">
        <FontAwesomeIcon className="mainbackIcon" icon={faChevronLeft} />
        <FontAwesomeIcon className="searchIcon" icon={faBars} />
        <FontAwesomeIcon className="searchIcon" icon={faMagnifyingGlass} />
      </div>
      <DetailResult data={data} str={str} />
      <button className="urlbutton" type="submit" onClick={infoAlert}>
        결과 공유하기
      </button>
      <button className="mainbutton" type="submit" onClick={goToMain}>
        다시 테스트하기
      </button>
    </div>
  );
};

export default Result;
