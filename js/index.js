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

    if (currentQuestion > 1) {
        document.querySelector('#playContainer').className = "d-none";
    }
}

function createAudio() {
    let questionFromArray = currentQuestion - 1;
    let audioSrc = QUESTIONS[questionFromArray].src
    let audio = new Audio(audioSrc);

    if (currentQuestion !== 1) {
        audioHandler(audio);
    }

    document.querySelector('#play').addEventListener("click", function () {
        if (currentQuestion === 1) {
            document.querySelector('#playContainer').className = "";
            this.style.display = "none";
            document.querySelector('#nextContainer').className = "col-lg-6 d-flex justify-content-center py-2";
            audioHandler(audio);
        }
    })
}

function audioHandler(audio) {
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }

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
    document.querySelector('#playContainer').style.display = "none";

    let button = document.createElement("button");
    button.id = "play";
    button.className = "listen mx-3 rounded-3";

    let h3 = document.createElement("h3");
    h3.style.margin = "0";
    h3.innerHTML = 'Слушать <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-caret-right-fill" viewBox="0 0 16 16"><path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" /></svg >';
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
    // let results = {
    //     correctAnswers,
    //     falseAnswers,
    //     rate: Math.floor(correctAnswers / QUESTIONS.length * 100)
    // };

    // sessionStorage.setItem("CLPresults", JSON.stringify(results));

    // location.href = "./results.html"

    document.querySelector('.buttons-container').style.display = "none";
    document.querySelector('.test-answers-container').style.display = "none";
    document.querySelector('.programs').style.display = "flex";
    document.querySelector('.test-counter-container>h3:nth-child(1)').style.display = "none";
    document.querySelector('#test-counter').innerHTML = "Тестирование завершено";
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

if (!currentQuestion != 1) {
    document.querySelector('#play').addEventListener("click", function () {
        audioHandler();
    })
}