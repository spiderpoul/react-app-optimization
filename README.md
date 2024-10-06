# Воркшоп "Web-perf: найти и оптимизировать"

### Пререквизиты

Для начала работы на вашем компьютере должны быть:

* Установлен Google Chrome и IDE
* Установлен Node.js и npm
* Расширение Web vitals для Chrome https://chromewebstore.google.com/detail/web-vitals/ahfhijdlegdabablpippeagghigmibma
* Хорошее настроение :)

### Начало работы

1. Открываем проект в IDE.
2. Заходим в папку react
3. Устанавливаем зависимости `npm install`
4. Запускаем проект командой `npm run start`
5. Открываем наш проект на порту 8080 – http://localhost:8080
6. В настройках расширения Web Vitals включите следующие опции:
    * Console logging
    * User Timings (for DevTools Performance Panel recordings).

## Найти

### Performance tab

Зайдите на вкладку Performance в Chrome, установите следующие параметры тротлинга:

* Network: `fast 4g`
* CPU: `6x slowdown`

Для составления отчёта о первоначальной загрузке нажмите на кнопку "Record and Reload"

1) Анализ скорости загрузки ресурсов
2) Анализ LCP Resource deleay (Web Vitals  User Timings)
3) Выделение ресурсов, блокирующих рендеринг
4) Анализ нагрузки на CPU и долгих тасок

#### Анализ INP

1) Нажмите запись и сделайте несколько кликов по элементам аккордиона
2) Остановите запись
3) Анализ нагрузки на CPU
4) Layout trashing
5) Performance метки

## Оптимизировать

### LCP

#### 1. Сжатие ресурсов

💡 Использование сжатия в gzip и Brotli позволяет существенно снизить размер передаваемых данных.

В файле `react/server.js` добавьте строчку:

```js
app.use(compression())
```

#### 2. Настройка сборки

💡 Prod сборки занимают на выходе весят в несколько раз меньше и более производительны.

В `react/webpack.config.js` установите параметр mode в зависимости от `NODE_ENV`

```js
mode: isDevMode ? "development" : 'production',
```

#### 3. Оптимизация списка браузеров

💡 Использование свежих стандартов для новых браузеров делает код более производительным и снижает размер бандлов на 15-30%.

в файле
```json
           "@babel/preset-env",
            { 
                "targets": "last 2 versions",
                ...
            }

```

#### 4. Оптимизация CSS

💡 CSS — это ресурс , блокирующий рендеринг, грузится в самом высоком приоритете. Необходимо выделить минимальное количество CSS необходимое для рендера основного каркаса приложения.

В файле `react/index.html` удалите строчку

```html
   ~~ <link rel="stylesheet" href="/icons.css"> ~~
```

В `shared/components/Accordion/AccordionItem.tsx` замените стрелку из font-awesome на svg:

!!! TODO

#### 5. Code splitting

💡 Постраничный/покомпонентый code-splitting позволяет в разы уменьшить размер первоначального бандла и загружать код по требованию

В файле `react/app/App.tsx` сделайте lazy загрузку страниц

```tsx
const router = createBrowserRouter([
  {
    path: "/",
    element: <BaseLayout header={<Header />} nav={<Nav />} />,
    children: [
      {
        index: true,
        lazy: () =>
          import("../pages/MainPage").then((module) => ({
            Component: module.default,
            loader: module.pictureOfTheDayLoader,
          })),
      },
      {
        path: "/planets/:planet",
        lazy: () =>
          import("../pages/PlanetPage").then((module) => ({
            Component: module.default,
            loader: module.planetInfoLoader,
          })),
      },
      {
        path: "solar-system",
        lazy: () =>
          import("../pages/SolarSystemPage").then((module) => ({
            Component: module.SolarSystemPage,
          })),
      },
    ],
  },
]);
```

### CLS

#### Оптимизация размеров изображения

💡 Изображения без заранее заданных размеров высоты и ширины приводят к сдвигу контента

В файле `shared/components/PictureOfTheDay/PicOfTheDay.module.scss` задайте для класса `.img`:

```css
    .img {
        width: 60%;
        aspect-ratio: 3/4;
    }
```


### INP

Оптимизаиця Accordion

## Обезвредить 😎

### Миграция на Nextjs

💡 Отрисовка готового HTML и формирование HTML через JS могут сильно различаться по производительности.

#### App router + server components

1) Декомпозиция компонентов
2) Уход от CSS-in-JS для основного каркаса приложения
3) 

#### Оптимизация изображений

💡 Next.JS имеет элемент `Image`, который включает в себя все необходимые оптимизации:

* Size Optimization: автоматическое конвертирование в WebP and AVIF.
* Visual Stability: Предотвращают CLS.
* Progressive image loading

в файле `shared/components/Header/Header.tsx`

```tsx
import styles from "./Header.module.scss";
import Image from "next/image";
import defaultBg from "../../img/default-bg.png";


export const Header = () => {
  return (
    <div className={styles.HeaderContainer}>
      <Image
        className={styles.HeaderImage}
        src={defaultBg}
        width={1500}
        height={500}
        quality={80}
        placeholder="blur"
        alt="nebula"
      />
    </div>
  );
};
```


В файле `shared/components/PictureOfTheDay/PicOfTheDay.tsx`

```tsx
import Image from "next/image";
...

            <Image
              className={styles.img}
              src={nebula}
              width={700}
              height={400}
              quality={80}
              placeholder="blur"
              alt="nebula"
            />
```