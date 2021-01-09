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
function sectionFirst(){
    question.innerHTML = "1 번째 질문";
    optionBtn[0].innerHTML = "1.1";
    optionBtn[1].innerHTML = "1.2";
    optionBtn[2].innerHTML = "1.3";
}
function sectionSecond(){
    question.innerHTML = "2 번째 질문";
    optionBtn[0].innerHTML = "2.1";
    optionBtn[1].innerHTML = "2.2";
    optionBtn[2].innerHTML = "2.3";
}
function sectionThird(){
    question.innerHTML = "3 번째 질문";
    optionBtn[0].innerHTML = "3.1";
    optionBtn[1].innerHTML = "3.2";
    optionBtn[2].innerHTML = "3.3";
}


function sectionFourth(){
    question.innerHTML = "4 번째 질문";
    optionBtn[0].innerHTML = "4.1";
    optionBtn[1].innerHTML = "4.2";
    optionBtn[2].innerHTML = "4.3";
}

function sectionFourth1(){
    question.innerHTML = "4 -1번째 질문";
    optionBtn[0].innerHTML = "4.11";
    optionBtn[1].innerHTML = "4.2";
    optionBtn[2].innerHTML = "4.3";
}

function sectionFourth2(){
    question.innerHTML = "4 -2번째 질문";
    optionBtn[0].innerHTML = "4.12";
    optionBtn[1].innerHTML = "4.2";
    optionBtn[2].innerHTML = "4.3";
}

function sectionFourth3(){
    question.innerHTML = "4-3 번째 질문";
    optionBtn[0].innerHTML = "4.13";
    optionBtn[1].innerHTML = "4.2";
    optionBtn[2].innerHTML = "4.3";
}


function sectionFifth(){
    question.innerHTML = "5 번째 질문";
    optionBtn[0].innerHTML = "5.1";
    optionBtn[1].innerHTML = "5.2";
    optionBtn[2].innerHTML = "5.3";
}

function sectionSixth(){
    question.innerHTML = "6 번째 질문";
    optionBtn[0].innerHTML = "6.1";
    optionBtn[1].innerHTML = "6.2";
    optionBtn[2].innerHTML = "6.3";
}

function sectionSeventh(){
    question.innerHTML = "7 번째 질문";
    optionBtn[0].innerHTML = "7.1";
    optionBtn[1].innerHTML = "7.2";
    optionBtn[2].innerHTML = "7.3";
}

function sectionEighth(){
    question.innerHTML = "8 번째 질문";
    optionBtn[0].innerHTML = "8.1";
    optionBtn[1].innerHTML = "8.2";
    optionBtn[2].innerHTML = "8.3";
}

function sectionNinth(){
    question.innerHTML = "9 번째 질문";
    optionBtn[0].innerHTML = "9.1";
    optionBtn[1].innerHTML = "9.2";
    optionBtn[2].innerHTML = "9.3";
}

function sectionTenth(){
    question.innerHTML = "10 번째 질문";
    optionBtn[0].innerHTML = "10.1";
    optionBtn[1].innerHTML = "10.2";
    optionBtn[2].innerHTML = "10.3";
}

function removeAllChild(array) {
    while(array.hasChildNodes())
    {
        array.removeChild(array.firstChild);
    }
}

function resultFirst(){
    question.innerHTML = "끝1";
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

//점수 계산
function calculator() {
    if (click == 0) {
        sectionFirst();
        optionBtn[1].classList.remove("hide");
        optionBtn[2].classList.remove("hide");
        click +=1;
    } else if (click == 1) {
        sectionSecond();
        click +=1;
    } else if (click ==2) {
       sectionThird();
       click +=1;
    }else if (click == 4) {
        sectionFifth();
        click +=1;
    } else if (click == 5) {
        sectionSixth();
        click +=1;
    } else if (click == 6) {
        sectionSeventh();
        click +=1;
    } else if (click == 7) {
        sectionEighth();
        click +=1;
    } else if (click == 8) {
        sectionNinth();
        click +=1;
    } else if (click == 9) {
        sectionTenth();
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
            calculator();
            
        }else {
            if(e.target.innerHTML === "3.1") {
                sectionFourth1();
                console.log(e.target)
            } else if (e.target.innerHTML === "3.2") {
                sectionFourth2();
                console.log(e.target)
            } else if (e.target.innerHTML === "3.3") {
                sectionFourth3();
                console.log(e.target)
            }
            click +=1;
        }
      })
}

