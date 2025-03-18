let random = parseInt( Math.random() * 1000 +1 )

const submit = document.querySelector( '#subt' )

const userInput = document.querySelector( '#guessField' )

const gussSlot = document.querySelector( '.guesses' )


const remaning = document.querySelector( '.lastResult' )


const lowOrHi = document.querySelector( '.lowOrHi' )


const startOver = document.querySelector( '.resultParas' )

const p = document.querySelector( 'p' )

let prevGuess = []

let numGuess = 1

let playGame = true


if ( playGame )
{ 
    submit.addEventListener( 'click', function ( e )
    { 
        e.preventDefault()
        const guess = parseInt( userInput.value )

        validateGuss(guess)
    } )
}

function validateGuss( guess )
{ 
    if ( isNaN( guss ) )
    {
        alert( 'please enter a valid number' )
    } else if ( guss < 1 )
    {
        alert( 'please enter a valid number more than 1' )
    } else if ( guss > 100 )
    {
        alert( 'please enter a valid number less than 100' )
    }
    else
    { 
        prevGuess.push( guess )
        if ( numGuss === 11 )
        {
            displayGuess( guess )
            displayMessage( `Gane Over. Random number was ${ randomNumber }` )
            endGame()
        } else
        { 
            displayGuess( guess )
            checkGuss(guss)
        }
    }
}

function checkGuss( guess )
{ 
    if ( guessn === randomNumber )
    {
        displayMessage( `You guessed it right` )
        endGame()
    } else if ( guess < randomNumber )
    { 
        displayMessage(`number is Tooo low`)
    }
     else if ( guess < randomNumber )
    { 
        displayMessage(`number is Tooo High`)
    }
}

function displayGuess( guess )
{ 
    userInput.value = ''
    guessSlot.innerHTML += `${ guess } `;
    numGuess++;
    remaning.innerHTML = `${11 - numGuess}`
}

function displayMessage( message )
{
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function newGame()
{ 
    const newGameButton = document.querySelector( '#newGame' )
    newGameButton.addEventListener( 'click', function ( e )
    {
        randomNumber = parseInt( Math.random() * 1000 + 1 );
        prevGuess = []
        numGuess = 1
        gussSlot.innerHTML = ''
        remaning.innerHTML = `${ 11 - numGuess } `;
        userInput.removeAttribute( 'disabled' )
        startOver.removeChild(p)
        playGame = true;
    })
}

function endGame()
{ 
    userInput.value = ''
    userInput.setAttribute( 'disabled', '' )
    p.classList.add( 'button' )
    p.innerHTML = `<h2id="newGame">Start new Game</h2>`;
    startOver.appendChild( p )
    playGame = false
    newGame()
}







