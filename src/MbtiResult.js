let sortData = {};
let mbtiData = {};
let result = [];
let sliceARR = [];
const MbtiResult = () => {
  let callbackData = JSON.parse(localStorage.getItem("MBTI"));

  dataFiltering(callbackData); //결과값 별로 몇점인지 체크하여 오름차순 정렬
  dataProcessing(sortData); //해당 key값(mbti) 오름차순 정렬 후 4개까지만 배열형태로 출력
  const arrResult = [
    { mbti: ["E", "N", "F", "J"], img: "/images/ENFJ.jpg" },
    { mbti: ["E", "N", "F", "P"], img: "/images/ENFP.jpg" },
    { mbti: ["E", "N", "T", "J"], img: "/images/ENTJ.jpg" },
    { mbti: ["E", "N", "T", "P"], img: "/images/ENTP.jpg" },
    { mbti: ["E", "S", "F", "J"], img: "/images/ESFJ.jpg" },
    { mbti: ["E", "S", "F", "P"], img: "/images/ESFP.jpg" },
    { mbti: ["E", "S", "T", "J"], img: "/images/ESTJ.jpg" },
    { mbti: ["E", "S", "T", "P"], img: "/images/ESTP.jpg" },
    { mbti: ["I", "N", "F", "J"], img: "/images/INFJ.jpg" },
    { mbti: ["I", "N", "F", "P"], img: "/images/INFP.jpg" },
    { mbti: ["I", "N", "T", "J"], img: "/images/INTJ.jpg" },
    { mbti: ["I", "N", "T", "P"], img: "/images/INTP.jpg" },
    { mbti: ["I", "S", "F", "J"], img: "/images/ISFJ.jpg" },
    { mbti: ["I", "S", "T", "J"], img: "/images/ISTJ.jpg" },
    { mbti: ["I", "S", "T", "P"], img: "/images/ISTP.jpg" },
    { mbti: ["I", "N", "F", "J"], img: "/images/INFJ.jpg" },
  ];

  test(arrResult);
  function test(data) {
    for (let i = 0; i < data.length; i++) {
      result = data[i].mbti;
      console.log(result);
    }
  }
  // mbti 16유형 배열형태로 변환

  test(result, sliceARR);
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

  console.log(sliceARR);

  // 유저 mbti 4가지 속성 배열 형태로 변환

  return (
    <>
      <div>
        결과페이지지
        <img src={arrResult[0].img} alt="테스트결과이미지"></img>
      </div>
    </>
  );
};

export default MbtiResult;
