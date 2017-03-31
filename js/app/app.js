angular
    .module('app', ['ui.router'])
    .config(function ($stateProvider) {
        $stateProvider
            .state('home', {
                url: '',
                templateUrl: 'js/app/templates/home.html',
                controller: 'HomeController'
            })
    });
