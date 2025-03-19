/*
==================================================
XMLHttpRequest (XHR) in JavaScript
==================================================
*/

// XMLHttpRequest (XHR) is an API used to make HTTP requests to servers.
// It is the foundation of AJAX (Asynchronous JavaScript and XML) and allows you to fetch data without refreshing the page.

/*
==================================================
Key Concepts
==================================================
*/

// 1. Ready States:
//    The `readyState` property indicates the state of the request.
//    Possible values:
//    - 0 (UNSENT): The `open()` method has not been called yet.
//    - 1 (OPENED): The `open()` method has been called.
//    - 2 (HEADERS_RECEIVED): The `send()` method has been called, and headers and status are available.
//    - 3 (LOADING): The response is being downloaded, and `responseText` holds partial data.
//    - 4 (DONE): The operation is complete, and the response is fully available.

// 2. Event Handling:
//    The `onreadystatechange` event handler is triggered every time the `readyState` changes.
//    When `readyState === 4`, the request is complete, and the response is available.

// 3. Parsing the Response:
//    The `responseText` property contains the response data as a string.
//    Use `JSON.parse()` to convert the response into a JavaScript object.

// 4. Sending the Request:
//    The `send()` method sends the request to the server.

/*
==================================================
Example Code
==================================================
*/

const requestUrl = "https://api.github.com/users/hiteshchoudhary";
const xhr = new XMLHttpRequest();

xhr.open( "GET", requestUrl );

xhr.onreadystatechange = function ()
{
  console.log( xhr.readyState ); // Log the current ready state

  if ( xhr.readyState === 4 )
  {
    const data = JSON.parse( this.responseText ); // Parse the response as JSON
    console.log( typeof data ); // Log the type of the parsed data
    console.log( data.followers ); // Log the number of followers
  }
};

xhr.send(); // Send the request

/*
==================================================
Output
==================================================
*/

// Console Logs:
// 1 (OPENED)
// 2 (HEADERS_RECEIVED)
// 3 (LOADING)
// 4 (DONE)
// object
// Number of followers (e.g., 10000)

/*
==================================================
Error Handling
==================================================
*/

xhr.onreadystatechange = function ()
{
  if ( xhr.readyState === 4 )
  {
    if ( xhr.status === 200 )
    {
      const data = JSON.parse( this.responseText );
      console.log( data.followers );
    } else
    {
      console.error( "Error:", xhr.status, xhr.statusText );
    }
  }
};

/*
==================================================
Interview Questions
==================================================
*/

// 1. What is XMLHttpRequest (XHR)?
//    - XHR is an API used to make HTTP requests to servers.
//    - It is the foundation of AJAX and allows fetching data without refreshing the page.

// 2. What are the ready states of an XHR request?
//    - 0 (UNSENT): `open()` not called yet.
//    - 1 (OPENED): `open()` called.
//    - 2 (HEADERS_RECEIVED): `send()` called, headers and status available.
//    - 3 (LOADING): Response is being downloaded.
//    - 4 (DONE): Operation is complete.

// 3. How do you handle the response of an XHR request?
//    - Use the `onreadystatechange` event handler to check when `readyState === 4`.
//    - Parse the `responseText` using `JSON.parse()` if the response is in JSON format.

// 4. What is the difference between `responseText` and `responseJSON`?
//    - `responseText` contains the response as a string.
//    - `responseJSON` is not a standard property; you need to parse `responseText` using `JSON.parse()`.

// 5. How do you handle errors in XHR?
//    - Check the `status` property in the `onreadystatechange` handler.
//    - If `status !== 200`, log or handle the error.

// 6. What are the limitations of XHR?
//    - XHR has a complex API compared to modern alternatives like `fetch()`.
//    - It does not support promises natively.
//    - It can be harder to handle cross-origin requests (CORS).

// 7. What is the difference between XHR and Fetch API?
//    - XHR is older and has a more complex API.
//    - Fetch API is modern, supports promises, and has a simpler syntax.

// 8. How do you make a POST request using XHR?
//    - Set the request method to `POST` in `open()`.
//    - Send data using `send()` (e.g., `xhr.send(JSON.stringify({ key: "value" }))`).

// 9. What is CORS, and how does it relate to XHR?
//    - CORS (Cross-Origin Resource Sharing) is a security feature that restricts cross-origin HTTP requests.
//    - XHR requests to a different domain must be allowed by the server using CORS headers.

// 10. How do you cancel an XHR request?
//     - Use the `abort()` method (e.g., `xhr.abort()`).

/*
==================================================
Best Practices
==================================================
*/

// 1. Use Modern Alternatives:
//    - Prefer `fetch()` or libraries like `axios` for modern and cleaner code.

// 2. Handle Errors Gracefully:
//    - Always check the `status` property to handle errors.

// 3. Use CORS:
//    - Ensure the server supports CORS if making requests to a different domain.

// 4. Avoid Blocking the Main Thread:
//    - Use asynchronous requests to avoid blocking the UI.

/*
==================================================
Example: POST Request with XHR
==================================================
*/

const postUrl = "https://example.com/api/data";
const postData = JSON.stringify( { name: "John", age: 30 } );

const xhrPost = new XMLHttpRequest();
xhrPost.open( "POST", postUrl );
xhrPost.setRequestHeader( "Content-Type", "application/json" );

xhrPost.onreadystatechange = function ()
{
  if ( xhrPost.readyState === 4 && xhrPost.status === 200 )
  {
    console.log( "Data sent successfully!" );
  }
};

xhrPost.send( postData );

/*
==================================================
End of Notes
==================================================
*/