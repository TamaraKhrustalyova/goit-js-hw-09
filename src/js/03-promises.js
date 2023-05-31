import Notiflix from 'notiflix';

const refs = {
    form: document.querySelector('form'),
}

refs.form.addEventListener ('submit', onFormSubmit);

function onFormSubmit(e){
  e.preventDefault();
  const amount = Number(e.target.elements.amount.value);
  let delay = Number(e.target.elements.delay.value);
  const step = Number(e.target.elements.step.value);

      for(let i = 1; i <= amount; i += 1){
        createPromise(i, delay)
        .then(onSuccess).catch(onError);
        delay += step;
      }     
} 

function createPromise(position, delay) {
  return new Promise((res, rej) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
        if (shouldResolve) {
          res ({ position, delay });
        } else {  
          rej ({ position, delay });
        }
    }, delay)
  })   
}

function onSuccess({ position, delay }){
  Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
}

function onError({ position, delay }){
  Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
}