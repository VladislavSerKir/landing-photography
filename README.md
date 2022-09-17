# Проект: Курс по фотографии 
![2022-09-08_20-34-04](https://user-images.githubusercontent.com/83783362/189188176-7a966548-7079-4ca8-9752-9da732a87d2d.png) 
## Описание
На сегодняшний день, для того чтобы стать профессиональным фоторгафом необходимо знать множество **деталей** и **нюансов** как по технической части так и содержательной.
В данном курсе ~~вас научат~~ вы сможете приобрести знания и **опыт** от ведущих фотографов.
### У `вас` будет возможность ознакомиться с такими аспектами:
* Изучение композиции
* Настройка камеры
* Съемка
## Реализация и технологии в проекте
Для написания проекта использовался сборщик Webpack. В нем установлено все необходимые модули и пакеты для верстки на препроцессоре SCSS
* В частности sass-loader для работы Webpack с препроцессором SCSS
* Для работы webpack с CSS стилями использовался плагин css-loader, а для трансформации и добавления вендорных префиксов для разных браузеров использовался postcss-loader
* Для написания структуры стилей использовалась БЭМ методология
* Транспиляция JS кода в старый синтаксис осуществляется при помощи Babel. Для крайних случаев была добавлена библиотека полифилов core-js.
### Реализация
Страница сверстана адаптивно с 320 до 1440px. Для большинства блоков выбрано отображение сеткой (grid) для их плавного перестроения. В шапке сайта располагается навигационное меню в виде списка ссылок которое при разрешении меньше 768px трансформируется в рескрывающиеся по кнопке меню.

![Запись экрана 2022-09-17 в 21 30 53](https://user-images.githubusercontent.com/83783362/190872009-ebab80ca-d7a0-448d-8201-1dc7c1e6c391.gif)

В футере располагается форма для записи на курсы с динамической валидацией на JS.

![Запись экрана 2022-09-17 в 21 50 28](https://user-images.githubusercontent.com/83783362/190872236-df1ffd1e-8335-4355-b10e-76734b0e1795.gif)

### Технологии

<p>
  <img alt="html5" src="https://img.shields.io/badge/-HTML5-ffffff?style=for-the-badge&logo=html5&logoColor=e54c21"/>
      <img alt="CSS" src="https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white"/>
      <img alt="JavaScript" src="https://img.shields.io/badge/-JavaScript-ffffff?style=for-the-badge&logo=javascript&logoColor=f7df1d"/>
       <img alt="Webpack" src="https://img.shields.io/badge/-Webpack-ffffff?style=for-the-badge&logo=webpack&logoColor=1b74ba"/>
          <img alt="Figma" src="https://img.shields.io/badge/-Figma-ffffff?style=for-the-badge&logo=figma&logoColor=f24e1e"/>
</p>

## Установка, настройка
Проект, развернутый на Github:  [GitHub Pages](https://vladislavserkir.github.io/landing-photography/)
- Установка зависимостей: `npm install`
- Режим разработки: `npm run dev`
- Сформировать проект для последующего размещения на ресурсах: `npm run build`
- Сформировать заново проект для отображения на GitHub pages: `npm run deploy`
## Написать мне
[![github](https://img.shields.io/badge/GitHub-000000?style=for-the-badge&logo=github)](https://github.com/VladislavSerKir)
[![telegram](https://img.shields.io/badge/Telegram-68c4f0?style=for-the-badge&logo=telegram)](https://t.me/vl_kireev)
