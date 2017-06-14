
var CustomerMainDiv = document.querySelector('.customers');

function buildCustomers(customerData) {
  for (i = 0; i < customerData.length; i ++){
    console.log(customerData[i]);
    var firstName = customerData[i].name.first;
    var lastName = customerData[i].name.last;
    var email = customerData[i].email;
    var address1 = customerData[i].location.street;
    var address2 = customerData[i].location.city + " " + customerData[i].location.state + " " + customerData[i].location.postcode;
    var thumbPic = customerData[i].picture.large;
    var cell = customerData[i].cell;
    var newCustomerDiv = document.createElement('div');
    var newCustomerText = document.createElement('div');
    var newCustomerName = document.createElement('div');
    var newCustomerEmail = document.createElement('div');
    var newCustomerAddress1 = document.createElement('div');
    var newCustomerAddress2 = document.createElement('div');
    var newCustomerCell = document.createElement('div');
    var newCusomerImg = document.createElement('img');

    newCustomerName.textContent = firstName + " " + lastName;
    newCustomerEmail.textContent = email;
    newCustomerAddress1.textContent = address1;
    newCustomerAddress2.textContent = address2;
    newCustomerCell.textContent = cell;



    newCustomerDiv.setAttribute('class', 'single-customer');
    newCustomerText.setAttribute('class', 'text');
    newCustomerName.setAttribute('class', 'name');
    newCustomerEmail.setAttribute('class', 'email');
    newCustomerAddress1.setAttribute('class', 'address-cell');
    newCustomerAddress2.setAttribute('class', 'address-cell');
    newCustomerCell.setAttribute('class', 'address-cell');
    newCusomerImg.setAttribute('class', 'customer-img');
    newCusomerImg.setAttribute('src', thumbPic);

    newCustomerText.appendChild(newCustomerName);
    newCustomerText.appendChild(newCustomerEmail);
    newCustomerText.appendChild(newCustomerAddress1);
    newCustomerText.appendChild(newCustomerAddress2);
    newCustomerText.appendChild(newCustomerCell);

    newCustomerDiv.appendChild(newCusomerImg);
    newCustomerDiv.appendChild(newCustomerText);
    CustomerMainDiv.appendChild(newCustomerDiv);
  }
}


// 1. Fetch your users data
// 2. Loop over the data
// 3. Display it in the `.customers` element
(function () {
  'use strict';


  $.ajax({
    url: 'https://randomuser.me/api/?results=12',
    dataType: 'json',
    success: function(data) {
      buildCustomers(data.results);
    }
  });




  // Your Code Goes Here

})();
