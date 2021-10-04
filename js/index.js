// Механика всего проекта, трогать нежелательно

let currentQuestion = 0;
let correctAnswers = 0;
let falseAnswers = 0;

function nextQuestion() {
    currentQuestion++;
    document.querySelector('#test-counter').innerHTML = `${currentQuestion} из ${QUESTIONS.length}`;
    createAnswersContainer();
    createPlayButton()
    createAudio();
}

function createAudio() {
    let questionFromArray = currentQuestion - 1;
    let audioSrc = QUESTIONS[questionFromArray].src
    let audio = new Audio(audioSrc);

    audioHandler(audio);
}

function audioHandler(audio) {
    document.querySelector('#play').addEventListener("click", function () {
        if (audio.paused) {
            audio.play();
            this.children[1].innerHTML = "||";
        } else {
            audio.pause();
            this.children[1].innerHTML = "";
        }

        let checkIfAudioEndedInterval = setInterval(() => {
            if (audio.ended) {
                this.children[1].innerHTML = "";
                clearInterval(checkIfAudioEndedInterval);
            }
        }, 500);
    });

    document.querySelector('#next').addEventListener("click", () => {
        audio.pause();
    });
}

function createAnswersContainer() {
    let question = QUESTIONS[currentQuestion - 1]
    document.querySelector('#answers').innerHTML = "";

    let div = document.createElement("div");
    div.className = "col d-flex flex-column align-items-center";

    for (let answerIndex = 0; answerIndex < 3; answerIndex++) {
        let variant = document.createElement("div");
        variant.className = "row my-3 answer";
        variant.innerHTML = `<span>${question.answers[answerIndex].text}</span>`;

        correctAnswerChecker(question, variant, answerIndex);

        div.append(variant);
    }

    document.querySelector('#answers').append(div);
}

function correctAnswerChecker(question, variant, answerIndex) {
    variant.addEventListener("click", () => {
        if (question.answers[answerIndex].correct) {
            if (correctAnswers + falseAnswers < currentQuestion) {
                correctAnswers++;
            }
            animateResults(true)
        } else {
            if (correctAnswers + falseAnswers < currentQuestion) {
                falseAnswers++;
            }
            animateResults(false)
        }
        refreshPoints();
    })
}

function createPlayButton() {
    document.querySelector('#playContainer').innerHTML = "";

    let button = document.createElement("button");
    button.id = "play";
    button.className = "listen mx-3 rounded-3";

    let h3 = document.createElement("h3");
    h3.innerHTML = "Слушать";
    let span = document.createElement("span");

    button.append(h3)
    button.append(span);
    document.querySelector('#playContainer').append(button);
}

function refreshPoints() {
    document.querySelector('#trueCounter').innerHTML = correctAnswers;
    document.querySelector('#falseCounter').innerHTML = falseAnswers;
}

function animateResults(correct) {
    if (correct) {
        document.querySelector('.true-counter').classList.add("animate");
        setTimeout(function () {
            document.querySelector('.true-counter').classList.remove("animate");
        }, 500);
    } else {
        document.querySelector('.false-counter').classList.add("animate");
        setTimeout(function () {
            document.querySelector('.false-counter').classList.remove("animate");
        }, 500);
    }
}

function finishTest() {
    let results = {
        correctAnswers, 
        falseAnswers, 
        rate: Math.floor(correctAnswers / QUESTIONS.length * 100)
    };

    sessionStorage.setItem("CLPresults", JSON.stringify(results));

    location.href = "./results.html"
}

function startTest() {
    nextQuestion();
}

startTest();

document.querySelector('#next').addEventListener("click", () => {
    if (currentQuestion < QUESTIONS.length) {
        nextQuestion();
    } else {
        finishTest();
    }
});