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
    let obj = {};

    for (let i = 0; i < nums.length; i++) {
      nums[i] in obj ? (obj[nums[i]] += 1) : (obj[nums[i]] = 1);
    }

    console.log(obj);
  }

  dataFiltering(resultData);

  return (
    <>
      <div>
        결과페이지지ㄴ
        <img src={resultImg[0]}></img>
      </div>
    </>
  );
};

export default MbtiResult;
