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

  function testImage() {
    console.log("최종결과");
  }
  return (
    <>
      <div>
        결과페이지지
        <img src={resultImg[0]}></img>
      </div>
    </>
  );
};

export default MbtiResult;
