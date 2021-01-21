# Twitter API Proxy
This API is used to make requests to the Twitter API

## Features
- CORS enabled - you can make AJAX calls from browsers to this API
- Supports GET endpoints with BEARER token
- Does not support POST endpoints

## Usage
- Example:
```js
$.ajax({
    url: 'https://twitter-api-proxy.itake.cz/',
    data: {
        // get this token from developer portal
        // https://developer.twitter.com/en/portal/dashboard
        BEARER_TOKEN: 'YOUR_BEARER_TOKEN',
        // for other endpoints see also
        //   https://developer.twitter.com/en/docs/twitter-api/users/lookup/api-reference 
        //   https://developer.twitter.com/en/docs/twitter-api/tweets/lookup/api-reference
        url: 'https://api.twitter.com/2/users/by?usernames=nasa',
    },
    method: 'POST',
}).done((resp) => {
    console.log(resp);
});
```
