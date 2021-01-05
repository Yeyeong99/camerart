const optionBtn = document.querySelectorAll("a");
const explanation = document.querySelector("h2");
const question = document.querySelector("h1");
let score = 0;
let click = 1;
console.log(click)

function secondSection(){
    question.innerHTML = "2 번째 질문";
    optionBtn[0].innerHTML = "2.1";
    optionBtn[1].innerHTML = "2.2";
    optionBtn[2].innerHTML = "2.3";
}
function thirdSection(){
    question.innerHTML = "3 번째 질문";
    optionBtn[0].innerHTML = "3.1";
    optionBtn[1].innerHTML = "3.2";
    optionBtn[2].innerHTML = "3.3";
}

function fourthSection(){
    question.innerHTML = "4 번째 질문";
    optionBtn[0].innerHTML = "4.1";
    optionBtn[1].innerHTML = "4.2";
    optionBtn[2].innerHTML = "4.3";
}

function fifthSection(){
    question.innerHTML = "5 번째 질문";
    optionBtn[0].innerHTML = "5.1";
    optionBtn[1].innerHTML = "5.2";
    optionBtn[2].innerHTML = "5.3";
}

function sixthSection(){
    question.innerHTML = "6 번째 질문";
    optionBtn[0].innerHTML = "6.1";
    optionBtn[1].innerHTML = "6.2";
    optionBtn[2].innerHTML = "6.3";
}

function seventhSection(){
    question.innerHTML = "7 번째 질문";
    optionBtn[0].innerHTML = "7.1";
    optionBtn[1].innerHTML = "7.2";
    optionBtn[2].innerHTML = "7.3";
}

function eighthSection(){
    question.innerHTML = "8 번째 질문";
    optionBtn[0].innerHTML = "8.1";
    optionBtn[1].innerHTML = "8.2";
    optionBtn[2].innerHTML = "8.3";
}

function ninethSection(){
    question.innerHTML = "9 번째 질문";
    optionBtn[0].innerHTML = "9.1";
    optionBtn[1].innerHTML = "9.2";
    optionBtn[2].innerHTML = "9.3";
}

function tenthSection(){
    question.innerHTML = "10 번째 질문";
    optionBtn[0].innerHTML = "10.1";
    optionBtn[1].innerHTML = "10.2";
    optionBtn[2].innerHTML = "10.3";
}

function eleventhSection(){
    question.innerHTML = "끝";
}

function calculatorFirst() {
    score +=1
    console.log(score);
    if (click == 1) {
        secondSection();
        click +=1
    } else if (click == 2) {
        thirdSection();
        click +=1
    } else if (click == 3) {
        fourthSection();
        click +=1
    } else if (click == 4) {
        fifthSection();
        click +=1
    } else if (click == 5) {
        sixthSection();
        click +=1
    } else if (click == 6) {
        seventhSection();
        click +=1
    } else if (click == 7) {
        eighthSection();
        click +=1
    } else if (click == 8) {
        ninethSection();
        click +=1
    } else if (click == 9) {
        tenthSection();
        click +=1
    } else if (click == 10) {
        eleventhSection();
    }
}

optionBtn[0].addEventListener("click",calculatorFirst);