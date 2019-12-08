XHR http requests

What is ajax - Ajax isn't a library or a part of javascript per say - it's a set of web technologies that enable you to send and recieve data asynchnously... Not bad. XML is pretty much obsolete at this point, and instead it is more common to send and recieve JSON data.

DIFFERENCE BETWEEN COMMON REQUESTS AND AJAX HTTP REQUESTS

A common request goes like this

(CLIENT)common request -----> SERVER
(CLIENT)common request <----- SERVER

Just hit's the server and comes back...

(CLIENT) JS CALL -----> AJAX ENGINE ----> xmlHttpRequest ----> server
(CLIENT) HTML response <----- AJAX ENGINE <---- JSON/XML <---- server

The xmlhttprequest object is just another word for the xhr object which is actually part of the browser.

When we send and recieve recieve requests, it can be on something from our local machine, or it can be from or to a third party api, such as google maps, whatever... Now, to use these external api's we will usually need certain permissions to interact with them. COORs enables cross domain communication. This means that we can make requests to these api's even though we are not on the same domain as them.

---- OAUTH can get really messy ----

XHR object is the core technology in AJAX

- It's an api in the form of an object
- It's provided by the browser
- Methods are used to transfer data between client / server
- can be used with other protocols than http
- can work with data other than xml (JSON has pretty much replaced xml, as well as plain text)

Some libraries used to make HTTP requests are:

- Fetch api (part of core JS) - use this cause it's part of Vanilla JS
- Axios (external library)
- Superagent
- jQuery
- nodeHTTP

----------- How to work with the XHR object ---------
XHR - xmlHttpRequest
In our little app we will only be concerned with working with the xhr object. We have a button, and we added a click event to it that will run all function that will 'get the data'

so, in our function, once the button is clicked. The first thing we need to do is create a new xhr object, so we can interact with it's methods.

const xhr = new XMLHttpRequest()

This xhr object, just like any other object, has properties and methods associated with it. One of them is open

xhr.open() - where we specify type of request and url we want to make it to.

xhr.open('GET', 'data.txt', true) --> we add the true because we want this request to be asyncronous

The next method is #onLoad()

This will get the data that we requested and will be set to a function. First thing we want to do is check the status of the data recieved.

xhr.onLoad = function() {
if(this.status === 200) {
console.log(xhr.responseText)
}
}

Now, the onload, we are using the xhr property, responseText, which will return the text. However, in order to make the creation of the xhr object, the open method, and the onload method work, we have to use xhr.send() to send the data out.

----------------- WTF are ready state values ------------------

Not hard, just like what they sound like. During the process of creating the xhr object, sending the request with #open, getting the data with #onload and then sending the data back with #send, our request has went through several ready state values.

These can be accessed for debuggin purposes, or to just let the client know where they are in the process. The ready state values are:

0: request not initialized
1: server connection established
2: request recieved
3: processing request
4: request finished and response is ready

By the time we get to onload, we are already at ready state 4, which is what we want.

Before onload, which is fairly new, was a thing, they'd have to do onReadyStateChange and check to make sure the request was on step 4 before moving on.

You can access the ready state by xhr.readyStat()

Now, the readystate will go from 1 - 4 if you are not using readyStateChange, which you never should have to.

If you're wanting to maybe display a loader while the request is being fetched, you could use a method called #onprogress - this #onprogress will show the ready state while it is between 1 - 4, you can place it before the onload method and have a spinner showing or something. It's optional, thought.
