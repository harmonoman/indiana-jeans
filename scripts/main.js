import { OwnJeansChoices } from "./owns-jeans.js"
import { LocationTypeChoices } from "./urban-dweller.js"

const container = document.querySelector("#container")

const render = async () => {
    const jeanOwnershipHTML = OwnJeansChoices();
    const locationsHTML = await LocationTypeChoices();

    container.innerHTML = `   
        ${jeanOwnershipHTML}
        ${locationsHTML}
    `
}

render();