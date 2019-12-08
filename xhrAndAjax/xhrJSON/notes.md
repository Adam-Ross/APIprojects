Now, let's talk about the xhr object when it comes to getting JSON data.

The main thing that seperates getting json data from getting just static text is the JSON.parse() method. So, let's walk through it.

Create event listener for button
const button = document.querySelector('#button')

button.addEventListener('click', getCustomer)

function getCustomer() {
// create xhr object
const xhr = new HMLHttpRequerst()

// run open command xhr.open(kind of request, where from, async?)
xhr.open('GET', 'customer.json', true);

// run onload command
xhr.onload = function() {

    // remember the response that you get back will be JSON, so you cannot simply log it or paint it to the screen in it's currunt form. You have to run JSON.parse(this.responseText) --> Then, you can work with the array like structure parsed from the JSON response.

    const res = JSON.parse(this.responseText)

    // You can either log it, paint to the screen, whatever.

    console.log(res)

}
}

function getCustomer() {
// create xhr object
const xhr = new HMLHttpRequerst()

// run open command xhr.open(kind of request, where from, async?)
xhr.open('GET', 'customers.json', true);

// run onload command
xhr.onload = function() {

    // remember the response that you get back will be JSON, so you cannot simply log it or paint it to the screen in it's currunt form. You have to run JSON.parse(this.responseText) --> Then, you can work with the array like structure parsed from the JSON response.

    const res = JSON.parse(this.responseText)

    // You can either log it, paint to the screen, whatever. Since it's multiple customers, we need to loop through them, then log them.

    res.forEach((customer) => {
      console.log(customer)
    })

}
}

Not bad... Useful notes:
