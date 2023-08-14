// // Set the date we're counting down to
// var countDownDate = new Date('Jan 5, 2024 15:37:25').getTime();

// // Update the count down every 1 second
// var x = setInterval(function () {
//   // Get today's date and time
//   var now = new Date().getTime();

//   // Find the distance between now and the count down date
//   var distance = countDownDate - now;

//   // Time calculations for days, hours, minutes and seconds
//   var days = Math.floor(distance / (1000 * 60 * 60 * 24));
//   var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//   var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//   var seconds = Math.floor((distance % (1000 * 60)) / 1000);

//   // Display the result in the element with id="demo"
//   document.getElementById('timer').innerHTML =
//     days + 'd ' + hours + 'h ' + minutes + 'm ' + seconds + 's ';

//   document.getElementById('days').innerHTML = days;
//   document.getElementById('hours').innerHTML = hours;
//   document.getElementById('minutes').innerHTML = minutes;
//   document.getElementById('seconds').innerHTML = seconds;

//   // If the count down is finished, write some text
//   if (distance < 0) {
//     clearInterval(x);
//     document.getElementById('timer').innerHTML = 'EXPIRED';
//   }
// }, 1000);


// function handleTickInit(tick) {

//   // get timer offset (if not found, set to today)
//   var offset = new Date( localStorage.getItem('countdown-offset') || new Date() );

//   // store the offset (not really necessary but saves some if statements)
//   localStorage.setItem('countdown-offset', offset);

//   // time in hours the timer will run down
//   var timeDuration = Tick.helper.duration(24, 'hours');

//   // add 24 hours to get final deadline
//   var deadline = new Date( offset.setMilliseconds( offset.getMilliseconds() + timeDuration ) );

//   // create counter
//   var counter = Tick.count.down(deadline, { format: ['h' ,'m', 's'] } );

//   // update tick with the counter value
//   counter.onupdate = function(value) {
//       tick.value = value;
//   };

//   counter.onended = function() {
//       // redirect, uncomment the next line
//       // window.location = 'my-location.html'

//       // hide counter, uncomment the next line
//       // tick.root.style.display = 'none';

//       // show message, uncomment the next line
//       // document.querySelector('.tick-onended-message').style.display = '';
//   };
// }

const countToDate = new Date().setHours(new Date().getHours() +14)
let previousTimeBetweenDates
setInterval(() => {
  const currentDate = new Date()
  const timeBetweenDates = Math.ceil((countToDate - currentDate) / 1000)
  flipAllCards(timeBetweenDates)

  previousTimeBetweenDates = timeBetweenDates
}, 250)

function flipAllCards(time) {
  const seconds = time % 60
  const minutes = Math.floor(time / 60) % 60
  const hours = Math.floor(time / 3600)
  const days = Math.floor(time / 3600 / 24)


  flip(document.querySelector("[data-days-tens]"), Math.floor(days / 10))
  flip(document.querySelector("[data-days-ones]"), days % 10)
  flip(document.querySelector("[data-hours-tens]"), Math.floor(hours / 10))
  flip(document.querySelector("[data-hours-ones]"), hours % 10)
  flip(document.querySelector("[data-minutes-tens]"), Math.floor(minutes / 10))
  flip(document.querySelector("[data-minutes-ones]"), minutes % 10)
  flip(document.querySelector("[data-seconds-tens]"), Math.floor(seconds / 10))
  flip(document.querySelector("[data-seconds-ones]"), seconds % 10)
}

function flip(flipCard, newNumber) {
  const topHalf = flipCard.querySelector(".top")
  const startNumber = parseInt(topHalf.textContent)
  if (newNumber === startNumber) return

  const bottomHalf = flipCard.querySelector(".bottom")
  const topFlip = document.createElement("div")
  topFlip.classList.add("top-flip")
  const bottomFlip = document.createElement("div")
  bottomFlip.classList.add("bottom-flip")

  top.textContent = startNumber
  bottomHalf.textContent = startNumber
  topFlip.textContent = startNumber
  bottomFlip.textContent = newNumber

  topFlip.addEventListener("animationstart", e => {
    topHalf.textContent = newNumber
  })
  topFlip.addEventListener("animationend", e => {
    topFlip.remove()
  })
  bottomFlip.addEventListener("animationend", e => {
    bottomHalf.textContent = newNumber
    bottomFlip.remove()
  })
  flipCard.append(topFlip, bottomFlip)
}
