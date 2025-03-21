/*
==================================================
Promises in JavaScript
==================================================
*/

// A Promise is an object representing the eventual completion (or failure) of an asynchronous operation.
// It has three states:
// 1. Pending: Initial state, neither fulfilled nor rejected.
// 2. Fulfilled: The operation completed successfully.
// 3. Rejected: The operation failed.

/*
==================================================
Creating a Promise
==================================================
*/

// Example 1: Basic Promise
const promiseOne = new Promise( function ( resolve, reject )
{
    // Simulate an async task (e.g., DB call, network request)
    setTimeout( function ()
    {
        console.log( "Async task is complete" );
        resolve(); // Resolve the promise
    }, 1000 );
} );

// Consuming the Promise
promiseOne.then( function ()
{
    console.log( "Promise consumed" );
} );

/*
==================================================
Chaining Promises
==================================================
*/

// Example 2: Chaining `.then()` and `.catch()`
const promiseFour = new Promise( function ( resolve, reject )
{
    setTimeout( function ()
    {
        let error = true; // Simulate an error
        if ( !error )
        {
            resolve( { username: "hitesh", password: "123" } );
        } else
        {
            reject( "ERROR: Something went wrong" );
        }
    }, 1000 );
} );

promiseFour
    .then( ( user ) =>
    {
        console.log( user );
        return user.username; // Pass data to the next `.then()`
    } )
    .then( ( username ) =>
    {
        console.log( username );
    } )
    .catch( function ( error )
    {
        console.log( error ); // Handle errors
    } )
    .finally( () => console.log( "The promise is either resolved or rejected" ) ); // Always executed

/*
==================================================
Async/Await
==================================================
*/

// Example 3: Using `async/await` to consume a Promise
const promiseFive = new Promise( function ( resolve, reject )
{
    setTimeout( function ()
    {
        let error = true; // Simulate an error
        if ( !error )
        {
            resolve( { username: "javascript", password: "123" } );
        } else
        {
            reject( "ERROR: JS went wrong" );
        }
    }, 1000 );
} );

async function consumePromiseFive()
{
    try
    {
        const response = await promiseFive; // Wait for the promise to resolve
        console.log( response );
    } catch ( error )
    {
        console.log( error ); // Handle errors
    }
}

consumePromiseFive();

/*
==================================================
Fetch API
==================================================
*/

// Example 4: Using Fetch API to make a network request
fetch( "https://api.github.com/users/hiteshchoudhary" )
    .then( ( response ) =>
    {
        return response.json(); // Parse the response as JSON
    } )
    .then( ( data ) =>
    {
        console.log( data ); // Log the parsed data
    } )
    .catch( ( error ) => console.log( error ) ); // Handle errors

/*
==================================================
Interview Questions
==================================================
*/

// 1. What is a Promise in JavaScript?
//    - A Promise is an object representing the eventual completion (or failure) of an asynchronous operation.
//    - It has three states: Pending, Fulfilled, and Rejected.

// 2. What are the states of a Promise?
//    - Pending: Initial state, neither fulfilled nor rejected.
//    - Fulfilled: The operation completed successfully.
//    - Rejected: The operation failed.

// 3. How do you create a Promise?
//    - Use the `Promise` constructor and pass a function with `resolve` and `reject` parameters.

// 4. What is the purpose of `.then()` and `.catch()`?
//    - `.then()` is used to handle the resolved value of a Promise.
//    - `.catch()` is used to handle errors or rejected Promises.

// 5. What is `.finally()` in Promises?
//    - `.finally()` is executed regardless of whether the Promise is resolved or rejected.
//    - It is useful for cleanup operations.

// 6. What is `async/await`?
//    - `async/await` is syntactic sugar for working with Promises.
//    - `async` functions return a Promise, and `await` pauses execution until the Promise is resolved.

// 7. How do you handle errors in `async/await`?
//    - Use a `try/catch` block to handle errors in `async/await`.

// 8. What is the Fetch API?
//    - The Fetch API is a modern way to make network requests in JavaScript.
//    - It returns a Promise that resolves to the response of the request.

// 9. How do you parse a JSON response in Fetch?
//    - Use the `.json()` method on the response object (e.g., `response.json()`).

// 10. What is the difference between Promises and Callbacks?
//     - Promises provide a cleaner and more readable way to handle asynchronous operations compared to callbacks.
//     - Promises avoid "callback hell" and support chaining with `.then()`.

// 11. What is Promise chaining?
//     - Promise chaining allows you to chain multiple `.then()` calls to handle sequential asynchronous operations.

// 12. What is the difference between `Promise.all()` and `Promise.race()`?
//     - `Promise.all()` waits for all Promises to resolve or any to reject.
//     - `Promise.race()` resolves or rejects as soon as one of the Promises resolves or rejects.

// 13. How do you cancel a Promise?
//     - Promises cannot be canceled directly. Use libraries like `AbortController` with Fetch API for cancellation.

// 14. What is the purpose of `resolve()` and `reject()` in a Promise?
//     - `resolve()` is called when the operation is successful.
//     - `reject()` is called when the operation fails.

// 15. What is the difference between `async/await` and `.then()`?
//     - `async/await` provides a synchronous-like syntax for asynchronous code.
//     - `.then()` uses chaining and can be harder to read for complex workflows.

/*
==================================================
Best Practices
==================================================
*/

// 1. Use `async/await` for cleaner and more readable code.
// 2. Always handle errors using `.catch()` or `try/catch`.
// 3. Use `.finally()` for cleanup operations.
// 4. Prefer Fetch API over XHR for modern network requests.
// 5. Use `Promise.all()` for parallel asynchronous operations.

/*
==================================================
Example: Fetch API with Error Handling
==================================================
*/

fetch( "https://api.github.com/users/hiteshchoudhary" )
    .then( ( response ) =>
    {
        if ( !response.ok )
        {
            throw new Error( "Network response was not ok" );
        }
        return response.json();
    } )
    .then( ( data ) =>
    {
        console.log( data );
    } )
    .catch( ( error ) =>
    {
        console.log( "Error:", error );
    } );

/*
==================================================
End of Notes
==================================================
*/
