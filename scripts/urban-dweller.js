export const LocationTypeChoices = async () => {
    const response = await fetch("http://localHost:8088/socioLocations");
    const locations = await response.json();

    let choicesHTML = "<h2>Which type of area do you live in?</h2>";
    for (const location of locations) {
        choicesHTML += `<input type='radio' name='location' value='${location.id}'/> ${location.label}`;
    }
    
    return choicesHTML;
}