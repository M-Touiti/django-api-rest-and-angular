# Angular 6 / Django Rest Framework / JSON Web Token demo app

This is a demo app showing how to make API calls with Angular 6 and Django Rest Framework, including how to send authentication headers so API calls will function when logged in.

## What this repo contains

The following files are interesting:

* angular_django_cors - The Django project and main settings file.
* microblog - An app within the project, containing the Django Rest Framework views and URL routing.
* UserFront  - The Angular app source code lives here.

## Requirements

You need the following to run this app:

* Python 3.5 or higher (Python 2.x is not supported by Django 2.x)
* Pipenv
* Node v8.x or higher
* NPM v5.x or higher

## Setup
Open a terminal at the repo root, and run the following:

For UserBackend:
    
    Install Virtual Environment
    pip install virtualenvwrapper
    virtualenv django_angular_venv
    workon django_angular_venv
    pip install django
    pip install djangorestframework
    django-admin startproject UserBackend
    cd UserBackend/
    python manage.py startapp api
    pip install mysqlclient
    sudo service mysql start
    python manage.py migrate
    python manage.py createsuperuser --username=admin --email=admin@admin.com
    password : admin
    python manage.py runserver
    pip install django-cors-headers
    python manage.py migrate
    python manage.py runserver
    
For UserFront:
```
npm install -g @angular/cli
ng new UserFront
cd UserFront
ng generate service
ng serve 
```

## Database

This project uses a SQLite database, which lives in the file db.sqlite3. SQLite3 support should be available out of the box on most modern operating systems.

## Logging into the app

The database included in this repository contains two users. The following are their usernames and passwords, which you may use for testing:

* admin / admin
* user1 / pass1

