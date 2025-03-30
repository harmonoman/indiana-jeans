import { OwnJeansChoices } from "./owns-jeans.js"
import { saveSubmission } from "./saveSubmission.js";
import { SubmissionList } from "./submissions.js";
import { LocationTypeChoices } from "./urban-dweller.js"

const container = document.querySelector("#container")

const render = async () => {
    const jeanOwnershipHTML = OwnJeansChoices();
    const locationsHTML = await LocationTypeChoices();
    const buttonHTML = saveSubmission();
    const submissionListHTML = await SubmissionList();

    container.innerHTML = ` 
        <div class="questions-container">
            ${jeanOwnershipHTML}
            ${locationsHTML}
            ${buttonHTML}
        </div>
        <div class="submissions-container">
            ${submissionListHTML}
        </div>
    `;
}

document.addEventListener("newSubmissionCreated", render);

render();