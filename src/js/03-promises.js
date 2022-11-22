const refs = {
  formEl: document.querySelector('form'),
}

refs.formEl.addEventListener('submit', (event) => {
  event.preventDefault();
  const firstDelay = event.target.elements.delay.value;
  const delayStep = event.target.elements.step.value;
  const countElement = event.target.elements.amount.value;
  foo(firstDelay, delayStep, countElement, myCallback);
  event.target.reset();
})

function myCallback(message) {
  console.log(message);
}

// function foo(delay, delayStep, count, callback) {
//   setTimeout(() => {
//     for (let i = 0; i < count; i++) {
//       setTimeout(() => { callback(i); }, i * delayStep);
      
//     }
//   }, delay);
// }

function foo(delay, step, element, callback) {
  let count = 0;
  let id;
  setTimeout(() => {
    id = setInterval(() => {
      callback(+delay + count++ * +step);
      if (count === +element) { clearInterval(id); }
    },step);
  }, delay);
}





// function createPromise(position, delay) {
//   const shouldResolve = Math.random() > 0.3;
//   if (shouldResolve) {
//     // Fulfill
//   } else {
//     // Reject
//   }
// }

// createPromise(2, 1500)
//   .then(({ position, delay }) => {
//     console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
//   })
//   .catch(({ position, delay }) => {
//     console.log(`❌ Rejected promise ${position} in ${delay}ms`);
//   });