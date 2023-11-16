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
      Object.entries(mbtiData).sort((a, b) => a[1] - b[1])
    );
  }
  dataFiltering(resultData);

  // sortData: {F: 1, N: 2, T: 2, E: 3, J: 4}

  //뒤에서 4개까지만 남겨두기
  // 키값 4개만 나오게 하기
  //결과 이미지와 비교해서 화면 출력하기

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
