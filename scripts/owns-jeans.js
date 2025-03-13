/*
    Responsibility:
        Provide UI controls for survey taker to choose 
        "yes" or "no" for ownership of blue jeans

    Strategy:
        1. A compnent function that produces HTML for two 
           radio buttons for "yes and "no"
*/

export const OwnJeansChoices = () => {
    let html = "<h2>Do you own a pair of blue jeans?</h2>"
    html += "<input type='radio' name='ownsJeans' value='true' /> Yes";
    html += "<input type='radio' name='ownsJeans' value='false' /> No";
    return html;
}