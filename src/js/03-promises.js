
const refs = {
    form: document.querySelector('form'),
     delay: document.getElementsByName('dalay'),
     step: document.getElementsByName('step'),
     amount: document.getElementsByName('amount'),
}

refs.form.addEventListener ('submit', onFormSubmit);

function onFormSubmit(e){
  e.preventDefault();
  amount = Number(refs.amount.value);
  delay = Number(refs.delay.value);
  step = Number(refs.step.value);

      for(let i=0; i <= amount; i += 1){
        createPromise(i, delay)
        .then(({ position, delay }) => onSuccess)
        .catch(({ position, delay }) => onError)
      }
      delay += step;
} 

function createPromise(position, delay) {

  return new Promise(resolve, reject);
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
        if (shouldResolve) {
          resolve ({position, delay});
        } else {
          reject ({position, delay});
        }
    }, delay)
}

function onSuccess(result){
  console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
}

function onError(error){
  console.log(`❌ Rejected promise ${position} in ${delay}ms`);
}