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

// Имена пользователей
const NAMES = [
  'Вася',
  'Петя',
  'Коля',
  'Оля',
  'Жора',
  'Настя',
  'Лена',
  'Слава',
];

// Описания к фото
const DESCRIPTIONS = [
  'Воскресенье — еще один способ сказать: «Какой чудесный день!»',
  'Окружайте себя настоящими друзьями, и вы будете действительно счастливы.',
  'Никогда не бойтесь. Просто постарайтесь быть собой.',
  'В любой ситуации всегда улыбайтесь.',
  'Всегда будьте лучшим вариантом для себя.',
  'Когда ты найдешь себя, жизнь меняется.',
  'Ваша скорость не имеет значения, пока вы продолжаете двигаться вперед.',
  'Живите сегодня. Живите сейчас.',
];

// Сообщения для комментария
const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра.',
  'В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

// Количество фотографий
const PHOTOS_LENGTH = 25;

// Получение уникального элемента массива
const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

// Создание объекта, содержащего комментарии, id не должен повторяться при каждом вызове
const createPhotoCommentary = (id) => {
  const randomId = id;
  const randomAvatar = `img/avatar-${getRandomInteger(1, 6)}.svg`;
  const randomMessage = getRandomArrayElement(MESSAGES);
  const randomName = getRandomArrayElement(NAMES);

  return {
    id: randomId,
    avatar: randomAvatar,
    message: randomMessage,
    name: randomName,
  };
};

// Создание объекта, содержащего описание фотографии, id не должен повторяться при каждом вызове
const createUserPhotoDescription = (id) => {
  const randomId = id;
  const randomUrl = `photos/${id}.jpg`;
  const randomDescription = getRandomArrayElement(DESCRIPTIONS);
  const randomLikes = getRandomInteger(15, 200);

  return {
    id: randomId,
    url: randomUrl,
    description: randomDescription,
    likes: randomLikes,
    comments: createPhotoCommentary(id),
  };
};

// Генерация объектов рандомно с описанием фото в количестве, указанном в константе PHOTOS_LENGTН
// const photosArray = Array.from({length: PHOTOS_LENGTH}, createUserPhotoDescription);

// Пустой массив объектов для фотографий
const photosArray = [];

// Генерация объектов с неповторяющимися id путем присваивания объекта в пустой массив в цикле от 1 до значения PHOTOS_LENGTH

for (let i = 1; i <= PHOTOS_LENGTH; i++) {
  photosArray.push(createUserPhotoDescription(i));
}

//console.log(photosArray);
