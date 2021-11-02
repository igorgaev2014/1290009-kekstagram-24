const sliderElement = document.querySelector('.effect-level__slider');
const valueElement = document.querySelectorAll('.effect-level__value');
const effectsList = document.querySelector('.effects__list');
const imagePreview = document.querySelector('.img-upload__preview');
let currentEffect = 'none';

// создаем слайдер
noUiSlider.create(sliderElement, {
  range: {
    min: 0,
    max: 1,
  },
  start: 1,
  step: 0.1,
  connect: 'lower',
});

// Блок эффектов
const effects = {
  none: () => {
    imagePreview.style.filter = 'none';
  },
  chrome: (value) => {
    imagePreview.style.filter = `grayscale(${value})`;
  },
  sepia: (value) => {
    imagePreview.style.filter = `sepia(${value})`;
  },
  marvin: (value) => {
    imagePreview.style.filter = `invert(${value}%)`;
  },
  phobos: (value) => {
    imagePreview.style.filter = `blur(${value}px)`;
  },
  heat: (value) => {
    imagePreview.style.filter = `brightness(${value})`;
  },
};

// Ф-я применения эффекта
const applyEffect = () => {
  effectsList.addEventListener('click', (evt) => {
    if (evt.target.classList.contains('effects__preview')) {
      currentEffect = evt.target.classList[1].replace('effects__preview--', '');
      effects[currentEffect](valueElement.value);
    }

    document.querySelector('.effect-level').classList.remove('hidden');
    sliderElement.noUiSlider.set(100);

    switch (currentEffect) {
      case 'marvin': {
        sliderElement.noUiSlider.updateOptions({
          range: {
            min: 0,
            max: 100,
          },
          step: 1,
          start: 100,
        });
        break;
      }
      case 'phobos': {
        sliderElement.noUiSlider.updateOptions({
          range: {
            min: 0,
            max: 3,
          },
          step: 0.1,
          start: 3,
        });
        break;
      }
      case 'heat': {
        sliderElement.noUiSlider.updateOptions({
          range: {
            min: 1,
            max: 3,
          },
          step: 0.1,
          start: 3,
        });
        break;
      }
      case 'chrome':
      case 'sepia': {
        sliderElement.noUiSlider.updateOptions({
          range: {
            min: 0,
            max: 1,
          },
          start: 1,
          step: 0.1,
        });
        break;
      }
      case 'none': {
        document.querySelector('.effect-level').classList.add('hidden');
      }
    }
  });
};

sliderElement.noUiSlider.on('update', (values, handle) => {
  valueElement.value = values[handle];
  effects[currentEffect](valueElement.value);
});

document.querySelector('.effect-level').classList.add('hidden');

applyEffect();
