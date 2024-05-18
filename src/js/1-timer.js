import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import octagon from '../img/octagon.svg';

const startBtn = document.querySelector('button[data-start]');
const timerDays = document.querySelector('[data-days]');
const timerHours = document.querySelector('[data-hours]');
const timerMinutes = document.querySelector('[data-minutes]');
const timerSeconds = document.querySelector('[data-seconds]');

startBtn.classList.add('start-btn');

startBtn.addEventListener('click', onTimerStart);

startBtn.disabled = true;
let userSelectedDate = null;
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const currentDate = Date.now();

    if (selectedDates[0] - currentDate > 0) {
      startBtn.disabled = false;
    } else {
      iziToast.show({
        message: 'Please choose a date in the future',
        backgroundColor: '#EF4040',
        messageSize: '16',
        position: 'topRight',
        theme: 'dark',
        iconUrl: octagon,
      });
    }
  },
};

const pickr = flatpickr('#datetime-picker', options);

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

function addBeforeZero(value) {
  return String(value).padStart(2, 0);
}

function onTimerStart() {
  const selectedDate = pickr.selectedDates[0];

  userSelectedDate = setInterval(() => {
    const startTime = Date.now();
    const countDown = selectedDate - startTime;
    startBtn.disabled = true;
    if (countDown < 0) {
      clearInterval(userSelectedDate);
      return;
    }
    updateTimer(convertMs(countDown));
  }, 1000);
}

function updateTimer({ days, hours, minutes, seconds }) {
  timerDays.textContent = addBeforeZero(days);
  timerHours.textContent = addBeforeZero(hours);
  timerMinutes.textContent = addBeforeZero(minutes);
  timerSeconds.textContent = addBeforeZero(seconds);
}
