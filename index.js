const optionBtn = document.querySelectorAll("a");
const explanation = document.querySelector("h2");
const question = document.querySelector("h1");
let score = 0;
let click = 1;
// 각 화면
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
    question.innerHTML = "4 번째 질문";
    optionBtn[0].innerHTML = "4.1";
    optionBtn[1].innerHTML = "4.2";
    optionBtn[2].innerHTML = "4.3";
}

function sectionFourth2(){
    question.innerHTML = "4 번째 질문";
    optionBtn[0].innerHTML = "4.1";
    optionBtn[1].innerHTML = "4.2";
    optionBtn[2].innerHTML = "4.3";
}

function sectionFourth3(){
    question.innerHTML = "4 번째 질문";
    optionBtn[0].innerHTML = "4.1";
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

function resultFirst(){
    question.innerHTML = "끝1";
}
function resultSecond(){
    question.innerHTML = "끝2";
}
function resultThird(){
    question.innerHTML = "끝3";
}
function resultFourth(){
    question.innerHTML = "끝4";
}
function resultFifth(){
    question.innerHTML = "끝5";
}
function resultSixth(){
    question.innerHTML = "끝6";
}
function resultSeventh(){
    question.innerHTML = "끝7";
}
function resultEighth(){
    question.innerHTML = "끝8";
}
//점수 계산
function calculator() {
    console.log(click);
    if (click == 1) {
       sectionSecond();
        click +=1;
    } else if (click == 2) {
        sectionThird();
        click +=1;
    } else if (click == 3) {
        sectionFourth();
        click +=1;
    } else if (click == 4) {
        // optionBtn[0].addEventListener("click",function () {
        //     sectionFourth1();
        //     click +=1;
        // });
        // optionBtn[1].addEventListener("click",function () {
        //     sectionFourth2();
        //     click +=1;
        // });
        // optionBtn[2].addEventListener("click",function () {
        //     sectionFourth3();
        //     click +=1;
        // });
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
    } else if (click == 10) {
        if(score >= 19) {
            resultFirst();
        } else if (score >= 17) {
            resultSecond();
        } else if (score >= 14) {
            resultThird();
        } else if (score >= 11) {
            resultFourth();
        } else if (score >= 9) {
            resultFifth();
        } else if (score >= 7) {
            resultSixth();
        } else if (score >= 4) {
            resultSeventh();
        } else {
            resultEighth();
        }
    }
}

for (let i = 0; i < optionBtn.length; i++) {
    optionBtn[i].addEventListener("click", function () {
        if(i==0){
            score +=4
        }else if(i==1) {
            score +=2
        }else if (i==2) {
            score +=0
        }
        calculator();
      })
    
}
// optionBtn[0].addEventListener("click",calculatorFirst);
console.log(score);
console.log(click);
