# OS-Linux
# Node.js - для запуска js кода
# index.js - сама программа
# команда для запуска - node index.js

# Основная команда для описания окружения - FROM
# node - установка node.js
# alpine - легковесный дистрибутив Linux
FROM node:alpine

# Добавление рабочей директории - WORKDIR
WORKDIR /app

# COPY - копирует файлы из вашей папки проекта в образ Docker
# ./ - откуда копируем файлы (путь по отношению к Dockerfile)
# /app - куда копируем (имя на ваше усмотрение)
# Комманда для копирования без указании рабочей директории
# COPY ./ /app

# Комманда для копирования с указанием рабочей директории
COPY ./ ./

#CMD <command> - запускает команду в терминале Linux Alpine
CMD node index.js