export const SubmissionList = async () => {
    // Get the submissions from your API
    const response = await fetch("http://localhost:8088/submissions")
    const submissions = await response.json();

    // Iterate the submissions and create some <section> representations
    const arrayOfSubmissions = submissions.map((submission) => {
        return `
            <section class="submission">
                <div>Owns Jeans? ${submission.ownsBlueJeans}</div>
                <div>Area type foreign key? ${submission.socioLocationId}</div>
            </section>`;
    }).join("");

    // Return the HTML string
    return arrayOfSubmissions;
}