import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const myForm = document.querySelector('.form');
const inputDelay = document.querySelector('input[name="delay"]');
const createBtn = document.querySelector('button');
inputDelay.classList.add('input-delay');
createBtn.classList.add('create-button');

console.log(createBtn);
myForm.addEventListener('submit', createPromises);

function createPromises(event) {
  event.preventDefault();

  const selectState = document.querySelector('input[name="state"]:checked');

  const delay = +inputDelay.value;
  const select = selectState.value;

  if (delay <= 0) {
    return;
  }
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (select === 'fulfilled') {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay);
  });

  promise
    .then(delay => {
      iziToast.show({
        message: `Fulfilled promise in ${delay}ms`,
        iconUrl: '/img/circle.svg',
        backgroundColor: '#59A10D',
        messageSize: '16',
        position: 'topRight',
        theme: 'dark',
      });
    })
    .catch(delay => {
      iziToast.show({
        message: ` Rejected promise in ${delay}ms`,
        backgroundColor: '#EF4040',
        messageSize: '16',
        position: 'topRight',
        theme: 'dark',
        iconUrl: 'img/octagon.svg',
      });
    });
  myForm.reset();
}
