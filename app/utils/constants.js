import mesto_01 from '../images/mesto/mesto_01.png';
import mesto_02 from '../images/mesto/mesto_02.png';
import mesto_03 from '../images/mesto/mesto_03.png';
import movies_01 from '../images/movies/movies_01.jpg';
import movies_02 from '../images/movies/movies_02.jpg';
import movies_03 from '../images/movies/movies_03.jpg';
import network_01 from '../images/network/network_01.jpg';
import network_02 from '../images/network/network_02.jpg';
import network_03 from '../images/network/network_03.jpg';
import mestoJS_01 from '../images/mestoJS/mestoJS_01.jpg';
import mestoJS_02 from '../images/mestoJS/mestoJS_02.jpg';
import mestoJS_03 from '../images/mestoJS/mestoJS_03.jpg';
import russian_01 from '../images/russian/russian_01.jpg';
import russian_02 from '../images/russian/russian_02.jpg';
import russian_03 from '../images/russian/russian_03.jpg';
import aperture_01 from '../images/aperture/aperture_01.jpg';
import aperture_02 from '../images/aperture/aperture_02.jpg';
import aperture_03 from '../images/aperture/aperture_03.jpg';
import portfolio_01 from '../images/portfolio/portfolio_01.jpg';
import portfolio_02 from '../images/portfolio/portfolio_02.jpg';
import portfolio_03 from '../images/portfolio/portfolio_03.jpg';

export const EMAIL = 'alexeypakhomov88@gmail.com';
export const GITHUB = 'https://github.com/AlexeyPakhomov';

export const NAVIGATION_MENU = [
  { id: 1, name: 'projects' },
  { id: 2, name: 'technologies' },
  { id: 3, name: 'contact' },
];

export const TECHNOLOGIES = [
  'JavaScript',
  'React',
  'Redux',
  'Next.js',
  'HTML5',
  'CSS3',
  'BEM',
  'Node.js',
  'Express.js',
  'MongoDB',
  'Postman',
  'Firebase',
  'Git',
  'Figma',
];

export const PROJECTS = [
  {
    id: 1,
    title: 'Movies Explorer',
    description:
      'Сервис поиска фильмов по запросу с возможностью сохранения в избранном пользователя.',
    functional:
      'Регистрация, авторизация и редактирование профиля пользователя с валидацией форм, глобальный поиск фильмов по БД, сохранение фильмов в избранном с возможностью локального поиска и сортировки.',
    stack: [
      'React',
      'JS',
      'CSS3',
      'BEM',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Yandex Cloud',
      'Nginx',
      'SSL',
    ],
    images: [
      { src: movies_01, alt: 'movies_01', width: '100', height: '100' },
      { src: movies_02, alt: 'movies_02', width: '100', height: '100' },
      { src: movies_03, alt: 'movies_03', width: '100', height: '100' },
    ],
    githubLink: 'https://github.com/AlexeyPakhomov/movies-explorer-frontend',
    link: 'https://movies.pakhomov.site/',
  },
  {
    id: 2,
    title: 'Mesto (React)',
    description: 'Сервис публикации изображений.',
    functional:
      'Регистрация, авторизация и редактирование профиля пользователя с валидацией форм, добавление и удаление карточек пользователя, лайки и дизлайки карточек.',
    stack: [
      'React',
      'JS',
      'CSS3',
      'BEM',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Yandex Cloud',
      'Nginx',
      'SSL',
    ],
    images: [
      { src: mesto_01, alt: 'mesto_01', width: '100', height: '100' },
      { src: mesto_02, alt: 'mesto_02', width: '100', height: '100' },
      { src: mesto_03, alt: 'mesto_03', width: '100', height: '100' },
    ],
    githubLink: 'https://github.com/AlexeyPakhomov/react-mesto-api-full-gha',
    link: 'https://mesto.pakhomov.site/',
  },
  {
    id: 3,
    title: 'Fast Company',
    description: 'Сервис для общения между участниками группы.',
    functional:
      'Регистрация, авторизация и редактирование профиля пользователя с валидацией форм, публикация комментариев среди участников группы.',
    stack: ['React', 'Redux', 'Bootstrap', 'Firebase', 'Node.js', 'Express.js', 'MongoDB'],
    images: [
      { src: network_01, alt: 'network_01', width: '100', height: '100' },
      { src: network_02, alt: 'network_02', width: '100', height: '100' },
      { src: network_03, alt: 'network_03', width: '100', height: '100' },
    ],
    githubLink: 'https://github.com/AlexeyPakhomov/fast-company',
    link: 'https://network.pakhomov.site/',
  },
  {
    id: 4,
    title: 'Mesto (JS)',
    description: 'Сервис публикации изображений.',
    functional:
      'Редактирование профиля пользователя с валидацией форм, добавление и удаление карточек пользователя, лайки и дизлайки карточек',
    stack: ['JS', 'HTML5', 'CSS3', 'BEM'],
    images: [
      { src: mestoJS_01, alt: 'mestoJS_01', width: '100', height: '100' },
      { src: mestoJS_02, alt: 'mestoJS_02', width: '100', height: '100' },
      { src: mestoJS_03, alt: 'mestoJS_03', width: '100', height: '100' },
    ],
    githubLink: 'https://github.com/AlexeyPakhomov/mesto',
    link: 'https://alexeypakhomov.github.io/mesto/',
  },
  {
    id: 5,
    title: 'Portfolio',
    description: 'Адаптивный одностраничный сайт',
    stack: ['Next.js', 'CSS3', 'BEM'],
    images: [
      { src: portfolio_01, alt: 'portfolio_01', width: '100', height: '100' },
      { src: portfolio_02, alt: 'portfolio_02', width: '100', height: '100' },
      { src: portfolio_03, alt: 'portfolio_03', width: '100', height: '100' },
    ],
    githubLink: 'https://github.com/AlexeyPakhomov/portfolio',
    link: 'Сurrent site',
  },
  {
    id: 6,
    title: 'Aperture Studios',
    description: 'Адаптивный одностраничный сайт',
    stack: ['HTML5', 'CSS3', 'BEM'],
    images: [
      { src: aperture_01, alt: 'aperture_01', width: '100', height: '100' },
      { src: aperture_02, alt: 'aperture_02', width: '100', height: '100' },
      { src: aperture_03, alt: 'aperture_03', width: '100', height: '100' },
    ],
    githubLink: 'https://github.com/AlexeyPakhomov/Aperture',
    link: 'https://alexeypakhomov.github.io/Aperture/',
  },
  {
    id: 7,
    title: 'Russian travel',
    description: 'Адаптивный одностраничный сайт',
    stack: ['HTML5', 'CSS3', 'BEM'],
    images: [
      { src: russian_01, alt: 'russian_01', width: '100', height: '100' },
      { src: russian_02, alt: 'russian_02', width: '100', height: '100' },
      { src: russian_03, alt: 'russian_03', width: '100', height: '100' },
    ],
    githubLink: 'https://github.com/AlexeyPakhomov/russian-travel',
    link: 'https://alexeypakhomov.github.io/russian-travel/',
  },
];
