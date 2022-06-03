const daysElement = document.querySelector('.days');// span element that displays the amount of days

const kennysLastAppearanceOnDynamite = new Date(2021, 11, 17, 11, 00, 00);
countdownSince(kennysLastAppearanceOnDynamite)


function daysSince(date) {
  // One day in milliseconds
  const dayInMs = 1000 * 60 * 60 * 24;
  var now = Date.now(); 
  var diff = now - date.getTime();

  var daysSince = Math.round(diff / dayInMs);
  return daysSince;
}

function countdownSince(date) {
  let days = daysSince(date);
  daysElement.textContent = days; 
  countdown = setInterval(() => {
    let days = daysSince(date);
    daysElement.textContent = days; 
  }, 1000); //every second
}



