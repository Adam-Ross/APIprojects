function easyHTTP() {
  this.http = new XMLHttpRequest();
}

easyHTTP.prototype.get = function(url, callback) {
  this.http.open("GET", url, true);

  const self = this;
  this.http.onload = function() {
    const response = JSON.parse(self.http.responseText);
    if (self.http.status === 200) {
      callback(null, response);
    } else {
      callback(`There was an error: ${self.http.status}`);
    }
  };

  this.http.send();
};

easyHTTP.prototype.post = function(url, data, callback) {
  this.http.open("POST", url, data, true);
  this.http.setRequestHeader("Content-type", "application/json");

  const self = this;
  this.http.onload = function() {
    callback(null, self.http.responseText);
  };

  this.http.send(JSON.stringify(data));
};

easyHTTP.prototype.put = function(url, data, callback) {
  this.http.open("PUT", url, data, true);
  this.http.setRequestHeader("Content-type", "application/json");

  const self = this;
  this.http.onload = function() {
    if (self.http.status === 200) {
      callback(null, self.http.responseText);
    } else {
      callback("Error, shit didnt work...");
    }
  };

  this.http.send(JSON.stringify(data));
};

easyHTTP.prototype.delete = function(url, callback) {
  this.http.open("DELETE", url, true);

  const self = this;
  this.http.onload = function() {
    if (self.http.status === 200) {
      callback(null, self.http.response);
    } else {
      callback("Shit broke...");
    }
  };

  this.http.send();
};

// function easyHTTP() {
//   this.http = new XMLHttpRequest();
// }

// easyHTTP.prototype.get = function(url, callback) {
//   this.http.open("GET", url, true);

//   const self = this;
//   this.http.onload = function() {
//     const response = JSON.parse(self.http.responseText);
//     if (self.http.status === 200) {
//       callback(null, response);
//     } else {
//       callback(`Something went wrong. Error status: ${self.http.status}`);
//     }
//   };

//   this.http.send();
// };

// easyHTTP.prototype.post = function(url, data, callback) {
//   this.http.open("POST", url, data, true);
//   this.http.setRequestHeader("Content-type", "application/json");

//   const self = this;
//   this.http.onload = function() {
//     callback(null, self.http.responseText);
//   };

//   this.http.send(JSON.stringify(data));
// };

// easyHTTP.prototype.put = function(url, data, callback) {
//   this.http.open("PUT", url, data, true);
//   this.http.setRequestHeader("Content-type", "application/json");

//   const self = this;
//   this.http.onload = function() {
//     callback(null, self.http.responseText);
//   };

//   this.http.send(JSON.stringify(data));
// };

// easyHTTP.prototype.delete = function(url, callback) {
//   this.http.open("DELETE", url, true);
//   this.http.setRequestHeader("Content-type", "application/json");

//   const self = this;
//   this.http.onload = function() {
//     if (self.http.status === 200) {
//       callback(null, "Post Deleted.");
//     }
//   };

//   this.http.send();
// };
