function setupLandingPage(routes) {

    const input = document.getElementById("country");
    const button = document.getElementById("continueButton");
    const message = document.getElementById("message");

    let destination = null;

    input.addEventListener("input", () => {

        const value = normalise(input.value);

        if (routes[value]) {

            destination = routes[value];

            button.disabled = false;
            message.textContent = "";

        } else {

            destination = null;
            button.disabled = true;

            if (value.length > 0) {
                message.textContent = "Unknown country.";
            } else {
                message.textContent = "";
            }
        }

    });

    button.addEventListener("click", () => {

        window.location.href =
            `${destination}/index.html?start=${destination}`;

    });

}