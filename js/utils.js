function getRandomInteger(min, max) {
  if (min < 0 || max < 0) {
    return ('Ошибка, входное значение меньше 0');
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

getRandomInteger();

function checkStringMaxLength(string, maxLength) {
  return string.length <= maxLength;
}

checkStringMaxLength(1, 2);

const isEscapeKey = (evt) => evt.key === 'Escape';

const isEnterKey = (evt) => evt.key === 'Enter';

export {getRandomInteger, checkStringMaxLength, isEscapeKey, isEnterKey};
