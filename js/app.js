const optionBtn = document.querySelectorAll("ol");
const body = document.querySelector("body");
const main = document.querySelector("main");
const question = document.querySelector("h1");
const explanation = document.querySelector("h2");
const detail = document.querySelector("h3");
const futherEx = document.querySelector("h4");
const options = document.querySelector("div.options");
const backCont = document.querySelector("div.background-slide");
const backImg = document.querySelectorAll(".background-slide img");
const shareBtn = document.querySelector(".share-download");
const backGround = document.querySelector(".last-result");
const footer = document.querySelector("footer");

const size = window.innerWidth;

let score = 0;
let click = 0;
let counter = 0;
// 각 화면

function changeSection(detail, quest, option1, option2, option3) {  
    explanation.innerHTML = detail
    question.innerHTML = quest
    optionBtn[0].innerHTML = option1;
    optionBtn[1].innerHTML = option2;
    optionBtn[2].innerHTML = option3;
}

//마지막 화면 
function removeAllChild(array) {
    while(array.hasChildNodes())
    {
        array.removeChild(array.firstChild);
    }
}

//클릭 계산
function clickCalculator() {
    if (click == 0) {
        changeSection("아침에 일어난 당신!", "겨울이라"+"<br>"+"방이 조금 추워요.", "안 되겠다! 너무 추워."+"<br>"+"25도 이상으로 올려야겠어.", "적당히 적정 온도로 맞춰놓자.", "귀찮으니까 대충 옷이나 입자.")
        main.style.height = "50%";
        detail.classList.add("hide");
        optionBtn[1].classList.remove("hide");
        optionBtn[2].classList.remove("hide");
        click +=1;
    } else if (click == 1) {
        changeSection("띵동- 택배가 왔어요!" +"<br>"+"집 앞에 쌓인" +"<br>"+"택배를 확인하는 당신.", "택배의 개수는?", "3개 이상", "1-2개", "0개")
        body.classList.remove("result-first");
        click +=1;
    } else if (click ==2) {
        changeSection("꼬르륵- 어느덧 점심시간이네요.", "점심은 어떻게 할까요?", "한국인은 역시 배달이지…"+"<br>"+"시켜먹는다.", "마트에 가야지!"+"<br>"+"장을 보러간다. ", "집에 있는 재료로 요리 할 수 있지 않을까?"+"<br>"+"집에 있는 걸로 해먹는다.")
        click +=1;
    }else if (click == 4) {
        changeSection("드디어 점심을 먹는 당신."+"<br>"+"심심해서 동영상을 볼까 해요.", "영상을 틀었는데.."+"<br>"+"저화질로 나오네요?", "최고화질 아니면.. 왜 봐?"+"<br>"+"무조건 최고화질로 본다", "그냥 틀어지는 대로 본다", "…귀찮다. 그냥 화면을 끈다.")
        optionBtn[1].classList.remove("hide");
        click +=1;
    } else if (click == 5) {
        changeSection("바깥 공기를 쐬고 싶어졌다." +"<br>"+"집 앞 카페에 왔어요.", "음료를 시켰는데..", "마시면서 집에 가야지!"+"<br>"+"일회용 테이크 아웃잔에 담아갈게요~", "카페에서 마시려고 했는데"+"<br>"+"일회용 컵밖에 못쓴다고 하네.."+"<br>"+"빨대랑 컵홀더는 안주셔도 돼요!", "텀블러를 챙겨왔다!"+"<br>"+"텀블러에 담아갈게요~") 
        click +=1;
    } else if (click == 6) {
        changeSection("집에 돌아왔네요.", "샤워를 하려고 해요.", "느긋하게 씻어야죠"+"<br>"+"(15분 초과)", "호다닥 씻을래요"+"<br>"+"(10분 내외)", "땀도 안흘렸는데…"+"<br>"+"양치랑 세수만")
        click +=1;
    } else if (click == 7) {
        changeSection("세탁기 앞에 선 당신.", "세탁기 물의 온도는?", "그냥 세탁기가 맞춰놓은 대로", "옵션2", "내가 설정해야지! 별도로 설정한다")
        optionBtn[1].classList.add("hide");
        click +=1;
    } else if (click == 8) {
        changeSection("띠링- 새로운 메일이 왔네요!", "당신의 메일함은", "메일…그런 거.. 왜 읽어?"+"<br>"+"안 건드려서 미확인 메일이 999+", "메일이 쌓여있긴 하지만…"+"<br>"+"그래도 확인은 바로 함!"+"<br>"+"남은 메일 100개 정도."+"<br>"+"미확인 메일은 없다", "확인하고 바로 지우는 타입."+"<br>"+"메일함이 깨끗하다")
        optionBtn[1].classList.remove("hide");
        click +=1;
    } else if (click == 9) {
        changeSection("휴- 하루가 다 갔네요."+"<br>"+"자기 전 스크린 타임을"+"<br>"+"확인 해 보아요.", "핸드폰 사용시간은?", "6시간 이상", "3~6시간", "3시간 이하")
        click +=1;
    } else if (click ==10) {
        removeAllChild(options);
        backGround.classList.remove("hide");
        detail.classList.remove("hide");
        question.classList.add("hide");
        main.style.color = "white";
        footer.style.color = "white";
        if(score >= 36) {
            resultFirst();
        } else if (score >= 27) {
            resultSecond();
        } else if (score >= 21) {
            resultThird();
        } else if (score >= 16) {
            resultFourth();
        } else if (score >= 12) {
            resultFifth();
        } else {
            resultSixth();
        }
        shareBtn.classList.remove("hide");
        console.log(score);
    }
    console.log(click);
}


//결과
function resultFirst(){
    explanation.innerHTML = "우리 환경을 위한"+"<br>"+"작은 실천이라도 함께 해보아요."+"<br>"+"당신은 플라스틱 헤비 러버";
    detail.innerHTML = "<br>"+"당신은 플라스틱을 지독히 사랑하는 사람이군요. 아래의 환경 보호 tip을 함께 정독하고, 작은 것부터 실천해 나가요. 우리가 살아가는 지구, 우리가 더 보살펴야 하지 않을까요? 오늘부터 플라스틱 말고, 지구를 사랑해보아요. 함께 합시다!";
    futherEx.innerHTML = "<br>"+"sdflj;ksdfalksdfaflsdjak;s"+"<br>"+"dlfjaksdfaljkfsalkdjsaklf;jdsa"+"<br>"+"klfdjsalk;fj;laskdjf;lksdajf;lk"+"<br>"+"sajf;kldsjafkljsa;lkfj;lskadjf"+"<br>"+"lksadjf;lkjakfl;jas;ldk"+"<br>"+"jf;lsakjflkdsjflk;sdjlkfjdsl;kafjdlksajfklasjfdl;ksajfklasj"+"<br>"+"fdkljaflkjslkfjslkdajfkldjsa"+"<br>"+"lkf;jld;ksajflksajflkdj"+"<br>"+"sa;lkfjdksl;ajfd;"+"<br>"+"lksajf;lkdjas;lkfjls;kfjl;ksadj"+"<br>"+"fk;lasjfklasjfkdl;sajf;lkasjd;lfjas"+"<br>"+"lksajf;lkdjas;lkfjls;kfjl;ksadj"+"<br>"+"fk;lasjfklasjfkdl;sajf;lkasjd;lfjas"+"<br>"+"lksajf;lkdjas;lkfjls;kfjl;ksadj"+"<br>"+"fk;lasjfklasjfkdl;sajf;lkasjd;lfjas"+"<br>"+"lksajf;lkdjas;lkfjls;kfjl;ksadj"+"<br>"+"fk;lasjfklasjfkdl;sajf;lkasjd;lfjas"+"<br>"+"lksajf;lkdjas;lkfjls;kfjl;ksadj"+"<br>"+"fk;lasjfklasjfkdl;sajf;lkasjd;lfjas"+"<br>"+"lksajf;lkdjas;lkfjls;kfjl;ksadj"+"<br>"+"fk;lasjfklasjfkdl;sajf;lkasjd;lfjas"+"<br>"+"lksajf;lkdjas;lkfjls;kfjl;ksadj"+"<br>"+"fk;lasjfklasjfkdl;sajf;lkasjd;lfjas"+"<br>"+"lksajf;lkdjas;lkfjls;kfjl;ksadj"+"<br>"+"fk;lasjfklasjfkdl;sajf;lkasjd;lfjas";
    backGround.style.filter = "opacity(0.8)";
    document.getElementById('download').setAttribute('href', './img/result1.jpg')
}
function resultSecond(){
    explanation.innerHTML = "환경을 생각해주세요!"+"<br>"+"당신은 플라스틱 베스트 프렌드";
    detail.innerHTML = "<br>"+"이런 이런, 지구가 울고 있어요! 당신은 플라스틱과 누구보다 끈끈한 우정을 자랑하고 있군요. 아래의 환경 보호 tip을 함께 정독하고, 작은 것부터 실천해 나가요. 당신의 작은 실천들이 모여 더 나은 환경을 만들 수 있답니다.";
    backGround.style.filter = "opacity(0.7)";
    document.getElementById('download').setAttribute('href', './img/result2.jpg')
}
function resultThird(){
    explanation.innerHTML = "편리한 것도 좋지만,"+"<br>"+"조금 더 노력해볼까요?" +"<br>"+"당신은 플라스틱 소비러";
    detail.innerHTML = "<br>"+"아직은 환경보단 일상 속 편리함이 더 좋으시군요! 그래도 괜찮아요. 저는 당신 속에서 가능성을 보았답니다. 아래의 환경 보호 tip을 함께 정독하고, 실천하다 보면 플라스틱 소비를 줄이고, 친환경적인 라이프 스타일을 가질 수 있을 거에요!";
    backGround.style.filter = "opacity(0.6)";
    document.getElementById('download').setAttribute('href', './img/result3.jpg')
}
function resultFourth(){
    explanation.innerHTML = "당신은 일상 속에서 틈틈이 환경을 신경 쓰는군요." +"<br>"+"당신은 나무 지킴이하는 편이 좋겠어요";
    detail.innerHTML = "<br>"+"일상 속에서 조금이나마 환경을 생각하려는 움직임이 보여요. 조금의 귀찮음만 극복하면 초록빛 지구를 함께 만들어갈 수 있을 것 같아요! 함께 해주실 거죠?";
    backGround.style.filter = "opacity(0.4)";
    document.getElementById('download').setAttribute('href', './img/result4.jpg')
}
function resultFifth(){
    explanation.innerHTML = "잘 하고 있어요!" +"<br>"+"조금 더 노력한다면 지구를 지킬 수 있는 당신은 숲 지킴이!";
    detail.innerHTML = "<br>"+"당신은 지구지킴이 이전 단계인 숲 지킴이 단계에 와 있어요. 숲을 지켜주는 당신 같은 존재가 있어 다행이네요. 조금 더 나아가면 지구 지킴이가 될 수 있겠어요!";
    backGround.style.filter = "opacity(0.2)";
    document.getElementById('download').setAttribute('href', './img/result5.jpg')
}
function resultSixth(){
    explanation.innerHTML = "당신 덕분에 지구가 숨 쉬네요!" +"<br>"+"당신은 멋진 지구 지킴이!";
    detail.innerHTML = "당신은 일상 속에서도 환경을 지키기 위한 노력을 꾸준히 하고 계시는 군요. 당신과 같이 환경을 생각하는 사람이 많아진다면, 더 살기 좋은 지구가 되지 않을까요?";
    backGround.style.filter = "opacity(0)";
    document.getElementById('download').setAttribute('href', './img/result1.jpg')
}




function windowWidth() {
    if (window.innerWidth > 1366) {
        question.innerHTML = "모바일 환경으로 접속 부탁드립니다.";
        detail.innerHTML ="";
        explanation.innerHTML = "";
        optionBtn[0].classList.add("hide");
    }
}

window.addEventListener("load", function () {
    windowWidth
    backImg[0].style.width = size +'px';
});

//점수 계산 결과
for (let i = 0; i < optionBtn.length; i++) {
    optionBtn[i].addEventListener("click", function (e) {
        backCont.style.transition = "transform 0.4s ease-in-out";
        counter++;
        console.log(counter);
        backCont.style.transform = 'translateX(' + (-size * counter) + 'px)';
        if(i==0){
            score +=4;
        }else if(i==1) {
            score +=2;
        }else if (i==2) {
            score +=0;
        }
        console.log(score);
        if (click !== 3) {
            clickCalculator();
        }else {
            if(e.target.innerHTML === "한국인은 역시 배달이지…"+"<br>"+"시켜먹는다.") {
                changeSection("어떤 걸 시켜먹을까요?", "당신의 메뉴는?", "식도에 기름칠 좀 해볼까?"+"<br>"+"돈까스", "옵션2", "오늘은 산뜻하게!"+"<br>"+"볼 샐러드")
                optionBtn[1].classList.add("hide");
            } else if (e.target.innerHTML === "마트에 가야지!"+"<br>"+"장을 보러간다. ") {
                changeSection("장을 보기 위해 집을 나섰어요.", "마트까지", "부릉부릉~"+"<br>"+"자가를 이용한다.", "대중교통을 이용한다.", "산책도 하고 좋지 뭐!"+"<br>"+"도보를 이용한다.")
            } else if (e.target.innerHTML === "집에 있는 재료로 요리 할 수 있지 않을까?"+"<br>"+"집에 있는 걸로 해먹는다.") {
                changeSection("집에서 요리를 하는 당신.", "양은 얼마나 할까요?", "자고로 부족한 것 보다는"+"<br>"+"많은 게 낫지. 많이 한다!", "옵션2", "음식물 쓰레기"+"<br>"+"버리기 귀찮아.적게 한다.")
                optionBtn[1].classList.add("hide");

            }
            click +=1;
        }
      })
}

