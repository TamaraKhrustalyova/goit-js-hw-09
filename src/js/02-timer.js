import Notiflix from 'notiflix';
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const refs = {
    input: document.getElementById('datetime-picker'),
    days: document.querySelector('[data-days]'),
    hours: document.querySelector('[data-hours]'),
    minutes: document.querySelector('[data-minutes]'),
    seconds: document.querySelector('[data-seconds]'),
    startBtn: document.querySelector('[data-start]'),
}  

const TIMER_DELAY = 1000;

let selectedDate = 0;
let currentDate = Date.now();


refs.startBtn.disabled = true;

Notiflix.Notify.info('Please pick up any date in the future to start countdown')

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        selectedDate = selectedDates[0].getTime(); 
        setDatesForCountdown(selectedDate);
    },
  };

flatpickr(refs.input, options); 

function setDatesForCountdown(selectedDate){
    if(selectedDate < currentDate){
        Notiflix.Notify.warning('Please choose any valid date in the future');
    
    } else {
        refs.startBtn.disabled = false;
        Notiflix.Notify.info('Countdown is ready to start. Please press start button'); 
    }
}

refs.startBtn.addEventListener('click', startCountdownTimer);

function startCountdownTimer(){
    setInterval(() => {
        setTimer()     
    }, TIMER_DELAY)    
}

function setTimer(){
    if(selectedDate - Date.now() < 0){
        Notiflix.Notify.info('Time expired'); 
        return
    } else {
        let timer = convertMs(selectedDate - Date.now());

            refs.days.textContent = timer.days;
            refs.hours.textContent = timer.hours;
            refs.minutes.textContent = timer.minutes;
            refs.seconds.textContent = timer.seconds;  
    }
}

function convertMs(ms) {

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    const days = addLeadingZero(Math.floor(ms / day));
    const hours = addLeadingZero(Math.floor((ms % day) / hour));
    const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
    const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));
    
    return { days, hours, minutes, seconds };
  }

  function addLeadingZero(value){
    return String(value).padStart(2, '0');
  }