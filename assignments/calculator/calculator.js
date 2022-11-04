const secondDisplay = document.getElementById("secondInput")
const firstDisplay = document.getElementById("firstInput")
const addition = (event) => {
    firstDisplay.innerHTML += `${"firstDisplay"}`
    const first = event.target.parentNode.querySelector("firstInput").value;
    secondDisplay.innerHTML += `${"secondDisplay"}`
    const second = event.target.parentNode.querySelector("secondInput").value;
    let sum = (first + second)
    firstDisplay.innerHTML += `${sum}`
}