const firstDisplay = document.getElementById("firstInput"); 
const secondDisplay = document.getElementById("secondInput");
const results = document.getElementById("results");



let addition = (event) => {
    let sum = parseFloat(firstDisplay.value) + parseFloat(secondDisplay.value)
    console.log(sum)
    results.innerText = `${sum}`;
}
document.querySelector('.add').addEventListener('click', addition)



const subtraction = (event) => {
    let difference = parseFloat(firstDisplay.value) - parseFloat(secondDisplay.value);
    console.log(difference)
    results.innerText = `${difference}`;
}

document.querySelector(".subtract").addEventListener("click", subtraction);

const multiply = (event) => {
    let product = parseFloat(firstDisplay.value) * parseFloat(secondDisplay.value);
    console.log(product)
    results.innerText = `${product}`;

}
document.querySelector(".multiply").addEventListener("click", multiply);

const divide = (event) => {
    let quotient = parseFloat(firstDisplay.value) / parseFloat(secondDisplay.value)
    console.log(quotient)
   results.innerText = `${quotient}`;
}
document.querySelector(".divide").addEventListener("click", divide);