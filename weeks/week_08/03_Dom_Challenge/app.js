document.addEventListener("input", function () {
    const map = {
        nameInput: "nameDisplay",
        jobInput: "jobDisplay",
        ageInput: "ageDisplay",
        bioInput: "bioDisplay",
    };

    let keys = [];
    let values = [];

    // Extract keys and values
    for (let key in map) {
        if (map.hasOwnProperty(key)) {
            keys.push(key);
            values.push(map[key]);
        }
    }

    for (let i = 0; i < keys.length; i++) {
        const inputElement = document.getElementById(keys[i]);
        const displayElement = document.getElementById(values[i]);

        if (inputElement && displayElement) {
            displayElement.innerText = inputElement.value || "Not provided";
        }
    }
});
