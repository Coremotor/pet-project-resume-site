import {v4 as uuidv4} from 'uuid';

const initialStateCourses =
    {
        layout2019: {
            id: 'layout2019',
            title: 'Веб-вёрстка 2019',
            done: true,
            inProcess: false,
            finalWork: true,
            finalWorkGithubUrl: 'https://github.com/Coremotor/course-web-layout-2019-diplom-work',
            comments: [],
            show: false,
            body: [
                {
                    id: uuidv4(),
                    title: 'Вводный модуль',
                    inProcess: false,
                    done: true,
                    show: false,
                    lessons: [
                        {
                            title: 'Как работают сайты. Backend и frontend. Вёрстка',
                            done: true,
                        },
                        {
                            title: 'Как выглядит и из чего состоит код веб-страницы',
                            done: true,
                        },
                        {
                            title: 'Установка редактора кода Sublime Text',
                            done: true,
                        },
                        {
                            title: 'Простая веб-страница на HTML. Тэги и атрибуты',
                            done: true,
                        },
                        {
                            title: 'CSS-стили. Селекторы, параметры и значения',
                            done: true,
                        },
                    ],
                },
                {
                    id: uuidv4(),
                    title: 'HTML',
                    inProcess: false,
                    done: true,
                    show: false,
                    lessons: [
                        {
                            title: 'Приветственное видео',
                            done: true,
                        },
                        {
                            title: 'Структура HTML5-документа',
                            done: true,
                        },
                        {
                            title: 'Обзор и демонстрация работы основных HTML-тэгов',
                            done: true,
                        },
                        {
                            title: 'Вёрстка веб-форм. Поля и кнопки. Валидация форм',
                            done: true,
                        },
                        {
                            title: 'Таблицы и табличная вёрстка',
                            done: true,
                        },
                        {
                            title: 'Семантическая вёрстка. Стандарты и валидность',
                            done: true,
                        },
                    ],
                },
                {
                    id: uuidv4(),
                    title: 'Основы CSS',
                    inProcess: false,
                    done: true,
                    show: false,
                    lessons: [
                        {
                            title: 'Переходим к следующему модулю',
                            done: true,
                        },
                        {
                            title: 'Как можно задавать стили. Селекторы',
                            done: true,
                        },
                        {
                            title: 'Отступы, поля, размеры и единицы измерения',
                            done: true,
                        },
                        {
                            title: 'Inline- и block- элементы, свойство display',
                            done: true,
                        },
                        {
                            title: 'Обтекание, позиционирование и слои',
                            done: true,
                        },
                        {
                            title: 'Блочная верстка',
                            done: true,
                        },
                        {
                            title: 'Цвета, шрифты, фон и границы',
                            done: true,
                        },
                    ],
                },
                {
                    id: uuidv4(),
                    title: 'Основы JavaScript',
                    inProcess: false,
                    done: true,
                    show: false,
                    lessons: [
                        {
                            title: 'Что такое JavaScript и как его подключать к веб-страни',
                            done: true,
                        },
                        {
                            title: 'Библиотека jQuery. Управление стилями элементов',
                            done: true,
                        },
                        {
                            title: 'Обработка событий',
                            done: true,
                        },
                        {
                            title: 'Работа с DOM, изменение, добавление и удаление элементов',
                            done: true,
                        },
                        {
                            title: 'Отображение и скрытие элементов, анимация',
                            done: true,
                        },
                        {
                            title: 'Работа с сетью, получение и отправка данных',
                            done: true,
                        },
                        {
                            title: 'JavaScript-фреймворки',
                            done: true,
                        },
                    ],
                },
                {
                    id: uuidv4(),
                    title: 'Адаптивность и кроссбраузерность',
                    inProcess: false,
                    done: true,
                    show: false,
                    lessons: [
                        {
                            title: 'Адаптивность и кроссбраузерность',
                            done: true,
                        },
                        {
                            title: 'Media-запросы',
                            done: true,
                        },
                        {
                            title: 'Flexbox',
                            done: true,
                        },
                        {
                            title: 'Шаги адаптивности и сетки',
                            done: true,
                        },
                        {
                            title: 'Разнообразие браузеров и их особенности',
                            done: true,
                        },
                        {
                            title: 'Инструменты проверки и обеспечения адаптивности и кроссбраузерности',
                            done: true,
                        },
                    ],
                },
                {
                    id: uuidv4(),
                    title: 'Оформление',
                    inProcess: false,
                    done: true,
                    show: false,
                    lessons: [
                        {
                            title: 'Фон, прозрачность и градиенты',
                            done: true,
                        },
                        {
                            title: 'Границы, аутлайны и тени',
                            done: true,
                        },
                        {
                            title: 'Шрифты и оформление текста. Типографика и спецсимволы',
                            done: true,
                        },
                        {
                            title: 'Стили указателей',
                            done: true,
                        },
                        {
                            title: 'Изображения. Форматы, сжатие, спрайты, iconfonts. Favicon',
                            done: true,
                        },
                        {
                            title: 'Рисование на веб-странице. SVG и Canvas',
                            done: true,
                        },
                    ],
                },
                {
                    id: uuidv4(),
                    title: 'Advanced CSS',
                    inProcess: false,
                    done: true,
                    show: false,
                    lessons: [
                        {
                            title: 'Сложные селекторы. Свойство important',
                            done: true,
                        },
                        {
                            title: 'Псевдо-классы и псевдо-элементы',
                            done: true,
                        },
                        {
                            title: 'Транформации, переходы и анимации',
                            done: true,
                        },
                        {
                            title: 'Стандарты именования в CSS. Методология БЭМ',
                            done: true,
                        },
                        {
                            title: 'Библиотеки стилей: Bootstrap, Semantic UI, Material UI',
                            done: true,
                        },
                        {
                            title: 'Шаблонизаторы (Twig, Haml) и препроцессоры (SASS, LESS, Stylus)',
                            done: true,
                        },
                    ],
                },
                {
                    id: uuidv4(),
                    title: 'Инструменты верстальщика',
                    inProcess: false,
                    done: true,
                    show: false,
                    lessons: [
                        {
                            title: 'Последний модуль. Осталось чуть-чуть!',
                            done: true,
                        },
                        {
                            title: 'Размещение своих работ в Интернете. Домен и хостинг',
                            done: true,
                        },
                        {
                            title: 'Инструменты командной разработки. Таск-трекеры и Git',
                            done: true,
                        },
                        {
                            title: 'Сборщики, минификаторы и оптимизаторы проектов',
                            done: true,
                        },
                        {
                            title: 'Инструменты прототипирования',
                            done: true,
                        },
                        {
                            title: 'Другие среды разработки. NetBeans, WebStorm',
                            done: true,
                        },
                    ],
                },
            ]
        },
        layout2020: {
            id: 'layout2020',
            title: 'Веб-вёрстка 2020',
            done: false,
            inProcess: true,
            finalWork: false,
            finalWorkGithubUrl: 'url',
            comments: [],
            show: false,
            body: [
                {
                    id: uuidv4(),
                    title: 'Введение',
                    inProcess: false,
                    done: true,
                    show: false,
                    lessons: [
                        {
                            title: 'Приветствие',
                            done: true,
                        },
                        {
                            title: 'Как работают сайты. Верстка. Backend и Frontend',
                            done: true,
                        },
                        {
                            title: 'Возможности HTML, CSS, JS',
                            done: true,
                        },
                        {
                            title: 'Редактор кода. Codepen',
                            done: true,
                        },
                        {
                            title: 'Работа с devtools',
                            done: true,
                        },
                        {
                            title: 'VS Code',
                            done: true,
                        },
                        {
                            title: 'Домашняя работа',
                            done: true,
                            githubLink: 'https://github.com/Coremotor/course-web-layout-2020/tree/master/module_1',
                        },
                    ],
                },
                {
                    id: uuidv4(),
                    title: 'Базовый HTML',
                    inProcess: false,
                    done: true,
                    show: false,
                    lessons: [
                        {
                            title: 'Ускорение работы. Emmet',
                            done: true,
                        },
                        {
                            title: 'Элементы HTML-разметки. Базовые теги',
                            done: true,
                        },
                        {
                            title: 'Теги картинок и ссылок. Кнопки',
                            done: true,
                        },
                        {
                            title: 'Теги таблиц',
                            done: true,
                        },
                        {
                            title: 'Служебные теги',
                            done: true,
                        },
                        {
                            title: 'Кодстайл HTML',
                            done: true,
                        },
                        {
                            title: 'Домашняя работа',
                            done: true,
                            githubLink: 'https://github.com/Coremotor/course-web-layout-2020/tree/master/module_2_v2',
                        },
                    ],
                },
                {
                    id: uuidv4(),
                    title: 'Базовый CSS',
                    inProcess: false,
                    done: true,
                    show: false,
                    lessons: [
                        {
                            title: 'Подключение CSS',
                            done: true,
                        },
                        {
                            title: 'Селекторы. Вес селектора',
                            done: true,
                        },
                        {
                            title: 'Единицы измерения CSS',
                            done: true,
                        },
                        {
                            title: 'Стилизация CSS',
                            done: true,
                        },
                        {
                            title: 'Свойство display',
                            done: true,
                        },
                        {
                            title: 'Блочная модель',
                            done: true,
                        },
                        {
                            title: 'Позиционирование',
                            done: true,
                        },
                        {
                            title: 'Кодстайл CSS',
                            done: true,
                        },
                        {
                            title: 'Домашняя работа',
                            done: true,
                            githubLink: 'https://github.com/Coremotor/course-web-layout-2020/tree/master/module_3_v2',
                        },
                    ],
                },
                {
                    id: uuidv4(),
                    title: 'Работа с макетом',
                    inProcess: false,
                    done: true,
                    show: false,
                    lessons: [
                        {
                            title: 'Форматы изображений',
                            done: true,
                        },
                        {
                            title: 'Работа с макетом. Photoshop',
                            done: true,
                        },
                        {
                            title: 'Экспорт изображений',
                            done: true,
                        },
                        {
                            title: 'Работа с макетом. Figma',
                            done: true,
                        },
                        {
                            title: 'Домашняя работа',
                            done: true,
                            githubLink: 'https://github.com/Coremotor/course-web-layout-2020/tree/master/module_4_v2',
                        },
                    ],
                },
                {
                    id: uuidv4(),
                    title: 'Layout',
                    inProcess: false,
                    done: true,
                    show: false,
                    lessons: [
                        {
                            title: 'Интро',
                            done: true,
                        },
                        {
                            title: 'HTML-семантика',
                            done: true,
                        },
                        {
                            title: 'Разметка макета',
                            done: true,
                        },
                        {
                            title: 'Флексбокс — базовая сетка (часть 1)',
                            done: true,
                        },
                        {
                            title: 'Флексбокс — базовая сетка (часть 2)',
                            done: true,
                        },
                        {
                            title: 'Css-стилизация (часть1)',
                            done: true,
                        },
                        {
                            title: 'Css-стилизация (часть2)',
                            done: true,
                        },
                        {
                            title: 'Домашняя работа',
                            done: true,
                            githubLink: 'https://github.com/Coremotor/course-web-layout-2020/tree/master/module_5',
                        },
                    ],
                },
                {
                    id: uuidv4(),
                    title: 'Продвинутый HTML. Формы',
                    inProcess: false,
                    done: true,
                    show: false,
                    lessons: [
                        {
                            title: 'Узконаправленные теги',
                            done: true,
                        },
                        {
                            title: 'Теги для аудио и видео. Iframe. Нюансы использовани',
                            done: true,
                        },
                        {
                            title: 'Продвинутое подключение изображений',
                            done: true,
                        },
                        {
                            title: 'Формы',
                            done: true,
                        },
                    ],
                },
                {
                    id: uuidv4(),
                    title: 'Продвинутый СSS',
                    inProcess: false,
                    done: true,
                    show: false,
                    lessons: [
                        {
                            title: 'Интро',
                            done: true,
                        },
                        {
                            title: 'Подключение шрифтов',
                            done: true,
                        },
                        {
                            title: 'Комбинаторные селекторы',
                            done: true,
                        },
                        {
                            title: 'Псевдоклассы',
                            done: true,
                        },
                        {
                            title: 'Псевдоэлементы',
                            done: true,
                        },
                        {
                            title: 'Transition',
                            done: true,
                        },
                        {
                            title: 'Transform',
                            done: true,
                        },
                        {
                            title: 'Кастомные свойства',
                            done: true,
                        },
                        {
                            title: 'CSS-функции',
                            done: true,
                        },
                        {
                            title: 'БЭМ-именование',
                            done: true,
                        },
                    ],
                },
                {
                    id: uuidv4(),
                    title: 'Сетки',
                    inProcess: false,
                    done: true,
                    show: false,
                    lessons: [
                        {
                            title: 'Интро',
                            done: true,
                        },
                        {
                            title: 'Что такое сетка?',
                            done: true,
                        },
                        {
                            title: 'Построение собственной сетки',
                            done: true,
                        },
                        {
                            title: 'Сетки на примере Bootstrap',
                            done: true,
                        },
                        {
                            title: 'Практика: bootstrap',
                            done: true,
                        },
                        {
                            title: 'Пример сложной разработки сетки',
                            done: true,
                        },
                        {
                            title: 'Аутро',
                            done: true,
                        },
                        {
                            title: 'Домашняя работа',
                            done: true,
                            githubLink: 'https://github.com/Coremotor/course-web-layout-2020/tree/master/module_8',
                        },
                    ],
                },
                {
                    id: uuidv4(),
                    title: 'Адаптивность. Декстоп и планшет',
                    inProcess: true,
                    done: false,
                    show: false,
                    lessons: [
                        {
                            title: 'Интро',
                            done: true,
                        },
                        {
                            title: 'Виды верстки',
                            done: true,
                        },
                        {
                            title: 'Медиа-запросы. Mobile First',
                            done: true,
                        },
                        {
                            title: 'Медиа-запросы. Практика',
                            done: true,
                        },
                        {
                            title: 'Best Practices',
                            done: true,
                        },
                        {
                            title: 'Pixel Perfect',
                            done: true,
                        },
                        {
                            title: 'Домашняя работа',
                            done: false,
                            githubLink: 'url',
                        },
                    ],
                },
                {
                    id: uuidv4(),
                    title: 'Адаптивность. Мобильные устройства',
                    inProcess: true,
                    done: false,
                    show: false,
                    lessons: [
                        {
                            title: 'Интро',
                            done: true,
                        },
                        {
                            title: 'Адаптивные изображения',
                            done: true,
                        },
                        {
                            title: 'Настройка сервера для проверки адаптивности',
                            done: true,
                        },
                        {
                            title: 'Формы на нативных устройствах',
                            done: true,
                        },
                        {
                            title: 'Практика',
                            done: true,
                        },
                        {
                            title: 'Домашняя работа',
                            done: false,
                            githubLink: 'url',
                        },
                    ],
                    inDevelopment: false,
                },
                {
                    id: uuidv4(),
                    title: 'Доступность',
                    inProcess: true,
                    done: false,
                    show: false,
                    lessons: [
                        {
                            title: 'Интро',
                            done: true,
                        },
                        {
                            title: 'Понятие доступности',
                            done: true,
                        },
                        {
                            title: 'Проверка доступности. Клавиатура',
                            done: true,
                        },
                        {
                            title: 'Проверка доступности. Скринридер',
                            done: true,
                        },
                        {
                            title: 'Влияние семантики на доступность',
                            done: true,
                        },
                        {
                            title: 'ARIA',
                            done: true,
                        },
                        {
                            title: 'Аутро',
                            done: true,
                        },
                        {
                            title: 'Домашняя работа',
                            done: false,
                            githubLink: 'url',
                        },
                    ],
                },
                {
                    id: uuidv4(),
                    title: 'Javascript для верстальщика (откроется 06.11.2020)',
                    inProcess: false,
                    done: false,
                    show: false,
                    lessons: [],
                    inDevelopment: true,
                },
                {
                    id: uuidv4(),
                    title: 'Кроссбраузерность (откроется 27.11.2020)',
                    inProcess: false,
                    done: false,
                    show: false,
                    lessons: [],
                    inDevelopment: true,
                },
                {
                    id: uuidv4(),
                    title: 'Практикум (бонус) (откроется 18.12.2020)',
                    inProcess: false,
                    done: false,
                    show: false,
                    lessons: [],
                    inDevelopment: true,
                },
                {
                    id: uuidv4(),
                    title: 'Работа с хостингом (откроется 08.01.2021)',
                    inProcess: false,
                    done: false,
                    show: false,
                    lessons: [],
                    inDevelopment: true,
                },
                {
                    id: uuidv4(),
                    title: 'Курсовая (мини-проект)',
                    inProcess: false,
                    done: false,
                    show: false,
                    lessons: [],
                    inDevelopment: true,
                },
                {
                    id: uuidv4(),
                    title: 'Верстка HTML-писем',
                    inProcess: false,
                    done: false,
                    show: false,
                    lessons: [],
                    inDevelopment: true,
                },
                {
                    id: uuidv4(),
                    title: 'Сборщики',
                    inProcess: false,
                    done: false,
                    show: false,
                    lessons: [],
                    inDevelopment: true,
                },
                {
                    id: uuidv4(),
                    title: 'Препроцессоры и Постпроцессоры',
                    inProcess: false,
                    done: false,
                    show: false,
                    lessons: [],
                    inDevelopment: true,
                },
                {
                    id: uuidv4(),
                    title: 'CSS Grid',
                    inProcess: false,
                    done: false,
                    show: false,
                    lessons: [],
                    inDevelopment: true,
                },
                {
                    id: uuidv4(),
                    title: 'Анимация',
                    inProcess: false,
                    done: false,
                    show: false,
                    lessons: [],
                    inDevelopment: true,
                },
                {
                    id: uuidv4(),
                    title: 'CMS',
                    inProcess: false,
                    done: false,
                    show: false,
                    lessons: [],
                    inDevelopment: true,
                },
                {
                    id: uuidv4(),
                    title: 'Будущее верстки',
                    inProcess: false,
                    done: false,
                    show: false,
                    lessons: [],
                    inDevelopment: true,
                },
                {
                    id: uuidv4(),
                    title: 'Информация о дипломном проекте',
                    inProcess: false,
                    done: false,
                    show: false,
                    lessons: [],
                    inDevelopment: true,
                },
            ]
        },
        javascript2019: {
            id: 'javascript2019',
            title: 'JavaScript 2019',
            done: true,
            inProcess: false,
            finalWork: false,
            finalWorkGithubUrl: 'url',
            comments: [],
            show: false,
            body: [
                {
                    id: uuidv4(),
                    title: 'Знакомство с языком',
                    inProcess: false,
                    done: true,
                    show: false,
                    lessons: [
                        {
                            title: 'Интро',
                            done: true,
                        },
                        {
                            title: 'Что умеет JavaScript и почему он так популярен?',
                            done: true,
                        },
                        {
                            title: 'Инструменты разработчика',
                            done: true,
                        },
                        {
                            title: 'Hello, world!',
                            done: true,
                        },
                        {
                            title: 'Синтаксис языка',
                            done: true,
                        },
                        {
                            title: 'Аутро',
                            done: true,
                        },
                        {
                            title: 'Домашняя работа',
                            done: true,
                            githubLink: 'https://github.com/Coremotor/cource-javascript-developer-2019/tree/master/JS_%D0%9C%D0%BE%D0%B4%D1%83%D0%BB%D1%8C_1',
                        },
                    ],
                },
                {
                    id: uuidv4(),
                    title: 'Основы',
                    inProcess: false,
                    done: true,
                    show: false,
                    lessons: [
                        {
                            title: 'Приветственное видео',
                            done: true,
                        },
                        {
                            title: 'Интро',
                            done: true,
                        },
                        {
                            title: 'Числа',
                            done: true,
                        },
                        {
                            title: 'Строки',
                            done: true,
                        },
                        {
                            title: 'Логические (булевые) значения',
                            done: true,
                        },
                        {
                            title: 'NaN (Not a Number)',
                            done: true,
                        },
                        {
                            title: 'Infinity',
                            done: true,
                        },
                        {
                            title: 'Математические операторы',
                            done: true,
                        },
                        {
                            title: 'Переменные',
                            done: true,
                        },
                        {
                            title: 'Преобразование типов',
                            done: true,
                        },
                        {
                            title: 'Условия',
                            done: true,
                        },
                        {
                            title: 'Циклы',
                            done: true,
                        },
                        {
                            title: 'Домашняя работа',
                            done: true,
                            githubLink: 'https://github.com/Coremotor/cource-javascript-developer-2019/tree/master/JS_%D0%9C%D0%BE%D0%B4%D1%83%D0%BB%D1%8C_2',
                        },
                    ],
                },
                {
                    id: uuidv4(),
                    title: 'Функции',
                    inProcess: false,
                    done: true,
                    show: false,
                    lessons: [
                        {
                            title: 'Переходим к следующему модулю',
                            done: true,
                        },
                        {
                            title: 'Интро',
                            done: true,
                        },
                        {
                            title: 'Объявление и вызов функций',
                            done: true,
                        },
                        {
                            title: 'Аргументы',
                            done: true,
                        },
                        {
                            title: 'Локальные и глобальные переменные',
                            done: true,
                        },
                        {
                            title: 'Hoisting',
                            done: true,
                        },
                        {
                            title: 'Возвращаемые значения',
                            done: true,
                        },
                        {
                            title: 'Рекурсия',
                            done: true,
                        },
                        {
                            title: 'Домашняя работа',
                            done: true,
                            githubLink: 'https://github.com/Coremotor/cource-javascript-developer-2019/tree/master/JS_%D0%9C%D0%BE%D0%B4%D1%83%D0%BB%D1%8C_3',
                        },
                    ],
                },
                {
                    id: uuidv4(),
                    title: 'Массивы и объекты',
                    inProcess: false,
                    done: true,
                    show: false,
                    lessons: [
                        {
                            title: 'Понятие объектов',
                            done: true,
                        },
                        {
                            title: 'Объекты в JavaScript',
                            done: true,
                        },
                        {
                            title: 'Перебор свойств объекта',
                            done: true,
                        },
                        {
                            title: 'Массивы',
                            done: true,
                        },
                        {
                            title: 'Стандартный объект Math',
                            done: true,
                        },
                        {
                            title: 'Стандартный объект String',
                            done: true,
                        },
                        {
                            title: 'Стандартный объект Array',
                            done: true,
                        },
                        {
                            title: 'Стандартный объект Date',
                            done: true,
                        },
                        {
                            title: 'Домашняя работа',
                            done: true,
                            githubLink: 'https://github.com/Coremotor/cource-javascript-developer-2019/tree/master/JS_%D0%9C%D0%BE%D0%B4%D1%83%D0%BB%D1%8C_4',
                        },
                    ],
                },
                {
                    id: uuidv4(),
                    title: 'Замыкания',
                    inProcess: false,
                    done: true,
                    show: false,
                    lessons: [
                        {
                            title: 'Глобальный объект window',
                            done: true,
                        },
                        {
                            title: 'Сборщик мусора',
                            done: true,
                        },
                        {
                            title: 'Замыкания',
                            done: true,
                        },
                        {
                            title: 'IIFE',
                            done: true,
                        },
                        {
                            title: 'Домашняя работа',
                            done: true,
                            githubLink: 'https://github.com/Coremotor/cource-javascript-developer-2019/tree/master/JS_%D0%9C%D0%BE%D0%B4%D1%83%D0%BB%D1%8C_5',
                        },
                    ],
                },
                {
                    id: uuidv4(),
                    title: 'Объекты и конструкторы',
                    inProcess: false,
                    done: true,
                    show: false,
                    lessons: [
                        {
                            title: 'Функции-конструкторы',
                            done: true,
                        },
                        {
                            title: 'Контекст вызова',
                            done: true,
                        },
                        {
                            title: 'Привязка контекста (call, apply и bind)',
                            done: true,
                        },
                        {
                            title: 'Домашняя работа',
                            done: true,
                            githubLink: 'https://github.com/Coremotor/cource-javascript-developer-2019/tree/master/JS_%D0%9C%D0%BE%D0%B4%D1%83%D0%BB%D1%8C_6',
                        },
                    ],
                },
                {
                    id: uuidv4(),
                    title: 'Объектно-ориентированное программирование',
                    inProcess: false,
                    done: true,
                    show: false,
                    lessons: [
                        {
                            title: 'ООП. Наследование, инкапсуляция, полиморфизм',
                            done: true,
                        },
                        {
                            title: 'Функциональное наследование',
                            done: true,
                        },
                        {
                            title: 'Прототипное наследование',
                            done: true,
                        },
                        {
                            title: 'Прототипы стандартных объектов',
                            done: true,
                        },
                        {
                            title: 'Домашняя работа',
                            done: true,
                            githubLink: 'https://github.com/Coremotor/cource-javascript-developer-2019/tree/master/JS_%D0%9C%D0%BE%D0%B4%D1%83%D0%BB%D1%8C_7',
                        },
                    ],
                },
                {
                    id: uuidv4(),
                    title: 'Разное',
                    inProcess: false,
                    done: true,
                    show: false,
                    lessons: [
                        {
                            title: 'Объект arguments',
                            done: true,
                        },
                        {
                            title: 'setTimeout и setInterval',
                            done: true,
                        },
                        {
                            title: 'Выполнение кода через eval',
                            done: true,
                        },
                        {
                            title: 'Обработка исключений (throw, catch)',
                            done: true,
                        },
                        {
                            title: 'Регулярные выражения',
                            done: true,
                        },
                        {
                            title: 'Строгий режим (strict mode)',
                            done: true,
                        },
                        {
                            title: 'Домашняя работа',
                            done: true,
                            githubLink: 'https://github.com/Coremotor/cource-javascript-developer-2019/tree/master/JS_%D0%9C%D0%BE%D0%B4%D1%83%D0%BB%D1%8C_8',
                        },
                    ],
                },
                {
                    id: uuidv4(),
                    title: 'JavaScript в браузере. DOM',
                    inProcess: false,
                    done: true,
                    show: false,
                    lessons: [
                        {
                            title: 'Интро',
                            done: true,
                        },
                        {
                            title: 'DOM',
                            done: true,
                        },
                        {
                            title: 'Порядок выполнения скриптов',
                            done: true,
                        },
                        {
                            title: 'Селекторы',
                            done: true,
                        },
                        {
                            title: 'Свойства и методы элементов',
                            done: true,
                        },
                        {
                            title: 'События и обработчики',
                            done: true,
                        },
                        {
                            title: 'Погружение и всплытие событий',
                            done: true,
                        },
                        {
                            title: 'Домашняя работа',
                            done: true,
                            githubLink: 'https://github.com/Coremotor/cource-javascript-developer-2019/tree/master/JS_%D0%9C%D0%BE%D0%B4%D1%83%D0%BB%D1%8C_9',
                        },
                    ],
                },
                {
                    id: uuidv4(),
                    title: 'Web API',
                    inProcess: false,
                    done: true,
                    show: false,
                    lessons: [
                        {
                            title: 'Интро',
                            done: true,
                        },
                        {
                            title: 'Console',
                            done: true,
                        },
                        {
                            title: 'Window',
                            done: true,
                        },
                        {
                            title: 'Document',
                            done: true,
                        },
                        {
                            title: 'Информация о браузере и истории переходов',
                            done: true,
                        },
                        {
                            title: 'LocalStorage и SessionStorage',
                            done: true,
                        },
                        {
                            title: 'ContentEditable',
                            done: true,
                        },
                        {
                            title: 'Разнообразие Web API',
                            done: true,
                        },
                        {
                            title: 'Домашняя работа',
                            done: true,
                            githubLink: 'https://github.com/Coremotor/cource-javascript-developer-2019/tree/master/JS_%D0%9C%D0%BE%D0%B4%D1%83%D0%BB%D1%8C_10',
                        },
                    ],
                },
                {
                    id: uuidv4(),
                    title: 'Клиент и сервер',
                    inProcess: false,
                    done: true,
                    show: false,
                    lessons: [
                        {
                            title: 'Клиент-серверное взаимодействие (интро)',
                            done: true,
                        },
                        {
                            title: 'Запуск локального сервера',
                            done: true,
                        },
                        {
                            title: 'AJAX и callback',
                            done: true,
                        },
                        {
                            title: 'JSON и Promise',
                            done: true,
                        },
                        {
                            title: 'API и WebSocket',
                            done: true,
                        },
                        {
                            title: 'Домашняя работа',
                            done: true,
                            githubLink: 'https://github.com/Coremotor/cource-javascript-developer-2019/tree/master/JS_%D0%9C%D0%BE%D0%B4%D1%83%D0%BB%D1%8C_11',
                        },
                    ],
                },
                {
                    id: uuidv4(),
                    title: 'jQuery',
                    inProcess: false,
                    done: true,
                    show: false,
                    lessons: [
                        {
                            title: 'Библиотека jQuery. Интро',
                            done: true,
                        },
                        {
                            title: 'Библиотеки и frameworks. Интро',
                            done: true,
                        },
                        {
                            title: 'Возможности jQuery',
                            done: true,
                        },
                        {
                            title: 'Анимация',
                            done: true,
                        },
                        {
                            title: 'AJAX',
                            done: true,
                        },
                        {
                            title: 'Плагины',
                            done: true,
                        },
                        {
                            title: 'Домашняя работа',
                            done: true,
                            githubLink: 'https://github.com/Coremotor/cource-javascript-developer-2019/tree/master/JS_%D0%9C%D0%BE%D0%B4%D1%83%D0%BB%D1%8C_12',
                        },
                    ],
                },
                {
                    id: uuidv4(),
                    title: 'Современный JavaScript. ES 2015',
                    inProcess: false,
                    done: true,
                    show: false,
                    lessons: [
                        {
                            title: 'История стандарта ECMAScript. Интро',
                            done: true,
                        },
                        {
                            title: 'Транспиляция и полифиллы',
                            done: true,
                        },
                        {
                            title: 'Let и const',
                            done: true,
                        },
                        {
                            title: 'Деструктуризация',
                            done: true,
                        },
                        {
                            title: 'Rest и spread',
                            done: true,
                        },
                        {
                            title: 'Template strings',
                            done: true,
                        },
                        {
                            title: 'Стрелочные функции и параметры по умолчанию',
                            done: true,
                        },
                        {
                            title: 'Классы и наследование',
                            done: true,
                        },
                        {
                            title: 'Домашняя работа',
                            done: true,
                            githubLink: 'https://github.com/Coremotor/cource-javascript-developer-2019/tree/master/JS_%D0%9C%D0%BE%D0%B4%D1%83%D0%BB%D1%8C_13',
                        },
                    ],
                },
                {
                    id: uuidv4(),
                    title: 'Сборка проектов',
                    inProcess: false,
                    done: true,
                    show: false,
                    lessons: [
                        {
                            title: 'Интро. Что такое сборка проектов и для чего она нужна?',
                            done: true,
                        },
                        {
                            title: 'Node.js',
                            done: true,
                        },
                        {
                            title: 'npm',
                            done: true,
                        },
                        {
                            title: 'Gulp',
                            done: true,
                        },
                        {
                            title: 'Webpack',
                            done: true,
                        },
                        {
                            title: 'Домашняя работа',
                            done: true,
                            githubLink: 'https://github.com/Coremotor/cource-javascript-developer-2019/tree/master/JS_%D0%9C%D0%BE%D0%B4%D1%83%D0%BB%D1%8C_14',
                        },
                    ],
                },
                {
                    id: uuidv4(),
                    title: 'React',
                    inProcess: false,
                    done: true,
                    show: false,
                    lessons: [
                        {
                            title: 'DOM и императивный подход. Интро',
                            done: true,
                        },
                        {
                            title: 'React и декларативный подход',
                            done: true,
                        },
                        {
                            title: 'Подготовка рабочего пространства',
                            done: true,
                        },
                        {
                            title: 'Простое React-приложение',
                            done: true,
                        },
                        {
                            title: 'Разделение на компоненты',
                            done: true,
                        },
                        {
                            title: 'Домашняя работа',
                            done: true,
                            githubLink: 'https://github.com/Coremotor/cource-javascript-developer-2019/tree/master/JS_%D0%9C%D0%BE%D0%B4%D1%83%D0%BB%D1%8C_15_react-app',
                        },
                    ],
                },
                {
                    id: uuidv4(),
                    title: 'Redux',
                    inProcess: false,
                    done: true,
                    show: false,
                    lessons: [
                        {
                            title: 'Последний модуль. Осталось чуть-чуть!',
                            done: true,
                        },
                        {
                            title: 'Интро',
                            done: true,
                        },
                        {
                            title: 'Ключевые принципы Redux',
                            done: true,
                        },
                        {
                            title: 'Установка зависимостей и разделение на компоненты',
                            done: true,
                        },
                        {
                            title: 'Создание store и reducers',
                            done: true,
                        },
                        {
                            title: 'Создание actions',
                            done: true,
                        },
                        {
                            title: 'Запуск приложения',
                            done: true,
                        },
                        {
                            title: 'Домашняя работа',
                            done: true,
                            githubLink: 'https://github.com/Coremotor/cource-javascript-developer-2019/tree/master/JS_%D0%9C%D0%BE%D0%B4%D1%83%D0%BB%D1%8C_16_react-redux-app',
                        },
                    ],
                },
                {
                    id: uuidv4(),
                    title: 'Бонус',
                    inProcess: false,
                    done: true,
                    show: false,
                    lessons: [
                        {
                            title: 'Библиотеки и фреймворки 2017',
                            done: true,
                        },
                        {
                            title: 'Развитие стандарта ECMAScri',
                            done: true,
                        },
                        {
                            title: 'Тестирование кода',
                            done: true,
                        },
                    ],
                },
            ]
        },
        javascript2020: {
            id: 'javascript2020',
            title: 'JavaScript 2020',
            done: false,
            inProcess: true,
            finalWork: false,
            finalWorkGithubUrl: 'url',
            comments: [],
            show: false,
            body: [
                {
                    id: uuidv4(),
                    title: 'Введение',
                    inProcess: false,
                    done: true,
                    show: false,
                    lessons: [
                        {
                            title: 'О курсе',
                            done: true,
                        },
                        {
                            title: 'JavaScript и области применения',
                            done: true,
                        },
                        {
                            title: 'Инструменты разработчика',
                            done: true,
                        },
                        {
                            title: 'Первый проект',
                            done: true,
                        },
                    ],
                },
                {
                    id: uuidv4(),
                    title: 'Переменные и работа с числами',
                    inProcess: false,
                    done: true,
                    show: false,
                    lessons: [
                        {
                            title: 'Переменные let',
                            done: true,
                        },
                        {
                            title: 'Числа',
                            done: true,
                        },
                        {
                            title: 'Математические операторы',
                            done: true,
                        },
                        {
                            title: 'Практика работы с числами',
                            done: true,
                        },
                        {
                            title: 'Функции работы с числами',
                            done: true,
                        },
                        {
                            title: 'Сравнение чисел',
                            done: true,
                        },
                        {
                            title: 'Практика сравнения чисел и Math',
                            done: true,
                        },
                        {
                            title: 'Домашняя работа',
                            done: true,
                            githubLink: 'https://github.com/Coremotor/course-javascript-developer-2020/tree/master/module_2',
                        },
                    ],
                },
                {
                    id: uuidv4(),
                    title: 'Строки, boolean и условные операторы',
                    inProcess: false,
                    done: true,
                    show: false,
                    lessons: [
                        {
                            title: 'Типы данных',
                            done: true,
                        },
                        {
                            title: 'Строка',
                            done: true,
                        },
                        {
                            title: 'Boolean',
                            done: true,
                        },
                        {
                            title: 'Типы и сравнение',
                            done: true,
                        },
                        {
                            title: 'Условные операторы',
                            done: true,
                        },
                        {
                            title: 'Практика условий и сравнений',
                            done: true,
                        },
                        {
                            title: 'Тернарный оператор',
                            done: true,
                        },
                        {
                            title: 'Основы булевой алгебры',
                            done: true,
                        },
                        {
                            title: 'Домашняя работа',
                            done: true,
                            githubLink: 'https://github.com/Coremotor/course-javascript-developer-2020/tree/master/module_3',
                        },
                    ],
                },
                {
                    id: uuidv4(),
                    title: 'Массивы и циклы',
                    inProcess: false,
                    done: true,
                    show: false,
                    lessons: [
                        {
                            title: 'Примитивные типы и массивы',
                            done: true,
                        },
                        {
                            title: 'Что такое массив',
                            done: true,
                        },
                        {
                            title: 'Цикл for',
                            done: true,
                        },
                        {
                            title: 'Циклы for of, for in',
                            done: true,
                        },
                        {
                            title: 'Циклы while и do-while',
                            done: true,
                        },
                        {
                            title: 'Операторы continue и break',
                            done: true,
                        },
                        {
                            title: 'Какой цикл выбрать',
                            done: true,
                        },
                        {
                            title: 'Домашняя работа',
                            done: true,
                            githubLink: 'https://github.com/Coremotor/course-javascript-developer-2020/tree/master/module_4',
                        },
                    ],
                },
                {
                    id: uuidv4(),
                    title: 'Функции',
                    inProcess: false,
                    done: true,
                    show: false,
                    lessons: [
                        {
                            title: 'Intro: Переиспользование кода',
                            done: true,
                        },
                        {
                            title: 'Базовый синтаксис',
                            done: true,
                        },
                        {
                            title: 'Аргументы функции',
                            done: true,
                        },
                        {
                            title: 'Возвращаемое значение и undefined',
                            done: true,
                        },
                        {
                            title: 'undefined и null',
                            done: true,
                        },
                        {
                            title: 'Именование',
                            done: true,
                        },
                        {
                            title: 'Домашняя работа',
                            done: true,
                            githubLink: 'https://github.com/Coremotor/course-javascript-developer-2020/tree/master/module_5',
                        },
                    ],
                },
                {
                    id: uuidv4(),
                    title: 'Объекты',
                    inProcess: false,
                    done: true,
                    show: false,
                    lessons: [
                        {
                            title: 'Intro',
                            done: true,
                        },
                        {
                            title: 'Синтаксис объекта',
                            done: true,
                        },
                        {
                            title: 'Методы объекта и this',
                            done: true,
                        },
                        {
                            title: 'Операции над объектами',
                            done: true,
                        },
                        {
                            title: 'Объекты и циклы',
                            done: true,
                        },
                        {
                            title: 'typeof и система типов',
                            done: true,
                        },
                        {
                            title: 'Домашняя работа',
                            done: true,
                            githubLink: 'https://github.com/Coremotor/course-javascript-developer-2020/tree/master/module_6',
                        },
                    ],
                },
                {
                    id: uuidv4(),
                    title: 'Константы, области видимости и замыкания (откроется 11.09.2020)',
                    inProcess: false,
                    done: false,
                    show: false,
                    lessons: [],
                    inDevelopment: true,
                },
                {
                    id: uuidv4(),
                    title: 'Преобразование типов и нестрогие сравнения (откроется 29.09.2020)',
                    inProcess: false,
                    done: false,
                    show: false,
                    lessons: [],
                    inDevelopment: true,
                },
                {
                    id: uuidv4(),
                    title: 'Введение в DOM (откроется 15.10.2020)',
                    inProcess: false,
                    done: false,
                    show: false,
                    lessons: [],
                    inDevelopment: true,
                },
                {
                    id: uuidv4(),
                    title: 'Обработка событий и пользовательский ввод (откроется 03.11.2020)',
                    inProcess: false,
                    done: false,
                    show: false,
                    lessons: [],
                    inDevelopment: true,
                },
                {
                    id: uuidv4(),
                    title: 'Разработчик и soft skills',
                    inProcess: false,
                    done: false,
                    show: false,
                    lessons: [],
                    inDevelopment: true,
                },
                {
                    id: uuidv4(),
                    title: 'Модули',
                    inProcess: false,
                    done: false,
                    show: false,
                    lessons: [],
                    inDevelopment: true,
                },
                {
                    id: uuidv4(),
                    title: 'Npm, package.json',
                    inProcess: false,
                    done: false,
                    show: false,
                    lessons: [],
                    inDevelopment: true,
                },
                {
                    id: uuidv4(),
                    title: 'Event loop и асинхронная разработка',
                    inProcess: false,
                    done: false,
                    show: false,
                    lessons: [],
                    inDevelopment: true,
                },
                {
                    id: uuidv4(),
                    title: 'Методы объекта и прототипы',
                    inProcess: false,
                    done: false,
                    show: false,
                    lessons: [],
                    inDevelopment: true,
                },
                {
                    id: uuidv4(),
                    title: 'Тестирование',
                    inProcess: false,
                    done: false,
                    show: false,
                    lessons: [],
                    inDevelopment: true,
                },
                {
                    id: uuidv4(),
                    title: 'Обработка ошибок',
                    inProcess: false,
                    done: false,
                    show: false,
                    lessons: [],
                    inDevelopment: true,
                },
                {
                    id: uuidv4(),
                    title: 'Общение с сервером, async/await',
                    inProcess: false,
                    done: false,
                    show: false,
                    lessons: [],
                    inDevelopment: true,
                },
                {
                    id: uuidv4(),
                    title: 'События',
                    inProcess: false,
                    done: false,
                    show: false,
                    lessons: [],
                    inDevelopment: true,
                },
                {
                    id: uuidv4(),
                    title: 'ООП и его реализация в JavaScript',
                    inProcess: false,
                    done: false,
                    show: false,
                    lessons: [],
                    inDevelopment: true,
                },
                {
                    id: uuidv4(),
                    title: 'ФП, работа с массивами и строками',
                    inProcess: false,
                    done: false,
                    show: false,
                    lessons: [],
                    inDevelopment: true,
                },
            ]
        },
        reactjs: {
            id: 'reactjs',
            title: 'JavaScript-фреймворк React.js',
            done: false,
            inProcess: true,
            finalWork: false,
            finalWorkGithubUrl: 'url',
            comments: [],
            show: false,
            body: [
                {
                    id: uuidv4(),
                    title: 'Введение в React',
                    inProcess: false,
                    done: true,
                    show: false,
                    lessons: [
                        {
                            title: 'Что такое React. Основные преимущества',
                            done: true,
                        },
                        {
                            title: 'Основы декларативного подхода',
                            done: true,
                        },
                        {
                            title: 'Возможности React, компоненты, состояние, применения',
                            done: true,
                        },
                        {
                            title: 'Экосистема React, основные библиотеки, из чего обычно состоит реакт',
                            done: true,
                        },
                    ],
                },
                {
                    id: uuidv4(),
                    title: 'Создание проекта',
                    inProcess: false,
                    done: true,
                    show: false,
                    lessons: [
                        {
                            title: 'Конфигурация webpack на клиенте',
                            done: true,
                        },
                        {
                            title: 'Конфигурация webpack на сервере',
                            done: true,
                        },
                        {
                            title: 'Подключаем к проекту HMR и SSR',
                            done: true,
                        },
                        {
                            title: 'Подключаем typescript',
                            done: true,
                        },
                        {
                            title: 'CSS modules, Jest, Enzyme',
                            done: true,
                        },
                    ],
                },
                // {
                //     id: uuidv4(),
                //     title: 'Typescript',
                //     inProcess: false,
                //     done: true,
                //     show: false,
                //     lessons: [
                //         {
                //             title: 'Основы Typescript, Типы',
                //             done: true,
                //         },
                //         {
                //             title: 'Работа с массивами',
                //             done: true,
                //         },
                //         {
                //             title: 'Работа с объектами и интерфейсами',
                //             done: true,
                //         },
                //         {
                //             title: 'Типизация функций и типы ТС',
                //             done: true,
                //         },
                //         {
                //             title: 'Generics',
                //             done: true,
                //         },
                //         {
                //             title: 'Классы',
                //             done: true,
                //         },
                //         {
                //             title: 'Infer, typeof, keyof, Mapped Types',
                //             done: true,
                //         },
                //     ],
                // },
                {
                    id: uuidv4(),
                    title: 'Компоненты на примере новостной карточки Reddit',
                    inProcess: false,
                    done: true,
                    show: false,
                    lessons: [
                        {
                            title: 'Компоненты в React',
                            done: true,
                        },
                        {
                            title: 'Состояния в Class Components',
                            done: true,
                        },
                        {
                            title: 'Состояния в Functional Components',
                            done: true,
                        },
                        {
                            title: 'Создаем Layout приложения. Часть 1',
                            done: true,
                        },
                        {
                            title: 'Создаем Layout приложения. Часть 2',
                            done: true,
                        },
                        {
                            title: 'Создаем компонент новостной карточки',
                            done: true,
                        },
                        {
                            title: 'Жизненный цикл компонента',
                            done: true,
                        },
                    ],
                },
                {
                    id: uuidv4(),
                    title: 'Hooks и Функциональное программирование',
                    inProcess: false,
                    done: true,
                    show: false,
                    lessons: [
                        {
                            title: 'Карирование и Функции высшего порядка',
                            done: true,
                        },
                        {
                            title: 'Hooks в реакт',
                            done: true,
                        },
                        {
                            title: 'Map Reduce React',
                            done: true,
                        },
                        {
                            title: 'Создание компонента dropdown c использованием hooks',
                            done: true,
                        },
                        {
                            title: 'Compose, Pipe и применение в React',
                            done: true,
                        },
                    ],
                },
                {
                    id: uuidv4(),
                    title: 'Больше о компонентах и введение в тестирование компонентов',
                    inProcess: false,
                    done: true,
                    show: false,
                    lessons: [
                        {
                            title: 'Адаптивные и неадаптивные компоненты. Mobile first и desktop first в адаптиве. Разница в подходах',
                            done: true,
                        },
                        {
                            title: 'Дропдаун меню',
                            done: true,
                        },
                        {
                            title: 'Введение в unit тесты и jest',
                            done: true,
                        },
                        {
                            title: 'Пишем тест на реакт компонент Enzyme vs Snapshots',
                            done: true,
                        },
                        {
                            title: 'Вспомогательные компоненты',
                            done: true,
                        },
                    ],
                },
                {
                    id: uuidv4(),
                    title: 'Работа с публичным API на примере Reddit',
                    inProcess: false,
                    done: true,
                    show: false,
                    lessons: [
                        {
                            title: 'Как работать с API',
                            done: true,
                        },
                        {
                            title: 'Регистрируем аккаунт разработчика на Reddit',
                            done: true,
                        },
                        {
                            title: 'OAuth2',
                            done: true,
                        },
                        {
                            title: 'Авторизация пользователя',
                            done: true,
                        },
                        {
                            title: 'Как структурировать API запросы',
                            done: true,
                        },
                    ],
                },
                {
                    id: uuidv4(),
                    title: 'Введение в Redux на примере Новостной ленты (откроется 08.09.2020)',
                    inProcess: false,
                    done: false,
                    show: false,
                    lessons: [],
                    inDevelopment: true,
                },
                {
                    id: uuidv4(),
                    title: 'Использование Redux-Thunk на примере бесконечной ленты (откроется 29.09.2020)',
                    inProcess: false,
                    done: false,
                    show: false,
                    lessons: [],
                    inDevelopment: true,
                },
                {
                    id: uuidv4(),
                    title: 'Сайдбар + роутинг (откроется 30.09.2020)',
                    inProcess: false,
                    done: false,
                    show: false,
                    lessons: [],
                    inDevelopment: true,
                },
                {
                    id: uuidv4(),
                    title: 'Формы на примере комментариев и карточки поста (откроется 20.10.2020)',
                    inProcess: false,
                    done: false,
                    show: false,
                    lessons: [],
                    inDevelopment: true,
                },
                {
                    id: uuidv4(),
                    title: 'Оптимизируем приложение (откроется 30.11.2020)',
                    inProcess: false,
                    done: false,
                    show: false,
                    lessons: [],
                    inDevelopment: true,
                },
                {
                    id: uuidv4(),
                    title: 'SSR + NextJS (откроется 21.12.2020)',
                    inProcess: false,
                    done: false,
                    show: false,
                    lessons: [],
                    inDevelopment: true,
                },
                {
                    id: uuidv4(),
                    title: 'Бонус-модуль: Mobx (откроется 21.12.2020)',
                    inProcess: false,
                    done: false,
                    show: false,
                    lessons: [],
                    inDevelopment: true,
                },
            ]
        },
        vuejs: {
            id: 'vuejs',
            title: 'Фреймворк Vue.js',
            done: false,
            inProcess: true,
            finalWork: false,
            finalWorkGithubUrl: 'url',
            comments: [],
            show: false,
            body: [
                {
                    id: uuidv4(),
                    title: 'Основы Vue',
                    inProcess: false,
                    done: true,
                    show: false,
                    lessons: [
                        {
                            title: 'Что такое Vue. Реактивный подход',
                            done: true,
                        },
                        {
                            title: 'Онлайн-сервисы для работы с кодом. Настройки окружения в codepen.io для Vue',
                            done: true,
                        },
                        {
                            title: 'Разбираем код примера. Еще немного о реактивности',
                            done: true,
                        },
                        {
                            title: 'Делаем todo-лист. Директива V-bind',
                            done: true,
                        },
                        {
                            title: 'Делаем todo-лист. Директива V-for, циклы',
                            done: true,
                        },
                    ],
                },
                {
                    id: uuidv4(),
                    title: 'Создание проекта',
                    inProcess: false,
                    done: true,
                    show: false,
                    lessons: [
                        {
                            title: 'Делаем todo-лист. Директивы V-on и V-model',
                            done: true,
                        },
                        {
                            title: 'Делаем todo-лист. Функции. Директивы V-else, V-show',
                            done: true,
                        },
                        {
                            title: 'Концепт курса',
                            done: true,
                        },
                        {
                            title: 'Установка проекта через vue-cli',
                            done: true,
                        },
                        {
                            title: 'Подготовка среды для работы над проектом',
                            done: true,
                        },
                    ],
                },
                {
                    id: uuidv4(),
                    title: 'Каталог товаров',
                    inProcess: false,
                    done: true,
                    show: false,
                    lessons: [
                        {
                            title: 'Vue как фреймворк. Компоненты',
                            done: true,
                        },
                        {
                            title: 'Vue как фреймворк. Модули',
                            done: true,
                        },
                        {
                            title: 'Однофайловый компонент',
                            done: true,
                        },
                        {
                            title: 'Передача параметров в компоненты',
                            done: true,
                        },
                        {
                            title: 'Компонент товара',
                            done: true,
                        },
                    ],
                },
                {
                    id: uuidv4(),
                    title: 'Пагинация и фильтрация',
                    inProcess: false,
                    done: false,
                    show: false,
                    lessons: [
                        {
                            title: 'Вычисляемые свойства',
                            done: false,
                        },
                        {
                            title: 'Пользовательские события',
                            done: false,
                        },
                        {
                            title: 'Создание пагинации в списке товаров',
                            done: false,
                        },
                        {
                            title: 'Атрибут key для списка',
                            done: false,
                        },
                        {
                            title: 'Фильтрация каталога. Геттеры/Сеттеры вычисляемых свойств. Методы-наблюдатели',
                            done: false,
                        },
                        {
                            title: 'Домашняя работа',
                            done: false,
                            githubLink: 'url',
                        },
                    ],
                },
                {
                    id: uuidv4(),
                    title: 'Страница товара',
                    inProcess: false,
                    done: false,
                    show: false,
                    lessons: [
                        {
                            title: 'Переключение страниц',
                            done: false,
                        },
                        {
                            title: 'Хуки жизненного цикла компонента. Шина событий',
                            done: false,
                        },
                        {
                            title: 'Карточка товара. Фильтры данных',
                            done: false,
                        },
                        {
                            title: 'Домашняя работа',
                            done: false,
                            githubLink: 'url',
                        },
                    ],
                },
                {
                    id: uuidv4(),
                    title: 'Корзина',
                    inProcess: false,
                    done: false,
                    show: false,
                    lessons: [
                        {
                            title: 'Vue-роутер',
                            done: false,
                        },
                        {
                            title: 'Установка и настройка Vuex',
                            done: false,
                        },
                        {
                            title: 'Изменение данных в хранилище',
                            done: false,
                        },
                        {
                            title: 'Страница корзины. Vuex – Геттеры',
                            done: false,
                        },
                        {
                            title: 'Удаление товаров из корзины и изменение количества',
                            done: false,
                        },
                        {
                            title: 'Домашняя работа',
                            done: false,
                            githubLink: 'url',
                        },
                    ],
                },
                {
                    id: uuidv4(),
                    title: 'Работа с API. Список товаров',
                    inProcess: false,
                    done: false,
                    show: false,
                    lessons: [
                        {
                            title: 'Асинхронность JavaScript. Promises',
                            done: false,
                        },
                        {
                            title: 'Взаимодействие с сервером',
                            done: false,
                        },
                        {
                            title: 'Выводим список товаров и пагинацию из API',
                            done: false,
                        },
                        {
                            title: 'Фильтрация списка товаров из API',
                            done: false,
                        },
                        {
                            title: 'Обработка загрузки и ошибок',
                            done: false,
                        },
                        {
                            title: 'Страница товара',
                            done: false,
                        },
                        {
                            title: 'Корзина товаров. Действия во Vuex',
                            done: false,
                        },
                        {
                            title: 'Управление товарами в корзине',
                            done: false,
                        },
                        {
                            title: 'Домашняя работа',
                            done: false,
                            githubLink: 'url',
                        },
                    ],
                },
                {
                    id: uuidv4(),
                    title: 'Работа с API. Оформление заказа',
                    inProcess: false,
                    done: false,
                    show: false,
                    lessons: [
                        {
                            title: 'Форма оформления заказа. Слоты и примеси',
                            done: false,
                        },
                        {
                            title: 'Оформление заказа. Отправка данных на сервере и обработка ошибок',
                            done: false,
                        },
                        {
                            title: 'Страница успешно оформленного заказа',
                            done: false,
                        },
                        {
                            title: 'Домашняя работа',
                            done: false,
                            githubLink: 'url',
                        },
                    ],
                },
                {
                    id: uuidv4(),
                    title: 'Деплой',
                    inProcess: false,
                    done: false,
                    show: false,
                    lessons: [
                        {
                            title: 'Публикация приложения в GitHub Pages',
                            done: false,
                        },
                        {
                            title: 'Заключительный урок. В каком направлении развиваться дальше',
                            done: false,
                        },
                        {
                            title: 'Домашняя работа',
                            done: false,
                            githubLink: 'url',
                        },
                    ],
                },
            ]
        },
        nodejs: {
            id: 'nodejs',
            title: 'Node.js',
            done: false,
            inProcess: false,
            finalWork: false,
            finalWorkGithubUrl: 'url',
            comments: [],
            show: false,
            body: [
                {
                    id: uuidv4(),
                    title: 'Введение',
                    inProcess: false,
                    done: false,
                    show: false,
                    lessons: [
                        {
                            title: 'Промо-ролик. Краткое описание курса. Минимальные требования',
                            done: false,
                        },
                        {
                            title: 'Контекст: краткая история JavaScript',
                            done: false,
                        },
                        {
                            title: 'Контекст: краткая история и особенности Node.js',
                            done: false,
                        },
                    ],
                },
                {
                    id: uuidv4(),
                    title: 'Подготовка рабочей среды',
                    inProcess: false,
                    done: false,
                    show: false,
                    lessons: [
                        {
                            title: 'Интро',
                            done: false,
                        },
                        {
                            title: 'Подготовка рабочей среды',
                            done: false,
                        },
                        {
                            title: 'Node.js и npm',
                            done: false,
                        },
                        {
                            title: 'Система контроля версий git',
                            done: false,
                        },
                        {
                            title: 'Базовый редактор: VSCode',
                            done: false,
                        },
                        {
                            title: 'Домашняя работа',
                            done: false,
                            githubLink: 'url',
                        },
                    ],
                },
                {
                    id: uuidv4(),
                    title: 'Hello, world!',
                    inProcess: false,
                    done: false,
                    show: false,
                    lessons: [
                        {
                            title: 'Введение',
                            done: false,
                        },
                        {
                            title: 'Первая Node.js программа',
                            done: false,
                        },
                        {
                            title: 'Package.json и semver',
                            done: true,
                        },
                        {
                            title: 'Шаблон проекта',
                            done: false,
                        },
                        {
                            title: 'Домашняя работа',
                            done: false,
                            githubLink: 'url',
                        },
                    ],
                },
                {
                    id: uuidv4(),
                    title: 'Решаем базовые задачи',
                    inProcess: false,
                    done: false,
                    show: false,
                    lessons: [
                        {
                            title: 'Документация Node.js, globals',
                            done: false,
                        },
                        {
                            title: 'Файловая система',
                            done: false,
                        },
                        {
                            title: 'HTTP-сервер',
                            done: false,
                        },
                        {
                            title: 'Полезные сторонние модули',
                            done: false,
                        },
                        {
                            title: 'HTTP запросы из Node.js',
                            done: false,
                        },
                        {
                            title: 'Домашняя работа',
                            done: false,
                            githubLink: 'url',
                        },
                    ],
                },
                {
                    id: uuidv4(),
                    title: 'Асинхронный код',
                    inProcess: false,
                    done: false,
                    show: false,
                    lessons: [
                        {
                            title: 'Введение',
                            done: false,
                        },
                        {
                            title: 'Callbacks',
                            done: false,
                        },
                        {
                            title: 'Promises',
                            done: false,
                        },
                        {
                            title: 'Promisify',
                            done: false,
                        },
                        {
                            title: 'async/await',
                            done: false,
                        },
                        {
                            title: 'Pro tip: Bluebird',
                            done: false,
                        },
                        {
                            title: 'Домашняя работа',
                            done: false,
                            githubLink: 'url',
                        },
                    ],
                },
                {
                    id: uuidv4(),
                    title: 'Express.js',
                    inProcess: false,
                    done: false,
                    show: false,
                    lessons: [
                        {
                            title: 'Введение',
                            done: false,
                        },
                        {
                            title: 'Рендеринг HTML',
                            done: false,
                        },
                        {
                            title: 'middleware',
                            done: false,
                        },
                        {
                            title: 'REST API',
                            done: false,
                        },
                        {
                            title: 'Загрузка файлов',
                            done: false,
                        },
                        {
                            title: 'Авторизация и аутентификация',
                            done: false,
                        },
                        {
                            title: 'Домашняя работа',
                            done: false,
                            githubLink: 'url',
                        },
                    ],
                },
                {
                    id: uuidv4(),
                    title: 'Базы данных, Реляционные ДБ',
                    inProcess: false,
                    done: false,
                    show: false,
                    lessons: [
                        {
                            title: 'Введение',
                            done: false,
                        },
                        {
                            title: 'Реляционные ДБ на примере PostgreSQL',
                            done: false,
                        },
                        {
                            title: 'PostgreSQL: подключение и запросы',
                            done: false,
                        },
                        {
                            title: 'Библиотека Knex',
                            done: false,
                        },
                        {
                            title: 'PostgreSQL: миграции',
                            done: false,
                        },
                        {
                            title: 'Авторизация',
                            done: false,
                        },
                        {
                            title: 'Другие актуальные реляционные БД',
                            done: false,
                        },
                        {
                            title: 'Домашняя работа',
                            done: false,
                            githubLink: 'url',
                        },
                    ],
                },
                {
                    id: uuidv4(),
                    title: 'Базы данных, Нереляционные БД (откроется 16.09.2020)',
                    inProcess: false,
                    done: false,
                    show: false,
                    lessons: [],
                    inDevelopment: true,
                },
                {
                    id: uuidv4(),
                    title: 'CLI программы (откроется 02.10.2020)',
                    inProcess: false,
                    done: false,
                    show: false,
                    lessons: [],
                    inDevelopment: true,
                },
                {
                    id: uuidv4(),
                    title: 'Углубляем теорию + продвинутые понятия (откроется 15.10.2020)',
                    inProcess: false,
                    done: false,
                    show: false,
                    lessons: [],
                    inDevelopment: true,
                },
                {
                    id: uuidv4(),
                    title: 'Real-time & WebSockets (откроется 02.11.2020)',
                    inProcess: false,
                    done: false,
                    show: false,
                    lessons: [],
                    inDevelopment: true,
                },
                {
                    id: uuidv4(),
                    title: 'Pro tips (откроется 19.11.2020)',
                    inProcess: false,
                    done: false,
                    show: false,
                    lessons: [],
                    inDevelopment: true,
                },
                {
                    id: uuidv4(),
                    title: 'Информация о дипломном проекте (откроется 07.12.2020)',
                    inProcess: false,
                    done: false,
                    show: false,
                    lessons: [],
                    inDevelopment: true,
                },
            ]
        },
        git: {
            id: 'git',
            title: 'Система контроля версий Git',
            done: true,
            inProcess: false,
            finalWork: false,
            finalWorkGithubUrl: 'url',
            comments: [],
            show: false,
            body: [
                {
                    id: uuidv4(),
                    title: 'Система контроля версий Git',
                    inProcess: false,
                    done: true,
                    show: true,
                    lessons: [
                        {
                            title: 'Версии программного кода',
                            done: true,
                        },
                        {
                            title: 'Установка Git',
                            done: true,
                        },
                        {
                            title: 'Индекс и частичные коммиты',
                            done: true,
                        },
                        {
                            title: 'Сравнение версий',
                            done: true,
                        },
                        {
                            title: 'Отмена изменений и откат версий',
                            done: true,
                        },
                        {
                            title: 'Репозитории и коллективная работа',
                            done: true,
                        },
                        {
                            title: 'Ветки: создание и управление',
                            done: true,
                        },
                        {
                            title: 'Слияние и разрешение конфликтов',
                            done: true,
                        },
                        {
                            title: 'Полезные инструменты',
                            done: true,
                        },
                        {
                            title: 'Правила работы с Git',
                            done: true,
                        },
                    ],
                },
            ]
        },
        phpDeveloperChapterOne: {
            id: 'phpDeveloperChapterOne',
            title: 'PHP-разработчик с нуля до PRO. Часть 1',
            done: false,
            inProcess: true,
            finalWork: false,
            finalWorkGithubUrl: 'url',
            comments: [],
            show: false,
            body: [
                {
                    id: uuidv4(),
                    title: 'Введение в программирование',
                    inProcess: false,
                    done: true,
                    show: false,
                    lessons: [
                        {
                            title: 'Вводная лекция ко всему курсу',
                            done: true,
                        },
                        {
                            title: 'Вводная лекция. Курс 1',
                            done: true,
                        },
                        {
                            title: 'Что такое программирование',
                            done: true,
                        },
                        {
                            title: 'Веб-сервер установка, настройки',
                            done: true,
                        },
                        {
                            title: 'Установка XAMPP на MacOS',
                            done: true,
                        },
                        {
                            title: 'Установка XAMPP на Linux',
                            done: true,
                        },
                        {
                            title: 'Настройка XAMPP на MacOS и Linux',
                            done: true,
                        },
                        {
                            title: 'Создание сайта в OS панели',
                            done: true,
                        },
                        {
                            title: 'Синтаксис PHP и редакторы кода',
                            done: true,
                        },
                        {
                            title: 'Практика — создание и использование переменных',
                            done: true,
                        },
                        {
                            title: 'Структура файлов на сервере и их соответствие url в строке браузера',
                            done: true,
                        },
                        {
                            title: 'HTML и CSS для php программиста',
                            done: true,
                        },
                        {
                            title: 'Домашняя работа',
                            done: true,
                            githubLink: 'https://github.com/Coremotor/course-php-developer-2020/tree/master/php-module-1',
                        },
                    ],
                },
                {
                    id: uuidv4(),
                    title: 'Структура управления данными. Базовые концепции PHP 7',
                    inProcess: false,
                    done: true,
                    show: false,
                    lessons: [
                        {
                            title: 'Приветственное видео',
                            done: true,
                        },
                        {
                            title: 'Массивы в PHP',
                            done: true,
                        },
                        {
                            title: 'Практика — работаем с массивами',
                            done: true,
                        },
                        {
                            title: 'Встроенные (магические) константы, суперглобальные массивы',
                            done: true,
                        },
                        {
                            title: 'Выражения, операторы',
                            done: true,
                        },
                        {
                            title: 'Управляющие конструкции, циклы, приведение типов',
                            done: true,
                        },
                        {
                            title: 'Практика — работаем с управляющими конструкциями и операциями',
                            done: true,
                        },
                        {
                            title: 'Функции для ежедневной работы, подключение файлов, пример',
                            done: true,
                        },
                        {
                            title: 'Написание алгоритмов, разбор типовых алгоритмов',
                            done: true,
                        },
                        {
                            title: 'Практика — работа с алгоритмами',
                            done: true,
                        },
                        {
                            title: 'Стили и стандарты оформления кода — psr-1 и psr-12, грамотное именование переменных',
                            done: true,
                        },
                        {
                            title: 'Терминология и типовые ошибки',
                            done: true,
                        },
                        {
                            title: 'Домашняя работа',
                            done: true,
                            githubLink: 'https://github.com/Coremotor/course-php-developer-2020/tree/master/php-module-2',
                        },
                    ],
                },
                {
                    id: uuidv4(),
                    title: 'Протокол HTTP/HTTPS',
                    inProcess: false,
                    done: true,
                    show: false,
                    lessons: [
                        {
                            title: 'Переходим к следующему модулю',
                            done: true,
                        },
                        {
                            title: 'Протокол HTTP/HTTPS',
                            done: true,
                        },
                        {
                            title: 'Пример работы с GET и POST данным',
                            done: true,
                        },
                        {
                            title: 'Пример интеграции верстки',
                            done: true,
                        },
                    ],
                },
                {
                    id: uuidv4(),
                    title: 'Пользовательские функции',
                    inProcess: false,
                    done: true,
                    show: false,
                    lessons: [
                        {
                            title: 'Интро',
                            done: true,
                        },
                        {
                            title: 'Пользовательские функции. Часть 1',
                            done: true,
                        },
                        {
                            title: 'Пользовательские функции. Часть 2',
                            done: true,
                        },
                        {
                            title: 'Пользовательские функции. Часть 3',
                            done: true,
                        },
                        {
                            title: 'Домашняя работа',
                            done: true,
                            githubLink: 'https://github.com/Coremotor/course-php-developer-2020/tree/master/task.manager',
                        },
                    ],
                },
                {
                    id: uuidv4(),
                    title: 'Файлы и каталоги',
                    inProcess: false,
                    done: true,
                    show: false,
                    lessons: [
                        {
                            title: 'Файлы. Права доступа. Режимы работы',
                            done: true,
                        },
                        {
                            title: 'Функции по работе с файлами и каталогами',
                            done: true,
                        },
                        {
                            title: 'Загрузка файлов на сервер',
                            done: true,
                        },
                        {
                            title: 'Домашняя работа',
                            done: true,
                            githubLink: 'https://github.com/Coremotor/course-php-developer-2020/tree/master/picture.gallery',
                        },
                    ],
                },
                {
                    id: uuidv4(),
                    title: 'Cookie/Session',
                    inProcess: false,
                    done: true,
                    show: false,
                    lessons: [
                        {
                            title: 'Cookie',
                            done: true,
                        },
                        {
                            title: 'Session',
                            done: true,
                        },
                        {
                            title: 'Домашняя работа',
                            done: true,
                            githubLink: 'https://github.com/Coremotor/course-php-developer-2020/tree/master/task.manager',
                        },
                    ],
                },
                {
                    id: uuidv4(),
                    title: 'База данных MySQL',
                    inProcess: true,
                    done: false,
                    show: false,
                    lessons: [
                        {
                            title: 'Последний модуль. Осталось чуть-чуть!',
                            done: false,
                        },
                        {
                            title: 'Интро',
                            done: false,
                        },
                        {
                            title: 'Общие сведения о БД',
                            done: false,
                        },
                        {
                            title: 'Методы работы с БД',
                            done: false,
                        },
                        {
                            title: 'Основные операции для работы с таблицами',
                            done: false,
                        },
                        {
                            title: 'Синтаксис базовых запросов',
                            done: false,
                        },
                        {
                            title: 'Объединение данных из нескольких таблиц',
                            done: false,
                        },
                        {
                            title: 'Подготовленные запросы',
                            done: false,
                        },
                        {
                            title: 'Экспорт и импорт БД',
                            done: false,
                        },
                        {
                            title: 'Архитектура построения структуры таблиц БД',
                            done: false,
                        },
                        {
                            title: 'Реляционная база данных (нормальные формы). Часть 1',
                            done: false,
                        },
                        {
                            title: 'Реляционная база данных (нормальные формы). Часть 2',
                            done: false,
                        },
                        {
                            title: 'Стандарты и Стили оформления в БД, Примеры работы',
                            done: false,
                        },
                        {
                            title: 'Домашняя работа',
                            done: false,
                            githubLink: 'url',
                        },
                    ],
                },
            ]
        },
        phpDeveloperChapterTwo: {
            id: 'phpDeveloperChapterTwo',
            title: 'PHP-разработчик с нуля до PRO. Часть 2',
            done: false,
            inProcess: true,
            finalWork: false,
            finalWorkGithubUrl: 'url',
            comments: [],
            show: false,
            body: [
                {
                    id: uuidv4(),
                    title: 'Объекты (базовые понятия)',
                    inProcess: false,
                    done: true,
                    show: false,
                    lessons: [
                        {
                            title: 'Вводная лекция Курс 2',
                            done: true,
                        },
                        {
                            title: 'Основные понятия ООП',
                            done: true,
                        },
                        {
                            title: 'Составляющие класса',
                            done: true,
                        },
                        {
                            title: 'Стандарты и стили оформления в ООП, psr-1 и psr-12',
                            done: true,
                        },
                        {
                            title: 'Пространства имен, указатель $this, constructor, destructor',
                            done: true,
                        },
                        {
                            title: 'Стандарты и стили оформления в ООП, psr-1 и psr-2',
                            done: true,
                        },
                        {
                            title: 'Домашняя работа',
                            done: true,
                            githubLink: 'https://github.com/Coremotor/course-php-developer-2020/tree/master/oop-module-1',
                        },
                    ],
                },
                {
                    id: uuidv4(),
                    title: 'Принципы',
                    inProcess: false,
                    done: true,
                    show: false,
                    lessons: [
                        {
                            title: 'Абстракция и инкапсуляция',
                            done: true,
                        },
                        {
                            title: 'Наследование и указатели (parent, self)',
                            done: true,
                        },
                        {
                            title: 'Полиморфизм',
                            done: true,
                        },
                        {
                            title: 'Домашняя работа',
                            done: true,
                            githubLink: 'https://github.com/Coremotor/course-php-developer-2020/tree/master/oop-module-2',
                        },
                    ],
                },
                {
                    id: uuidv4(),
                    title: 'Объекты (расширенные понятия)',
                    inProcess: true,
                    done: false,
                    show: false,
                    lessons: [
                        {
                            title: 'Статические свойства и методы',
                            done: true,
                        },
                        {
                            title: 'Абстрактные классы и методы',
                            done: true,
                        },
                        {
                            title: 'Финальные классы и методы',
                            done: true,
                        },
                        {
                            title: 'Домашняя работа',
                            done: true, //не полностью
                            githubLink: 'https://github.com/Coremotor/course-php-developer-2020/tree/master/oop-module-3',
                        },
                    ],
                },
                {
                    id: uuidv4(),
                    title: 'Функции и стандарты по работе с классами',
                    inProcess: true,
                    done: false,
                    show: false,
                    lessons: [
                        {
                            title: 'Функции по работе с классами и объектами',
                            done: true,
                        },
                        {
                            title: 'Подгрузка классов. Стандарт PSR-0 и PSR-4',
                            done: true,
                        },
                        {
                            title: 'Домашняя работа',
                            done: false,
                            githubLink: 'url',
                        },
                    ],
                },
                {
                    id: uuidv4(),
                    title: 'Исключения и другие встроенные классы',
                    inProcess: false,
                    done: false,
                    show: false,
                    lessons: [
                        {
                            title: 'Исключения',
                            done: true,
                        },
                        {
                            title: 'Замыкания. Встроенные интерфейсы. Анонимные классы',
                            done: true,
                        },

                        {
                            title: 'Домашняя работа',
                            done: false,
                            githubLink: 'url',
                        },
                    ],
                },
                {
                    id: uuidv4(),
                    title: 'ООП. Шаблоны',
                    inProcess: false,
                    done: false,
                    show: false,
                    lessons: [
                        {
                            title: 'Архитектура и принципы проектирования',
                            done: false,
                        },
                        {
                            title: 'Порождающие шаблоны проектирования',
                            done: false,
                        },
                        {
                            title: 'Структурные паттерны',
                            done: false,
                        },
                        {
                            title: 'Поведенческие шаблоны',
                            done: false,
                        },
                        {
                            title: 'Другие поведенческие шаблоны',
                            done: false,
                        },
                        {
                            title: 'Базовые и объектно-реляционные паттерны',
                            done: false,
                        },
                        {
                            title: 'Паттерны представления бизнес-логики и слой представления данных',
                            done: false,
                        },
                        {
                            title: 'Антипаттерны',
                            done: false,
                        },
                        {
                            title: 'Домашняя работа',
                            done: false,
                            githubLink: 'url',
                        },
                    ],
                },
            ]
        },
        phpDeveloperChapterThree: {
            id: 'phpDeveloperChapterThree',
            title: 'PHP-разработчик с нуля до PRO. Часть 3',
            done: false,
            inProcess: false,
            finalWork: false,
            finalWorkGithubUrl: 'url',
            comments: [],
            show: false,
            body: [
                {
                    id: uuidv4(),
                    title: 'Подготовка среды обучения. Ручной режим',
                    inProcess: false,
                    done: false,
                    show: false,
                    lessons: [
                        {
                            title: 'Вводная лекция Курс 3',
                            done: false,
                        },
                        {
                            title: 'VirtualBox установка и настройка',
                            done: false,
                        },
                        {
                            title: 'Приемы работы в Linux и консоли',
                            done: false,
                        },
                        {
                            title: 'Nginx. Установка и настройка',
                            done: false,
                        },
                        {
                            title: 'Установка и настройка PHP и MySQL',
                            done: false,
                        },
                        {
                            title: 'Менеджер зависимостей — Composer',
                            done: false,
                        },
                        {
                            title: 'Установка Laravel, конфигурирование серверов',
                            done: false,
                        },
                        {
                            title: 'Знакомство и настройка PhpStorm',
                            done: false,
                        },
                        {
                            title: 'Домашняя работа',
                            done: false,
                            githubLink: 'url',
                        },
                    ],
                },
                {
                    id: uuidv4(),
                    title: 'Архитектура и проектирование',
                    inProcess: false,
                    done: false,
                    show: false,
                    lessons: [
                        {
                            title: 'Архитектура и проектирование',
                            done: false,
                        },
                        {
                            title: 'Домашняя работа',
                            done: false,
                            githubLink: 'url',
                        },
                    ],
                },
                {
                    id: uuidv4(),
                    title: 'Структура проекта Laravel',
                    inProcess: false,
                    done: false,
                    show: false,
                    lessons: [
                        {
                            title: 'Структура проекта Laravel',
                            done: false,
                        },
                        {
                            title: 'Простейшая маршрутизация, миграция и отображение данных',
                            done: false,
                        },
                        {
                            title: 'Eloquent ORM',
                            done: false,
                        },
                        {
                            title: 'Контроллеры и шаблонизатор Blade',
                            done: false,
                        },
                        {
                            title: 'Формы, запросы форм и CSRF',
                            done: false,
                        },
                        {
                            title: 'Домашняя работа',
                            done: false,
                            githubLink: 'url',
                        },
                    ],
                },
                {
                    id: uuidv4(),
                    title: 'GIT и командная разработка',
                    inProcess: false,
                    done: false,
                    show: false,
                    lessons: [
                        {
                            title: 'Системы контроля версий, знакомство с git',
                            done: false,
                        },
                        {
                            title: 'Основы работы с git',
                            done: false,
                        },
                        {
                            title: 'Работа с удаленными репозиториями',
                            done: false,
                        },
                        {
                            title: 'Работа с ветками',
                            done: false,
                        },
                        {
                            title: 'Другие инструменты git',
                            done: false,
                        },
                        {
                            title: 'Домашняя работа',
                            done: false,
                            githubLink: 'url',
                        },
                    ],
                },
                {
                    id: uuidv4(),
                    title: 'Laravel — начинающий уровень',
                    inProcess: false,
                    done: false,
                    show: false,
                    lessons: [
                        {
                            title: 'Модели — ресурсы',
                            done: false,
                        },
                        {
                            title: 'Работа со Связями в Eloquent. Часть 1',
                            done: false,
                        },
                        {
                            title: 'Работа со Связями в Eloquent. Часть 2',
                            done: false,
                        },
                        {
                            title: 'Базовые концепции в Laravel. Часть 1',
                            done: false,
                        },
                        {
                            title: 'Базовые концепции в Laravel. Часть 2',
                            done: false,
                        },
                        {
                            title: 'Авторизация и Регистрация',
                            done: false,
                        },
                        {
                            title: 'Почта, Уведомления, События и Сессия',
                            done: false,
                        },
                        {
                            title: 'Домашняя работа',
                            done: false,
                            githubLink: 'url',
                        },
                    ],
                },
                {
                    id: uuidv4(),
                    title: 'Laravel — продвинутый уровень',
                    inProcess: false,
                    done: false,
                    show: false,
                    lessons: [
                        {
                            title: 'Коллекции',
                            done: false,
                        },
                        {
                            title: 'Работа с frontend',
                            done: false,
                        },
                        {
                            title: 'Консольные команды, Cron и запуск команд по расписанию в Laravel',
                            done: false,
                        },
                        {
                            title: 'Шаблонизатор Blade',
                            done: false,
                        },
                        {
                            title: 'Seeds Factories',
                            done: false,
                        },
                        {
                            title: 'Основы автотестирования',
                            done: false,
                        },
                        {
                            title: 'Интеграция с внешним сервисом pushall',
                            done: false,
                        },
                        {
                            title: 'Домашняя работа',
                            done: false,
                            githubLink: 'url',
                        },
                    ],
                },
                {
                    id: uuidv4(),
                    title: 'Eloquent ORM и База данных',
                    inProcess: false,
                    done: false,
                    show: false,
                    lessons: [
                        {
                            title: 'Eloquent ORM',
                            done: false,
                        },
                        {
                            title: 'QueryBuilder',
                            done: false,
                        },
                        {
                            title: 'Постраничная навигация',
                            done: false,
                        },
                        {
                            title: 'Миграции',
                            done: false,
                        },
                        {
                            title: 'Полиморфная связь и связь сквозь объект',
                            done: false,
                        },
                        {
                            title: 'Домашняя работа',
                            done: false,
                            githubLink: 'url',
                        },
                    ],
                },
                {
                    id: uuidv4(),
                    title: 'Laravel — очереди и WebSocket',
                    inProcess: false,
                    done: false,
                    show: false,
                    lessons: [
                        {
                            title: 'Очереди в Laravel и Работы — jobs',
                            done: false,
                        },
                        {
                            title: 'Менеджер процессов Supervisord',
                            done: false,
                        },
                        {
                            title: 'Установка Redis',
                            done: false,
                        },
                        {
                            title: 'Инструмент мониторинга laravel/horizon',
                            done: false,
                        },
                        {
                            title: 'WebSocket и вещание в laravel',
                            done: false,
                        },
                        {
                            title: 'Домашняя работа',
                            done: false,
                            githubLink: 'url',
                        },
                    ],
                },
                {
                    id: uuidv4(),
                    title: 'Laravel — кеширование и оптимизация',
                    inProcess: false,
                    done: false,
                    show: false,
                    lessons: [
                        {
                            title: 'Кеширование',
                            done: false,
                        },
                        {
                            title: 'Профилирование кода',
                            done: false,
                        },
                        {
                            title: 'Рефакторинг',
                            done: false,
                        },
                        {
                            title: 'Домашняя работа',
                            done: false,
                            githubLink: 'url',
                        },
                    ],
                },
                {
                    id: uuidv4(),
                    title: 'Бонус-модуль. Введение в Symfony',
                    inProcess: false,
                    done: false,
                    show: false,
                    lessons: [
                        {
                            title: 'Введение и установка Symfony',
                            done: false,
                        },
                        {
                            title: 'Структура проекта и настройка PhpStorm',
                            done: false,
                        },
                        {
                            title: 'Создание первых страниц, Маршрутизация и Контроллеры',
                            done: false,
                        },
                        {
                            title: 'Flex и Recipes',
                            done: false,
                        },
                        {
                            title: 'Шаблонизатор Twig',
                            done: false,
                        },
                        {
                            title: 'Debug Profiler и другие инструменты отладки',
                            done: false,
                        },
                        {
                            title: 'Подключаемые файлы: Css и Js',
                            done: false,
                        },
                        {
                            title: 'Генерация URL',
                            done: false,
                        },
                        {
                            title: 'Создание Json-API',
                            done: false,
                        },
                        {
                            title: 'Сервисы и Autowiring',
                            done: false,
                        },
                        {
                            title: 'Webpack Encore',
                            done: false,
                        },
                        {
                            title: 'Домашняя работа',
                            done: false,
                            githubLink: 'url',
                        },
                    ],
                },
            ]
        },
        bitrix1C: {
            id: 'bitrix1C',
            title: 'Программист 1С-Битрикс',
            done: false,
            inProcess: false,
            finalWork: false,
            finalWorkGithubUrl: 'url',
            comments: [],
            show: false,
            body: [
                {
                    id: uuidv4(),
                    title: 'Философия разработки, подготовка рабочего места',
                    inProcess: false,
                    done: false,
                    show: false,
                    lessons: [
                        {
                            title: 'Философия разработчика',
                            done: false,
                        },
                        {
                            title: 'Подготовка рабочего места',
                            done: false,
                        },
                        {
                            title: 'Настройка phpStorm',
                            done: false,
                        },
                        {
                            title: 'Домашняя работа',
                            done: false,
                            githubLink: 'url',
                        },
                    ],
                },
                {
                    id: uuidv4(),
                    title: 'Источник товаров и контента',
                    inProcess: false,
                    done: false,
                    show: false,
                    lessons: [
                        {
                            title: 'Что такое инфоблок и как он работает',
                            done: false,
                        },
                        {
                            title: 'Различие между элементом и товаром каталога',
                            done: false,
                        },
                        {
                            title: 'Стандартные классы для работы с инфоблоком',
                            done: false,
                        },
                        {
                            title: 'Обмен с "1С". Soap. Домашнее задание',
                            done: false,
                        },
                        {
                            title: 'Домашняя работа',
                            done: false,
                            githubLink: 'url',
                        },
                    ],
                },
                {
                    id: uuidv4(),
                    title: 'Интеграция с 1С-Битрикс и другими системами',
                    inProcess: false,
                    done: false,
                    show: false,
                    lessons: [
                        {
                            title: 'Структура кода в Битрикс',
                            done: false,
                        },
                        {
                            title: 'Организация init.php, dbconn и settings',
                            done: false,
                        },
                        {
                            title: 'Работа с файлами XML. Пример работы с SOAP на примере сервиса погоды',
                            done: false,
                        },
                        {
                            title: 'Домашняя работа',
                            done: false,
                            githubLink: 'url',
                        },
                    ],
                },
                {
                    id: uuidv4(),
                    title: 'Создание страниц и шаблонов',
                    inProcess: false,
                    done: false,
                    show: false,
                    lessons: [
                        {
                            title: 'Создание страниц и шаблонов, часть 1',
                            done: false,
                        },
                        {
                            title: 'Создание страниц и шаблонов, часть 2',
                            done: false,
                        },
                        {
                            title: 'Домашняя работа',
                            done: false,
                            githubLink: 'url',
                        },
                    ],
                },
                {
                    id: uuidv4(),
                    title: 'Стандартные компоненты',
                    inProcess: false,
                    done: false,
                    show: false,
                    lessons: [
                        {
                            title: 'Стандартные компоненты, часть 1',
                            done: false,
                        },
                        {
                            title: 'Стандартные компоненты, часть 2',
                            done: false,
                        },
                        {
                            title: 'Домашняя работа',
                            done: false,
                            githubLink: 'url',
                        },
                    ],
                },
                {
                    id: uuidv4(),
                    title: 'Каталог интернет магазина',
                    inProcess: false,
                    done: false,
                    show: false,
                    lessons: [
                        {
                            title: 'Каталог интернет-магазина: часть 1',
                            done: false,
                        },
                        {
                            title: 'Каталог интернет-магазина: часть 2',
                            done: false,
                        },
                        {
                            title: 'Домашняя работа',
                            done: false,
                            githubLink: 'url',
                        },
                    ],
                },
                {
                    id: uuidv4(),
                    title: 'Карта товара',
                    inProcess: false,
                    done: false,
                    show: false,
                    lessons: [
                        {
                            title: 'Карта товара: часть 1',
                            done: false,
                        },
                        {
                            title: 'Карта товара: часть 2',
                            done: false,
                        },
                        {
                            title: 'Домашняя работа',
                            done: false,
                            githubLink: 'url',
                        },
                    ],
                },
                {
                    id: uuidv4(),
                    title: 'Оформление заказа',
                    inProcess: false,
                    done: false,
                    show: false,
                    lessons: [
                        {
                            title: 'Оформление заказа, часть 1',
                            done: false,
                        },
                        {
                            title: 'Оформление заказа, часть 2',
                            done: false,
                        },
                        {
                            title: 'Домашняя работа',
                            done: false,
                            githubLink: 'url',
                        },
                    ],
                },
                {
                    id: uuidv4(),
                    title: 'Личный кабинет',
                    inProcess: false,
                    done: false,
                    show: false,
                    lessons: [
                        {
                            title: 'Личный кабинет: урок 1',
                            done: false,
                        },
                        {
                            title: 'Личный кабинет: урок 2',
                            done: false,
                        },
                        {
                            title: 'Домашняя работа',
                            done: false,
                            githubLink: 'url',
                        },
                    ],
                },
                {
                    id: uuidv4(),
                    title: 'Дорабатываем сайт, ч.1',
                    inProcess: false,
                    done: false,
                    show: false,
                    lessons: [
                        {
                            title: 'Дорабатываем сайт, ч.1',
                            done: false,
                        },
                        {
                            title: 'Домашняя работа',
                            done: false,
                            githubLink: 'url',
                        },
                    ],
                },
                {
                    id: uuidv4(),
                    title: 'Дорабатываем сайт, ч.2',
                    inProcess: false,
                    done: false,
                    show: false,
                    lessons: [
                        {
                            title: 'Дорабатываем сайт, ч.1',
                            done: false,
                        },
                        {
                            title: 'Домашняя работа',
                            done: false,
                            githubLink: 'url',
                        },
                    ],
                },
                {
                    id: uuidv4(),
                    title: 'Бонусный материал: ответы на часто задаваемые вопросы',
                    inProcess: false,
                    done: false,
                    show: false,
                    lessons: [
                        {
                            title: 'Бонусный материал: ответы на часто задаваемые вопросы',
                            done: false,
                        },
                    ],
                },
            ]
        },
        symfony: {
            id: 'symfony',
            title: 'PHP-фреймворк Symfony',
            done: false,
            inProcess: false,
            finalWork: false,
            finalWorkGithubUrl: 'url',
            comments: [],
            show: false,
            body: [
                {
                    id: uuidv4(),
                    title: 'Введение в Symfony',
                    inProcess: false,
                    done: false,
                    show: false,
                    lessons: [
                        {
                            title: 'Введение и Установка Symfony',
                            done: false,
                        },
                        {
                            title: 'Структура проекта и настройка PhpStorm',
                            done: false,
                        },
                        {
                            title: 'Создание первых страниц, маршрутизация и контроллеры',
                            done: false,
                        },
                        {
                            title: 'Flex и Recipes',
                            done: false,
                        },
                        {
                            title: 'Шаблонизатор Twig',
                            done: false,
                        },
                        {
                            title: 'Debug Profiler и другие инструменты отладки',
                            done: false,
                        },
                        {
                            title: 'Подключаемые файлы: CSS и Js',
                            done: false,
                        },
                        {
                            title: 'Генерация URL',
                            done: false,
                        },
                        {
                            title: 'Создание Json-API',
                            done: false,
                        },
                        {
                            title: 'Сервисы и Autowiring',
                            done: false,
                        },
                        {
                            title: 'Webpack Encore',
                            done: false,
                        },
                        {
                            title: 'Домашняя работа',
                            done: false,
                            githubLink: 'url',
                        },
                    ],
                },
                {
                    id: uuidv4(),
                    title: 'Основы Symfony',
                    inProcess: false,
                    done: false,
                    show: false,
                    lessons: [
                        {
                            title: 'Основы Autowiring и конфигурирования',
                            done: false,
                        },
                        {
                            title: 'Конфигурации для разного окружения, файл.env',
                            done: false,
                        },
                        {
                            title: 'Создание своего сервиса',
                            done: false,
                        },
                        {
                            title: 'Продвинутое конфигурирование, service.yaml',
                            done: false,
                        },
                        {
                            title: 'Пример интеграции с сервисом Slack',
                            done: false,
                        },
                        {
                            title: 'Автовызов методов сервиса, аннотация @required',
                            done: false,
                        },
                        {
                            title: 'Генерация кода: symfony/maker-bundle',
                            done: false,
                        },
                        {
                            title: 'Пример создания консольной команды',
                            done: false,
                        },
                        {
                            title: 'Безопасное хранение секретных конфигураций, Vault',
                            done: false,
                        },
                        {
                            title: 'Домашняя работа',
                            done: false,
                            githubLink: 'url',
                        },
                    ],
                },
                {
                    id: uuidv4(),
                    title: 'Шаблонизатор Twig',
                    inProcess: false,
                    done: false,
                    show: false,
                    lessons: [
                        {
                            title: 'Работа с блоками Twig',
                            done: false,
                        },
                        {
                            title: 'Расширения шаблонизатора Twig',
                            done: false,
                        },
                        {
                            title: 'LazyLoad в расширениях',
                            done: false,
                        },
                        {
                            title: 'Домашняя работа',
                            done: false,
                            githubLink: 'url',
                        },
                    ],
                },
                {
                    id: uuidv4(),
                    title: 'Библиотека работы с базой данных Doctrine Orm',
                    inProcess: false,
                    done: false,
                    show: false,
                    lessons: [
                        {
                            title: 'Знакомство с Doctrine и миграциями',
                            done: false,
                        },
                        {
                            title: 'Entity Repositories и Query Builder',
                            done: false,
                        },
                        {
                            title: 'Обновление Entity',
                            done: false,
                        },
                        {
                            title: 'Домашняя работа',
                            done: false,
                            githubLink: 'url',
                        },
                    ],
                },
                {
                    id: uuidv4(),
                    title: 'Фикстуры и расширения Doctrine',
                    inProcess: false,
                    done: false,
                    show: false,
                    lessons: [
                        {
                            title: 'Фикстуры и демоданные',
                            done: false,
                        },
                        {
                            title: 'Расширение возможностей, Sluggable и Timestampable',
                            done: false,
                        },
                        {
                            title: 'Домашняя работа',
                            done: false,
                            githubLink: 'url',
                        },
                    ],
                },
                {
                    id: uuidv4(),
                    title: 'Связи в Doctrine. Часть 1 — Один ко многим',
                    inProcess: false,
                    done: false,
                    show: false,
                    lessons: [
                        {
                            title: 'Связь один ко многим (One-to-Many)',
                            done: false,
                        },
                        {
                            title: 'Получение связанных объектов с дополнительными критериями',
                            done: false,
                        },
                        {
                            title: 'Сложная логика и Join',
                            done: false,
                        },
                        {
                            title: 'Домашняя работа',
                            done: false,
                            githubLink: 'url',
                        },
                    ],
                },
                {
                    id: uuidv4(),
                    title: 'Связи в Doctrine. Часть 2',
                    inProcess: false,
                    done: false,
                    show: false,
                    lessons: [
                        {
                            title: 'Фикстуры 2.0',
                            done: false,
                        },
                        {
                            title: 'Постраничная навигация',
                            done: false,
                        },
                        {
                            title: 'Связь Многие-ко-многим',
                            done: false,
                        },
                        {
                            title: 'Домашняя работа',
                            done: false,
                            githubLink: 'url',
                        },
                    ],
                },
                {
                    id: uuidv4(),
                    title: 'Система аутентификации',
                    inProcess: false,
                    done: false,
                    show: false,
                    lessons: [
                        {
                            title: 'Создание модели пользователя',
                            done: false,
                        },
                        {
                            title: 'Форма авторизации',
                            done: false,
                        },
                        {
                            title: 'Базовый процесс Аутентификации',
                            done: false,
                        },
                        {
                            title: 'Безопасность и улучшение Аутентификатора',
                            done: false,
                        },
                        {
                            title: 'Домашняя работа',
                            done: false,
                            githubLink: 'url',
                        },
                    ],
                },
                {
                    id: uuidv4(),
                    title: 'Роли и уровни доступов и безопасность',
                    inProcess: false,
                    done: false,
                    show: false,
                    lessons: [
                        {
                            title: 'Роли и доступы к страницам',
                            done: false,
                        },
                        {
                            title: 'Получение авторизованного пользователя',
                            done: false,
                        },
                        {
                            title: 'Иерархия ролей и Имперсонализация',
                            done: false,
                        },
                        {
                            title: 'Домашняя работа',
                            done: false,
                            githubLink: 'url',
                        },
                    ],
                },
                {
                    id: uuidv4(),
                    title: 'Доступы по API',
                    inProcess: false,
                    done: false,
                    show: false,
                    lessons: [
                        {
                            title: 'Создание токена и API маршрута',
                            done: false,
                        },
                        {
                            title: 'Создание Аутентификатора для API',
                            done: false,
                        },
                        {
                            title: 'Домашняя работа',
                            done: false,
                            githubLink: 'url',
                        },
                    ],
                },
                {
                    id: uuidv4(),
                    title: 'Регистрация и классы Voter',
                    inProcess: false,
                    done: false,
                    show: false,
                    lessons: [
                        {
                            title: 'Регистрация и программная авторизация',
                            done: false,
                        },
                        {
                            title: 'Расширенное управление доступом, классы Voter',
                            done: false,
                        },
                        {
                            title: 'Домашняя работа',
                            done: false,
                            githubLink: 'url',
                        },
                    ],
                },
                {
                    id: uuidv4(),
                    title: 'Знакомство с компонентом Форм',
                    inProcess: false,
                    done: false,
                    show: false,
                    lessons: [
                        {
                            title: 'Подключение, вывод и обработка формы',
                            done: false,
                        },
                        {
                            title: 'Типы полей и трансформация данных',
                            done: false,
                        },
                        {
                            title: 'Поля ChoiceType',
                            done: false,
                        },
                        {
                            title: 'Домашняя работа',
                            done: false,
                            githubLink: 'url',
                        },
                    ],
                },
                {
                    id: uuidv4(),
                    title: 'Валидация вывод и обработка формы (откроется 02.09.2020)',
                    inProcess: false,
                    done: false,
                    show: false,
                    lessons: [],
                    inDevelopment: true,
                },
                {
                    id: uuidv4(),
                    title: 'Расширение полей и кастомная валидация (откроется 16.09.2020)',
                    inProcess: false,
                    done: false,
                    show: false,
                    lessons: [],
                    inDevelopment: true,
                },
                {
                    id: uuidv4(),
                    title: 'Загрузка файлов в Symfony (откроется 30.09.2020)',
                    inProcess: false,
                    done: false,
                    show: false,
                    lessons: [],
                    inDevelopment: true,
                },
                {
                    id: uuidv4(),
                    title: 'Сервис отправки электронных писем (откроется 14.10.2020)',
                    inProcess: false,
                    done: false,
                    show: false,
                    lessons: [],
                    inDevelopment: true,
                },
                {
                    id: uuidv4(),
                    title: 'Система Событий (откроется 28.10.2020)',
                    inProcess: false,
                    done: false,
                    show: false,
                    lessons: [],
                    inDevelopment: true,
                },
                {
                    id: uuidv4(),
                    title: 'Выделение переиспользуемых бандлов для Symfony (откроется 11.11.2020)',
                    inProcess: false,
                    done: false,
                    show: false,
                    lessons: [],
                    inDevelopment: true,
                },
            ]
        },
        universalKnowledge: {
            id: 'universalKnowledge',
            title: 'Универсальные знания программиста',
            done: false,
            inProcess: false,
            finalWork: false,
            finalWorkGithubUrl: 'url',
            comments: [],
            show: false,
            body: [
                {
                    id: uuidv4(),
                    title: 'Протокол HTTP',
                    inProcess: false,
                    done: false,
                    show: false,
                    lessons: [
                        {
                            title: 'Протокол HTTP. Запрос и ответ',
                            done: false,
                        },
                        {
                            title: 'Методы HTTP-запросов GET и POST',
                            done: false,
                        },
                        {
                            title: 'Другие методы HTTP-запросов',
                            done: false,
                        },
                        {
                            title: 'Статус-коды HTTP-ответов',
                            done: false,
                        },
                        {
                            title: 'Адресация сетевых ресурсов',
                            done: false,
                        },
                        {
                            title: 'HTTP-заголовки',
                            done: false,
                        },
                        {
                            title: 'Версии протокола HTTP и HTTPS',
                            done: false,
                        },
                    ],
                },
                {
                    id: uuidv4(),
                    title: 'Введение в алгоритмы',
                    inProcess: false,
                    done: false,
                    show: false,
                    lessons: [
                        {
                            title: 'Введение в алгоритмы',
                            done: false,
                        },
                        {
                            title: 'Зачем нужны алгоритмы',
                            done: false,
                        },
                        {
                            title: 'Рекурсивные алгоритмы',
                            done: false,
                        },
                        {
                            title: 'Временная сложность алгоритмов',
                            done: false,
                        },
                        {
                            title: 'Алгоритм бинарного поиска',
                            done: false,
                        },
                        {
                            title: 'Алгоритм сортировки пузырьком',
                            done: false,
                        },
                        {
                            title: 'Алгоритм сортировки QuickSort',
                            done: false,
                        },
                        {
                            title: 'Алгоритм сортировки MergeSort',
                            done: false,
                        },
                        {
                            title: 'Алгоритм поиска подстроки Рабина-Карпа',
                            done: false,
                        },
                        {
                            title: 'Алгоритм поиска подстроки Кнута-Морриса-Пратта',
                            done: false,
                        },
                        {
                            title: 'Алгоритм поиска подстроки Бойера-Мура',
                            done: false,
                        },
                    ],
                },
            ]
        },
        digitalProjectManager: {
            id: 'digitalProjectManager',
            title: 'Руководитель digital-проектов',
            done: false,
            inProcess: false,
            finalWork: false,
            finalWorkGithubUrl: 'url',
            comments: [],
            show: false,
            body: [
                {
                    id: uuidv4(),
                    title: 'Экологичный путь менеджера',
                    inProcess: false,
                    done: false,
                    show: false,
                    lessons: [
                        {
                            title: 'Карта компетенций менеджера',
                            done: false,
                        },
                        {
                            title: 'Требовательность: как ее развивать у себя и своих сотрудников',
                            done: false,
                        },
                        {
                            title: 'Власть. Мозгоклюйство. Эксплуатация',
                            done: false,
                        },
                        {
                            title: 'Домашняя работа',
                            done: false,
                            githubLink: 'url',
                        },
                    ],
                },
                {
                    id: uuidv4(),
                    title: 'Релиз-менеджмент: готовим проекты к запуску',
                    inProcess: false,
                    done: false,
                    show: false,
                    lessons: [
                        {
                            title: 'Релиз-менеджмент: готовим проекты к запуску. Часть I',
                            done: false,
                        },
                        {
                            title: 'Релиз-менеджмент: готовим проекты к запуску. Часть II',
                            done: false,
                        },
                        {
                            title: 'Домашняя работа',
                            done: false,
                            githubLink: 'url',
                        },
                    ],
                },
                {
                    id: uuidv4(),
                    title: 'Требовательность digital-продюсера',
                    inProcess: false,
                    done: false,
                    show: false,
                    lessons: [
                        {
                            title: 'Требовательность',
                            done: false,
                        },
                        {
                            title: 'Когнитивные искажения',
                            done: false,
                        },
                        {
                            title: 'Разница между требовательностью и мозгоклюйством',
                            done: false,
                        },
                        {
                            title: 'Домашняя работа',
                            done: false,
                            githubLink: 'url',
                        },
                    ],
                },
                {
                    id: uuidv4(),
                    title: 'Аналитика. Базовые навыки',
                    inProcess: false,
                    done: false,
                    show: false,
                    lessons: [
                        {
                            title: 'Аналитика в digital-проектах',
                            done: false,
                        },
                        {
                            title: 'Пишем ТЗ. Годные шаблоны',
                            done: false,
                        },
                        {
                            title: 'Домашняя работа',
                            done: false,
                            githubLink: 'url',
                        },
                    ],
                },
                {
                    id: uuidv4(),
                    title: 'Как пасти котов: правильное делегирование в IT',
                    inProcess: false,
                    done: false,
                    show: false,
                    lessons: [
                        {
                            title: 'Как ставить задачи и не ссориться с разработчиками',
                            done: false,
                        },
                        {
                            title: 'SMART и правила делегирования',
                            done: false,
                        },
                        {
                            title: 'Пробуем Канбан',
                            done: false,
                        },
                        {
                            title: 'Домашняя работа',
                            done: false,
                            githubLink: 'url',
                        },
                    ],
                },
                {
                    id: uuidv4(),
                    title: 'Переговорные навыки. Часть 1. Цикл продаж',
                    inProcess: false,
                    done: false,
                    show: false,
                    lessons: [
                        {
                            title: 'Переговоры. Продажи. Введение',
                            done: false,
                        },
                        {
                            title: 'Заказ digital-услуги глазами клиента',
                            done: false,
                        },
                        {
                            title: 'Типовые переговоры и ошибки в digital',
                            done: false,
                        },
                        {
                            title: 'Цикл продаж',
                            done: false,
                        },
                        {
                            title: 'Домашняя работа',
                            done: false,
                            githubLink: 'url',
                        },
                    ],
                },
                {
                    id: uuidv4(),
                    title: 'Переговорные навыки. Провокации. Работа с возражениями. Часть 2.',
                    inProcess: false,
                    done: false,
                    show: false,
                    lessons: [
                        {
                            title: 'Подходящий-неподходящий клиент',
                            done: false,
                        },
                        {
                            title: 'Экспресс-классификация клиентов.',
                            done: false,
                        },
                        {
                            title: 'Работа с возражениями',
                            done: false,
                        },
                        {
                            title: 'Провокация',
                            done: false,
                        },
                        {
                            title: 'Конструктивный диалог. Слои аргументации',
                            done: false,
                        },
                        {
                            title: 'Домашняя работа',
                            done: false,
                            githubLink: 'url',
                        },
                    ],
                },
                {
                    id: uuidv4(),
                    title: 'Оценка и декомпозиция digital-проектов',
                    inProcess: false,
                    done: false,
                    show: false,
                    lessons: [
                        {
                            title: 'Декомпозиция: не по функциям, а по экранам!',
                            done: false,
                        },
                        {
                            title: 'Откуда это на странице?',
                            done: false,
                        },
                        {
                            title: 'Неопределенность бьет по башке',
                            done: false,
                        },
                        {
                            title: 'Способы оценок. Математическое обоснование экономической невозможности точных и адекватных оценок.',
                            done: false,
                        },
                        {
                            title: 'Адекватная модель оценки задач',
                            done: false,
                        },
                        {
                            title: 'Оценки с опорой на прошлое и будущее',
                            done: false,
                        },
                        {
                            title: 'Постановка задач на ресерч',
                            done: false,
                        },
                        {
                            title: 'Реальная смета. Формат. Подготовка вилочных и точных смет.',
                            done: false,
                        },
                        {
                            title: 'Откуда брать оценки.',
                            done: false,
                        },
                        {
                            title: 'Экспресс-версия диаграммы Ганта. Запуск проекта с распараллеливанием.',
                            done: false,
                        },
                        {
                            title: 'Нетиповые проекты. Большое-толстое ТЗ.',
                            done: false,
                        },
                        {
                            title: 'Домашняя работа',
                            done: false,
                            githubLink: 'url',
                        },
                    ],
                },
                {
                    id: uuidv4(),
                    title: 'Управление временем',
                    inProcess: false,
                    done: false,
                    show: false,
                    lessons: [
                        {
                            title: 'Методология GTD. Обзор инструментов. Пирамида Франклина и Колесо баланса.',
                            done: false,
                        },
                        {
                            title: 'Планирование задач. Разбор входящих. Формулировки. Матрица Эйзенхауэра. Вредопольза.',
                            done: false,
                        },
                        {
                            title: 'Приоритеты задач. Концентрация. Помодоро. График некидалова. Энергия. Работа с почтой.',
                            done: false,
                        },
                        {
                            title: 'Домашняя работа',
                            done: false,
                            githubLink: 'url',
                        },
                    ],
                },
                {
                    id: uuidv4(),
                    title: 'Scrum: передовая методология управления современными digital-проектами. Часть 1.',
                    inProcess: false,
                    done: false,
                    show: false,
                    lessons: [
                        {
                            title: 'Развитие водопадной модели. Появление гибких методологий. Как работает Scrum.',
                            done: false,
                        },
                        {
                            title: 'Ведение бэклогов. Инструменты для ведения, примеры.',
                            done: false,
                        },
                        {
                            title: 'Роли в Scrum. Product Owner во внутренней и заказной разработке',
                            done: false,
                        },
                        {
                            title: 'Роли в Scrum. Команда. Scrum master. Значение менеджера в Scrum. Планирование итерации. Оценка задач. Planning poker',
                            done: false,
                        },
                        {
                            title: 'Домашняя работа',
                            done: false,
                            githubLink: 'url',
                        },
                    ],
                },
                {
                    id: uuidv4(),
                    title: 'Scrum. Передовая методология управления digital-проектами. Часть 2.',
                    inProcess: false,
                    done: false,
                    show: false,
                    lessons: [
                        {
                            title: 'Минимальная отчетность. Проведение стендапов',
                            done: false,
                        },
                        {
                            title: 'Диаграмма сгорания. Диаграмма производительности',
                            done: false,
                        },
                        {
                            title: 'Стратегии тестирования — коротко',
                            done: false,
                        },
                        {
                            title: 'Демонстрация проекта. Ретроспективы',
                            done: false,
                        },
                        {
                            title: 'Культ карго в IT. Краткие выводы модуля',
                            done: false,
                        },
                        {
                            title: 'Домашняя работа',
                            done: false,
                            githubLink: 'url',
                        },
                    ],
                },
                {
                    id: uuidv4(),
                    title: 'Решение факапов. Lean/TOC. Обзор.',
                    inProcess: false,
                    done: false,
                    show: false,
                    lessons: [
                        {
                            title: 'Конвейер и большие запасы. Бережливое производство. Виды потерь.',
                            done: false,
                        },
                        {
                            title: 'Устранение потерь. Value Stream Map.',
                            done: false,
                        },
                        {
                            title: 'ТОС введение. Диаграмма Иссикавы. Дерево существующей действительности. Грозовая туча',
                            done: false,
                        },
                        {
                            title: 'Root Cause анализ. Отчет А3',
                            done: false,
                        },
                        {
                            title: 'Домашняя работа',
                            done: false,
                            githubLink: 'url',
                        },
                    ],
                },
                {
                    id: uuidv4(),
                    title: 'Интеграционные проекты.',
                    inProcess: false,
                    done: false,
                    show: false,
                    lessons: [
                        {
                            title: 'Интеграция. Что это такое и как с этим быть.',
                            done: false,
                        },
                        {
                            title: 'Бриф и протокол обмена данными',
                            done: false,
                        },
                        {
                            title: 'Разработка и релиз интеграции',
                            done: false,
                        },
                        {
                            title: 'Домашняя работа',
                            done: false,
                            githubLink: 'url',
                        },
                    ],
                },
                {
                    id: uuidv4(),
                    title: 'Управление дизайнерами. Разработка дизайна по scrum',
                    inProcess: false,
                    done: false,
                    show: false,
                    lessons: [
                        {
                            title: 'Стратегии разработки дизайна',
                            done: false,
                        },
                        {
                            title: 'Работа над дизайном по agile',
                            done: false,
                        },
                        {
                            title: 'Бегунок креативности',
                            done: false,
                        },
                        {
                            title: 'Процесс, подготовка презентации, демонстрация концепции',
                            done: false,
                        },
                        {
                            title: 'Работа с возражениями по дизайну',
                            done: false,
                        },
                        {
                            title: 'Новые люди на проекте. Краткие выводы',
                            done: false,
                        },
                        {
                            title: 'Домашняя работа',
                            done: false,
                            githubLink: 'url',
                        },
                    ],
                },
                {
                    id: uuidv4(),
                    title: 'Основы технической грамотности',
                    inProcess: false,
                    done: false,
                    show: false,
                    lessons: [
                        {
                            title: 'Как работает интернет',
                            done: false,
                        },
                        {
                            title: 'Хостинг: планирование нагрузок',
                            done: false,
                        },
                        {
                            title: 'Deployment. Доступы',
                            done: false,
                        },
                        {
                            title: 'SSL-сертификаты',
                            done: false,
                        },
                        {
                            title: 'Почта',
                            done: false,
                        },
                        {
                            title: 'Проверка скорости работы систем',
                            done: false,
                        },
                        {
                            title: 'GIT/SVN для менеджеров',
                            done: false,
                        },
                        {
                            title: 'Адаптивные сайты. Мобильные сайты',
                            done: false,
                        },
                        {
                            title: 'Нюансы управления мобильной разработкой',
                            done: false,
                        },
                        {
                            title: 'CMS / Frameworks',
                            done: false,
                        },
                        {
                            title: 'Подключение систем доставки',
                            done: false,
                        },
                        {
                            title: 'Домашняя работа',
                            done: false,
                            githubLink: 'url',
                        },
                    ],
                },
                {
                    id: uuidv4(),
                    title: 'Контроль. Риски. Поощрения. Наказания. Обратная связь.',
                    inProcess: false,
                    done: false,
                    show: false,
                    lessons: [
                        {
                            title: 'Обеспечение работы технической поддержки',
                            done: false,
                        },
                        {
                            title: 'Риск-менеджмент. Управление рисками в digital-проектах',
                            done: false,
                        },
                        {
                            title: 'Наказание подчиненных. Как наказывать в интеллектуальной digital-среде.',
                            done: false,
                        },
                        {
                            title: 'Проведение совещаний',
                            done: false,
                        },
                        {
                            title: 'Метод освоенного объема',
                            done: false,
                        },
                        {
                            title: 'Основы MS Project',
                            done: false,
                        },
                        {
                            title: 'Метод освоенного объема в MS Project',
                            done: false,
                        },
                        {
                            title: 'Домашняя работа',
                            done: false,
                            githubLink: 'url',
                        },
                    ],
                },
                {
                    id: uuidv4(),
                    title: 'БОНУСНЫЙ МОДУЛЬ: Работа с типовыми документами',
                    inProcess: false,
                    done: false,
                    show: false,
                    lessons: [
                        {
                            title: 'Документы для аккаунт-менеджера.',
                            done: false,
                        },
                        {
                            title: 'Передаем проект от аккаунт-менеджера руководителю проекта.',
                            done: false,
                        },
                        {
                            title: 'Документы для руководителя проекта.',
                            done: false,
                        },
                        {
                            title: 'Документы для бухгалтерии. Вспомогательные документы',
                            done: false,
                        },
                    ],
                },
                {
                    id: uuidv4(),
                    title: 'Информация о дипломном проекте',
                    inProcess: false,
                    done: false,
                    show: false,
                    lessons: [],
                },
            ]
        },
    }

export default initialStateCourses;
