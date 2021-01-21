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
        BEARER_TOKEN: 'YOUR_BEARER_TOKEN',
        url: 'https://api.twitter.com/2/users/b?usernames=nasa'
    },
    method: 'POST',
}).done((resp) => {
    console.log(resp);
});
```
