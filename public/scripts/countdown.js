// Set the date counting down to
var countDownDate = new Date("April 8, 2021 15:37:25").getTime();

// Updating the countdown every 1 second
var x = setInterval(function () {

   //today's date and time
   var now = new Date().getTime();

   // distance between now and the count]down date
   var distance = countDownDate - now;

   // Time calculations for days, hours, minutes and seconds
   var days = Math.floor(distance / (1000 * 60 * 60 * 24));
   var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
   var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
   var seconds = Math.floor((distance % (1000 * 60)) / 1000);

   // Output
   document.getElementById("event").innerHTML = days + "d " + hours + "h "
      + minutes + "m " + seconds + "s ";

   // If the count down is over, write some text
   if (distance < 0) {
      clearInterval(x);
      document.getElementById("event").innerHTML = "EXPIRED";
   }
}, 1000);