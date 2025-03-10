// const buttons = document.querySelectorAll('.button' )
// const body = documet.querySelector( "body" )
// buttons.forEach( function ( button ){ 
//     console.log( button );
//     button.addEventListener( 'click', function (e)
//     {
//         console.log( e );
//         console.log( e.target );
//        if ( e.target.id === 'grey' )
//         { 
//             body.style.backgroundColor = e.target.id
//         }
//        if ( e.target.id === 'yellow' )
//         { 
//             body.style.backgroundColor = e.target.id
//         }
//         if ( e.target.id === 'white' )
//         { 
//             body.style.backgroundColor = e.target.id
//         }
//         if ( e.target.id === 'blue' )
//         { 
//             body.style.backgroundColor = e.target.id
//         }
       
        
        
//      } )
    
    
// });


// Select all buttons and the body element
const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");

// Add click event listeners to each button
buttons.forEach(function (button) {
  button.addEventListener("click", function (e) {
    // Change the background color of the body to the button's ID
    body.style.backgroundColor = e.target.id;
  });
});
