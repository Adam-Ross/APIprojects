So, what we gonna do right here is build a custom http library, that works simularly to axios or something like that. We'll build it, at first with xmlHTTPrequest object, then, we'll throw promises in to handle the asyc code - then we'll use the fetch API w/ promises, and finally we'll write out the fetch api without promises and just use asyn await keywords instead.

Now, let's start.

First, we need to create an easyHTTP.js, that will be our library. THen we need to create a main.js... This will be where our library is utilized. When setting up our script tags in the HTML, make sure that the easyHTTP.js is above the main.js, for we will be utilizing it.

In our easy http, lets make a class for easy http that we can put methods on the prototype.

function easyHTTP() {
this.http = new XmlHttpRequest()
}

Once we have a property called http, which will be a new instance of easyHTTP, we can add the methods.

easyHTTP.prototype.get = function(url, callback) {
/// put logic in here... ///
}

So, this get method that we made on the easyHTTP prototype will be able to be used in our main.js. It takes in a callback, and a url. Within our method we will use the xmlHTttpRequest object (this.http) to use the ajax methods to make api calls.

this.http.open('GET', url, true)

const self = this;
this.http.onload = function() {
const response = JSON.parse(self.http.responseText)
if(self.http.status === 200) {
callback(null, response)
} else {
callback(`There was an error: ${self.http.status}`)
}
}

This will handle our get request within our library... Next, we need to use the library in our main.js

const http = new easyHTTP();

http.get('GetUrlFromApi', function(err, response) {
if(err) {
console.log(err)
} else {
response.forEach((post) => {
make li's and append them for each post...
})
}
})

SO, at this point we have our get method within our easy http library done, and have emplimented it into our main.js - so we know that it works. Once we are finished with that, we can create methods that will delete, get a single post, edit a specific post, and create a new post. Basic create, read, update, delete functionality, on the client side.

http requests:

- get
- post
- put
- delete

So, next, lets work on the post...

There are a few things that are a bit different about sending a post request. First, we have to actually SEND data, so that has to be put in the this.http.send(JSON.stringify(data)) ajax method. Second, we have to use another method called
//
this.http.setRequestHeader('Content-type', 'application/json')
//

This setRequestHeader sets the content-type of the header to application/json, which is what we want.

Also, whenever we are making our initial post method, we have to rmember to add in the data along with the url and the callback.

this.http.open('POST', url, data, true) -- the data passed in here will be sent with our this.http.send(JSON.stringity(data)) method used later in the code.

const self = this
this.http.onload = function() {
const response = JSON.parse(self.http.responseText)

callback(null, response)
}

Then in our main.js

http.post('POST', 'url.com', data, function(err, response) {
if(err) {
console.log(err)
} else {
console.log(response)
}
})

This response object sent back for a post request will consit of the id of the new post that has been created. Since the db only has 100 resources, if our id comes back as 101, it has worked.

---

next, we need to update a post - this is done with the put method in our library.
