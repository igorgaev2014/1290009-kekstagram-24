const ALERT_SHOW_TIME = 5000;


function getRandomInteger(min, max) {
  if (min < 0 || max < 0) {
    return ('Ошибка, входное значение меньше 0');
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

getRandomInteger();

function checkStringMaxLength(string, maxLength) {
  return string.length <= maxLength;
}

checkStringMaxLength(1, 2);

const isEscapeKey = (evt) => evt.key === 'Escape';
const isEnterKey = (evt) => evt.key === 'Enter';

const successMessageTemplate = document.querySelector('#success').content.querySelector('.success').cloneNode(true);
const errorMessageTemplate = document.querySelector('#error').content.querySelector('.error').cloneNode(true);

const showSuccessMessage = () => {
  document.body.appendChild(successMessageTemplate);
  const successButton = document.querySelector('.success__button');
  const successMessage = document.querySelector('.success');

  const clearSuccessMessage = () => successMessage.remove();
  successButton.addEventListener('click', clearSuccessMessage);

  document.addEventListener('click', (evt) => {
    if (evt.target.matches('.success')) {
      successButton.removeEventListener('click', clearSuccessMessage);
      successMessage.remove();
    }
  });

  window.addEventListener('keydown', (evt) => {
    if (isEscapeKey) {
      evt.preventDefault();
      successMessage.remove();
    }
  });
};

const showErrorMessage = () => {
  document.body.appendChild(errorMessageTemplate);
  const errorButton = document.querySelector('.error__button');
  const errorMessage = document.querySelector('.error');

  const clearErrorMessage = () => errorMessage.remove();
  errorButton.addEventListener('click', clearErrorMessage);
  document.addEventListener('click', (evt) => {
    if (evt.target.matches('.error')) {
      errorButton.removeEventListener('click', clearErrorMessage);
      errorMessage.remove();
    }
  });

  window.addEventListener('keydown', (evt) => {
    if (isEscapeKey) {
      evt.preventDefault();
      errorButton.removeEventListener('click', clearErrorMessage);
      errorMessage.remove();
    }
  });
};

const showAlert = (errorMessage) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = 100;
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = 0;
  alertContainer.style.top = 0;
  alertContainer.style.right = 0;
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';

  alertContainer.textContent = errorMessage;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};

export {getRandomInteger, checkStringMaxLength, isEscapeKey, isEnterKey, showAlert, showSuccessMessage, showErrorMessage};
