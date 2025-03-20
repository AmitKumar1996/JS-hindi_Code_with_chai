const promiseOne = new Promise( function ( resolve, reject )
{
    // Do an async task
    // DB calls, cryptography, network
    setTimeout( function ()
    {
        console.log( 'Async task is complete' );
        resolve()
    }, 100 )
} )

promiseOne.then( function ()
{
    console.log( "Promise consumed" );

} )


new Promise( function ( resolve, reject )
{
    setTimeout( function ()
    {
        console.log( "Async task 2" );
        resolve();

    }, 1000 )
} ).then( function ()
{
    console.log( "Async 2 resolve" );

} )

const PromiseThree = new Promise( function ( resolve, reject )
{
    setTimeout( function ()
    {
        resolve( { userNmae: "chai", email: "amit@123.com" } )

    }, 1000 )
} )

PromiseThree.then( function ( userData )
{
    console.log( userData );

} )

const PromiseFour = new Promise( function ( resolve, reject )
{
    setTimeout( function ()
    {
        let error = false
        if ( error )
        {
            resolve( { userNmae: "AmitJi", password: "123" } )
        } else
        {
            reject( 'Some thing want wroing' )
        }
    }, 2000 )

} )

const usernmae = PromiseFour.then( ( user ) =>
{
    console.log( user );
    return user.usernmae

} )
console.log( usernmae );
