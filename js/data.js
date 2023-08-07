import {getRandomArrayElement, getRandomInteger, newId, newUrl} from './util.js';

const NAMES = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон',
  'Елена',
  'Анна',
  'Сергей',
  'Василий',
  'Дмитрий',
  'Антон',
  'Маргарита',
  'Никита',
  'Игорь',
  'Жанна',
];

const SURNAMES = [
  'да Марья',
  'Верон',
  'Мирабелла',
  'Вальц',
  'Онопко',
  'Топольницкая',
  'Нионго',
  'Ирвинг',
  'Паркер',
  'Бэкер',
  'Паскаль',
  'Ли',
  'Хьюстон',
  'Меркури',
];

const COMMENTTEXT = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const DESCRIPTION = [
  'Мама, я в Дубае!',
  'Отличный ресторан.',
  'Как я вам? :Р',
  'Люблю кушоц',
  'Лучшие друзья девушки - это...',
  'Видали какой мотоцикл?',
  'Опять авария...',
  'Я и моя семья',
  'Мой любимый песель',
  'А вы умеете так веселиться? А?',
  'Посмотрите только! Проститутки, наркоманки...!',
  'Дороги на Териберку просто нет.',
  'Мой любимый отель. Del Luna.',
];


//Создаем один комментарий
const createComment = () => ({
  id: getRandomInteger(1, 999),
  avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
  message: Array.from({length: getRandomInteger(1, 2)}, () => getRandomArrayElement(COMMENTTEXT)).join(' '),
  name: `${getRandomArrayElement(NAMES)} ${getRandomArrayElement(SURNAMES)}`,
});

//Пак комментариев от 0 до 30 шт.
const createComments = () =>
  Array.from(
    { length: getRandomInteger(0, 30) },
    () => createComment(),
  );

// Создаем одно фото с паком комментариев
const createPhoto = () => ({
  id: newId(),
  url: `photos/${newUrl()}.jpg`,
  description: getRandomArrayElement(DESCRIPTION),
  likes: getRandomInteger(15, 200),
  comments: createComments(),
});

// 25 объектов
const createPhotos = () => Array.from({length: 25}, createPhoto);

const somePhotos = createPhotos();

export { somePhotos };