const bigPicture = document.querySelector('.big-picture');
const socialComments = document.querySelector('.social__comments');
const socialComment = socialComments.querySelector('.social__comment');
const commentsFragment = document.createDocumentFragment();
const socialCommentCount = document.querySelector('.social__comment-count');
const commentsLoader = document.querySelector('.comments-loader');
const shownCommentsCount = document.querySelector('.shown-comments-count');
const MAX_COMMENTS = 5;
// по умолчанию видимых комментов 5
let shownCommentCount = MAX_COMMENTS;
// при закрытии shownCommentsCount = MAX_COMMENTS

const commentsLogic = () => {
  // превращаем коллекцию в массив
  const comments = Array.from(socialComments.children);
  // если комментов больше 5
  if (socialComments.children.length > MAX_COMMENTS) {
    // показываем кнопки и счетчик
    socialCommentCount.classList.remove('hidden');
    commentsLoader.classList.remove('hidden');
    // перебираем массив комментариев
    comments.forEach((comment, index) => {
      // скрываем комментарии с индексом > 5
      comment.classList.add('hidden');
      // показываем комментарии с индексом < 5
      if (index < shownCommentCount) {
        comment.classList.remove('hidden');
      }
    });

  } else {
    // если комментариев 5 или меньше, скрываем кнопки
    socialCommentCount.classList.add('hidden');
    commentsLoader.classList.add('hidden');
  }
};

// показ скрытых комментов
const showHiddenComments = () => {
  shownCommentCount += MAX_COMMENTS;
  commentsLogic();
  if (shownCommentCount >= socialComments.children.length) {
    commentsLoader.classList.add('hidden');
    shownCommentsCount.textContent = socialComments.children.length;
  } else {
    shownCommentsCount.textContent = shownCommentCount;
  }
  return shownCommentCount;
};

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
  shownCommentsCount.textContent = MAX_COMMENTS;
  shownCommentCount = MAX_COMMENTS;
  commentsLogic();
};

export {renderBigPicture, bigPicture, commentsLoader, showHiddenComments};
