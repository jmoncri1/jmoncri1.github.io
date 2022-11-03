const customers = [ {
    id: 001,
    lastName: "Smith",
    firstName: "Jacob",
    amount: 5,
    spent: 50
},
{
    id: 002,
    lastName: "Johnson",
    firstName: "Iris",
    amount: 10,
    spent: 100
},
{
    id: 003,
    lastName: "Perez",
    firstName: "Javier",
    amount: 5,
    spent: 50
},
{
    id: 004,
    lastName: "Thomas",
    firstName: "Henry",
    amount: 20,
    spent: 200
},
{
    id: 005,
    lastName: "Smith",
    firstName: "Janice",
    amount: 10,
    spent: 100
}
];

function onButtonClick() {
   const idInput = document.querySelector("#idInput").value;
   const displayCustomer = getCustomerInformation(idInput);
   document.querySelector("#display").innerText = displayCustomer;
}
function getCustomerInformation(id) {
    for(let i = 0; i < customers.length; i ++) {
       if (customers[i].id == id) {
        const customer = customers[i];
        return `Your customer's name is:${customer.firstName} ${customer.lastName}. Your customer's amount purchased is: ${customer.amount}. Your customer's amount spent is:$${customer.spent}`;
       }
    }
}