let sortData = {};
let mbtiData = {};

const MbtiResult = () => {
  const arrResult = [
    {
      mbti: "ENFJ",
      img: "/images/ENFJ.jpg",
    },
    {
      mbti: "ENFP",
      img: "/images/ENFP.jpg",
    },
    {
      mbti: "ENTJ",
      img: "/images/ENTJ.jpg",
    },
    {
      mbti: "ENTP",
      img: "/images/ENTP.jpg",
    },
    {
      mbti: "ESFJ",
      img: "/images/ESFJ.jpg",
    },

    {
      mbti: "ESTJ",
      img: "/images/ESTJ.jpg",
    },
    {
      mbti: "ESTP",
      img: "/images/ESTP.jpg",
    },
    { mbit: "ENFJ", img: "/images/ENFJ.jpg" },
    { mbit: "INFJ", img: "/images/INFJ.jpg" },
    { mbit: "INFP", img: "/images/INFP.jpg" },
    { mbit: "INTJ", img: "/images/INTJ.jpg" },
    { mbit: "INTP", img: "/images/INTP.jpg" },
    { mbit: "ISFJ", img: "/images/ISFJ.jpg" },
    { mbit: "ISTJ", img: "/images/ISTJ.jpg" },
    { mbit: "ISTP", img: "/images/ISTP.jpg" },
    { mbit: "INFJ", img: "/images/INFJ.jpg" },
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

  function dataProcessing(data) {
    let arr = Object.keys(data);
    arr.pop();
    let str = arr.join("");
    console.log(str);
  }
  dataFiltering(resultData);
  dataProcessing(sortData);

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
