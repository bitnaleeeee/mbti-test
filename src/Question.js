import { useState } from "react";

const Question = (props) => {
  const { nextPage } = props;
  const { count } = props;
  const testMbti = [
    [
      "Q1",
      "새 학년 새 학기 수업 시간. 이 수업에 팀플이 있다는 걸 알게 되었다.",
      "이 때 내가 든 생각은?",
      "'새로운 사람 만나는 건 좋지'",
      "괜찮다고 생각한다",
      "e",
      " '팀플 너무 싫어 드랍할 걸...' ",
      "벌써부터 힘들다고 생각한다",
      "i",
    ],

    [
      "Q2",

      "교수님이 짜신 팀플 조가 공지에 올라왔다. 그러나 아무도 단톡방을 만들지 않는데...",
      "내가 나설까??",
      "  '딘톡방 만드는게 뭐가 어렵다고'",
      "바로 만든다",
      "j",
      " '다른 사람이 만들겠지'",
      "만들지 않고 기다린다",
      "p",
    ],

    [
      "Q3",

      "팀플 단톡방이 만들어졌지만, 아무도 인사하지 않는데...",
      "내가 먼저 말을 꺼낼까?",
      "'팀플할려면 어차피 친해져야 하잖아'",
      "먼저 나서서 분위기를 푼다",
      "e",
      "'아무도 인사 안하는데 내가 굳이 ...?'",
      "인사 안하고 다른 사람이 인사하면 인사한다",
      "i",
    ],

    [
      "Q4",

      "  발표 주제를 정하는 시간",
      "이 때 나의 행동은?",
      " '이것도 괜찮고 이것도 괜찮지 않을까?'",
      "이것저것 아이디어를 낸다",
      "n",
      "'음 저 주제는 이런 부분이 부족한데...'",
      "다른 사람이 낸 주제를 피드백 해준다",
      "s",
    ],

    [
      "Q5",
      "다른 팀원 낸 주제가 우리 발표랑 별로 안 맞는 것 같아",
      "이 때 나의 행동은?",
      '"이런 주제는 이 부분에서 안 맞는 것 같아요! 다른 주제로 하죠"',
      "별로 안맞는다고 바로 말한다",
      "t",
      ' "좋은 주제인데... 이 부분에서 조금 안맞을수도 있을 것 같아요" ',
      "돌려서 말한다",
      "f",
    ],

    [
      "Q6",
      " 주제가 정해진 뒤 역할을 분담하는 시간, 역할 분담이 제대로 안되는 것  같은데...",
      "이 때 나의 행동은?",
      "''너무 답답해!'",
      "나서서 역할분담을 한다",
      "j",
      "'이러다가 정해지겠지'",
      "굳이 나서지 않는다",
      "p",
    ],

    [
      "Q7",
      "발표자를 정하는 시간",
      "이 때 나의 행동은?",
      "'발표가 뭐 어렵다고'",
      "내가 발표하겠다고 한다",
      "e",
      "'발표 싫어. 다른 역할 할래'",
      "다른 사람이 발표한다고 하길 기다린다",
      "i",
    ],

    [
      "Q8",
      "우여곡절 끝에 역할이 모두 분담되었다. 난 발표와 자료조사를 분담하게 되었다.",
      "나에게 주어진 파트는 언제까지 마칠까?",
      "'얼른 끝내야지'",
      "최대한 빨리 끝내려고 노력한다",
      "j",
      "'좀 남았으니까...'",
      "중으로 미룬다",
      "p",
    ],

    [
      "Q9",
      "팀플 과제 마감날, 어쩌다보니 나에게 분담된 과제를 제대로 하지 못했다!",
      "이 때 내 생각은?",
      "'내가 이걸 못해서 팀플이 망하면 학점이 망하겠지... 어떡하냐?'",
      "미래에 대해 걱정한다",
      "n",
      "'왜 과제를 제대로 못했지?'",
      "원인에 대해 생각한다",
      "s",
    ],

    [
      "Q10",
      "막판 스퍼트를 내 팀플 과제를 끝냈다. 근데... 팀원의 자료조사 부분이 부족한 것 같다.",
      "이 때 내 생각은?",
      '"너무 부족하게 해오신 것 같아요"',
      "바로 다시 해오라 한다",
      "t",
      '"이 부분만 조금 수정해주실 수 있나요?"',
      "최대한 돌려서 말한다",
      "f",
    ],
  ];
  const [data, setData] = useState([]);

  function firstQuestion() {
    data.push(testMbti[count][5]);
    setData(data);
    nextPage();
  }

  function secondClcik() {
    data.push(testMbti[count][8]);
    setData(data);
    nextPage();
  }
  return (
    <div className="contentsWrap">
      <div className="contents">
        <>
          {console.log(data)}
          <h1>{testMbti && testMbti[count][0]}</h1>
          <p>
            {testMbti && testMbti[count][1]}
            <br></br>
            <span> {testMbti && testMbti[count][2]}</span>
          </p>
          <div className="buttonWrap">
            <button onClick={firstQuestion}>
              {testMbti && testMbti[count][3]}
              <br></br>
              <span> {testMbti && testMbti[count][4]}</span>
            </button>
            <button onClick={secondClcik}>
              {testMbti && testMbti[count][6]}
              <br></br>
              <span> {testMbti && testMbti[count][7]}</span>
            </button>
          </div>
        </>
      </div>
    </div>
  );
};

export default Question;
