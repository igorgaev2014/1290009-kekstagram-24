import { isEscapeKey } from './utils.js';
import { bigPicture, renderBigPicture, showHiddenComments, commentsLoader} from './render-big-picture.js';
import { smallPictures } from './render-small-pictures.js';

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
    commentsLoader.addEventListener('click', showHiddenComments);
    document.addEventListener('keydown', onBigPictureEscKeyDown);
  }

  function closeBigPicture () {
    bigPicture.classList.add('hidden');
    document.body.classList.remove('modal-open');
    commentsLoader.removeEventListener('click', showHiddenComments);
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
