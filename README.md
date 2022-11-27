# Twitter API Proxy
This API is used to make requests to the Twitter API

## Production
- https://twitter-api-proxy.itake.cz/

## Development
- Node.js 16.18.0
```bash
git clone https://github.com/nvbach91/twitter-api-proxy.git
cd twitter-api-proxy
npm install
npm start
```
- the local server will be running at http://localhost:3000/

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
