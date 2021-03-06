import { gallery } from './gallery.js';

// находим блок pictures
const smallPictures = document.querySelector('.pictures');

// находим фрагмент с содержимым и обращаемся к ссылке
const smallPicturesTemplate = document.querySelector('#picture').content.querySelector('.picture');

// создаем обертку
const smallPicturesFragment = document.createDocumentFragment();

const renderSmallPictures = (photosData) => {
  // удаление отрисованных фото
  const pictureElement = document.querySelectorAll('.picture');
  pictureElement.forEach((element) => {
    element.remove();
  });

  // перебор массива фото в цикле с присваиванием данных
  photosData.forEach(({url, likes, comments}) => {
    // клон заготовки с внутренностями
    const element = smallPicturesTemplate.cloneNode(true);
    // присваивание данных
    element.querySelector('.picture__img').src = url;
    element.querySelector('.picture__likes').textContent = likes;
    element.querySelector('.picture__comments').textContent = comments.length;
    // обертке добавляются клоны с каждой итерацией
    smallPicturesFragment.appendChild(element);
  });

  // блоку добавляются обертка
  smallPictures.appendChild(smallPicturesFragment);
  gallery(photosData);
};

export {renderSmallPictures, smallPictures};
