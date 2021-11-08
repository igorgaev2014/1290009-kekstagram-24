const bigPicture = document.querySelector('.big-picture');
const socialComments = document.querySelector('.social__comments');
const socialComment = socialComments.querySelector('.social__comment');
const commentsFragment = document.createDocumentFragment();
const socialCommentCount = document.querySelector('.social__comment-count');
const commentsLoader = document.querySelector('.comments-loader');
socialCommentCount.classList.add('hidden'); //прячем счетчик комментариев
commentsLoader.classList.add('hidden'); // прячем блок загрузки новых комментариев

const renderBigPicture = (evt, photosData) => {
  socialComments.innerHTML = '';
  const pictureSrc = evt.target.src;
  bigPicture.querySelector('.big-picture__img img').src = pictureSrc;
  const photosDataCurrent = photosData.find((userPhoto) => pictureSrc.indexOf(userPhoto.url) !== -1);

  bigPicture.querySelector('.likes-count').textContent = photosDataCurrent.likes;
  bigPicture.querySelector('.comments-count').textContent = photosDataCurrent.comments.length;
  bigPicture.querySelector('.social__caption').textContent = photosDataCurrent.description;

  photosDataCurrent.comments.forEach((item) => {
    socialComments.innerHTML = '';
    const socialCommentElement = socialComment.cloneNode(true);
    socialCommentElement.querySelector('.social__picture').src = item.avatar;
    socialCommentElement.querySelector('.social__picture').alt = item.name;
    socialCommentElement.querySelector('.social__text').textContent = item.message;
    commentsFragment.appendChild(socialCommentElement);
  });
  socialComments.appendChild(commentsFragment);
};

export {renderBigPicture, bigPicture};
