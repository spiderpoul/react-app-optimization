# Воркшоп "Web-performance: найти и оптимизировать"

### Пререквизиты

Для начала работы на вашем компьютере должны быть:

- Установлен Google Chrome и IDE
- Установлен Node.js 18 и выше + npm
- Расширение Web Vitals для Chrome https://chromewebstore.google.com/detail/web-vitals/ahfhijdlegdabablpippeagghigmibma
- Хорошее настроение :)

### Начало работы

Клонируем проект командой:

```bash
git clone -b holyjs git@github.com:spiderpoul/react-app-optimization.git .
```

Далее переходим на стартовый коммит:

```bash
git checkout start
```

1. Открываем проект в IDE.
2. Устанавливаем зависимости `npm install` в папках
   1. `react`
   2. `shared`
   3. `next-js`
3. Заходим в папку `react`
4. Запускаем проект командой
   1. `npm run build`
   2. `npm run server`
5. Открываем наш проект на порту 8080 – http://localhost:8080
6. В настройках расширения Web Vitals включите следующие опции:
   - Console logging
   - User Timings (for DevTools Performance Panel recordings).

## Найти 👀

### Performance tab

Зайдите на вкладку Performance в Chrome, установите следующие параметры тротлинга:

- Network: `fast 4g`
- CPU: `6x slowdown`

Для составления отчёта о первоначальной загрузке нажмите на кнопку "Record and Reload"

1. Обзор блоков
2. Разбор CRP
3. Анализ LCP Resource deleay (Web Vitals User Timings)

## Оптимизировать 💪

### LCP. Шаг 1

```bash
git checkout lcp-1
```

#### 1.1. Сжатие ресурсов

💡 Использование сжатия в gzip и Brotli позволяет существенно снизить размер передаваемых данных.

Для express можно добавить middleware `compression`, которая включит сжатие данных. Однако при таком подходе нужно продумать кэшировании данных, чтобы не сжимать данные на каждый запрос.

`react/server.js`:

```js
app.use(compression());
```

💡 В целом использование express/nodejs для раздачи статики не очень хорошая идея - под нагрузкой он сильно проигрывает nginx. Самым лучшим вариантом будет использование CDN.

#### 1.2. Настройка сборки

💡 Prod сборки занимают на выходе в несколько раз меньше и более производительны. В том числе React работает значительно быстрее в prod режиме, но содержит меньше информации для дебага.

В `react/webpack.config.js` установите параметр mode в зависимости от `NODE_ENV`

```js
mode: isDevMode ? "development" : 'production',
```

#### 1.3. Оптимизация списка браузеров

💡 Использование свежих стандартов для новых браузеров делает код более производительным и снижает размер бандлов на 15-30%.

в файле

```json
           "@babel/preset-env",
            {
                "targets": "last 2 versions, not dead",
                ...
            }

```

##### Итого

- добавили сжатие при отправке
- значительно уменьшили размер бандла и повысили его производительность

### LCP. Шаг 2

```bash
git checkout lcp-2
```

#### 2.1. Bundle analyzer и Statoscope

💡 Анализ бандла поможет найти причины его "тучности", обнаружить дублирующие библиотеки и тп.

Запустите `npm run build-analyze` для запуска `BundleAnalyzerPlugin` и `Statoscope`

`react/webpack.config.js`

В рамках анализа были обнаружены дублирующие библиотеки, из-за текущей структуры проекта с общими компонентами. В нашем случае это можно решить с помощью `resolve.modules, чтобы явно указать вебпаку в какой папке cначала стоит искать модули.

```js
  resolve: {
    modules: [path.resolve(__dirname, 'node_modules'), 'node_modules'],
    ...
  }
```

#### 2.2. Code splitting

💡 Постраничный/покомпонентый code-splitting позволяет в разы уменьшить размер первоначального бандла и загружать код по требованию, однако стоить помнить, что это может увеличивать скорость загрузки страниц.

💡 Но не стоит забывать, что на динамическая загрузка чанков может приводить к задержкам при навигации по приложению. Здесь стоит задуматься о предзагрузке данных (при наведении, когда браузер не выполняет никаких действий).

`react/app/App.tsx`

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
      ...
    ],
  },
]);
```

#### 2.2. Оптимизация CSS

💡 CSS — это ресурс , блокирующий рендеринг, грузится в самом высоком приоритете. Необходимо выделить минимальное количество CSS необходимое для рендера основного каркаса приложения и не забывать про его минимизацию.

В файле `react/index.html` удалите строчку

```html
<link rel="stylesheet" href="/icons.css" />
```

И замените используемые иконки на svg аналоги.

#### Итого

- Благодаря анализу бандлов убрали дублирующиеся пакеты
- Разбили код на чанки
- Перешли на SVG и избавились от тяжёлой библиотеки иконок, которая блокировала рендеринг при загрузке

### CLS

```bash
git checkout cls
```

#### Оптимизация сдвига контента

💡 Изображения без заранее заданных размеров высоты и ширины приводят к сдвигу контента.

В файле `shared/components/PictureOfTheDay/PicOfTheDay.module.scss` задайте для класса `.img`:

```css
.img {
  ...
  aspect-ratio: 4 / 3;
}
```

#### Итого

- убрали сдвиг контента
- независимо от размеров картинки высота будет соответствовать пропорциям

### INP

Для более удобного дебага React компонентов запустим `dev-server`

```bash
npm run dev-server
```

Переходим по ссылке `http://localhost:8080`

#### Reconciliation rule

💡 Всякий раз, когда корневые элементы имеют различные типы, React уничтожает старое дерево и строит новое с нуля.

В файле `shared/components/Accordion/AccordionList.tsx` при мапинге элементов уберём динамическое оборачивание в div

```tsx
return (
  <div className={cx(isOpen && "opened")} key={id}>
    {accordionItem}
  </div>
);
```

#### Wasted renders - unstable props

Анализ в React profiler показал, что все клики на одном компоненте приводит к ререндеру всех элементов, из-за поменявшейся пропсы onToggle, которая пересоздаётся на каждый рендер.

Здесь может быть несколько решений, но одно из наиболее распространённых - обернуть в useCallback.

`shared/components/Accordion/AccordionList.tsx`:

```tsx
const onToggle = useCallback(
  (id) => setOpenSections((prev) => (prev.includes(id) ? [] : [id])),
  []
);
```

Теперь в AccordionItem приходит неизменяемая функция `AccordionItem`, однако нужно изменить вызов внутри компонента:

`shared/components/Accordion/AccordionItem.tsx`

```ts
<div className={styles.header} onClick={() => onToggle(id)}>
```

```bash
git checkout inp-1
```

#### Wasted renders - memo

💡 Ререндер родителя приводит к ререндеру его детей. Чтобы предовратить ререндер, при условии что пропсы не поменялись поможет `memo`.

Чтобы предотвратить излишний ререндер дочерних компонентов обернём его в `memo`.

```bash
git checkout inp-2
```

#### Overuse useEffect

💡 Не злоупотребляйте использованием useEffect. Ищите возможности его упрощения / декомпозиции.

После всех произведённых оптимизаций, из анализа React Profiler видно, что происходит ещё один ререндер компонента AccordionItem. Этого можно избежать, проанализировав использование useEffect.

`shared/components/Accordion/AccordionItem.tsx`

```tsx
  style={{ height: isOpen ? contentRef.current?.scrollHeight : 0 }}
```

```bash
git checkout inp-3
```

#### Итого

- изменения типа корневого элемента приводило к unmount всех его дочерних компонентов
- избавились от лишних ререндеров тяжёлых компонентов
  - используя useCallback повысили стабильность пропсов
  - обернули в memo, чтобы компоненты не ререндерились при рендеринге родителя

## Обезвредить 😎

### Миграция на Nextjs

💡 Отрисовка готового HTML и формирование HTML через JS могут сильно различаться по производительности.

Запуск:

1. Перейдите в папку `next-js`
2. Остановите запущенные процессы
3. Установите зависимости `npm install`
4. Запустите приложение:
   1. `npm run next-start`
   2. `npm run server`
5. Откройте приложение `localhost:9090`

#### App router + server components

1. Декомпозиция компонентов
2. Хуки и эффекты работают только в client components
3. Уход от CSS-in-JS для основного каркаса приложения

#### Оптимизация изображений

💡 Next.JS имеет элемент `Image`, который включает в себя все необходимые оптимизации:

- Size Optimization: автоматическое конвертирование в WebP and AVIF.
- Visual Stability: Предотвращают CLS.
- Progressive image loading

в файле `shared/components/Header/Header.tsx`

```tsx
import Image from "next/image";
...
<Image
  className={styles.headerImage}
  src={defaultBg}
  width={1500}
  height={500}
  quality={80}
  placeholder="blur"
  alt="nebula"
/>
```

В файле `shared/components/PictureOfTheDay/PicOfTheDay.tsx`

```tsx
import Image from "next/image";
...
<Image
  className={styles.img}
  src={hdurl}
  width={700}
  height={400}
  quality={80}
  placeholder="blur"
  alt="nebula"
/>
```

```bash
git checkout nextjs-image
```

#### Итого:

Используя компонент "next/image":

- автоматическое конвертирование в WebP/AVIF
- дополнительное сжатие
- установка нужных размеров изображения
- автоматическое формирование blur placeholder

#### Instant Loading States

💡 В nextjs можно создать fallback для страниц, который отображается сразу после навигации. Новое содержимое автоматически заменяется после завершения рендеринга.

В папке `next-js/app/planets/[planet]` создадим файл `loading.tsx` с содержимым:

```tsx
import { GridLoader } from "../../../../shared/components/ImagesGrid";

export default function Loading() {
  return <GridLoader />;
}
```

```bash
git checkout nextjs-loading-state
```

#### Caching

💡 По умолчанию Next.js будет кэшировать как можно больше, чтобы улучшить производительность и снизить затраты. Это означает, что страницы статически рендерятся, а запросы данных кэшируются, если вы не отказались от этого.

```ts
fetch(`https://...`, { next: { revalidate: false | 0 | number } });
```

#### Streaming with Suspense

💡 Стриминг позволяет разбить HTML страницы на более мелкие фрагменты и последовательно отправлять эти фрагменты с сервера на клиент.

Чтобы показать проблему и эффективность Streaming, мы отключим кэширование запроса и увеличим время ответа запроса на 3 секунды.

Для этого перезапустите сервер командой `npm run server` в папке `next-js`.

Чтобы это исправим сделаем следующее: в папке `next-js/app/page.tsx` оберните компонент, в котором происходит фетчинг данных в Suspense:

```tsx
const MainPageWrapper = () => {
  return (
    <Suspense fallback={<div>Loading content</div>}>
      <MainPage />
    </Suspense>
  );
};

export default MainPageWrapper;
```

```bash
git checkout nextjs-streaming
```

#### Итого

- благодаря стримингу пользовательно получает основной шаблон страницы без задержки на ожидания запроса
- после выполнения запроса, готовый фрагмент будет отправлен на клиент
- при этом все запросы остаются на сервере, пользователь получает статический html

#### Оптимизация шрифтов

💡 next/font автоматически оптимизирует ваши шрифты (включая пользовательские шрифты) и удаляет внешние сетевые запросы для повышения конфиденциальности и производительности.

В файле удалить описание шрифта:

```css
@font-face {
  font-family: "LilitaOne";
  src: url("../shared/fonts/LilitaOne.ttf") format("truetype");
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
<h1 className={styles.title} style={myFont.style}>
  {title}
</h1>;
```

```bash
git checkout nextjs-fonts
```

#### Итого:

- next-js под капотом оптимизирует доставку шрифтов
- так же избавились от небольшого Layout shift, который происходил при задержке загрузки шрифтов

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

#### NextJS bundle analyzer

💡 @next/bundle-analyzer - это плагин для Next.js, который помогает вам управлять размером ваших модулей JavaScript. Вы можете использовать эту информацию, чтобы удалить большие зависимости, разделить ваш код или загружать только некоторые части по мере необходимости, уменьшая количество передаваемых данных клиенту.

Для запуска next/bundle-analyzer используйте скрипт:

```shell
npm run next-build-analyze
```
