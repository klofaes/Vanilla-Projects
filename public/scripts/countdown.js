let eventDate = new Date("December 22, 2020 20:55:20").getTime();


// Updating the countdown every 1 second
let endMsg = setInterval(function () {

   let displayMsg = "";

   let currentTime = new Date().getTime();
   let remainingTime = eventDate - currentTime;

   // ms is milliseconds
   let msInYear = 1000 * 60 * 60 * 24 * 30 * 12;
   let msInMonth = msInYear / 12;
   let msInDay = msInMonth / 30;
   let msInHour = msInDay / 24;
   let msInMinute = msInHour / 60;

   let yearsRemaining = Math.floor(remainingTime / msInYear);
   let monthsRemaining = Math.floor((remainingTime % msInYear) / msInMonth);
   let daysRemaining = Math.floor((remainingTime % msInMonth) / msInDay);
   let hoursRemaining = Math.floor((remainingTime % msInDay) / msInHour);
   let minutesRemaining = Math.floor((remainingTime % msInHour) / msInMinute);
   let secondsRemaining = Math.floor((remainingTime % msInMinute) / 1000);


   displayMsg = `${yearsRemaining}y ${monthsRemaining}m ${daysRemaining}d ${hoursRemaining}h
                     ${minutesRemaining}m ${secondsRemaining}s`;

   document.getElementById("event").innerHTML = displayMsg;

   // Endloop when timer goes below 0
   if (remainingTime < 0) {
      clearInterval(endMsg);
      document.getElementById("event").innerHTML = "EXPIRED";
   }

}, 1000);