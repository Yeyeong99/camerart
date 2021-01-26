import { GlowParticle } from "./gradient.js";

const optionBtn = document.querySelectorAll("button");
const main = document.querySelector("main");
const question = document.querySelector("h1");
const explanation = document.querySelector("h2");
const detail = document.querySelector("h3");
const options = document.querySelector("div.options");
const shareBtn = document.querySelector(".share-download");
const backGround = document.querySelector(".background");
const footer = document.querySelector("footer");

let score = 0;
let click = 0;

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

//결과
function resultFirst(){
    explanation.innerHTML = "우리 환경을 위한 작은 실천이라도 함께 해보아요. 당신은 플라스틱 헤비 러버"
    detail.innerHTML = "당신은 플라스틱을 지독히 사랑하는 사람이군요. 아래의 환경 보호 tip을 함께 정독하고, 작은 것부터 실천해 나가요. 우리가 살아가는 지구, 우리가 더 보살펴야 하지 않을까요? 오늘부터 플라스틱 말고, 지구를 사랑해보아요. 함께 합시다!";
    backGround.style.filter = "opacity(0.8)";
    document.getElementById('download').setAttribute('href', './img/result1.jpg')
}
function resultSecond(){
    explanation.innerHTML = "환경을 생각해주세요! 당신은 플라스틱의 베스트 프렌드"
    detail.innerHTML = "이런 이런, 지구가 울고 있어요! 당신은 플라스틱과 누구보다 끈끈한 우정을 자랑하고 있군요. 아래의 환경 보호 tip을 함께 정독하고, 작은 것부터 실천해 나가요. 당신의 작은 실천들이 모여 더 나은 환경을 만들 수 있답니다.";
    backGround.style.filter = "opacity(0.7)";
    document.getElementById('download').setAttribute('href', './img/result2.jpg')
}
function resultThird(){
    explanation.innerHTML = "편리한 것도 좋지만, 조금 더 노력해볼까요?" +"<br>"+"당신은 플라스틱 소비러"
    detail.innerHTML = "아직은 환경보단 일상 속 편리함이 더 좋으시군요! 그래도 괜찮아요. 저는 당신 속에서 가능성을 보았답니다. 아래의 환경 보호 tip을 함께 정독하고, 실천하다 보면 플라스틱 소비를 줄이고, 친환경적인 라이프 스타일을 가질 수 있을 거에요!";
    backGround.style.filter = "opacity(0.6)";
    document.getElementById('download').setAttribute('href', './img/result3.jpg')
}
function resultFourth(){
    explanation.innerHTML = "많이 노력당신은 일상 속에서 틈틈이 환경을 신경 쓰는군요." +"<br>"+"당신은 나무 지킴이하는 편이 좋겠어요"
    detail.innerHTML = "일상 속에서 조금이나마 환경을 생각하려는 움직임이 보여요. 조금의 귀찮음만 극복하면 초록빛 지구를 함께 만들어갈 수 있을 것 같아요! 함께 해주실 거죠?";
    backGround.style.filter = "opacity(0.4)";
    document.getElementById('download').setAttribute('href', './img/result4.jpg')
}
function resultFifth(){
    explanation.innerHTML = "잘 하고 있어요!" +"<br>"+"조금 더 노력한다면 지구를 지킬 수 있는 당신은 숲 지킴이!"
    detail.innerHTML = "당신은 지구지킴이 이전 단계인 숲 지킴이 단계에 와 있어요. 숲을 지켜주는 당신 같은 존재가 있어 다행이네요. 조금 더 나아가면 지구 지킴이가 될 수 있겠어요!";
    backGround.style.filter = "opacity(0.2)";
    document.getElementById('download').setAttribute('href', './img/result5.jpg')
}
function resultSixth(){
    explanation.innerHTML = "당신 덕분에 지구가 숨 쉬네요!" +"<br>"+"당신은 멋진 지구 지킴이!"
    detail.innerHTML = "당신은 일상 속에서도 환경을 지키기 위한 노력을 꾸준히 하고 계시는 군요. 당신과 같이 환경을 생각하는 사람이 많아진다면, 더 살기 좋은 지구가 되지 않을까요?";
    backGround.style.filter = "opacity(0)";
    document.getElementById('download').setAttribute('href', './img/result6.jpg')
}

//그라데이션
const COLORS = [
    {r :240, g: 161, b:118},
    {r :247, g: 77, b:153},
    {r :138, g: 81, b:224},
    {r :77, g: 159, b:247},
    {r :74, g: 237, b:175}
];

class App {
    constructor() {
        this.canvas = document.createElement('canvas');
        document.body.appendChild(this.canvas);
        this.ctx = this.canvas.getContext('2d');
        
        this.pixelRatio = (window.devicePixelRatio > 1) ? 2 : 1;

        this.totalParticles = 15;
        this.particles = [];
        this.maxRadius = 800;
        this.minRadius = 400;

        window.addEventListener('resize', this.resize.bind(this), false);
        this.resize();

        window.requestAnimationFrame(this.animate.bind(this));
    }
    resize() {
        this.stageWidth = document.body.clientWidth;
        this.stageHeight = document.body.clientHeight;
    
        this.canvas.width = this.stageWidth * this.pixelRatio;
        this.canvas.height = this.stageHeight * this.pixelRatio;
        this.ctx.scale(this.pixelRatio, this.pixelRatio);

        // this.ctx.globalCompositeOperation = 'saturation';
        this.createParticles();
    }
    createParticles() {
        let curColor = 0;
        this.particles=[];

        for (let i = 0; i < this.totalParticles; i++) {
            const item = new GlowParticle(
                Math.random() * this.stageWidth,
                Math.random() * this.stageHeight,
                Math.random() * (this.maxRadius - this.minRadius) + this.minRadius,
                COLORS[curColor]
            );
            
            if (++curColor >= COLORS.length) {
                curColor = 0;
            }

            this.particles[i] = item;
        }
    }
    animate() {
        window.requestAnimationFrame(this.animate.bind(this));

        this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);
        for (let i = 0; i < this.totalParticles; i++) {
            const item = this.particles[i];
            item.animate(this.ctx, this.stageWidth, this.stageHeight);

            
        }
    }
}

//클릭 계산
function clickCalculator() {
    if (click == 0) {
        changeSection("아침에 일어난 당신!", "겨울이라" +"<br>"+"방이 조금 추워요.", "안 되겠다! 너무 추워. 25도 이상으로 올려야겠어.", "적당히"+"<br>"+"적정 온도로 맞춰놓자.", "귀찮으니까"+"<br>"+"대충 옷이나 입자.")
        detail.classList.add("hide");
        optionBtn[1].classList.remove("hide");
        optionBtn[2].classList.remove("hide");
        click +=1;
    } else if (click == 1) {
        changeSection("띵동- 택배가 왔어요! 집 앞에 쌓인 택배를 확인하는 당신.", "택배의 개수는?", "4개 이상", "2-3개", "0-1개")
        click +=1;
    } else if (click ==2) {
        changeSection("하암- 어느덧 점심시간이네요.", "점심은 어떻게 해결하죠?", "한국인은 역시 배달이지…"+"<br>"+"시켜먹는다.", "마트에 가야지!"+"<br>"+"장을 보러간다. ", "둘 다 귀찮아!"+"<br>"+"집에 있는 걸로 해먹는다.")
        click +=1;
    }else if (click == 4) {
        changeSection("드디어 점심을 먹는 당신."+"<br>"+"심심해서 동영상을 볼까 해요.", "영상을 틀었는데.."+"<br>"+"저화질로 나오네요?", "최고화질 아니면.. 왜 봐?"+"<br>"+"무조건 최고화질로 본다", "그냥 틀어지는 대로 본다", "…귀찮다. 그냥 화면을 끈다.")
        optionBtn[1].classList.remove("hide");
        click +=1;
    } else if (click == 5) {
        changeSection("바깥공기를 쐬고 싶어졌다. 집 앞 카페에 왔어요.", "아이스아메리카노를 시켰는데..", "마시면서 집에 가야지!"+"<br>"+"일회용 테이크 아웃잔에"+"<br>"+"담아갈게요~", "카페에서 느긋하게"+"<br>"+"마셔야지."+"<br>"+"머그잔에 담아주세요! ", "텀블러를 챙겨왔다!"+"<br>"+"텀블러에 담아갈게요~")
        click +=1;
    } else if (click == 6) {
        changeSection("집에 돌아왔네요.", "샤워를 하려고 해요.", "느긋하게 씻어야죠"+"<br>"+"(15분 초과)", "호다닥 씻을래요"+"<br>"+"(10분 내외)", "땀도 안흘렸는데…"+"<br>"+"양치랑 세수만")
        click +=1;
    } else if (click == 7) {
        changeSection("세탁기 앞에 선 당신.", "세탁기 물의 온도는?", "그냥 세탁기가 맞춰놓은 대로", "옵션2", "내가 설정해야지! 별도로 설정한다")
        optionBtn[1].classList.add("hide");
        click +=1;
    } else if (click == 8) {
        changeSection("띠링- 새로운 메일이 왔네요!", "당신의 메일함은", "메일…그런거…외일거?"+"<br>"+"안 건드려서 미확인 메일이 10000개 넘는다", "메일이 쌓여있긴 하지만… 그래도 확인은 바로 함!"+"<br>"+"미확인 메일은 없다", "확인하고 바로 지우는 타입."+"<br>"+"메일함이 깨끗하다")
        optionBtn[1].classList.remove("hide");
        click +=1;
    } else if (click == 9) {
        changeSection("휴- 하루가 다 갔네요."+"<br>"+"자기 전 스크린 타임을"+"<br>"+"확인 해 보아요.", "당신의 핸드폰 사용 시간은?", "6시간 이상", "3~6시간", "3시간 이하")
        click +=1;
    } else if (click ==10) {
        new App();
        removeAllChild(options);
        backGround.classList.remove("hide");
        detail.classList.remove("hide");
        question.classList.add("hide");
        main.style.color = "white";
        footer.style.color = "white";
        //appendChild
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
        shareBtn.classList.remove("hide")
        console.log(score);
    }
    console.log(click);
}


//점수 계산 결과
for (let i = 0; i < optionBtn.length; i++) {
    optionBtn[i].addEventListener("click", function (e) {
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
                changeSection("어떤 걸 시켜먹을까요?", "당신의 메뉴는?", "육류", "옵션2", "비건")
                optionBtn[1].classList.add("hide");
            } else if (e.target.innerHTML === "마트에 가야지!"+"<br>"+"장을 보러간다. ") {
                changeSection("장을 보기 위해 집을 나섰어요.", "마트까지", "부릉부릉~"+"<br>"+"자가를 이용한다.", "대중교통을 이용한다.", "산책도 하고 좋지 뭐!"+"<br>"+"도보를 이용한다.")
            } else if (e.target.innerHTML === "둘 다 귀찮아!"+"<br>"+"집에 있는 걸로 해먹는다.") {
                changeSection("집에서 요리를 하는 당신.", "양은 얼마나 할까요?", "자고로 부족한 것 보다는"+"<br>"+"많은 게 낫지. 많이 한다!", "옵션2", "음식물 쓰레기"+"<br>"+"버리기 귀찮아.적게 한다.")
                optionBtn[1].classList.add("hide");

            }
            click +=1;
        }
      })
}

