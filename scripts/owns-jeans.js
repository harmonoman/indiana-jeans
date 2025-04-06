import { setOwnsBlueJeans } from "./transient-state.js";

export const OwnJeansChoices = () => {

    document.addEventListener("change", handleOwnershipChange);

    let html = "<h2>Do you own a pair of blue jeans?</h2>"
    html += "<input type='radio' name='ownsJeans' value='true' /> Yes";
    html += "<input type='radio' name='ownsJeans' value='false' /> No";
    return html;
}

const handleOwnershipChange = (changeEvent) => {
    if (changeEvent.target.name === "ownsJeans") {
        const convertedToBoolean = JSON.parse(changeEvent.target.value);
        setOwnsBlueJeans(convertedToBoolean);
    }
}