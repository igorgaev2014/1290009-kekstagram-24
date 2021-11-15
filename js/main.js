import {closeUserModal, setUserFormSubmit} from './form.js';
import {getData} from './api.js';
import {showAlert} from './utils.js';
import {filterImages} from './filters.js';

getData(
  (photos) => filterImages(photos),
  () => showAlert('Ошибка загрузки фотографий с сервера, перезагрузите страницу'),
);

setUserFormSubmit(closeUserModal);
