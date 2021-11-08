import { isEscapeKey } from './utils.js';
import { bigPicture, renderBigPicture } from './renderBigPicture.js';
import { smallPictures } from './renderSmallPictures.js';

const gallery = (photosData) => {
  const closeBigPictureButton = document.querySelector('.big-picture__cancel');

  const onBigPictureEscKeyDown = (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      closeBigPicture();
    }
  };

  function openBigPicture (evt, photos) {
    bigPicture.classList.remove('hidden');
    document.body.classList.add('modal-open');
    renderBigPicture(evt, photos);
    document.addEventListener('keydown', onBigPictureEscKeyDown);
  }

  function closeBigPicture () {
    bigPicture.classList.toggle('hidden');
    document.body.classList.remove('modal-open');
    document.removeEventListener('keydown', onBigPictureEscKeyDown);
  }

  smallPictures.addEventListener('click', (evt) => {
    if (evt.target.matches('.picture__img')) {
      openBigPicture(evt, photosData);
    }
  });

  closeBigPictureButton.addEventListener('click', () => {
    closeBigPicture();
  });
};

export {gallery};
