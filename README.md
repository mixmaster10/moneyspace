# Laravel Vue Boilerplate
Admin user
    E-mail: admin@example.com
    Password: admin
Normal user
    E-mail: normal@example.com
    Password: normal
Notice that all the changed data on that website sample, such as password and CRUD actions, won't be stored.

## Main dependencies

Front-end:

* [Vue](https://github.com/vuejs/vue)
* [VueRouter](https://github.com/vuejs/vue-router)
* [Vuex](https://github.com/vuejs/vuex)
* [vue-apollo](https://github.com/Akryum/vue-apollo)
* [Vue Auth](https://github.com/websanova/vue-auth)
* [vuex-i18n](https://github.com/dkfbasel/vuex-i18n)
* [vue-awesome](https://github.com/Justineo/vue-awesome)
* [Bootstrap 4](https://github.com/twbs/bootstrap)
* [BootstrapVue](https://github.com/bootstrap-vue/bootstrap-vue)
* [TypeScript](https://github.com/microsoft/typescript)
* [Pug](https://github.com/pugjs/pug)
* [Sass](https://github.com/sass/node-sass)
* [Laravel Echo](https://github.com/laravel/echo)
* [Laravel Mix](https://github.com/JeffreyWay/laravel-mix)
* [Jest](https://github.com/facebook/jest)

The TypeScript code tries to follow the [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript), the linters are already included and configured.

Back-end:

* [Laravel](https://github.com/laravel/laravel)
* [Laravel GraphQL](https://github.com/rebing/graphql-laravel)
* [jwt-auth](https://github.com/tymondesigns/jwt-auth)
* [laravel-vue-i18n-generator](https://github.com/martinlindhe/laravel-vue-i18n-generator)
* [PHPUnit](https://github.com/sebastianbergmann/phpunit)
* [Laravel Envoy](https://github.com/laravel/envoy)

## Steps to run it:

Remember to search for "TODO change" on the files to change example code.

The application will be available on http://localhost:8000 and the phpMyAdmin on http://localhost:8081

### Common way

Rename the .env.example file to .env, and fill it with your local info, then:

Install PHP and JavaScript dependencies:

    composer install
    npm install

Generate Laravel keys:

    php artisan key:generate

Generate JWT keys

    php artisan jwt:secret

Generate i18n string for Vue, based on Laravel i18n files:

    php artisan vue-i18n:generate

Migrate and seed the database:

    php artisan migrate --seed

Compile all the front-end stuff:

    npm run prod