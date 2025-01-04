
// popup
let popupBg_kvartirnik = document.querySelector('.popup__bg_kvartirnik');
let popup_kvartirnik = document.querySelector('.popup_kvartirnik');
let openPopupButtons_kvartirnik = document.querySelectorAll('.open-popup_kvartirnik'); 
let closePopupButton_kvartirnik = document.querySelector('.close-popup_kvartirnik'); 
let closePopupButtonSubmit_kvartirnik = document.querySelector('.close_through_submit_kvartirnik');

openPopupButtons_kvartirnik.forEach((button) => { // Перебираем все кнопки
    button.addEventListener('click', (e) => { // Для каждой вешаем обработчик событий на клик
        e.preventDefault(); // Предотвращаем дефолтное поведение браузера
        popupBg_kvartirnik.classList.add('active'); // Добавляем класс 'active' для фона
        popup_kvartirnik.classList.add('active'); // И для самого окна
    })
});

closePopupButton_kvartirnik.addEventListener('click',() => { // Вешаем обработчик на крестик
    popupBg_kvartirnik.classList.remove('active'); // Убираем активный класс с фона
    popup_kvartirnik.classList.remove('active'); // И с окна
});

document.addEventListener('click', (e) => { // Вешаем обработчик на весь документ
    if(e.target === popupBg_kvartirnik) { // Если цель клика - фот, то:
        popupBg_kvartirnik.classList.remove('active'); // Убираем активный класс с фона
        popup_kvartirnik.classList.remove('active'); // И с окна
    }
});

closePopupButtonSubmit_kvartirnik.addEventListener('click',() => { // Вешаем обработчик на submit
    popupBg_kvartirnik.classList.remove('active'); // Убираем активный класс с фона
    popup_kvartirnik.classList.remove('active'); // И с окна
});






// правки для Рождества
// JavaScript для фиксации навбара
document.addEventListener('DOMContentLoaded', function () {
    const navbar = document.getElementById('tm-nav');
    const navbarOffset = navbar.offsetTop - 90; // Учитываем изначальное смещение
    let lastScrollY = window.scrollY;

    window.addEventListener('scroll', function () {
        const currentScrollY = window.scrollY;

        if (currentScrollY > navbarOffset) {
            navbar.classList.add('fixed');
            navbar.style.top = '0';
        } else {
            navbar.classList.remove('fixed');
            navbar.style.top = '90px';
        }

        // Дополнительно проверяем направление прокрутки
        if (currentScrollY < lastScrollY && currentScrollY < navbarOffset) {
            navbar.classList.remove('fixed');
            navbar.style.top = '90px';
        }

        lastScrollY = currentScrollY;
    });
});





// скрипты для видео
let videoContainer = document.querySelector('.video-container');
let shortcut = document.querySelector('.shortcut');

// Открытие модального окна
function openModal() {
  const modalVideo = document.querySelector('.modal-content video');
  modalVideo.muted = false; // Включаем звук при открытии модального окна

  // Начинаем воспроизведение видео
  modalVideo.play().catch(error => {
    console.warn('Ошибка воспроизведения видео:', error);
  });

  // Скрыть маленькое видео и ярлычок
  videoContainer.style.opacity = 0;
  shortcut.style.left = '-70px'; // Прячем ярлычок
  setTimeout(() => {
    videoContainer.style.display = 'none'; // Скрываем контейнер с видео после анимации
  }, 500); // 500 мс — это время анимации исчезновения

  // Открыть модальное окно
  document.getElementById('modal').style.display = 'flex';
}

// Закрытие модального окна
function closeModal(event) {
  if (event.target === event.currentTarget || event.target.classList.contains('close')) {
    const modalVideo = document.querySelector('.modal-content video');
    modalVideo.muted = true; // Отключаем звук у видео при закрытии модального окна
    modalVideo.pause(); // Останавливаем воспроизведение

    document.getElementById('modal').style.display = 'none';

    // Скрыть маленькое видео после закрытия модального окна
    videoContainer.style.opacity = 0;
    setTimeout(() => {
      videoContainer.style.display = 'none';
      shortcut.style.left = '10px'; // Ярлычок снова появляется слева
    }, 500); // 500 мс — время анимации исчезновения
  }
}

// Закрытие маленького видео с плавной анимацией
function closeSmallVideo(event) {
  event.stopPropagation(); // Останавливаем всплытие события, чтобы не вызвать открытие модального окна
  videoContainer.style.opacity = 0; // Начинаем анимацию исчезновения
  setTimeout(() => {
    videoContainer.style.display = 'none'; // Прячем контейнер после завершения анимации
    shortcut.style.left = '10px'; // Появляем ярлычок слева
  }, 500); // 500 мс — это время анимации (соответствует transition)
}

// Открытие видео при клике на ярлычок
function openVideoFromShortcut() {
  videoContainer.style.display = 'block'; // Показываем контейнер
  videoContainer.style.opacity = 1; // Делаем его видимым
  videoContainer.style.transition = 'opacity 0.5s ease'; // Плавное появление
  shortcut.style.left = '-70px'; // Прячет ярлычок снова
}

