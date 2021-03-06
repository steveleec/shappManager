var helpers = {
  requestHelper(url, body, method) {
    var formBody = [];
    for (var property in body) {
      var encodedKey = encodeURIComponent(property);
      var encodedValue = encodeURIComponent(body[property]);
      formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&");
    var params = {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        method
      };
    if (body) params.body = formBody;
    var request = new Request(url, params);
    return request;
  },

  requestHelperVideo(url, body, method) {

    var params = {
        headers: {
          'Accept': 'application/json',
        },
        body,
        method
      };

    var request = new Request(url, params);
    return request;
  }

}

export default helpers;