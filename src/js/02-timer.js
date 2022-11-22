import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const refs = {
  pickerEl: document.querySelector('#datetime-picker'),
  buttonEl: document.querySelector('[data-start]'),
  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  minutes: document.querySelector('[data-minutes]'),
  seconds: document.querySelector('[data-seconds]'),
};

document.getElementById('startBtn').disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] < options.defaultDate) {
       Notiflix.Notify.failure('Please choose a date in the future');
    } else {
      document.getElementById('startBtn').disabled = false;
    }
  },
};

flatpickr(refs.pickerEl, options);

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

refs.buttonEl.addEventListener('click', () => {
  let timer = setInterval(() => {
    let dateTimer = new Date(refs.pickerEl.value) - new Date();
    if (dateTimer > 0) {
      let timeObg = convertMs(dateTimer);
      refs.days.textContent = addLeadingZero(timeObg.days);
      refs.hours.textContent = addLeadingZero(timeObg.hours);
      refs.minutes.textContent = addLeadingZero(timeObg.minutes);
      refs.seconds.textContent = addLeadingZero(timeObg.seconds);
    } else {
      clearInterval(timer)
      Notiflix.Notify.success('Countdown finished');
    }
  }, 1000);
});


