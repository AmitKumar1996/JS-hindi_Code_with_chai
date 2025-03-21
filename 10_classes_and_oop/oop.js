const user = {
    username: "Amit",
    loginCount: 8,
    singnedIn: true,

    getUserDetails: function ()
    {
        console.log( "Got user details from database" );
        console.log( `username: ${ this.username }` );
        console.log( this );



    }
}
console.log( user.username );
console.log( user.getUserDetails() );
console.log( this );

// const promiseOne = new Promise()
// const date = new Date()

// constructer
function User( username, loginCount, isLoggedIn )
{
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;
    return this;
}

const userOne = new User( "Amit", 12, true )
const userTwo = new User( "AmitTheCoder", 11, false )
console.log( userOne );
console.log( userTwo );
console.log( userOne.constructor ); // what is this ?


// what is new Key word
// what is constructer function and why this used ?



