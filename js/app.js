import { GlowParticle } from "./gradient.js";

const optionBtn = document.querySelectorAll("button");
const main = document.querySelector("main");
const explanation = document.querySelector("h2");
const question = document.querySelector("h1");
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
    question.innerHTML = "끝";
    backGround.style.filter = "opacity(0.9)";
    document.getElementById('download').setAttribute('href', './result1.jpg')
}
function resultSecond(){
    question.innerHTML = "끝2";
    backGround.style.filter = "opacity(0.8)";
    document.getElementById('download').setAttribute('href', './result2.jpg')
}
function resultThird(){
    question.innerHTML = "끝3";
    backGround.style.filter = "opacity(0.7)";
    document.getElementById('download').setAttribute('href', './result3.jpg')
}
function resultFourth(){
    question.innerHTML = "끝4";
    backGround.style.filter = "opacity(0.6)";
    document.getElementById('download').setAttribute('href', './result4.jpg')

}
function resultFifth(){
    question.innerHTML = "끝5";
    backGround.style.filter = "opacity(0.5)";
    document.getElementById('download').setAttribute('href', './result5.jpg')
}
function resultSixth(){
    question.innerHTML = "끝6";
    backGround.style.filter = "opacity(0.4)";
    document.getElementById('download').setAttribute('href', './result6.jpg')
}
function resultSeventh(){
    question.innerHTML = "끝7";
    backGround.style.filter = "opacity(0.2)";
    document.getElementById('download').setAttribute('href', './result7.jpg')
}
function resultEighth(){
    question.innerHTML = "끝8";
    backGround.style.filter = "opacity(0)";
    document.getElementById('download').setAttribute('href', './result8.jpg')
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
        changeSection("wnfqdflka", "질문1", "11212121\n222222212121212\n122121212\n1221121212122212", "옵션2", "옵션3")
        optionBtn[1].classList.remove("hide");
        optionBtn[2].classList.remove("hide");
        click +=1;
    } else if (click == 1) {
        changeSection("질문 2입니다", "질문2", "옵션1", "옵션2", "옵션3")
        click +=1;
    } else if (click ==2) {
        changeSection("질문 3입니다", "질문3", "옵션1", "옵션2", "옵션3")
        click +=1;
    }else if (click == 4) {
        changeSection("질문 5입니다", "질문5", "옵션1", "옵션2", "옵션3")
        click +=1;
    } else if (click == 5) {
        changeSection("질문 6입니다", "질문6", "옵션1", "옵션2", "옵션3")
        click +=1;
    } else if (click == 6) {
        changeSection("질문 7입니다", "질문7", "옵션1", "옵션2", "옵션3")
        click +=1;
    } else if (click == 7) {
        changeSection("질문\n 8입니다", "질문8", "옵션1", "옵션2", "옵션3")
        click +=1;
    } else if (click == 8) {
        changeSection("질문 9입니다", "질문9", "옵션1", "옵션2", "옵션3")
        click +=1;
    } else if (click == 9) {
        changeSection("질문 10입니다", "질문10", "옵션1", "옵션2", "옵션3")
        click +=1;
    } else if (click ==10) {
        new App();
        removeAllChild(options);
        backGround.classList.remove("hide");
        main.style.color = "white";
        footer.style.color = "white";
        //appendChild
        if(score >= 36) {
            resultFirst();
        } else if (score >= 32) {
            resultSecond();
        } else if (score >= 27) {
            resultThird();
        } else if (score >= 23) {
            resultFourth();
        } else if (score >= 19) {
            resultFifth();
        } else if (score >= 15) {
            resultSixth();
        } else if (score >= 10) {
            resultSeventh();
        } else {
            resultEighth();
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
            if(e.target.innerHTML === "옵션1") {
                changeSection("4-1", "4-1 질문입니다", "옵션1", "옵션2", "옵션3")
                console.log(e.target)
            } else if (e.target.innerHTML === "옵션2") {
                changeSection("4-2", "4-2 질문입니다", "옵션1", "옵션2", "옵션3")
                console.log(e.target)
            } else if (e.target.innerHTML === "옵션3") {
                changeSection("4-3", "4-3 질문입니다", "옵션1", "옵션2", "옵션3")
                console.log(e.target)
            }
            click +=1;
        }
      })
}

