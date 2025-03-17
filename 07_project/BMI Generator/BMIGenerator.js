// Select the form element
const form = document.querySelector('form');

// Add a submit event listener to the form
form.addEventListener('submit', function (e) {
  // Prevent the form from submitting and refreshing the page
  e.preventDefault();

  // Get the height value from the input field and convert it to an integer
  const height = parseInt(document.querySelector('#height').value);

  // Get the weight value from the input field and convert it to an integer
  const weight = parseInt(document.querySelector('#weight').value);

  // Select the element where the result will be displayed
  const result = document.querySelector('#results');

  // Validate the height input
  if (height === '' || height < 0 || isNaN(height)) {
    // Display an error message if the height is invalid
    result.innerHTML = `Please give a valid height ${height}`;
  }
  // Validate the weight input
  else if (weight === '' || weight < 0 || isNaN(weight)) {
    // Display an error message if the weight is invalid
    result.innerHTML = `Please give a valid weight ${weight}`;
  }
  // If both inputs are valid, calculate the BMI
  else {
    // Calculate the BMI using the formula: BMI = (weight / (height * height)) * 10000
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);

    // Display the BMI result
    result.innerHTML = `<span>${bmi}</span>`;
  }
});