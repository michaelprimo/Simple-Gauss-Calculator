// The button from index.html call this function for calculate the sum and return of numbers 
function gauss_calculator()
{
    // Get the number in the input(number) from the index.html typed by the user and store it in a variable.
    var number_sum = parseInt(document.getElementById("n_for_formula").value);
    // Get the id from the test to change when the result is ready to print.
    var sum_result_text = document.getElementById("result");
    // Let's use the Summation Formula by Gauss to calculate the sum of the numbers from 1 to the number typed bu the user.
    var sum_result = (number_sum * (number_sum + 1)) / 2;
    // Let's change the text by adding the result,inside in the sum_result variable.
    sum_result_text.innerHTML = "The sum of the numbers from 1 to " + number_sum + " is: " + sum_result;
    // And,as a second way to show a result, create an alert
    alert("The sum of the numbers from 1 to " + number_sum + " is: " + sum_result);
}