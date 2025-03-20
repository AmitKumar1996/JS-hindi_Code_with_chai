const clock = document.getElementById( 'clock' );

setInterval( function ()
{
  // Create a new Date object
  let date = new Date();

  // Get the date and time as strings
  const currentDate = date.toLocaleDateString();
  const currentTime = date.toLocaleTimeString();

  // Combine the date and time into a single string
  const dateTimeString = `${ currentDate } ${ currentTime }`;

  // Update the innerHTML of the clock element
  clock.innerHTML = dateTimeString;
}, 1000 );
