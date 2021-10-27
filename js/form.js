import {isEscapeKey, isEnterKey}  from './utils.js';

// повесить обработчик событий на контрол загрузки upload-file
const uploadFileControl = document.querySelector('#upload-file');
const uploadCancelControl = document.querySelector('.img-upload__cancel');
const uploadOverlay = document.querySelector('.img-upload__overlay');
const body = document.querySelector('body');

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
}

// Ф-я закрытия модального окна
function closeUserModal () {
  uploadOverlay.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onPopupEscKeydown);
  // Очищаем значение #upload-file
  uploadFileControl.value = '';
}

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

