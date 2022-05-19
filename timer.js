const daysElement = document.querySelector('.days');// span element that displays the amount of days

const kennysLastAppearanceOnDynamite = new Date(2021, 11, 17, 11, 00, 00);
daysSince(kennysLastAppearanceOnDynamite)

function daysSince(date){
  // One day in milliseconds
  const dayInMs = 1000 * 60 * 60 * 24;
  countdown = setInterval(()=>{
		var now = Date.now(); 
    var diff = now - date.getTime();

    var daysSince = Math.round(diff / dayInMs);
    daysElement.textContent = daysSince;
	}, 1000); // every minute
}
