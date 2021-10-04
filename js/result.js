function getResults () {
    let results = JSON.parse(sessionStorage.getItem("CLPresults"));

    document.querySelector('#correct-results').innerHTML = `Правильных ответов: ${results.correctAnswers}`;
    document.querySelector('#false-results').innerHTML = `Неправильных ответов: ${results.falseAnswers}`;
    document.querySelector('#rate').innerHTML = `Общая оценка: ${results.rate}%`;
}

getResults();