https://ui.shadcn.com/ - библиотека ui компонентов
Установка - https://ui.shadcn.com/docs/installation/next
Установка next с ui компонентами tailwind - npx create-next-app@latest next-pizza --typescript --tailwind --eslint

Layout - если layout.tsx находится в папке app это значит что это layout на всё приложение

npx shadcn-ui@latest init - инициализировали проект

npx shadcn-ui@latest add button - import button
npx shadcn-ui@latest add dialog checkbox drawer input popover select skeleton slider
npm install lucide-react - icons
В папке components > ui у нас автоматически появятся все компоненты которые мы импортировали из shadcn
Создаем папку shared в папке components - общие компоненты которые будут внутри себя использовать ui компоненты

Библиотека react-use содержит кастомные хуки (нам нужен useIntersection чтобы следить какой блок сейчас отображается на экране)
npm i react-use

npm i zustand
это библиотека управления состоянием (аналог redux)
Создам папку store и в ней файл category.ts

Будем использовать https://vercel.com/
БД будет на postgreSQL
Для работы next приложения с БД которая на vercel нам нужна прослойка (https://www.prisma.io/) так как next не понимает что такое SQL. Prisma передаст данные из vercel для next в виде json

npm i prisma @prisma/client - установим призму и призму клиент(она умеет работать с некстом)
Создай папку prisma в корне проекта и внутри файл prisma-client.ts и сделаем настройки для призмы
С помощью призмы будут создаваться таблицы в postgres

Нам надо создать BD
Для этого идем на https://vercel.com/
Там идем в storage > postgres create > Qickstart > .env.local tab > hide secret > copy
По идее нам надо бы установить библиотеку postgres но нам это не надо делать потому что у нас есть prisma.
Создаем в корне в проекте в редакторе файл .env и туда вставляем то что скопировали на vercel
На vercel скопируем во вкладке Prisma строку directUrl и вставим в datasource db в файле schema.prisma
npx prisma db push - файл schema.prisma подключается к БД vercel
Теперь мы можем видеть наши таблицы vercel > Storage > data > Browse

В package.json scripts добавим
"prisma:push": "prisma db push",
"prisma:studio": "prisma studio"

Команда prisma studio откроет удобную панель для просмотра БД где мы можем добавлять записи в таблицы и сохранять их прямо на этой странице. Все эти данные будут храниться на удаленном сервере vercel

В папке src > app создаем папку api и в ней папку users > файл route.ts
Функции которые вэтом файле будут вызываться каждый раз когда мы будем делать запрос на адрес api/users/route

Например по адресу http://localhost:3000/api/users я сейчас могу увидеть то что возвращает get запрос внутри api>users>route.ts
