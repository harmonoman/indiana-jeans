// Set up the transient state data structure and provide initial values
const transientState = {
    "ownsBlueJeans": false,
    "socioLocationId": 0
}


// Functions to modify each property of transient state
export const setOwnsBlueJeans = (chosenOwnership) => {
    transientState.ownsBlueJeans = chosenOwnership;
    console.log(transientState);
}


// Function to convert transient state to permanent state
export const setSocioLocationId = (chosenLocation) => {
    transientState.socioLocationId = chosenLocation;
    console.log(transientState);

}