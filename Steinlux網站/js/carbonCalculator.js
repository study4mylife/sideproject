//題目庫
const question = [
    {
        question: 'Q1.您浪費食物的程度',
        answer: [
            { text: '完全不會', value: 0},
            { text: '0~10%', value: 1},
            { text: '10%~30%', value: 2},
            { text: '多於30%', value: 3}
        ]
    },
    {
        question: 'Q2.如何描述您的飲食',
        answer: [
            { text: '每餐都有肉', value: 4},
            { text: '很常吃肉', value: 3},
            { text: '有時吃肉', value: 2},
            { text: '很少吃肉', value: 1},
            { text: '素食主義者', value: 0}
        ]
    },
    {
        question: 'Q3.多久購買一次進口產品',
        answer: [
            { text: '完全不會', value: 0},
            { text: '一年', value: 1},
            { text: '半年', value: 2},
            { text: '一個月', value: 3}
        ]
    },
    {
        question: 'Q4.您一周在外食的花費有多少(餐聽、食堂、外帶)',
        answer: [
            { text: '完全不吃外食', value: 0},
            { text: '1~500元', value: 1},
            { text: '500~1000元', value: 2},
            { text: '1000~2000元', value: 3},
            { text: '超過2000元', value: 4}
        ]
    },
    /*{
        question: 'Q1.你在生活當中浪費食物的程度',
        answer: [
            { text: '完全不會', value: 0},
            { text: '0~10%', value: 1},
            { text: '10%~30%', value: 2},
            { text: '多於30%', value: 3}
        ]
    },
    {
        question: 'Q1.你在生活當中浪費食物的程度',
        answer: [
            { text: '完全不會', value: 0},
            { text: '0~10%', value: 1},
            { text: '10%~30%', value: 2},
            { text: '多於30%', value: 3}
        ]
    },*/
]

const questionElement = document.getElementById('question');
const options = document.getElementById('optionContainer');
let currentQuestionIndex = 0

//初始化頁面
showquestion()

//顯示題目
function showquestion(){
    let currentQuestion = question[currentQuestionIndex];
    questionElement.innerHTML = currentQuestion.question

    //清除上一題選項
    options.innerHTML = ''

    currentQuestion.answer.forEach(answer =>{
    const button = document.createElement('button');
    button.innerHTML = answer.text;
    button.classList.add('option');
    button.addEventListener('click', nextQuestion);
    options.appendChild(button)
    })
}

//顯示下一題
function nextQuestion(){
    if(currentQuestionIndex < question.length-1){
    currentQuestionIndex +=1
    showquestion()
    }
    else{
    questionElement.innerHTML = '作答完畢，感謝您的參與'
    options.innerHTML = '總分為:100';
    }
}

function previousQuestion(){
    if(currentQuestionIndex > 0){
    currentQuestionIndex -=1
    showquestion()
    }
}

//console.log(question[0].question[currentQuestionIndex].text)