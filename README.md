# «Guitar shop 2024»

Студент: [Константин Суриков](https://up.htmlacademy.ru/nodejs-api/2/user/598165)

---
- 🚧 Фронт сделать не успел(
---

## Памятка

### 1. Файлы env
```bash
for file in ./environments/.*.env-example; do
cp "$file" "${file%.env-example}.env"
done
```
```bash
cp libs/shared/shop-models/prisma/.env-example libs/shared/shop-models/prisma/.env
```

### 2. Установка зависимостей
``` bash
    npm install
```
### 3. Запуск докер
 ``` bash
    docker-compose -f docker-compose.dev.yml up -d
```
### 4. Запуск скриптов
 ``` bash
    npx nx run shop:"db:migrate"
    npx nx run shop:"db:seed"
```

### 5. Запуск бекэнда
 ``` bash
    npx nx run-many --target=serve --projects=api-gate,user,file,shop --maxParallel=5
```
### 4. Запуск фронтэнда
 ``` bash
     npx nx run frontend:serve
```


---

<a href="https://htmlacademy.ru/profession/fullstack"><img align="left" width="50" height="50" title="HTML Academy" src="https://up.htmlacademy.ru/static/img/intensive/nodejs/logo-for-github-2.png"></a>

Репозиторий создан для обучения на профессиональном онлайн‑курсе «[Node.js. Профессиональная разработка REST API](https://htmlacademy.ru/profession/fullstack)» от [HTML Academy](https://htmlacademy.ru).
