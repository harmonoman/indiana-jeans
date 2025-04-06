import { setSocioLocationId } from "./transient-state.js";

export const LocationTypeChoices = async () => {
    const response = await fetch("http://localHost:8088/socioLocations");
    const locations = await response.json();

    document.addEventListener("change", handleLocationChange);

    let choicesHTML = "<h2>Which type of area do you live in?</h2>";
    
    const choicesInputArray = locations.map((location) => {
        return `<input type='radio' name='location' value='${location.id}'/> ${location.label}`;
    }).join("");

    return choicesHTML + choicesInputArray;
}

const handleLocationChange = (changeEvent) => {
    if (changeEvent.target.name === "location") {
        const convertedToInt = parseInt(changeEvent.target.value);
        setSocioLocationId(convertedToInt);
    }
}