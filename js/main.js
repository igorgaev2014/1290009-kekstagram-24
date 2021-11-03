import {closeUserModal, setUserFormSubmit} from './form.js';
import {renderSmallPictures} from './renderSmallPictures.js';
import {getData} from './api.js';
import {showAlert} from './utils.js';

getData(
  (photos) => renderSmallPictures(photos),
  () => showAlert('Ошибка загрузки фотографий с сервера, перезагрузите страницу'),
);

setUserFormSubmit(closeUserModal);
