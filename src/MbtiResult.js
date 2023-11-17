let sortData = {};
let mbtiData = {};

const MbtiResult = () => {
  const resultImg = [
    ["/images/ENFJ.jpg"],
    ["/images/ENFP.jpg"],
    ["/images/ENTJ.jpg"],
    ["/images/ENTP.jpg"],
    ["/images/ESFJ.jpg"],
    ["/images/ESTJ.jpg"],
    ["/images/ESTP.jpg"],
    ["/images/ENFJ.jpg"],
    ["/images/INFJ.jpg"],
    ["/images/INFP.jpg"],
    ["/images/INTJ.jpg"],
    ["/images/INTP.jpg"],
    ["/images/ISFJ.jpg"],
    ["/images/ISTJ.jpg"],
    ["/images/ISTP.jpg"],
    ["/images/INFJ.jpg"],
  ];
  let resultData = JSON.parse(localStorage.getItem("MBTI"));

  function dataFiltering(nums) {
    for (let i = 0; i < nums.length; i++) {
      nums[i] in mbtiData ? (mbtiData[nums[i]] += 1) : (mbtiData[nums[i]] = 1);
    }
    sortData = Object.fromEntries(
      Object.entries(mbtiData).sort((a, b) => b[1] - a[1])
    );
  }
  dataFiltering(resultData);

  function dataProcessing(data) {
    let arr = Object.keys(data);
    arr.pop();
    let str = arr.join("");
    console.log(str);
  }

  dataProcessing(sortData);

  return (
    <>
      <div>
        결과페이지지
        <img src={resultImg[0]} alt="테스트결과이미지"></img>
      </div>
    </>
  );
};

export default MbtiResult;
