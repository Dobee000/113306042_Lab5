const mathInput = document.getElementById('math');
const englishInput = document.getElementById('english');
const submitButton = document.getElementById('submit');
const gradesBody = document.getElementById('grades-body');
const mathAverageCell = document.getElementById('math-average');
const englishAverageCell = document.getElementById('english-average');
const overallAverageCell = document.getElementById('overall-average');

let rowCount = 0;
let mathTotal = 0;
let englishTotal = 0;

submitButton.addEventListener('click', () => {
    const mathGrade = parseFloat(mathInput.value);
    const englishGrade = parseFloat(englishInput.value);

    if (isNaN(mathGrade) || isNaN(englishGrade)) {
        alert('Please enter valid numbers for both grades.');
        return;
    }

    rowCount++;
    const average = ((mathGrade + englishGrade) / 2).toFixed(2);

    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${rowCount}</td>
        <td>${mathGrade}</td>
        <td>${englishGrade}</td>
        <td>${average}</td>
    `;
    gradesBody.appendChild(row);

    mathTotal += mathGrade;
    englishTotal += englishGrade;

    const mathAverage = (mathTotal / rowCount).toFixed(2);
    const englishAverage = (englishTotal / rowCount).toFixed(2);
    const overallAverage = (((mathTotal + englishTotal) / (2 * rowCount))).toFixed(2);

    mathAverageCell.textContent = mathAverage;
    englishAverageCell.textContent = englishAverage;
    overallAverageCell.textContent = overallAverage;

    mathInput.value = '';
    englishInput.value = '';
});
