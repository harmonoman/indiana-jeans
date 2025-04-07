// Set up the transient state data structure and provide initial values
const transientState = new Map([
    ["ownsBlueJeans", false],
    ["socioLocationId", 0]
]);

// Functions to modify each property of transient state
export const setOwnsBlueJeans = (chosenOwnership) => {
    transientState.set("ownsBlueJeans", chosenOwnership);
}

// Function to convert transient state to permanent state
export const setSocioLocationId = (chosenLocation) => {
    transientState.set("socioLocationId", chosenLocation);
}

// const resetTransientState = () => {
const resetTransientState = () => {
    transientState.set("ownsBlueJeans", false)
    transientState.set("socioLocationId", 0)
}

export const saveSurveySubmission = async () => {
    const postOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(transientState))
    }

    const response = await fetch("http://localhost:8088/submissions", postOptions);

    resetTransientState();

    document.dispatchEvent(new CustomEvent("newSubmissionCreated"));
}