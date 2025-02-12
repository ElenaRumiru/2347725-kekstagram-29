// Находим шаблон и контейнер
const thumbnailTemplate = document.querySelector('#picture').content.querySelector('.picture');
const container = document.querySelector('.pictures');


// Получаем свойства атрибутов
const createThumbnail = ({ comments, description, likes, url }) => {
  const thumbnail = thumbnailTemplate.cloneNode(true);

  thumbnail.querySelector('.picture_img').src = url;
  thumbnail.querySelector('.picture_img').alt = description;
  thumbnail.querySelector('.picture_comments').textContent = comments.length;
  thumbnail.querySelector('.picture_likes').textContent = likes;

  return thumbnail;
};

//Cоздаем множество элементов
const renderThumbnails = (pictures) => {
  const fragment = document.createDocumentFragment();
  pictures.forEach((picture) => {
    const thumbnail = createThumbnail(picture);
    fragment.append(thumbnail);
  });

  container.append(fragment);
};

export { renderThumbnails };
