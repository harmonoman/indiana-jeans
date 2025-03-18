/*
    Responsibility:
        Provide UI controls for survey taker to choose 
        "yes" or "no" for ownership of blue jeans

    Strategy:
        1. A compnent function that produces HTML for two 
           radio buttons for "yes and "no"
*/

import { setOwnsBlueJeans } from "./transient-state.js";

export const OwnJeansChoices = () => {

    document.addEventListener("change", handleOwnershipChange);

    let html = "<h2>Do you own a pair of blue jeans?</h2>"
    html += "<input type='radio' name='ownsJeans' value='true' /> Yes";
    html += "<input type='radio' name='ownsJeans' value='false' /> No";
    return html;
}

/*
    Since the value of the radio buttons is the string of 'true' and 
    the string of 'false', you must convert the string to an actual
    boolean with JSON.parse() as seen below
*/
const handleOwnershipChange = (changeEvent) => {
    if (changeEvent.target.name === "ownsJeans") {
        const convertedToBoolean = JSON.parse(changeEvent.target.value);
        setOwnsBlueJeans(convertedToBoolean);
    }
}