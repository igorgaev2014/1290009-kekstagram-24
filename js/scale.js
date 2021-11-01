const smallerScale = document.querySelector('.scale__control--smaller');
const biggerScale = document.querySelector('.scale__control--bigger');
const scaleControl = document.querySelector('.scale__control--value');
const imgPreview = document.querySelector('.img-upload__preview');

const SCALE_STEP = 25;
const MIN_SCALE_RANGE = 25;
const MAX_SCALE_RANGE = 100;
const DEFAULT_SCALE = 100;

// Устанавливаем дефолтное значение масштаба
scaleControl.setAttribute('value', `${DEFAULT_SCALE}%`);
// Парсим текущее значение масштаба
let currentScaleValue = parseInt(scaleControl.value, 10);

// Уменьшение масштаба
const onSmallerScaleClick = () => {
  if (currentScaleValue > MIN_SCALE_RANGE) {
    currentScaleValue = currentScaleValue - SCALE_STEP;
    imgPreview.style.transform = `scale(${currentScaleValue / 100})`;
    scaleControl.setAttribute('value', `${currentScaleValue}%`);
  }
};

smallerScale.addEventListener('click', onSmallerScaleClick);

// Увеличение масштаба
const onBiggerScaleClick = () => {
  if (currentScaleValue < MAX_SCALE_RANGE) {
    currentScaleValue = currentScaleValue + SCALE_STEP;
    imgPreview.style.transform = `scale(${currentScaleValue / 100})`;
    scaleControl.setAttribute('value', `${currentScaleValue}%`);
  }
};

biggerScale.addEventListener('click', onBiggerScaleClick);
