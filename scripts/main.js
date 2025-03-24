import { OwnJeansChoices } from "./owns-jeans.js"
import { saveSubmission } from "./saveSubmission.js";
import { LocationTypeChoices } from "./urban-dweller.js"

const container = document.querySelector("#container")

const render = async () => {
    const jeanOwnershipHTML = OwnJeansChoices();
    const locationsHTML = await LocationTypeChoices();
    const buttonHTML = saveSubmission();

    container.innerHTML = `   
        ${jeanOwnershipHTML}
        ${locationsHTML}
        ${buttonHTML}
    `
}

render();