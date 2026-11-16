QORVEX SYSTEMS — пакет сайта

Файлы:
- index.html — сайт и редактор администратора.
- supabase-config.js — подключение к вашему проекту Supabase.
- setup.sql — создание таблицы, Storage bucket и политик доступа.

УСТАНОВКА:
1. Сделайте резервную копию текущего сайта.
2. Загрузите index.html и supabase-config.js в корень GitHub-репозитория qorvex-systems-website.
3. В Supabase откройте SQL Editor -> New query.
4. Откройте setup.sql, скопируйте весь текст, вставьте в SQL Editor и нажмите Run.
5. Откройте Authentication -> Users -> Add user. Создайте администратора с вашим email и паролем.
6. Скопируйте UUID этого пользователя.
7. В SQL Editor выполните:
   insert into public.qorvex_admins (user_id)
   values ('ВАШ-UUID')
   on conflict (user_id) do nothing;
8. Откройте опубликованный сайт через HTTPS, нажмите «Редактор сайта» и войдите.
9. Добавьте фотографию, сохраните запись и откройте сайт в другом браузере/телефоне для проверки.

ВАЖНО:
- Не вставляйте service_role/secret key в HTML или JavaScript. В файле используется только publishable key.
- Для входа администратора пользователь должен быть создан в Authentication и добавлен в qorvex_admins.
- Фото до 8 МБ, форматы JPG/PNG/WEBP/GIF.
- Изображения публично доступны посетителям сайта; запись и изменение доступны только UUID из qorvex_admins.
- Если вы ранее создавали таблицу equipment_photos, этот вариант её не использует: всё содержимое сайта хранится в qorvex_site.content (JSONB).
- Запуск через file:// на телефоне/компьютере не рекомендуется. Проверяйте опубликованный сайт по HTTPS.
