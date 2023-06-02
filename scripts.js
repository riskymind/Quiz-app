const quizData = [
    {
        question: 'How old is Zuri?',
        a: 2,
        b: 3,
        c: 4,
        d:1,
        answer: 'a'
    }, 
    {
        question: "What is the most popular language used in 2019?",
        a: 'Java',
        b: 'JavaScript',
        c: 'C#',
        d: 'Python',
        answer: 'a'
    },

    {
        question: "who is the president of Nigeria 2023?",
        a: 'Buhari',
        b: 'Tinubu',
        c: 'Obi',
        d: 'Atiku',
        answer: 'b'
    },

    {
        question: "what year was javscript launched?",
        a: '2020',
        b: '2019',
        c: '2000',
        d: '1995',
        answer: 'd'
    },

    {
        question: "Nkem is who to me?",
        a: 'wife',
        b: 'sister',
        c: 'friend',
        d: 'cousin',
        answer: 'a'
    }
];


const questionEL = document.getElementById("question");
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const quiz = document.getElementById('quiz')

const answerEls = document.querySelectorAll(".answer");

const submitBtn = document.getElementById('submit');


let currentQuiz = 0;
let score = 0

loadQuiz();

function loadQuiz() {
    deSelectAnswers()
    const currentQuizData = quizData[currentQuiz];
    questionEL.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;

}

function getSelectedAnswer() {
    let answer = undefined
    answerEls.forEach((answerEl) => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    });

    return answer;

}

function deSelectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false
    });
}


submitBtn.addEventListener('click', () => {
    const answerOption = getSelectedAnswer();
     
    if(answerOption) {
        if(answerOption == quizData[currentQuiz].answer) {
            score++
        }
        currentQuiz++;

        if(currentQuiz < quizData.length) {
            loadQuiz();   
        }else {
            currentQuiz = 0;
            quiz.innerHTML = `<h2> You answered
                ${score}/${quizData.length} correctly
            </h2>
            <button onclick="location.reload()">Reload</button>
            `
            
        }
    }
})