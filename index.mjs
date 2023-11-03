function findGrade(){
        let percentage = document.getElementById('input_box');
        outputBox = Number(percentage.value);
        console.log(outputBox)
        if (outputBox < 50) {
            percentage.value="Fail";
        } else if (outputBox <= 59) {
            percentage.value="Grade = C"
        } else if (outputBox <= 69) {
            percentage.value="Grade = B"
        }else if (outputBox <= 70) {
            percentage.value="Grade = A";
        }else if (outputBox <= 80 ) {
            percentage.value="Grade = A+";
            
        }
        else if (outputBox <= 100) {
            percentage.value="Grade = A+";
            
        }
        else if (outputBox > 100 ) {
            percentage.value="Wrong Value!!!";
        } else {
            percentage.value="Wrong Value!!!"
    
        }
};
document.getElementById('submit').addEventListener('click',findGrade);




// Buttons JS

const findGradeButton = document.getElementById('findGradeButton');
const findPercentageButton = document.getElementById('findPercentageButton');
const calc_2 = document.getElementsByClassName('calculator-2')[0]; 
const calculator = document.getElementsByClassName('calc_1')[0];

findPercentageButton.addEventListener('click', function() {
    findGradeButton.classList.remove('active');
    findPercentageButton.classList.add('active');

    calc_2.style.display = 'block';
    calculator.style.display = 'none';
    
});

findGradeButton.addEventListener('click', function() {
    findPercentageButton.classList.remove('active');
    findGradeButton.classList.add('active');
    calc_2.style.display = 'none';
    calculator.style.display = 'block';
});



function calculatePercentage() {
    // Get the input values
    let totalMarks = parseFloat(document.getElementById('total_marks').value);
    let obtainedMarks = parseFloat(document.getElementById('Obtain_marks').value);
    let percentageResult = document.getElementById('percentage_result');

    // Check if the input values are valid numbers
    if (!isNaN(totalMarks) && !isNaN(obtainedMarks)) {
        // Calculate the percentage
        let percentage = (obtainedMarks / totalMarks) * 100;

        // Display the percentage result
        percentageResult.value = percentage.toFixed(2) + " %";
    } else {
        // Handle invalid input (e.g., non-numeric values)
        percentageResult.value = "Invalid input";
    }
}

// Adding a click event listener to the "SUBMIT" button
document.getElementById('percent_submit').addEventListener('click', calculatePercentage);
