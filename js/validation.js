import {hashtagInput, commentInput} from './form.js';

const MAX_COMMENT_LENGTH = 140;
const MAX_HASHTAGS_COUNT = 5;

const pattern = /^#[A-Za-zА-Яа-яЁё0-9]{1,19}$/;

// Ф-я проверки длины комментария
const onCommentInput = () => {
  const commentLength = commentInput.value.length;

  if (commentLength > MAX_COMMENT_LENGTH) {
    commentInput.setCustomValidity(`Удалите лишние ${commentLength - MAX_COMMENT_LENGTH} симв.`);
  } else {
    commentInput.setCustomValidity('');
  }
  commentInput.reportValidity();
};

// Ф-я проверки хэштега
const onHashtagInput = () => {
  // Меняем все заглавные буквы на строчные и преобразовываем строку в массив
  const hashtags = hashtagInput.value.toLowerCase().split(' ');
  const invalidHashtags = [];

  // Перебор и добавление невалидных значений в отдельный массив
  hashtags.forEach((hashtag) => {
    if (!hashtag.match(pattern)) {
      invalidHashtags.push(hashtag);
    }
  });

  // Поиск дубликатов
  const duplicates = hashtags.filter((hashtag, idx, array) => array.indexOf(hashtag) !== idx);

  if (duplicates.length !== 0) {
    hashtagInput.setCustomValidity('Один и тот же хэштег не может быть использован дважды');
  } else if (hashtags.length > MAX_HASHTAGS_COUNT) {
    hashtagInput.setCustomValidity(`Максимальное количество хэштегов: ${MAX_HASHTAGS_COUNT}`);
  } else if (invalidHashtags.length !== 0) {
    hashtagInput.setCustomValidity('Некорректный хэштег');
  } else {
    hashtagInput.setCustomValidity('');
  }
  hashtagInput.reportValidity();
};

export {onCommentInput, onHashtagInput};
