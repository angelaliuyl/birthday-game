function normalise(text) {
    return text.trim().toLowerCase();
}

function pageUrl(pageId) {

    const page = PAGES[pageId];

    if (!page) {
        throw new Error(`Unknown page: ${pageId}`);
    }

    return page.path;

}

function startPageId() {

    return new URLSearchParams(window.location.search).get("start");

}

function resolveNextPage(fromPageId) {

    const nextId = NEXT[fromPageId];

    if (!nextId) {
        throw new Error(`No next page for: ${fromPageId}`);
    }

    return nextId;

}

function setupPuzzle(pageId, correctAnswers) {

    const start = startPageId();

    enableAnswer(correctAnswers, () => {
        const nextPageId = resolveNextPage(pageId);
        const finalPageId = nextPageId === start ? "ending" : nextPageId;
        return pageUrl(finalPageId) + window.location.search;
    });
}

function setupLandingPage() {

    const input = document.getElementById("country");
    const button = document.getElementById("continueButton");

    let destination = null;

    input.addEventListener("input", () => {

        const value = normalise(input.value);

        if (START_ROUTES[value]) {

            destination = START_ROUTES[value];
            button.disabled = false;

        } else {

            destination = null;
            button.disabled = true;

        }

    });

    button.addEventListener("click", () => {

        window.location.href =
            pageUrl(destination) + "?start=" + destination;

    });

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

        window.location.href =
            typeof nextPage === "function"
                ? nextPage()
                : nextPage + window.location.search;

    }, { once: true });

}

function enableContinue(nextPage) {

    document
        .getElementById("continueButton")
        .addEventListener("click", () => {

            window.location.href = nextPage + window.location.search;

        });

}

if (document.getElementById("country")) {
    setupLandingPage();
}