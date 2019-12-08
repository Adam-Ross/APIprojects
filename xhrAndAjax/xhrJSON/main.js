const customerBtn = document.querySelector("#button1");
const customersBtn = document.querySelector("#button2");
const output = document.querySelector("#output");
customerBtn.addEventListener("click", getCustomer);
customersBtn.addEventListener("click", getCustomers);

function getCustomer() {
  const xhr = new XMLHttpRequest();

  xhr.open("GET", "customer.json", true);

  xhr.onload = function() {
    const response = JSON.parse(this.responseText);
    output.innerHTML = `
      <li>${response.name}</li>
      <li>${response.id}</li>
      <li>${response.company}</li>
      <li>${response.hobbies}</li>
    `;
  };

  xhr.send();
}

function getCustomers() {
  const xhr = new XMLHttpRequest();

  xhr.open("GET", "customers.json", true);

  xhr.onload = function() {
    const response = JSON.parse(this.responseText);
    let outputter = "";

    response.forEach(response => {
      outputter += `
        <li>${response.name}</li>
      `;
    });
    output.innerHTML = outputter;
  };

  xhr.send();
}
