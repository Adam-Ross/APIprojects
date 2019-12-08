class EasyHTTP {
  async get(url) {
    const res = await fetch(url);
    const data = await res.json();
    return data;
  }

  async post(url, data) {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(data)
    });

    const resData = await res.json();
    return resData;
  }

  async put(url, data) {
    const res = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(data)
    });

    const resData = await res.json();
    return resData;
  }

  async delete(url) {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
      Method: "DELETE"
    });

    const data = await res.json();
    return data;
  }
}
