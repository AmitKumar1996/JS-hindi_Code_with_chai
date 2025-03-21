const user = {
    username: "Amit",
    loginCount: 8,
    singnedIn: true,

    getUserDetails: function ()
    {
        console.log( "Got user details from database" );

    }
}
console.log( user.username );
console.log( user.getUserDetails() );

