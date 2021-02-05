const optionBtn = document.querySelectorAll("ol");
const body = document.querySelector("body");
const main = document.querySelector("main");
const question = document.querySelector("h2");
const explanation = document.querySelector("h3");
const explainBox = document.querySelector("div.explain");
const detail = document.querySelector("h4");
const button = document.querySelector("button");
const tip = document.querySelector("div.tip");
const futherEx = document.querySelector("h5");
const tumbPage = document.querySelector("iframe");
const options = document.querySelector("div.options");
const backCont = document.querySelector("div.background-slide");
const backImg = document.querySelectorAll(".background-img");
const shareBtn = document.querySelector(".share-download");
const backGround = document.querySelector("#result");
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

function addTips(){ 
    button.innerHTML = "더보기";
    tip.style.height = "50%";
    tip.style.overFlow = "scroll";
}

//클릭 계산
function clickCalculator() {
    if (click == 0) {
        changeSection("아침에 일어난 당신!", "겨울이라"+"<br>"+"방이 조금 추워요.", "안 되겠다! 너무 추워."+"<br>"+"25도 이상으로 올려야겠어.", "적당히 적정 온도로 맞춰놓자.", "귀찮으니까 대충 옷이나 입자.")
        main.style.height = "50%";
        detail.classList.add("hide");
        optionBtn[1].classList.remove("hide");
        optionBtn[2].classList.remove("hide");
        click += 1;
    } else if (click == 1) {
        changeSection("띵동- 택배가 왔어요!" +"<br>"+"집 앞에 쌓인" +"<br>"+"택배를 확인하는 당신.", "택배의 개수는?", "3개 이상", "1-2개", "0개")
        body.classList.remove("result-first");
        click += 1;
    } else if (click ==2) {
        changeSection("꼬르륵- 어느덧 점심시간이네요.", "점심은 어떻게 할까요?", "한국인은 역시 배달이지…"+"<br>"+"시켜먹는다.", "마트에 가야지!"+"<br>"+"장을 보러간다. ", "집에 있는 재료로 요리 할 수 있지 않을까?"+"<br>"+"집에 있는 걸로 해먹는다.")
        click += 1;
    }else if (click == 4) {
        changeSection("드디어 점심을 먹는 당신."+"<br>"+"심심해서 동영상을 볼까 해요.", "영상을 틀었는데.."+"<br>"+"저화질로 나오네요?", "최고화질 아니면.. 왜 봐?"+"<br>"+"무조건 최고화질로 본다", "그냥 틀어지는 대로 본다", "…귀찮다. 그냥 화면을 끈다.")
        body.style.backgroundImage = "";
        body.style.backgroundSize = "";
        optionBtn[1].classList.remove("hide");
        click += 1;
    } else if (click == 5) {
        changeSection("바깥 공기를 쐬고 싶어졌다." +"<br>"+"집 앞 카페에 왔어요.", "음료를 시켰는데..", "마시면서 집에 가야지!"+"<br>"+"일회용 테이크 아웃잔에 담아갈게요~", "카페에서 마시려고 했는데"+"<br>"+"일회용 컵밖에 못쓴다고 하네.."+"<br>"+"빨대랑 컵홀더는 안주셔도 돼요!", "텀블러를 챙겨왔다!"+"<br>"+"텀블러에 담아갈게요~") 
        click += 1;
    } else if (click == 6) {
        changeSection("집에 돌아왔네요.", "샤워를 하려고 해요.", "느긋하게 씻어야죠"+"<br>"+"(15분 초과)", "호다닥 씻을래요"+"<br>"+"(10분 내외)", "땀도 안흘렸는데…"+"<br>"+"양치랑 세수만")
        click += 1;
    } else if (click == 7) {
        changeSection("세탁기 앞에 선 당신.", "세탁기 물의 온도는?", "그냥 세탁기가 맞춰놓은 대로", "옵션2", "내가 설정해야지! 별도로 설정한다")
        optionBtn[1].classList.add("hide");
        click += 1;
    } else if (click == 8) {
        changeSection("띠링- 새로운 메일이 왔네요!", "당신의 메일함은", "메일…그런 거.. 왜 읽어?"+"<br>"+"안 건드려서 미확인 메일이 999+", "메일이 쌓여있긴 하지만…"+"<br>"+"그래도 확인은 바로 함!"+"<br>"+"남은 메일 100개 정도."+"<br>"+"미확인 메일은 없다", "확인하고 바로 지우는 타입."+"<br>"+"메일함이 깨끗하다")
        optionBtn[1].classList.remove("hide");
        click += 1;
    } else if (click == 9) {
        changeSection("휴- 하루가 다 갔네요."+"<br>"+"자기 전 스크린 타임을"+"<br>"+"확인 해 보아요.", "핸드폰 사용시간은?", "6시간 이상", "3~6시간", "3시간 이하")
        click += 1;
    } else if (click == 10) {
        changeSection("카메랄트 후원 진행 중","","결과 보러가기","","");
        tumbPage.classList.remove("hide");
        main.style.height="100%";
        optionBtn[1].classList.add("hide");
        optionBtn[2].classList.add("hide");
        click += 1;
    } else if (click == 11) {
        button.classList.remove("hide");
        removeAllChild(options);
        tumbPage.classList.add("hide");
        backGround.classList.remove("hide");
        detail.classList.remove("hide");
        tip.classList.remove("hide");
        main.style.height="80%";
        question.classList.add("hide");
        main.style.color = "white";
        footer.style.color = "white";
        addTips();
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
    backGround.style.backgroundImage="url('./img/result1.png')";
    explanation.innerHTML = "우리 환경을 위한"+"<br>"+"작은 실천이라도 함께 해보아요."+"<br>"+"당신은 플라스틱 헤비 러버";
    detail.innerHTML = "<br>"+"당신은 플라스틱을 지독히 사랑하는 사람이군요. 아래의 환경 보호 tip을 함께 정독하고, 작은 것부터 실천해 나가요. 우리가 살아가는 지구, 우리가 더 보살펴야 하지 않을까요? 오늘부터 플라스틱 말고, 지구를 사랑해보아요."+"<br>"+"함께 합시다!";
    futherEx.innerHTML = "<br>"+"꼬르륵.. 배꼽시계가 점심 먹을 시간을 알려주네요. ⏰ 귀찮은 마음에 배달음식을 시킨 당신! 혹시 그거 아세요? 당신이 배달음식을 시켜 먹는 게 환경에 얼마나 악영향을 미치는지 말이에요. 배달음식으로 매일 830만 개 분량의 일회용 플라스틱 용기가 버려지고 있어요. 네? 배달음식용 플라스틱 용기는 대부분 재활용이 가능해서 괜찮지 않냐고요? 배달음식용 플라스틱 용기 대부분이 재활용 가능 자원인 건 맞아요. 하지만 실제로 재활용이 되는 건 40% 정도에 불과해요. 배달 용기를 제대로 세척해서 버리는 경우가 많지 않고 설령 세척을 하고 버렸다고 해도 배달 용기 특성상 국물 등이 제대로 지워지지 않기 때문이죠. 이렇게 오염된 배달 용기는 일반 쓰레기와 함께 소각되고 있어요. 재활용 가능 자원이라 하기 무색하게 말이죠. 이 문제를 해결하기 위한 실천 방법에는 무엇이 있을까요? 제가 몇 가지 알려드릴게요. 첫 번째 방법은 집밥 애용하기! 입니다. 배달 음식 대신 집밥으로 건강은 챙기고 일회용품 사용은 줄이자고요~ 하지만 간편하고 맛있는 배달음식을 포기하기 쉽지 않죠. 저도 엽기적인 그 떡볶이.. 너무 좋아해서 그 마음 충분히 이해해요. 그런 당신에게 ‘용기내챌린지’를 소개합니다! ‘용기내챌린지’는 류준열 배우의 시작으로 SNS상에서 유행하고 있는 챌린지인데요. ‘용기를 내서 용기를 내자’라는 중의적 표현으로, 일상생활에서 플라스틱 발생을 줄이기 위해 용기를 내서 개인 용기에 음식을 담아오는 행위를 말해요. 우리도 용기를 내서 배달음식 포장해보는 건 어떨까요?"+"<br>"+"<br>";
    document.getElementById('download').setAttribute('href', './img/download1.png')
}
function resultSecond(){
    backGround.style.backgroundImage="url('./img/result2.png')";
    explanation.innerHTML = "환경을 생각해주세요!"+"<br>"+"당신은 플라스틱 베스트 프렌드";
    detail.innerHTML = "<br>"+"이런 이런, 지구가 울고 있어요! 당신은 플라스틱과 누구보다 끈끈한 우정을 자랑하고 있군요. 아래의 환경 보호 tip을 함께 정독하고, 작은 것부터 실천해 나가요. 당신의 작은 실천들이 모여 더 나은 환경을 만들 수 있답니다.";
    futherEx.innerHTML = "<br>"+"띵동! 택배 왔어요~ 세상에서 제일 설레는 소리는? 바로 택배 아저씨 목소리! 코로나 19로 집에 있는 시간이 많아진 요즘 온라인 쇼핑에 푸~욱 빠져있진 않나요? 클릭 몇 번만 하면 내 앞으로 물건을 갔다 주니 얼마나 편한지 몰라요. 게다가 속도는 로켓🚀처럼 빠르니 좋아하지 않을 수가 없네요. 그런데 여러분! 이토록 좋은 점만 가득해 보이는 택배가 사실은 환경오염의 주범이라는 거 알고 계셨나요? 생활폐기물 중 무려 40%가 포장 폐기물이라고 해요. 정말 어마어마하지 않나요? 심지어 포장 폐기물의 대부분은 불필요하게 발생하는 경우가 많은데요. 제품 손상 방지를 위한 쇼핑업체의 과대포장이 그 원인이라고 해요. 이 문제를 해결하려면 어떤 실천을 할 수 있을까요? 먼저 제대로 된 분리수거를 하는 것인데요. 테이프와 송장이 붙어있는 상자는 분리수거가 되지 않아요. 제대로 된 분리수거를 위해선 종이류가 아닌 비닐 테이프와 송장은 꼭 제거해주세요! 또 다른 방법으로는 친환경 포장재를 사용하는 쇼핑업체의 제품을 구매하는 겁니다. 재사용이 가능한 보냉백 ‘알비백’을 도입한 SSG닷컴의 경우 도입 이후 두 달 간 일회용 포장 용품 80만 개 이상을 절감했으며, 모든 포장재를 재활용이 가능한 소재(종이)로 바꾼 마켓컬리의 경우 1년 동안 플라스틱 4,831t을 절감했습니다. 온라인 쇼핑의 장점도 느리면서 환경도 보호할 수 있다니 정말 굿이네요! 굿굿굿~ 마지막 방법은 가장 확실히 포장 폐기물을 줄일 수 있는데요. 바로 불필요한 온라인 쇼핑 줄이기! 입니다. 시중에서 쉽게 구매할 수 있는 물품은 오프라인으로 구매하여 포장 폐기물의 발생을 방지하는 겁니다. 온라인 쇼핑보다는 귀찮겠지만 가장 확실환 방법이니 많은 분이 동참해주셨으면 좋겠네요!"+"<br>"+"<br>";
    document.getElementById('download').setAttribute('href', './img/download2.png')
}
function resultThird(){
    backGround.style.backgroundImage="url('./img/result3.png')";
    explanation.innerHTML = "편리한 것도 좋지만,"+"<br>"+"조금 더 노력해볼까요?" +"<br>"+"당신은 플라스틱 소비러";
    detail.innerHTML = "<br>"+"아직은 환경보단 일상 속 편리함이 더 좋으시군요! 그래도 괜찮아요. 저는 당신 속에서 가능성을 보았답니다. 아래의 환경 보호 tip을 함께 정독하고, 실천하다 보면 플라스틱 소비를 줄이고, 친환경적인 라이프 스타일을 가질 수 있을 거에요!";
    futherEx.innerHTML = "<br>"+"하루 종일 집에만 있었더니 온몸이 쑤시고 답답해요. 우리 콧구멍에 신선한 바람도 쐐줄 겸 집 앞 카페에서 아아 어때요? 언제나 그랬듯이 “아이스 아메리카노 한 잔 테이크 아웃 잔에 담아주세요.” 라 말하는 당신! 카페에서 사용하는 일회용 커피컵은 대부분 재활용이 되지 않는다는 것 알고 계시나요? 바로 투명 플라스틱 컵에 브랜드 로고가 컬러로 인쇄되어 있는 경우가 많기 때문이에요. 이를 재활용하려면 인쇄된 로고의 색상을 빼는 별도의 작업을 거쳐야 하는데요. 그 과정이 복잡하고 비용도 많이 들어 일회용 커피컵 대부분이 재활용되지 않고 일반 쓰레기로 버려진다고 해요. 그 수가 257억 개라고 하니 엄청나죠? 그렇기에 전 텀블러를 사용하는 걸 추천해요! 코로나가 종식되면 매장에서 느긋하게 마시는 것도 좋겠네요~"+"<br>"+"<br>";
    document.getElementById('download').setAttribute('href', './img/download3.png')
}
function resultFourth(){
    backGround.style.backgroundImage="url('./img/result4.png')";
    explanation.innerHTML = "당신은 일상 속에서 틈틈이"+"<br>"+"환경을 신경 쓰는군요." +"<br>"+"당신은 나무 지킴이!";
    detail.innerHTML = "<br>"+"일상 속에서 조금이나마 환경을 생각하려는 움직임이 보여요. 조금의 귀찮음만 극복하면 초록빛 지구를 함께 만들어갈 수 있을 것 같아요! 함께 해주실 거죠?";
    futherEx.innerHTML = "<br>"+"저기 돈까스 좋아하세요? 겉은 바삭하고 속은 촉촉하니 그저 JMT.. 돈까스 한 입이면 바로 극락행..! 그런데 그거 알아요? 우리가 돈까스 먹고 극락 갈 동안 지구는 나락으로 떨어지고 있다는 사실이요. 육류를 생산하기 위해 가축을 기르는 과정에서 매년 배출되는 온실가스는 지구 전체 온실가스 배출량의 15%를 차지해요. 소와 같은 반추동물이 내뿜는 메탄가스뿐만 아니라 가축을 키우고 사료를 생산하기 위해 산림을 파괴하는 과정에서 방출되는 이산화탄소 역시 온실가스의 주범이죠. 이 온실가스는 지구온난화의 원인이 되고 결국엔 기후변화까지 초래해요. 그리고 그 피해는 고스란히 우리 앞으로 돌아오죠. 육식을 줄여야 하는 이유를 이젠 알겠네요. 그래서 그런데 우리 오늘은 산뜻하게 샐러드 어때요?"+"<br>"+"<br>"+"오늘만큼은 내가 요리사! 라며 두 팔을 걷어붙이는데.. 헉! 집에 재료가 없네요. 그 전에 장을 봐야겠어요! 뭐라고요? 걸어가기 너무 귀찮은데 시장까지 자동차를 타자고요? 그런데요. 그거 아세요? 당신이 편하자고 이용하는 자동차에서 배출되는 배기가스는 지구온난화와 대기오염의 원인이 된다는 사실이요. 그렇기에 전 차 키 대신 교통카드를 챙길 것을 추천해요. 가까운 거리라면 걷거나 자전거를 이용하는 것도 좋겠네요! 심지어 운동도 되니 건강까지 챙길 수 있겠어요!"+"<br>"+"<br>"+"집에서 요리를 하는 당신..! 너무 멋져요.🤩 오.. 그런데 양이 너무 많은 거 같은데요..? 모자란 것보다 낫다며 양을 많이 하는 당신. 양을 많이 하는 게 정말 모자란 것보다 나을까요? 1년에 버려지는 음식물은 410만 톤이라고 해요. 돈으로 환산하면 15조 원이라고 하죠. 경제적 손실도 엄청난 문제지만 진짜 문제는 따로 있어요. 음식물을 자연적으로 부패하도록 방치하게 되면 그 과정에서 혐기성 박테리아의 번식으로 인해 메탄가스가 발생해요. 이를 방지하기 위해 소각 및 매립의 방법으로 음식물 쓰레기를 처리하는 경우가 많은데요. 이 방법 역시 환경 오염을 유발해 문제가 아주 많답니다. 소각을 할 경우 오염 물질인 다이옥신이 발생하고, 매립을 할 경우 쓰레기 침출수의 유출로 인해 수질오염과 토양오염을 유발해 문제가 된답니다. 아직도 양을 많이 하는 게 모자란 것보다 나은 것 같나요? 우리 모두 먹을 수 있는 만큼만 만들어요!"+"<br>"+"<br>";
    document.getElementById('download').setAttribute('href', './img/download4.png')
}
function resultFifth(){
    backGround.style.backgroundImage = "url('./img/result5.png')";
    explanation.innerHTML = "잘 하고 있어요!" +"<br>"+"조금 더 노력한다면 지구를 지킬 수 있는 당신은 숲 지킴이!";
    detail.innerHTML = "<br>"+"당신은 지구지킴이 이전 단계인 숲 지킴이 단계에 와 있어요. 숲을 지켜주는 당신 같은 존재가 있어 다행이네요. 조금 더 나아가면 지구 지킴이가 될 수 있겠어요!";
    futherEx.innerHTML = "<br>"+"밖에 나갔다 왔더니 온몸이 찝찝해요. 어서 빨리 개운하게 씻고 싶다며 화장실에 들어간 당신! 도대체 언제쯤 나와요..? 화장실에 들어간 지 15분이 지났는데 도통 나올 기미가 안 보여요. 당신이 샤워 시간을 5분만 줄이면 54ℓ의 물을 줄일 수 있어요. 그리고 이는 1년간 무려 19,710ℓ의 물을 절약할 수 있단 뜻이죠. 그뿐만 아니라, 수돗물을 만들 때 발생하는 이산화탄소 역시 줄일 수 있다고 해요. 우리 앞으로 샤워 시간을 줄이는 건 어때요? 그리고 적은 물줄기가 세게 나오는 절수형 샤워기를 사용할 경우 1분당 7ℓ 정도만 사용해 상당량의 물을 절약할 수 있는데요. 값도 저렴하고 설치도 간단해 직접 교체할 수 있다고 하니 절수형 샤워기를 사용하는 것도 방법이 되겠네요!"+"<br>"+"<br>"+"이제 더러워진 옷을 빨 차례에요. 세제를 넣고 세탁기 동작 버튼을 누르는 당신! 뭐가 하나 빠진 것 같아요. 왜 물 온도는 설정하지 않는 거죠? 당신은 냉수 세탁이 에너지 절약에 도움이 된다는 거 알고 계시나요? 가정에서 많이 쓰이는 드럼세탁기의 경우 기본적으로 온도가 40도로 설정되어 있는데요. 이를 그대로 두고 세탁한 경우와 온도를 내리고 세탁한 경우 세탁력은 유사하지만, 에너지 소비에 있어선 많은 차이가 있다고 해요. 온수 세탁이 냉수 세탁보다 연간 28배 더 많은 전력을 소비하거든요. 그러니 우리 설정온도를 낮추고 냉수 세탁 하는 건 어때요? 전력 사용을 줄어 환경도 보호하고 돈도 절약할 수 있으니 이야말로 누이 좋고 매부 좋은 일 아닌가요?"+"<br>"+"<br>";
    document.getElementById('download').setAttribute('href', './img/download5.png')
}
function resultSixth(){
    backGround.style.backgroundImage = "url('./img/result6.png')";
    explanation.innerHTML = "당신 덕분에 지구가 숨 쉬네요!" +"<br>"+"당신은 멋진 지구 지킴이!";
    detail.innerHTML = "당신은 일상 속에서도 환경을 지키기 위한 노력을 꾸준히 하고 계시는 군요. 당신과 같이 환경을 생각하는 사람이 많아진다면, 더 살기 좋은 지구가 되지 않을까요?";
    futherEx.innerHTML = "<br>"+"당신이 유튜브 영상을 시청하는 것, 메일을 지우지 않고 쌓아두는 것, 핸드폰을 사용하는 것 모두 환경에 악영향을 미친다는 거 알고 계시나요? 온라인 및 모바일에서 발생하는 모든 일에는 데이터가 사용돼요. 그렇기에 모든 IT 기업은 데이터를 저장하고 전송하기 위한 데이터 센터를 운영하고 있죠. 그린피스에 의하면 2020년 세계 데이터 센터 에너지 사용량은 1조 9,370억 kWh라고 해요. 이는 우리나라 1년 전기 사용량의 4배에 달하는 양이기도 하죠. 사실 데이터를 저장하고 전송하는 것에도 전력이 소비되지만, 이보다 더 많은 전력이 냉각장치를 가동하는데 쓰인답니다. 데이터 센터는 24시간 365일 쉴 틈 없이 많은 양의 데이터를 취급하기에 엄청난 열을 내뿜는데요. 이를 식히기 위해선 냉각장치가 필요하기 때문이죠. 이 문제를 해결하기 위해 기업은 온도가 낮은 곳에 데이터 센터를 지어 자연 냉방의 도움을 받아 냉각장치에 소비되는 전력량을 낮추는 노력을 하고 있어요. 하지만 개인의 노력 없이 기업의 노력만으론 이 문제를 해결할 순 없어요. 그러니 우리도 노력을 해야겠죠? 영상을 저화질로 보는 것, 메일함을 정리하는 것, 핸드폰 사용 시간을 줄이는 것 모두 도움이 된다고 하니 한 번 실천하는 건 어떨까요?"+"<br>"+"<br>";
    document.getElementById('download').setAttribute('href', './img/download6.png')
}




function windowWidth() {
    if (window.innerWidth > 1366) {
        question.innerHTML = "모바일 환경으로 접속 부탁드립니다.";
        detail.innerHTML ="";
        explanation.innerHTML = "";
        optionBtn[0].classList.add("hide");
    }
    for (let i = 0; i < backImg.length; i++) {
        backImg[i].style.width = size + 'px';
        
    }
}

window.addEventListener("load", windowWidth);

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
                document.getElementById('four').style.backgroundImage="url('./img/back4-1.gif')"
                changeSection("어떤 걸 시켜먹을까요?", "당신의 메뉴는?", "식도에 기름칠 좀 해볼까?"+"<br>"+"돈까스", "옵션2", "오늘은 산뜻하게!"+"<br>"+"볼 샐러드")
                optionBtn[1].classList.add("hide");
            } else if (e.target.innerHTML === "마트에 가야지!"+"<br>"+"장을 보러간다. ") {
                changeSection("장을 보기 위해 집을 나섰어요.", "마트까지", "부릉부릉~"+"<br>"+"자가를 이용한다.", "대중교통을 이용한다.", "산책도 하고 좋지 뭐!"+"<br>"+"도보를 이용한다.")
            } else if (e.target.innerHTML === "집에 있는 재료로 요리 할 수 있지 않을까?"+"<br>"+"집에 있는 걸로 해먹는다.") {
                document.getElementById('four').style.backgroundImage="url('./img/back4-3.gif')";
                changeSection("집에서 요리를 하는 당신.", "양은 얼마나 할까요?", "자고로 부족한 것 보다는"+"<br>"+"많은 게 낫지. 많이 한다!", "옵션2", "음식물 쓰레기"+"<br>"+"버리기 귀찮아.적게 한다.")
                optionBtn[1].classList.add("hide");

            }
            click +=1;
        }
      })
}


button.addEventListener("click", function() {
    futherEx.classList.toggle("hide");
    tip.style.overFlow="scroll";
})