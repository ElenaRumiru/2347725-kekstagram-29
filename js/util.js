//Генерируем случайное число в диапазоне
const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

// Декомпозиция перебора элементов массива
const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

//Порядковая нумерация
const getId = function () {
  let index = 0;
  return () => {
    index++;
    return index;
  };
};
const newId = getId();
const newUrl = getId();

export { getRandomArrayElement, getRandomInteger, newId, newUrl };
