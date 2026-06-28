function normalise(text) {
    return text.trim().toLowerCase();
}

function enableAnswer(correctAnswers, nextPage) {

    if (!Array.isArray(correctAnswers)) {
        correctAnswers = [correctAnswers];
    }

    correctAnswers = correctAnswers.map(normalise);

    const input = document.getElementById("answer");
    const button = document.getElementById("continueButton");

    input.addEventListener("input", () => {

        const answer = normalise(input.value);

        button.disabled = !correctAnswers.includes(answer);

    });

    button.addEventListener("click", () => {
        window.location.href = nextPage + window.location.search;
    });

}

function enableContinue(nextPage) {

    document
        .getElementById("continueButton")
        .addEventListener("click", () => {

            window.location.href = nextPage + window.location.search;

        });

}