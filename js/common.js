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
    const visitKey = "visited:" + pageId;

    if (start === pageId && sessionStorage.getItem(visitKey)) {
        window.location.replace(pageUrl("ending") + window.location.search);
        return;
    }

    enableAnswer(correctAnswers, () => {
        if (start === pageId) {
            sessionStorage.setItem(visitKey, "1");
        }
        return pageUrl(resolveNextPage(pageId)) + window.location.search;
    });

}

function setupLandingPage() {

    const input = document.getElementById("country");
    const button = document.getElementById("continueButton");
    const message = document.getElementById("message");

    let destination = null;

    input.addEventListener("input", () => {

        const value = normalise(input.value);

        if (START_ROUTES[value]) {

            destination = START_ROUTES[value];
            button.disabled = false;
            message.textContent = "";

        } else {

            destination = null;
            button.disabled = true;
            message.textContent = value.length > 0 ? "Unknown country." : "";

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