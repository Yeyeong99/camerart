const body = document.querySelector("body");
const main = document.querySelector("main");
const optionBox = document.querySelector("ol");
const optionBtn = document.querySelectorAll("li");
const question = document.querySelector("h2");
const explanation = document.querySelector("h3");
const explainBox = document.querySelector("section.explain");
const notice = document.querySelector("h4");
const button = document.querySelector("button");
const tip = document.querySelector("section.tip");
const futherEx = document.querySelector("h5");
const tumbPage = document.querySelector("iframe");
const options = document.querySelector("section.options");
const backCont = document.querySelector("div.background-slide");
const backImg = document.querySelectorAll(".background-img");
const shareBtn = document.querySelector(".share-download");
const backGround = document.querySelector("#result");
const footer = document.querySelector("footer");

let click = 0;
let score = 0;
let count = 0;

const questArray = [
  {
    id: 0,
    detail: "아침에 일어난 당신!",
    quest: "겨울이라 방이 조금 추워요.",
    firstOpt: "안 되겠다! 너무 추워. 25도 이상으로 올려야겠어.",
    secondOpt: "적당히 적정 온도로 맞춰놓자.",
    thirdOpt: "그냥 옷을 더 껴입는다.",
  },
  {
    id: 1,
    detail: "띵동- 택배가 왔어요!집 앞에 쌓인 택배를 확인하는 당신.",
    quest: "택배의 개수는?",
    firstOpt: "3개 이상",
    secondOpt: "1-2개",
    thirdOpt: "0개",
  },
  {
    id: 2,
    detail: "꼬르륵- 어느덧 점심시간이네요.",
    quest: "점심은 어떻게 할까요?",
    firstOpt: "한국인은 역시 배달이지… 시켜먹는다.",
    secondOpt: "마트에 가야지! 장을 보러간다. ",
    thirdOpt:
      "집에 있는 재료로 요리 할 수 있지 않을까? 집에 있는 걸로 해먹는다.",
  },
  {
    id: 3,
    detail: "어떤 걸 시켜먹을까요?",
    quest: "당신의 메뉴는?",
    firstOpt: "식도에 기름칠 좀 해볼까?" + "<br>" + "돈까스",
    secondOpt: "옵션2",
    thirdOpt: "오늘은 산뜻하게!" + "<br>" + "볼 샐러드",
  },
  {
    id: 4,
    detail: "장을 보기 위해 집을 나섰어요.",
    quest: "마트까지",
    firstOpt: "부릉부릉~" + "<br>" + "자가를 이용한다.",
    secondOpt: "대중교통을 이용한다.",
    thirdOpt: "산책도 하고 좋지 뭐!" + "<br>" + "도보를 이용한다.",
  },
  {
    id: 5,
    detail: "집에서 요리를 하는 당신.",
    quest: "양은 얼마나 할까요?",
    firstOpt: "자고로 부족한 것 보다는" + "<br>" + "많은 게 낫지. 많이 한다!",
    secondOpt: "옵션2",
    thirdOpt: "음식물 쓰레기" + "<br>" + "버리면 안돼! 적게 한다.",
  },
  {
    id: 6,
    detail:
      "드디어 점심을 먹는 당신." + "<br>" + "심심해서 동영상을 볼까 해요.",
    quest: "영상을 틀었는데.." + "<br>" + "저화질로 나오네요?",
    firstOpt: "최고화질 아니면.. 왜 봐?" + "<br>" + "무조건 최고화질로 본다",
    secondOpt: "그냥 틀어지는 대로 본다",
    thirdOpt: "안볼래. 그냥 화면을 끈다.",
  },

  {
    id: 7,
    detail: "바깥 공기를 쐬고 싶어졌다." + "<br>" + "집 앞 카페에 왔어요.",
    quest: "음료를 시켰는데..",
    firstOpt:
      "마시면서 집에 가야지!" + "<br>" + "일회용 테이크 아웃잔에 담아갈게요~",
    secondOpt: "카페에서 일회용 컵으로.. 하지만 빨대랑 컵홀더는 안주셔도 돼요!",
    thirdOpt: "챙겨온 텀블러에 담아갈게요~",
  },
  {
    id: 8,
    detail: "세탁기 앞에 선 당신.",
    quest: "세탁기 물의 온도는?",
    firstOpt: "그냥 세탁기가 맞춰놓은 대로",
    secondOpt: "",
    thirdOpt: "내가 설정해야지! 별도로 낮춘다",
  },
  {
    id: 9,
    detail: "띠링- 새로운 메일이 왔네요!",
    quest: "당신의 메일함은",
    firstOpt: "메일…그런 거.. 왜 읽어? 안 건드려서 미확인 메일이 999+",
    secondOpt: "남은 메일 100개 정도." + "<br>" + "미확인 메일은 없다",
    thirdOpt: "확인하고 바로 지우는 타입." + "<br>" + "메일함이 깨끗하다",
  },

  {
    id: 10,
    detail: "집에 돌아왔네요.",
    quest: "샤워를 하려고 해요.",
    firstOpt: "느긋하게 씻어야죠 (15분 초과)",
    secondOpt: "호다닥 씻을래요" + "<br>" + "(10분 내외)",
    thirdOpt: "땀도 안흘렸는데…" + "<br>" + "양치랑 세수만",
  },
  {
    id: 11,
    detail: "휴- 하루가 다 갔네요.  자기 전 스크린 타임을확인 해 보아요.",
    quest: "핸드폰 사용시간은?",
    firstOpt: "6시간 이상",
    secondOpt: "3~6시간",
    thirdOpt: "3시간 이하",
  },
  {
    id: 12,
    detail: "카메랄트 후원 진행 중",
    quest: "",
    firstOpt: "결과 보러가기",
    secondOpt: "",
    thirdOpt: "",
  },
];

const resultArray = [
  {
    detail:
      "우리 환경을 위한" +
      "<br>" +
      "작은 실천이라도 함께 해보아요." +
      "<br>" +
      "당신은 플라스틱 헤비 러버",
    note:
      "당신은 플라스틱을 지독히 사랑하는 사람이군요. 아래의 환경 보호 tip을 함께 정독하고, 작은 것부터 실천해 나가요. 우리가 살아가는 지구, 우리가 더 보살펴야 하지 않을까요? 오늘부터 플라스틱 말고, 지구를 사랑해보아요." +
      "함께 합시다!",
  },
  {
    detail: "환경을 생각해주세요!" + "<br>" + "당신은 플라스틱 베스트 프렌드",
    note: "이런 이런, 지구가 울고 있어요! 당신은 플라스틱과 누구보다 끈끈한 우정을 자랑하고 있군요. 아래의 환경 보호 tip을 함께 정독하고, 작은 것부터 실천해 나가요. 당신의 작은 실천들이 모여 더 나은 환경을 만들 수 있답니다.",
  },
  {
    detail:
      "편리한 것도 좋지만," +
      "<br>" +
      "조금 더 노력해볼까요?" +
      "<br>" +
      "당신은 플라스틱 소비러",
    note: "아직은 환경보단 일상 속 편리함이 더 좋으시군요! 그래도 괜찮아요. 저는 당신 속에서 가능성을 보았답니다. 아래의 환경 보호 tip을 함께 정독하고, 실천하다 보면 플라스틱 소비를 줄이고, 친환경적인 라이프 스타일을 가질 수 있을 거에요!",
  },
  {
    detail:
      "당신은 일상 속에서 틈틈이" +
      "<br>" +
      "환경을 신경 쓰는군요." +
      "<br>" +
      "당신은 나무 지킴이!",
    note: "일상 속에서 조금이나마 환경을 생각하려는 움직임이 보여요. 조금의 귀찮음만 극복하면 초록빛 지구를 함께 만들어갈 수 있을 것 같아요! 함께 해주실 거죠?",
  },
  {
    detail:
      "잘 하고 있어요!" +
      "<br>" +
      "조금 더 노력한다면 지구를 지킬 수 있는 당신은 숲 지킴이!",
    note: "당신은 지구지킴이 이전 단계인 숲 지킴이 단계에 와 있어요. 숲을 지켜주는 당신 같은 존재가 있어 다행이네요. 조금 더 나아가면 지구 지킴이가 될 수 있겠어요!",
  },
  {
    detail:
      "당신 덕분에 지구가 숨 쉬네요!" + "<br>" + "당신은 멋진 지구 지킴이!",
    note: "당신은 일상 속에서도 환경을 지키기 위한 노력을 꾸준히 하고 계시는 군요. 당신과 같이 환경을 생각하는 사람이 많아진다면, 더 살기 좋은 지구가 되지 않을까요?",
  },
];

function changeSection(object) {
  const { detail, quest, firstOpt, secondOpt, thirdOpt } = object;
  explanation.innerHTML = detail;
  question.innerHTML = quest;
  optionBtn[0].innerHTML = firstOpt;
  optionBtn[1].innerHTML = secondOpt;
  optionBtn[2].innerHTML = thirdOpt;
}

function resultSection(object) {
  const { detail, note } = object;
  explanation.innerHTML = detail;
  notice.innerHTML = "<br>" + note;
}

function updateScreen() {
  if (click === 0) {
    changeSection(questArray[0]);
    optionBtn.forEach((opt) => {
      opt.classList.remove("hide");
    });
    notice.classList.add("hide");
    click++;
    console.log(click);
  } else if (click === 1) {
    changeSection(questArray[1]);
    click++;
    console.log(click);
  } else if (click === 2) {
    changeSection(questArray[2]);
    click++;
    console.log(typeof questArray[2].firstOpt);
    console.log(click);
  } else if (click === 4) {
    optionBtn[1].classList.remove("hide");
    changeSection(questArray[6]);
    click++;
    console.log(click);
  } else if (click === 5) {
    changeSection(questArray[7]);
    click++;
    console.log(click);
  } else if (click === 6) {
    optionBtn[1].classList.add("hide");
    changeSection(questArray[8]);
    click++;
    console.log(click);
  } else if (click === 7) {
    optionBtn[1].classList.remove("hide");
    changeSection(questArray[9]);
    click++;
    console.log(click);
  } else if (click === 8) {
    changeSection(questArray[10]);
    click++;
    console.log(click);
  } else if (click === 9) {
    changeSection(questArray[11]);
    click++;
    console.log(click);
  } else if (click === 10) {
    changeSection(questArray[12]);
    click++;
    console.log(click);
  } else if (click === 11) {
    notice.classList.remove("hide");
    while (optionBox.hasChildNodes()) {
      optionBox.removeChild(optionBox.firstChild);
    }
    if (count > 36) {
      resultSection(resultArray[0]);
    } else if (count > 27) {
      resultSection(resultArray[1]);
    } else if (count > 21) {
      resultSection(resultArray[2]);
    } else if (count > 16) {
      resultSection(resultArray[3]);
    } else if (count > 12) {
      resultSection(resultArray[4]);
    } else {
      resultSection(resultArray[5]);
    }
  }
}

optionBtn.forEach((opt) => {
  opt.addEventListener("click", function (e) {
    if (e.target === optionBtn[0]) {
      count += 4;
    } else if (e.target === optionBtn[1]) {
      count += 2;
    } else {
      count += 0;
    }
    if (click !== 3) {
      updateScreen();
    } else {
      const { firstOpt, secondOpt, thirdOpt } = questArray[2];
      if (e.target.innerHTML === firstOpt) {
        optionBtn[1].classList.add("hide");
        changeSection(questArray[3]);
      } else if (e.target.innerHTML === secondOpt) {
        changeSection(questArray[4]);
      } else if (e.target.innerHTML === thirdOpt) {
        optionBtn[1].classList.add("hide");
        changeSection(questArray[5]);
      }
      click++;
    }
  });
});
