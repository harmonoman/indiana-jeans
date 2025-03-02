import { OwnJeansChoices } from "./OwnsJeans.js"

const container = document.querySelector("#container")

const render = () => {
    const jeanOwnershipHTML = OwnJeansChoices()

    container.innerHTML = jeanOwnershipHTML
}

render();