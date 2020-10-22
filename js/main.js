'use strict';

{
  const images = [
    'img/pic00.png',
    'img/pic01.png',
    'img/pic02.png',
    'img/pic03.png',
    'img/pic04.png',
    'img/pic05.png',
    'img/pic06.png',
    'img/pic07.png',
  ];
  let currentIndex = 0;

  // メインイメージの表示
  const mainImage = document.getElementById('main');
  mainImage.src = images[currentIndex];

  // サムネイルの表示
  images.forEach((image, index) => {
    const img = document.createElement('img');
    img.src = image;

    const li = document.createElement('li');
    if (index === currentIndex) {
      li.classList.add('current');
    }
    // メイン画像への反映
    li.addEventListener('click', () => {
      mainImage.src = image;
    })
    li.appendChild(img);
    document.querySelector('.thumbnails').appendChild(li);
  });
}