import {isEscapeKey, isEnterKey, showSuccessMessage, showErrorMessage}  from './utils.js';
import {onSmallerScaleClick, onBiggerScaleClick} from './scale.js';
import {onCommentInput, onHashtagInput} from './validation.js';
import {sendData} from './api.js';
import {applyEffect} from './slider.js';

const body = document.querySelector('body');
const photoForm = document.querySelector('.img-upload__form');
const smallerScale = document.querySelector('.scale__control--smaller');
const biggerScale = document.querySelector('.scale__control--bigger');
const commentInput = document.querySelector('.text__description');
const hashtagInput = document.querySelector('.text__hashtags');
const uploadFileControl = document.querySelector('#upload-file');
const uploadCancelControl = document.querySelector('.img-upload__cancel');
const uploadOverlay = document.querySelector('.img-upload__overlay');
const scaleControl = photoForm.querySelector('.scale__control--value');
const imagePreview = photoForm.querySelector('.img-upload__preview');

// Закрытие модального окна по 'esc'
const onPopupEscKeydown = (evt) => {
  const input = evt.target.tagName;
  // Предотвращения всплытия при фокусе в форме
  if (input === 'INPUT' || input === 'TEXTAREA') {
    evt.stopPropagation();
  }

  else if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeUserModal();
  }
};

// Ф-я открытия модального окна
function openUserModal () {
  uploadOverlay.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', onPopupEscKeydown);
  // Перенесли обработчики
  smallerScale.addEventListener('click', onSmallerScaleClick);
  biggerScale.addEventListener('click', onBiggerScaleClick);
  commentInput.addEventListener('input', onCommentInput);
  hashtagInput.addEventListener('input', onHashtagInput);
  applyEffect();
}

// Ф-я закрытия модального окна
function closeUserModal () {
  uploadOverlay.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onPopupEscKeydown);
  // добавляем обработчики удаления
  smallerScale.removeEventListener('click', onSmallerScaleClick);
  biggerScale.removeEventListener('click', onBiggerScaleClick);
  commentInput.removeEventListener('input', onCommentInput);
  hashtagInput.removeEventListener('input', onHashtagInput);
  // Очищаем значение #upload-file
  uploadFileControl.value = '';
  // масштаб 100%
  imagePreview.style.transform = 'scale(1)';
  scaleControl.value = '100%';
  scaleControl.setAttribute('value', '100%');
  // эффект оригинала
  document.querySelector('.effect-level').classList.add('hidden');
  imagePreview.style.filter = 'none';
  // поле хэш-тег и комментария очищается
  commentInput.value = '';
  hashtagInput.value = '';
  photoForm.reset();
}

//openUserModal();

// Обработчик на открытие по изменению значения #upload-file
uploadFileControl.addEventListener('change', () => {
  openUserModal();
});

// Обработчик на открытие по клавише Enter
uploadFileControl.addEventListener('keydown', (evt) => {
  if (isEnterKey(evt)) {
    openUserModal();
  }
});

// Обработчик на закрытие по клику
uploadCancelControl.addEventListener('click', () => {
  closeUserModal();
});

// Обработчик на закрытие по клавише Enter
uploadCancelControl.addEventListener('keydown', (evt) => {
  if (isEnterKey(evt)) {
    closeUserModal();
  }
});

// отправка формы с обработкой ошибок
const setUserFormSubmit = (onSuccess) => {
  photoForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    sendData(
      () => showSuccessMessage(),
      () => showErrorMessage(),
      new FormData(evt.target),
    );
    photoForm.reset();
    onSuccess();
  });
};

export {imagePreview, setUserFormSubmit, openUserModal, closeUserModal, hashtagInput, commentInput};
