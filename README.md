# Воркшоп "Web-perf: найти и оптимизировать"

### Пререквизиты

Для начала работы на вашем компьютере должны быть:

* Установлен Google Chrome и IDE
* Установлен Node.js и npm
* Расширение Web vitals для Chrome https://chromewebstore.google.com/detail/web-vitals/ahfhijdlegdabablpippeagghigmibma
* Хорошее настроение :)

### Начало работы

Клонируем проект командой:

```bash
git clone -b holyjs git@github.com:spiderpoul/react-app-optimization.git .
```

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

#### 4. Bundle analyzer

💡 Анализ бандла поможет найти причины его "тучности", обнаружить дублирующие библиотеки и тп.

Запустите `npm run build-analyze` для запуска `BundleAnalyzerPlugin`

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

#### Оптимизация CSS

💡 CSS — это ресурс , блокирующий рендеринг, грузится в самом высоком приоритете. Необходимо выделить минимальное количество CSS необходимое для рендера основного каркаса приложения.

В файле `react/index.html` удалите строчку

```html
   <link rel="stylesheet" href="/icons.css">
```

и перенесите его импорт в `react/index.tsx`

```js
import './public/icons.css'
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

Оптимизация Accordion

#### Циклический unmount

В файле `shared/components/Accordion/AccordionList.tsx` установим стабильный  ключ:

```tsx
<AccordionItem
    key={id} // установка стабильного ключа
    id={id}
    isOpen={isOpen}
    text={text}
    title={title}
    onToggle={() => setOpenSections([id])}
    />
```

#### Оптимизация лишних ререндеров

💡 Понять какие именно компоненты реренделись и почему поможет расширение React Profiler.

Вместо анонимной функции можно пробрасывать не изменяемую функцию `onToggle`. В файле `shared/components/Accordion/AccordionList.tsx`:

```tsx
<AccordionItem
    key={id} 
    id={id}
    isOpen={isOpen}
    text={text}
    title={title}
    onToggle={setOpenSections} // onToggle теперь не будет приводить к ререндеру
    />
```

Далее в `shared/components/Accordion/AccordionItem.tsx`

создадим функцию 

```ts
const onClick = () => onToggle([id]) 
...
// обновим имя функции
<div className={styles.header} onClick={onClick}>
```

Теперь, чтобы предотвратить излишний ререндер компонента обернём его в `memo`.

## Обезвредить 😎

### Миграция на Nextjs

💡 Отрисовка готового HTML и формирование HTML через JS могут сильно различаться по производительности.

#### App router + server components

1) Декомпозиция компонентов
2) Уход от CSS-in-JS для основного каркаса приложения

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


#### Prefetch для страниц

💡 `next/link` позволяет префетчить данные страницы и обеспечивает базовую навигацию по роутам

В компоненте `next-js/components/Nav/Nav.tsx` добавьте свойство `prefetch`

```tsx
        <Link
          key={to}
          className={cx(pathname === to && "active", styles.NavItem)}
          href={to}
          prefetch={true}
        >
          {title}
        </Link>
    
```

#### Оптимизация шрифтов

💡 next/font will automatically optimize your fonts (including custom fonts) and remove external network requests for improved privacy and performance.

В файле удалить описание шрифта:

```css
@font-face {
  font-family: 'LilitaOne';
  src: url('../shared/fonts/LilitaOne.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}
```

и добавьте в файле `shared/components/PictureOfTheDay/PicOfTheDay.tsx`

```tsx
import localFont from "next/font/local";

const myFont = localFont({
  src: "../../fonts/LilitaOne.ttf",
  display: "swap",
});

// чтобы применить шрифт к элементу, необходимо использовать свойства className или style
<h1 className={styles.title} style={myFont.style}>{title}</h1>
```

#### Instant Loading States
💡 An instant loading state is fallback UI that is shown immediately upon navigation. The new content is automatically swapped in once rendering is complete.

В папке `next-js/app/planets/[planet]` создадим файл `loading.tsx` с содержимым:

```tsx
import { GridLoader } from "../../../../shared/components/ImagesGrid";

export default function Loading() {
    return <GridLoader />
  }
```

#### Streaming with Suspense

💡 Streaming allows you to break down the page's HTML into smaller chunks and progressively send those chunks from the server to the client.

В папке `next-js/app/page.tsx` оберните компонент, в котором происходит фетчинг данных в Suspense:

```tsx
const MainPageWrapper = () => {
  return <Suspense fallback={<div>Loading content</div>}>
    <MainPage />
  </Suspense>
}


export default MainPageWrapper;
```

#### Caching

💡 By default, Next.js will cache as much as possible to improve performance and reduce cost. This means routes are statically rendered and data requests are cached unless you opt out. 

#### NextJS bundle analyzer

💡 @next/bundle-analyzer is a plugin for Next.js that helps you manage the size of your JavaScript modules. You can use the information to remove large dependencies, split your code, or only load some parts when needed, reducing the amount of data transferred to the client.

Для запуска next/bundle-analyzer используйте скрипт:

```shell
npm run next-build-analyze
```